# ⚡ The Ultimate HTML & CSS Code Vault

<div align="center">

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://html-css-code-vault.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Portal-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://pabitralenka07.github.io/HTML--CSS--code_vault/)
[![GitHub Actions CI](https://img.shields.io/github/actions/workflow/status/pabitralenka07/HTML--CSS--code_vault/pages%2Fpages-build-deployment?style=for-the-badge&logo=githubactions&logoColor=white&label=CI%20Status)](https://github.com/pabitralenka07/HTML--CSS--code_vault/actions)
[![Projects Count](https://img.shields.io/badge/Curated%20Projects-140%2B-ff5a36?style=for-the-badge&logo=codefactor&logoColor=white)](https://html-css-code-vault.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS%20%7C%20React%20JSX-38bdf8?style=for-the-badge)](#-tech-stack)

<br />

### 🌐 [**Launch the Live Interactive Showcase Portal &rarr;**](https://html-css-code-vault.vercel.app)
*Alternate Mirror: [https://pabitralenka07.github.io/HTML--CSS--code_vault/](https://pabitralenka07.github.io/HTML--CSS--code_vault/)*

</div>

---

A modern, high-performance, and responsive frontend directory housing **140+ individual HTML5 & CSS3 projects, playable arcade games, production UI components, dashboards, real-world tasks, and comprehensive cheatsheets**. 

Every project in this repository has been **thoroughly organized, functionally renamed, and optimized** with an embedded **Device Viewport Simulator** (Desktop, Tablet, and Mobile).

---

## 🌟 Highlight Features

| Feature | Description |
| :--- | :--- |
| 📱 **Interactive Device Simulator** | Preview any project in live simulated viewports: **Desktop (100%)**, **Tablet / iPad (768px)**, and **Mobile / iPhone (375px)** with live screen rotation! |
| 🪐 **Interactive Canvas Particle Text** | Hero header powered by high-speed HTML5 Canvas physics with particle gathering, pointer repulsion, idle drift, and click burst effects. |
| 🏷️ **100% Functional Renaming** | All 140 projects renamed from ambiguous numbers to descriptive functional titles (e.g., *Drive Mad 3D Arcade*, *SaaS Revenue Dashboard*, *Student Security Gate Pass*). |
| ⚡ **Instant Search & Tag Filtering** | Real-time fuzzy filtering across project titles, tags (`#Game`, `#Dashboard`, `#Form`, `#Animation`, `#Canvas`), and categories. |
| 💻 **Source Code Inspector** | Read the underlying HTML and CSS source directly inside the web browser with one-click clipboard copying. |
| 🌓 **Adaptive Dark & Light Themes** | Carefully tuned high-contrast dark mode and clean daylight theme with persistent user preference. |
| 🚀 **Zero Dependencies** | Pure native web technologies — no bundlers or heavy runtimes required. Runs lightning-fast on any device. |

---

## 📂 Project Catalog & Categories (140 Total)

```
HTML--CSS--code_vault/
├── CSS/                         # 61 UI Components & Layouts
│   ├── Logins/                  # 13 Distinct Authentication & Login Interfaces
│   ├── Footers/                 # 11 Modern Multi-Column & Minimal Footers
│   ├── Cards/                   # 8 Profile, Product, Pricing, & 3D Hover Cards
│   ├── Navbars/                 # 7 Responsive Navigation Bars & Mobile Drawers
│   ├── Sidebars/                # 7 Collapsible, Icon-Only, & Glassmorphic Sidebars
│   ├── Dropdowns/               # 4 Multi-Level Animated Select Menus
│   ├── Signups/                 # 4 Registration & Multi-Step Onboarding Forms
│   ├── Menus/                   # 3 Radial, Fullscreen, & Mega Navigation Menus
│   ├── Dashboard/               # SaaS Revenue, Refunds, & Monthly Profit Analytics
│   ├── Accordion/               # Smooth Collapsible FAQ Accordion
│   ├── Parallax/                # Multi-Layer Depth Scrolling Effect
│   └── Carousel/                # Pure CSS & JS Responsive Image Slider
├── HTML Practice/               # 46 Interactive Demos & Game Labs
│   ├── Drive Mad 3D Game/       # Playable 3D Physics Vehicle Racing Arcade Game
│   ├── Tic Tac Toe/             # Two-Player Interactive Grid Game
│   └── 44 Practical Exercises   # Semantic HTML5, Canvas, Audio, Video, Tables & Inputs
├── FRONTEND TASKS/              # 19 Real-World Production Challenges
│   ├── Gate Pass Out-Pass/      # Student Campus Security Out-Pass Request System
│   ├── College Timetables/      # Complex Responsive Schedule & Matrix Layouts
│   ├── Student ID Cards/        # Realistic Printable Identification Badges
│   └── Payment Checkouts/       # Multi-Step Checkout & Billing Interfaces
├── Prime_practice/              # 3 Advanced Form & Matrix Table Labs
├── html-css-cheat-sheet-master/ # 4 Comprehensive Web Development Reference Guides
├── index.html                   # Interactive Showcase Portal Application
├── ParticleText.jsx / .js       # Physics-Based Particle Text Engine (React & Vanilla)
├── vault.css & vault.js         # Showcase Styles, Simulator Logic & Search Engine
└── projects-data.json           # Unified Structured Metadata for All 140 Projects
```

---

## 🪐 Particle Text Engine

This repository includes a physics-based particle text canvas engine available in both **React (`ParticleText.jsx`)** and **Vanilla JavaScript (`ParticleText.js`)**.

### React / Next.js Usage:
```jsx
import ParticleText from './ParticleText';

export default function Hero() {
  return (
    <div style={{ width: '100%', height: 360 }}>
      <ParticleText
        text="The Ultimate HTML & CSS Code Vault"
        particleSize={2.2}
        density={4}
        color="currentColor"
        highlightColor="#ff5a36"
        highlightMode="motion"
        shape="circle"
        intro="gather"
        scatter={190}
        gatherDuration={1600}
        stagger={420}
        clickBurst
        burstStrength={1}
        pointerRepel={42}
        repelRadius={120}
        idleDrift={0.8}
        trigger="mount"
        fontSize="clamp(3.5rem, 13vw, 9rem)"
        fontWeight={800}
        fontFamily="inherit"
        glow
      />
    </div>
  );
}
```

### Vanilla JavaScript Usage:
```html
<div id="particle-container" style="width: 100%; height: 360px;"></div>

<script src="ParticleText.js"></script>
<script>
  initParticleText(document.getElementById('particle-container'), {
    text: "The Ultimate HTML & CSS Code Vault",
    particleSize: 2.2,
    density: 4,
    color: "#ffffff",
    highlightColor: "#ff5a36",
    highlightMode: "motion",
    intro: "gather",
    clickBurst: true,
    idleDrift: 0.8
  });
</script>
```

---

## 📱 Live Device Simulator

The built-in device simulator enables testing responsive layouts on any device size right from the browser without opening developer tools:

- 💻 **Desktop View**: Full-width fluid responsive view (100%).
- 📱 **Tablet View**: iPad mini / Air standard 768px frame with interactive touch emulation.
- 📲 **Mobile View**: iPhone 375px frame with simulated status notch and home indicator.
- 🔄 **Orientation Rotate**: Single-click toggles between Portrait and Landscape aspect ratios.
- 🔗 **Direct Popout**: Open any demo in its own isolated browser window.

---

## 🚀 Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pabitralenka07/HTML--CSS--code_vault.git
   cd HTML--CSS--code_vault
   ```

2. **Run in Browser**:
   - Double-click `index.html` to open directly in any web browser.
   - Or serve with any static web server:
     ```bash
     # Using Python
     python3 -m http.server 8000
     # Or using npx serve
     npx serve .
     ```
   - Navigate to `http://localhost:8000` to access the full showcase.

---

## 🚢 Deployment

### Deploy to Vercel
The repository includes [`vercel.json`](./vercel.json) pre-configured with headers and frame permissions:
```bash
npx vercel --prod
```

### Deploy to GitHub Pages
The repository includes a ready-to-use [`docs/`](./docs) folder with `.nojekyll` enabled:
1. Go to **Repository Settings** &rarr; **Pages**.
2. Select **Source**: Deploy from a branch.
3. Select **Branch**: `main`, Folder: `/docs`.
4. GitHub Actions will automatically deploy to your GitHub Pages URL.

---

## 💻 Tech Stack

- **Markup & Layout**: Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism)
- **Logic & Interactions**: Modern Vanilla JavaScript (ES6+), Canvas 2D API
- **Framework Support**: React JSX Component (`ParticleText.jsx`)
- **Hosting & CI/CD**: Vercel & GitHub Actions CI/CD

---

## 👤 Author

**Pabitra Lenka**
- GitHub: [@pabitralenka07](https://github.com/pabitralenka07)
- Live Portal: [html-css-code-vault.vercel.app](https://html-css-code-vault.vercel.app)

---

## 📄 License
This project is open-source and free to use for personal learning, teaching, and commercial reference. Star ⭐ this repository if you find it helpful!
