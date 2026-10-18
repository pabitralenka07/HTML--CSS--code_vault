/**
 * ParticleText Vanilla Engine
 * Matches React Bits ParticleText configuration & physics
 */

(function (global) {
  'use strict';

  const INHERIT = /^(currentcolor|inherit)$/i;
  const TONES = 12;
  const FADES = 8;
  const HEAT_RANGE = 36;
  const HEAT_DEADZONE = 3;
  const TAU = Math.PI * 2;
  const BURST_SPRING = 18;
  const BURST_DAMPING = 7.5;

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  const fadeAlpha = lvl => 0.35 + (0.65 * lvl) / (FADES - 1);

  const resolveFontSize = (value, container, fontWeight, fontFamily) => {
    if (typeof value === 'number') return value;
    const probe = document.createElement('span');
    probe.textContent = 'M';
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.pointerEvents = 'none';
    probe.style.fontSize = value;
    probe.style.fontWeight = String(fontWeight);
    probe.style.fontFamily = fontFamily;
    container.appendChild(probe);
    const size = parseFloat(window.getComputedStyle(probe).fontSize) || 96;
    probe.remove();
    return size;
  };

  const waitForFonts = async font => {
    if (!('fonts' in document)) return;
    try {
      await document.fonts.load(font);
    } catch {}
    await document.fonts.ready;
  };

  function initParticleText(container, options = {}) {
    const s = {
      text: 'The Ultimate HTML & CSS Code Vault',
      particleSize: 2.2,
      density: 4,
      color: 'currentColor',
      highlightColor: '#ff5a36',
      highlightMode: 'motion',
      shape: 'circle',
      intro: 'gather',
      scatter: 190,
      gatherDuration: 1600,
      stagger: 420,
      clickBurst: true,
      burstStrength: 1,
      pointerRepel: 42,
      repelRadius: 120,
      idleDrift: 0.8,
      trigger: 'mount',
      fontSize: 'clamp(3.5rem, 13vw, 9rem)',
      fontWeight: 800,
      fontFamily: 'inherit',
      glow: true,
      ...options
    };

    container.classList.add('particle-text');
    container.innerHTML = `
      <canvas class="particle-text__canvas" aria-hidden="true"></canvas>
      <span class="particle-text__sr">${s.text}</span>
    `;

    const canvas = container.querySelector('.particle-text__canvas');
    const ctx = canvas.getContext('2d');
    const layer = document.createElement('canvas');
    const layerCtx = layer.getContext('2d');
    const probe = document.createElement('canvas');
    probe.width = 1;
    probe.height = 1;
    const probeCtx = probe.getContext('2d', { willReadFrequently: true });

    let particles = [];
    let raf = 0;
    let sampleFrame = 0;
    let buildId = 0;
    let introPending = true;
    let gathering = false;
    let gatherStart = 0;
    let bursting = false;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let last = 0;
    let visible = true;
    let alive = true;
    let colorKey = '';
    let palette = [];
    let glowColor = '#ff5a36';
    const buckets = Array.from({ length: TONES * FADES }, () => []);
    const pointer = { active: false, x: 0, y: 0, smoothX: 0, smoothY: 0 };

    const family = () =>
      !s.fontFamily || s.fontFamily === 'inherit'
        ? window.getComputedStyle(container).fontFamily || 'Plus Jakarta Sans, sans-serif'
        : s.fontFamily;

    const toRgb = value => {
      probeCtx.clearRect(0, 0, 1, 1);
      probeCtx.fillStyle = '#000000';
      probeCtx.fillStyle = value;
      probeCtx.fillRect(0, 0, 1, 1);
      const [r, g, b] = probeCtx.getImageData(0, 0, 1, 1).data;
      return { r, g, b };
    };

    const ensureColors = () => {
      const current = window.getComputedStyle(container).color || '#ffffff';
      const pick = val => (!val || INHERIT.test(String(val).trim()) ? current : val);
      const base = pick(s.color);
      const highlight = pick(s.highlightColor);
      const key = `${base}|${highlight}`;
      if (key === colorKey) return;
      colorKey = key;
      const from = toRgb(base);
      const accent = toRgb(highlight);
      glowColor = `rgb(${accent.r}, ${accent.g}, ${accent.b})`;
      palette = Array.from({ length: TONES }, (_, i) => {
        const t = i / (TONES - 1);
        const r = Math.round(from.r + (accent.r - from.r) * t);
        const g = Math.round(from.g + (accent.g - from.g) * t);
        const b = Math.round(from.b + (accent.b - from.b) * t);
        return `rgb(${r}, ${g}, ${b})`;
      });
    };

    const startIntro = initial => {
      if (!particles.length) return;
      const spread = s.scatter;

      for (const p of particles) {
        const angle = p.seed * TAU;
        const dist = spread * (0.35 + p.depth * 0.75);
        const startX = p.targetX + Math.cos(angle) * dist + (p.seed - 0.5) * spread * 0.45;
        const startY = p.targetY + Math.sin(angle) * dist + (p.depth - 0.9) * spread * 0.45;
        const delay = p.seed * s.stagger;

        p.startX = startX;
        p.startY = startY;
        p.delay = delay;
        if (initial) {
          p.x = startX;
          p.y = startY;
        }
      }

      gatherStart = performance.now();
      gathering = true;
      wake();
    };

    const burst = (x, y) => {
      if (!particles.length) return;
      const strength = s.burstStrength || 1;
      const radius = 90 + 70 * Math.sqrt(strength) + s.repelRadius * 0.25;

      for (const p of particles) {
        const dx = p.x - x;
        const dy = p.y - y;
        const dist = Math.hypot(dx, dy);
        if (dist > radius) continue;
        const falloff = 1 - dist / radius;
        const power = 950 * strength * (0.2 + 0.8 * falloff * falloff) * (0.65 + p.depth * 0.45);
        const angle = Math.atan2(dy, dx) + (p.seed - 0.5) * 0.9;
        p.vx += Math.cos(angle) * power;
        p.vy += Math.sin(angle) * power;
      }

      bursting = true;
      wake();
    };

    const drawGroup = (target, group, base) => {
      target.beginPath();
      for (const p of group) {
        const size = Math.max(0.6, base * (0.75 + p.weight * 0.45));
        if (size <= 2.1) {
          target.rect(p.x - size / 2, p.y - size / 2, size, size);
        } else {
          target.moveTo(p.x + size / 2, p.y);
          target.arc(p.x, p.y, size / 2, 0, TAU);
        }
      }
      target.fill();
    };

    const step = now => {
      const dt = last ? Math.min(0.05, Math.max(0, (now - last) / 1000)) : 1 / 60;
      last = now;
      ensureColors();

      const frames = Math.max(dt * 60, 0.001);
      const follow = 1 - Math.pow(0.78, frames);
      const chase = 1 - Math.pow(0.82, frames);
      pointer.smoothX += (pointer.x - pointer.smoothX) * chase;
      pointer.smoothY += (pointer.y - pointer.smoothY) * chase;

      const repel = pointer.active && s.pointerRepel > 0 && s.repelRadius > 0;
      const drift = s.idleDrift > 0;
      const time = now * 0.001;
      const sizeBase = Math.max(0.1, s.particleSize);
      let complete = true;
      let moving = false;
      let settling = false;

      for (const b of buckets) b.length = 0;

      for (const p of particles) {
        let baseX = p.targetX;
        let baseY = p.targetY;
        let progress = 1;

        if (gathering) {
          const local = (now - gatherStart - p.delay) / Math.max(1, s.gatherDuration);
          progress = clamp(local, 0, 1);
          const eased = easeOutCubic(progress);
          baseX = p.startX + (p.targetX - p.startX) * eased;
          baseY = p.startY + (p.targetY - p.startY) * eased;
          if (progress < 1) complete = false;
        } else if (drift) {
          baseX += Math.sin(time * 0.9 + p.seed * 10) * s.idleDrift * p.depth;
          baseY += Math.cos(time * 0.75 + p.depth * 10) * s.idleDrift * p.depth;
        }

        if (bursting) {
          p.vx += (-BURST_SPRING * p.ox - BURST_DAMPING * p.vx) * dt;
          p.vy += (-BURST_SPRING * p.oy - BURST_DAMPING * p.vy) * dt;
          p.ox += p.vx * dt;
          p.oy += p.vy * dt;
          if (Math.abs(p.ox) + Math.abs(p.oy) > 0.05 || Math.abs(p.vx) + Math.abs(p.vy) > 1) {
            settling = true;
          } else {
            p.ox = 0;
            p.oy = 0;
            p.vx = 0;
            p.vy = 0;
          }
          baseX += p.ox;
          baseY += p.oy;
        }

        if (repel) {
          const dx = baseX - pointer.smoothX;
          const dy = baseY - pointer.smoothY;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < s.repelRadius) {
            const force = Math.pow(1 - dist / s.repelRadius, 2) * s.pointerRepel;
            baseX += (dx / dist) * force;
            baseY += (dy / dist) * force;
          }
        }

        const moveX = (baseX - p.x) * follow;
        const moveY = (baseY - p.y) * follow;
        p.x += moveX;
        p.y += moveY;
        if (Math.abs(moveX) + Math.abs(moveY) > 0.02) moving = true;

        const heat = clamp(
          (Math.hypot(p.x - p.targetX, p.y - p.targetY) - HEAT_DEADZONE) / HEAT_RANGE,
          0,
          1
        );
        const tone = Math.round(heat * (TONES - 1));
        const fade = Math.round(progress * (FADES - 1));
        buckets[fade * TONES + tone].push(p);
      }

      if (gathering && complete) gathering = false;
      if (bursting && !settling) bursting = false;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (s.glow) {
        layerCtx.setTransform(1, 0, 0, 1, 0, 0);
        layerCtx.clearRect(0, 0, layer.width, layer.height);
        layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        layerCtx.fillStyle = glowColor;
        let lit = false;
        for (let fade = 0; fade < FADES; fade++) {
          for (let tone = 1; tone < TONES; tone++) {
            const grp = buckets[fade * TONES + tone];
            if (!grp.length) continue;
            layerCtx.globalAlpha = (tone / (TONES - 1)) * fadeAlpha(fade);
            drawGroup(layerCtx, grp, sizeBase);
            lit = true;
          }
        }
        layerCtx.globalAlpha = 1;
        if (lit) {
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = (3 + sizeBase * 1.5) * dpr;
          ctx.drawImage(layer, 0, 0, width, height);
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
        }
      }

      for (let fade = 0; fade < FADES; fade++) {
        ctx.globalAlpha = fadeAlpha(fade);
        for (let tone = 0; tone < TONES; tone++) {
          const grp = buckets[fade * TONES + tone];
          if (!grp.length) continue;
          ctx.fillStyle = palette[tone];
          drawGroup(ctx, grp, sizeBase);
        }
      }
      ctx.globalAlpha = 1;

      return gathering || moving || repel || drift || bursting;
    };

    const frame = now => {
      raf = 0;
      if (!alive) return;
      const busy = step(now);
      if (busy && visible && alive) raf = requestAnimationFrame(frame);
    };

    function wake() {
      if (raf || !visible || !alive) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }

    const sampleText = async () => {
      const currentBuild = ++buildId;
      const rect = container.getBoundingClientRect();
      const nextWidth = Math.floor(rect.width);
      const nextHeight = Math.floor(rect.height || 360);

      if (nextWidth <= 0 || nextHeight <= 0) return;

      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      const resolvedFamily = family();
      let resolvedSize = resolveFontSize(s.fontSize, container, s.fontWeight, resolvedFamily);
      let font = `${s.fontWeight} ${resolvedSize}px ${resolvedFamily}`;

      await waitForFonts(font);
      if (currentBuild !== buildId || !alive) return;

      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
      if (!offCtx) return;

      // Automatically break into 2 natural lines for punchy presentation
      let lines = [s.text];
      if (nextWidth < 900) {
        lines = ['The Ultimate', 'HTML & CSS Code Vault'];
      }

      offCtx.font = font;
      let maxLineWidth = 0;
      for (const line of lines) {
        maxLineWidth = Math.max(maxLineWidth, offCtx.measureText(line).width);
      }

      const maxAllowed = nextWidth * 0.92;
      if (maxLineWidth > maxAllowed) {
        resolvedSize = Math.max(24, resolvedSize * (maxAllowed / maxLineWidth));
        font = `${s.fontWeight} ${resolvedSize}px ${resolvedFamily}`;
        await waitForFonts(font);
        if (currentBuild !== buildId || !alive) return;
        offCtx.font = font;
      }

      const lineHeight = resolvedSize * 1.18;
      const totalTextHeight = lines.length * lineHeight;

      offscreen.width = nextWidth;
      offscreen.height = nextHeight;
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
      offCtx.font = font;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#ffffff';

      const startY = nextHeight / 2 - (totalTextHeight / 2) + (lineHeight / 2);
      lines.forEach((line, i) => {
        offCtx.fillText(line, nextWidth / 2, startY + (i * lineHeight));
      });

      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const targets = [];
      const sampleStep = Math.max(2, Math.floor(s.density));

      for (let y = 0; y < offscreen.height; y += sampleStep) {
        for (let x = 0; x < offscreen.width; x += sampleStep) {
          const alpha = imageData.data[(y * offscreen.width + x) * 4 + 3];
          if (alpha > 40) {
            targets.push({
              x,
              y,
              alpha: alpha / 255
            });
          }
        }
      }

      const maxParticles = Math.max(1400, Math.min(6800, Math.floor((nextWidth * nextHeight) / 70)));
      const stride = Math.max(1, Math.ceil(targets.length / maxParticles));
      const selected = targets.filter((_, index) => index % stride === 0);

      width = nextWidth;
      height = nextHeight;
      dpr = nextDpr;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      layer.width = canvas.width;
      layer.height = canvas.height;

      particles = selected.map((target, index) => {
        const seed = ((index * 9301 + 49297) % 233280) / 233280;
        const depth = 0.45 + (((index * 233 + 97) % 1000) / 1000) * 0.9;
        return {
          x: target.x,
          y: target.y,
          startX: target.x,
          startY: target.y,
          targetX: target.x,
          targetY: target.y,
          weight: target.alpha,
          seed,
          depth,
          delay: 0,
          ox: 0,
          oy: 0,
          vx: 0,
          vy: 0
        };
      });

      if (!pointer.active) {
        pointer.x = width / 2;
        pointer.y = height / 2;
        pointer.smoothX = pointer.x;
        pointer.smoothY = pointer.y;
      }

      if (introPending) {
        introPending = false;
        startIntro(true);
      } else {
        gathering = false;
      }

      step(performance.now());
      wake();
    };

    function queueSample() {
      if (sampleFrame) cancelAnimationFrame(sampleFrame);
      sampleFrame = requestAnimationFrame(() => {
        sampleFrame = 0;
        sampleText();
      });
    }

    const locate = evt => {
      const rect = canvas.getBoundingClientRect();
      const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
      const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
    };

    const handlePointerMove = evt => {
      locate(evt);
      if (!pointer.active) {
        pointer.smoothX = pointer.x;
        pointer.smoothY = pointer.y;
      }
      pointer.active = true;
      wake();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      wake();
    };

    const handlePointerDown = evt => {
      if (!s.clickBurst) return;
      locate(evt);
      burst(pointer.x, pointer.y);
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);
    canvas.addEventListener('mousedown', handlePointerDown);

    // Touch Support
    canvas.addEventListener('touchmove', handlePointerMove, { passive: true });
    canvas.addEventListener('touchend', handlePointerLeave);
    canvas.addEventListener('touchstart', handlePointerDown, { passive: true });

    const resizeObserver = new ResizeObserver(() => queueSample());
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    });
    intersectionObserver.observe(container);

    const themeObserver = new MutationObserver(wake);
    for (const node of [document.documentElement, document.body]) {
      if (node) themeObserver.observe(node, { attributes: true, attributeFilter: ['data-theme', 'class', 'style'] });
    }

    sampleText();

    return {
      destroy: () => {
        alive = false;
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        themeObserver.disconnect();
        canvas.removeEventListener('mousemove', handlePointerMove);
        canvas.removeEventListener('mouseleave', handlePointerLeave);
        canvas.removeEventListener('mousedown', handlePointerDown);
        canvas.removeEventListener('touchmove', handlePointerMove);
        canvas.removeEventListener('touchend', handlePointerLeave);
        canvas.removeEventListener('touchstart', handlePointerDown);
        if (raf) cancelAnimationFrame(raf);
        if (sampleFrame) cancelAnimationFrame(sampleFrame);
      },
      burst,
      wake
    };
  }

  global.initParticleText = initParticleText;
})(typeof window !== 'undefined' ? window : this);
