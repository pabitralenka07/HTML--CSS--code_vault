/**
 * HTML & CSS Code Vault — Client Controller
 * Comprehensive interactive showcase for 140+ projects
 * Built for desktop, tablet, and mobile with Device Simulator
 */

(function () {
  'use strict';

  // Complete Embedded Projects Dataset
  const VAULT_PROJECTS = [
  {
    "id": "item-137",
    "path": "html-css-cheat-sheet-master/animation.html",
    "title": "Animation and Transitions",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Visual showcase of keyframe animations, cubic bezier transitions, loaders, and hover micro-effects.",
    "tags": [
      "Animation",
      "Responsive"
    ],
    "icon": "book-open",
    "size_bytes": 48445,
    "featured": true
  },
  {
    "id": "item-138",
    "path": "html-css-cheat-sheet-master/fixed-position-example.html",
    "title": "Fixed Positioning UI Layout",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Clean, responsive cheatsheets & references implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "book-open",
    "size_bytes": 2242,
    "featured": true
  },
  {
    "id": "item-139",
    "path": "html-css-cheat-sheet-master/html-css-cheat-sheet.html",
    "title": "HTML5 and CSS cheat sheet",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Ultimate comprehensive quick reference cheatsheet covering HTML5 tags, CSS3 selectors, box model, and flexbox.",
    "tags": [
      "Forms",
      "Tables",
      "Responsive"
    ],
    "icon": "book-open",
    "size_bytes": 257854,
    "featured": true
  },
  {
    "id": "item-140",
    "path": "html-css-cheat-sheet-master/tools.html",
    "title": "HTML5 and CSS cheat sheet",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Clean, responsive cheatsheets & references implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "book-open",
    "size_bytes": 4942,
    "featured": true
  },
  {
    "id": "item-74",
    "path": "FRONTEND TASKS/new_landpage.html",
    "title": "Flow - Don't type, just speak",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Modern high-converting digital landing page featuring hero section, feature cards, and CTA buttons.",
    "tags": [
      "Animation",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 10447,
    "featured": true
  },
  {
    "id": "item-72",
    "path": "FRONTEND TASKS/id_card.html",
    "title": "ID Card Generator",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Professional student identity card badge with photo placeholder, barcode, and institution branding.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 11515,
    "featured": true
  },
  {
    "id": "item-68",
    "path": "FRONTEND TASKS/Gatetpass.html",
    "title": "Out Pass Form",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "College student security out-pass / gatepass request form with validation, department fields, and signatures.",
    "tags": [
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 2891,
    "featured": true
  },
  {
    "id": "item-67",
    "path": "FRONTEND TASKS/Clg_timetable.html",
    "title": "Time Table CSE SEC-B",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Comprehensive semester schedule matrix with period timings, lab slots, and subject codes.",
    "tags": [
      "JavaScript",
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3985,
    "featured": true
  },
  {
    "id": "item-91",
    "path": "HTML Practice/Car_Game.html",
    "title": "Drive Mad",
    "category": "Games & Mini-Apps",
    "main_group": "Games & Mini-Apps",
    "folder": "HTML Practice",
    "description": "Exciting playable 3D arcade driving game with physics, obstacles, score tracking, and keyboard controls.",
    "tags": [
      "Playable",
      "Game",
      "JavaScript",
      "HTML5 Canvas"
    ],
    "icon": "gamepad",
    "size_bytes": 24970,
    "featured": true
  },
  {
    "id": "item-71",
    "path": "FRONTEND TASKS/calco.html",
    "title": "Simple Calculator",
    "category": "Games & Mini-Apps",
    "main_group": "Games & Mini-Apps",
    "folder": "FRONTEND TASKS",
    "description": "Modern responsive calculator with arithmetic operations, sleek glassmorphism, and instant calculation.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "gamepad",
    "size_bytes": 2997,
    "featured": true
  },
  {
    "id": "item-131",
    "path": "HTML Practice/tic_tac_toe_mvp.html",
    "title": "Tic Tac Toe \u2014 Multiplayer",
    "category": "Games & Mini-Apps",
    "main_group": "Games & Mini-Apps",
    "folder": "HTML Practice",
    "description": "Interactive 2-player Tic Tac Toe game with win-condition algorithms, reset functionality, and score counter.",
    "tags": [
      "Playable",
      "Game",
      "JavaScript",
      "Responsive"
    ],
    "icon": "gamepad",
    "size_bytes": 8892,
    "featured": true
  },
  {
    "id": "item-32",
    "path": "CSS/css-components-main/logins/login-16/index.html",
    "title": "Animation 1",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 4186,
    "featured": true
  },
  {
    "id": "item-3",
    "path": "CSS/css-components-main/cards/card-1/index.html",
    "title": "Card 1",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 918,
    "featured": true
  },
  {
    "id": "item-4",
    "path": "CSS/css-components-main/cards/card-10/index.html",
    "title": "Cards",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2507,
    "featured": true
  },
  {
    "id": "item-12",
    "path": "CSS/css-components-main/dashboards/dashboard-1/index.html",
    "title": "Dashboards",
    "category": "UI: Dashboards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: dashboards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2081,
    "featured": true
  },
  {
    "id": "item-28",
    "path": "CSS/css-components-main/logins/login-1/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 943,
    "featured": true
  },
  {
    "id": "item-29",
    "path": "CSS/css-components-main/logins/login-10/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1907,
    "featured": true
  },
  {
    "id": "item-30",
    "path": "CSS/css-components-main/logins/login-12/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1940,
    "featured": true
  },
  {
    "id": "item-31",
    "path": "CSS/css-components-main/logins/login-15/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1966,
    "featured": true
  },
  {
    "id": "item-44",
    "path": "CSS/css-components-main/navbars/navbar-1/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1078,
    "featured": true
  },
  {
    "id": "item-134",
    "path": "Prime_practice/form.html",
    "title": "Form Validation & Input Lab",
    "category": "Forms & Tables Lab",
    "main_group": "Forms & Tables",
    "folder": "Prime_practice",
    "description": "Clean, responsive forms & tables lab implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "table",
    "size_bytes": 969,
    "featured": false
  },
  {
    "id": "item-135",
    "path": "Prime_practice/form_name.html",
    "title": "Multi-Step Student Registration Form",
    "category": "Forms & Tables Lab",
    "main_group": "Forms & Tables",
    "folder": "Prime_practice",
    "description": "Clean, responsive forms & tables lab implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "table",
    "size_bytes": 362,
    "featured": false
  },
  {
    "id": "item-136",
    "path": "Prime_practice/prime_Table.html",
    "title": "Prime Data Table & Records",
    "category": "Forms & Tables Lab",
    "main_group": "Forms & Tables",
    "folder": "Prime_practice",
    "description": "Clean, responsive forms & tables lab implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "table",
    "size_bytes": 791,
    "featured": false
  },
  {
    "id": "item-81",
    "path": "FRONTEND TASKS/task 4.html",
    "title": "ALL HTML TAGS!",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 2528,
    "featured": false
  },
  {
    "id": "item-78",
    "path": "FRONTEND TASKS/table2.html",
    "title": "COLLEGE ROUTINE",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3237,
    "featured": false
  },
  {
    "id": "item-77",
    "path": "FRONTEND TASKS/sec-c.html",
    "title": "Class Timetable",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 2532,
    "featured": false
  },
  {
    "id": "item-82",
    "path": "FRONTEND TASKS/timetable-c.html",
    "title": "Class Timetable",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Comprehensive semester schedule matrix with period timings, lab slots, and subject codes.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3240,
    "featured": false
  },
  {
    "id": "item-76",
    "path": "FRONTEND TASKS/newtimetab.html",
    "title": "Class Timetable 2.0",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 2661,
    "featured": false
  },
  {
    "id": "item-84",
    "path": "FRONTEND TASKS/web2.html",
    "title": "Computer System Structure",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 1183,
    "featured": false
  },
  {
    "id": "item-80",
    "path": "FRONTEND TASKS/task 2.html",
    "title": "LIST TAG!",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 880,
    "featured": false
  },
  {
    "id": "item-69",
    "path": "FRONTEND TASKS/Lab_paper.html",
    "title": "Lab Record Sheet",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 2148,
    "featured": false
  },
  {
    "id": "item-70",
    "path": "FRONTEND TASKS/Leave_form.html",
    "title": "Leave Application",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 6244,
    "featured": false
  },
  {
    "id": "item-79",
    "path": "FRONTEND TASKS/tablet3.html",
    "title": "Timetable",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3665,
    "featured": false
  },
  {
    "id": "item-85",
    "path": "FRONTEND TASKS/web3.html",
    "title": "User Personal Information",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3473,
    "featured": false
  },
  {
    "id": "item-83",
    "path": "FRONTEND TASKS/web1.html",
    "title": "User Registration Form",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 2920,
    "featured": false
  },
  {
    "id": "item-66",
    "path": "FRONTEND TASKS/30task3.html",
    "title": "Using only Orderlist",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 775,
    "featured": false
  },
  {
    "id": "item-75",
    "path": "FRONTEND TASKS/newhard.html",
    "title": "new table",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3659,
    "featured": false
  },
  {
    "id": "item-73",
    "path": "FRONTEND TASKS/movietask.html",
    "title": "top3movies",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean, responsive frontend tasks & real-world implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 1133,
    "featured": false
  },
  {
    "id": "item-121",
    "path": "HTML Practice/sp.html",
    "title": "ALL HTML TAGS!",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2527,
    "featured": false
  },
  {
    "id": "item-126",
    "path": "HTML Practice/task 1.html",
    "title": "ALL HTML TAGS!",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2527,
    "featured": false
  },
  {
    "id": "item-128",
    "path": "HTML Practice/task 4.html",
    "title": "ALL HTML TAGS!",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2528,
    "featured": false
  },
  {
    "id": "item-93",
    "path": "HTML Practice/anchor.html",
    "title": "Anchor",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 632,
    "featured": false
  },
  {
    "id": "item-109",
    "path": "HTML Practice/marqee.html",
    "title": "Animated Marquee & Broadcast Ticker",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 281,
    "featured": false
  },
  {
    "id": "item-95",
    "path": "HTML Practice/blockqt.html",
    "title": "Blockquote & Stylized Citations",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 608,
    "featured": false
  },
  {
    "id": "item-125",
    "path": "HTML Practice/table2.html",
    "title": "COLLEGE ROUTINE",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3243,
    "featured": false
  },
  {
    "id": "item-86",
    "path": "HTML Practice/12task.html",
    "title": "CSS Layout & Selectors Exercise 1",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 518,
    "featured": false
  },
  {
    "id": "item-87",
    "path": "HTML Practice/12task1.html",
    "title": "CSS Layout & Selectors Exercise 2",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 926,
    "featured": false
  },
  {
    "id": "item-88",
    "path": "HTML Practice/12task2.html",
    "title": "CSS Layout & Selectors Exercise 3",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1958,
    "featured": false
  },
  {
    "id": "item-97",
    "path": "HTML Practice/class.html",
    "title": "Class",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3780,
    "featured": false
  },
  {
    "id": "item-120",
    "path": "HTML Practice/sec-c.html",
    "title": "Class Timetable",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2532,
    "featured": false
  },
  {
    "id": "item-132",
    "path": "HTML Practice/timetable-c.html",
    "title": "Class Timetable",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Comprehensive semester schedule matrix with period timings, lab slots, and subject codes.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3240,
    "featured": false
  },
  {
    "id": "item-114",
    "path": "HTML Practice/newtimetab.html",
    "title": "Class Timetable 2.0",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2661,
    "featured": false
  },
  {
    "id": "item-92",
    "path": "HTML Practice/all input tag.html",
    "title": "Comprehensive HTML5 Input Form Controls",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 534,
    "featured": false
  },
  {
    "id": "item-100",
    "path": "HTML Practice/form.html",
    "title": "DOCUMENTATION",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2648,
    "featured": false
  },
  {
    "id": "item-99",
    "path": "HTML Practice/day.html",
    "title": "Day/Date Calendar Schedule Widget",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1396,
    "featured": false
  },
  {
    "id": "item-105",
    "path": "HTML Practice/image.html",
    "title": "Document image",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 23599,
    "featured": false
  },
  {
    "id": "item-116",
    "path": "HTML Practice/optfrm.html",
    "title": "Dropdown Select & Option Controls",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1934,
    "featured": false
  },
  {
    "id": "item-101",
    "path": "HTML Practice/form2.html",
    "title": "Form2",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1416,
    "featured": false
  },
  {
    "id": "item-110",
    "path": "HTML Practice/new.html",
    "title": "Google form!",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1352,
    "featured": false
  },
  {
    "id": "item-94",
    "path": "HTML Practice/bgtext.html",
    "title": "Gradient Background & Clipped Text",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 402,
    "featured": false
  },
  {
    "id": "item-122",
    "path": "HTML Practice/sunew.html",
    "title": "HTML CLASS",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 498,
    "featured": false
  },
  {
    "id": "item-98",
    "path": "HTML Practice/data.html",
    "title": "HTML5 Data Attributes & Semantic Data",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 905,
    "featured": false
  },
  {
    "id": "item-111",
    "path": "HTML Practice/new_heart.html",
    "title": "Handy AI \u2013 Gesture Experience",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "HTML5 Canvas",
      "Animation",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 20130,
    "featured": false
  },
  {
    "id": "item-127",
    "path": "HTML Practice/task 2.html",
    "title": "LIST TAG!",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 880,
    "featured": false
  },
  {
    "id": "item-117",
    "path": "HTML Practice/pabi.html",
    "title": "Login Dashboard",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 497,
    "featured": false
  },
  {
    "id": "item-118",
    "path": "HTML Practice/pabitra.html",
    "title": "Login Dashboard",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1833,
    "featured": false
  },
  {
    "id": "item-119",
    "path": "HTML Practice/page.html",
    "title": "Login Dashboard",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 879,
    "featured": false
  },
  {
    "id": "item-130",
    "path": "HTML Practice/textarea.html",
    "title": "Multi-line Textarea Form Input",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 855,
    "featured": false
  },
  {
    "id": "item-133",
    "path": "HTML Practice/web.html",
    "title": "My Personal Web Page",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3046,
    "featured": false
  },
  {
    "id": "item-107",
    "path": "HTML Practice/lenka.html",
    "title": "New Tab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 868,
    "featured": false
  },
  {
    "id": "item-102",
    "path": "HTML Practice/form3.html",
    "title": "Registration Form",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3723,
    "featured": false
  },
  {
    "id": "item-104",
    "path": "HTML Practice/icon.html",
    "title": "SVG & Icon Font Integration",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 440,
    "featured": false
  },
  {
    "id": "item-103",
    "path": "HTML Practice/hardtask.html",
    "title": "Schedule Table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3280,
    "featured": false
  },
  {
    "id": "item-115",
    "path": "HTML Practice/newtitl.html",
    "title": "Stylized Header Titles & Badges",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 328,
    "featured": false
  },
  {
    "id": "item-96",
    "path": "HTML Practice/center.html",
    "title": "Suraj Bhai",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 253,
    "featured": false
  },
  {
    "id": "item-124",
    "path": "HTML Practice/table2.0.html",
    "title": "TASK HISTORY",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 2796,
    "featured": false
  },
  {
    "id": "item-129",
    "path": "HTML Practice/task.html",
    "title": "TECH TASK",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1224,
    "featured": false
  },
  {
    "id": "item-123",
    "path": "HTML Practice/table.html",
    "title": "Table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1024,
    "featured": false
  },
  {
    "id": "item-89",
    "path": "HTML Practice/30task1.html",
    "title": "User Personal Information 2.0",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1782,
    "featured": false
  },
  {
    "id": "item-112",
    "path": "HTML Practice/newfont.html",
    "title": "Web Typography & Custom Font Stacks",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 444,
    "featured": false
  },
  {
    "id": "item-113",
    "path": "HTML Practice/newhard.html",
    "title": "new table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3659,
    "featured": false
  },
  {
    "id": "item-108",
    "path": "HTML Practice/list.html",
    "title": "order list",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 816,
    "featured": false
  },
  {
    "id": "item-106",
    "path": "HTML Practice/ind.html",
    "title": "pabitra",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 357,
    "featured": false
  },
  {
    "id": "item-90",
    "path": "HTML Practice/30task2.html",
    "title": "table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean, responsive html practice labs implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Tables",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 1328,
    "featured": false
  },
  {
    "id": "item-2",
    "path": "CSS/css-components-main/accordions/accordion-1/index.html",
    "title": "Accordions",
    "category": "UI: Accordions",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: accordions implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1337,
    "featured": false
  },
  {
    "id": "item-17",
    "path": "CSS/css-components-main/footers/footer-1/index.html",
    "title": "Animation 1",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3525,
    "featured": false
  },
  {
    "id": "item-25",
    "path": "CSS/css-components-main/footers/footer-7/index.html",
    "title": "Animation 1",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3522,
    "featured": false
  },
  {
    "id": "item-37",
    "path": "CSS/css-components-main/logins/login-6/index.html",
    "title": "Animation 1",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3698,
    "featured": false
  },
  {
    "id": "item-5",
    "path": "CSS/css-components-main/cards/card-2/index.html",
    "title": "Card 2",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2580,
    "featured": false
  },
  {
    "id": "item-6",
    "path": "CSS/css-components-main/cards/card-3/index.html",
    "title": "Cards",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1820,
    "featured": false
  },
  {
    "id": "item-7",
    "path": "CSS/css-components-main/cards/card-4/index.html",
    "title": "Cards",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1499,
    "featured": false
  },
  {
    "id": "item-8",
    "path": "CSS/css-components-main/cards/card-7/index.html",
    "title": "Cards",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1487,
    "featured": false
  },
  {
    "id": "item-9",
    "path": "CSS/css-components-main/cards/card-8/index.html",
    "title": "Cards",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1632,
    "featured": false
  },
  {
    "id": "item-10",
    "path": "CSS/css-components-main/cards/card-9/index.html",
    "title": "Cards",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: cards implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1841,
    "featured": false
  },
  {
    "id": "item-36",
    "path": "CSS/css-components-main/logins/login-5/index.html",
    "title": "Cards",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1371,
    "featured": false
  },
  {
    "id": "item-11",
    "path": "CSS/css-components-main/carousels/carousel-2/index.html",
    "title": "Carousel 2",
    "category": "UI: Carousels",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: carousels implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1248,
    "featured": false
  },
  {
    "id": "item-1",
    "path": "CSS/1st.html",
    "title": "Core CSS Styling Foundations",
    "category": "CSS Styling",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive css styling implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 4096,
    "featured": false
  },
  {
    "id": "item-13",
    "path": "CSS/css-components-main/dropdowns/dropdown-1/index.html",
    "title": "Dropdowns",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: dropdowns implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3506,
    "featured": false
  },
  {
    "id": "item-14",
    "path": "CSS/css-components-main/dropdowns/dropdown-2/index.html",
    "title": "Dropdowns",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: dropdowns implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1412,
    "featured": false
  },
  {
    "id": "item-15",
    "path": "CSS/css-components-main/dropdowns/dropdown-3/index copy.html",
    "title": "Dropdowns",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: dropdowns implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2994,
    "featured": false
  },
  {
    "id": "item-16",
    "path": "CSS/css-components-main/dropdowns/dropdown-3/index.html",
    "title": "Dropdowns",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: dropdowns implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2763,
    "featured": false
  },
  {
    "id": "item-18",
    "path": "CSS/css-components-main/footers/footer-10/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 4548,
    "featured": false
  },
  {
    "id": "item-19",
    "path": "CSS/css-components-main/footers/footer-11/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3347,
    "featured": false
  },
  {
    "id": "item-20",
    "path": "CSS/css-components-main/footers/footer-2/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2397,
    "featured": false
  },
  {
    "id": "item-21",
    "path": "CSS/css-components-main/footers/footer-3/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2713,
    "featured": false
  },
  {
    "id": "item-22",
    "path": "CSS/css-components-main/footers/footer-4/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2552,
    "featured": false
  },
  {
    "id": "item-23",
    "path": "CSS/css-components-main/footers/footer-5/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 4548,
    "featured": false
  },
  {
    "id": "item-24",
    "path": "CSS/css-components-main/footers/footer-6/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2077,
    "featured": false
  },
  {
    "id": "item-26",
    "path": "CSS/css-components-main/footers/footer-8/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2645,
    "featured": false
  },
  {
    "id": "item-27",
    "path": "CSS/css-components-main/footers/footer-9/index.html",
    "title": "Footers",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: footers implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2194,
    "featured": false
  },
  {
    "id": "item-40",
    "path": "CSS/css-components-main/logins/login-9/index.html",
    "title": "Login",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1368,
    "featured": false
  },
  {
    "id": "item-33",
    "path": "CSS/css-components-main/logins/login-2/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 891,
    "featured": false
  },
  {
    "id": "item-34",
    "path": "CSS/css-components-main/logins/login-3/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1049,
    "featured": false
  },
  {
    "id": "item-35",
    "path": "CSS/css-components-main/logins/login-4/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1385,
    "featured": false
  },
  {
    "id": "item-38",
    "path": "CSS/css-components-main/logins/login-7/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1938,
    "featured": false
  },
  {
    "id": "item-39",
    "path": "CSS/css-components-main/logins/login-8/index.html",
    "title": "Logins",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: logins implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1787,
    "featured": false
  },
  {
    "id": "item-60",
    "path": "CSS/css-components-main/signups/signup-2/index.html",
    "title": "Logins",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: signups implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1078,
    "featured": false
  },
  {
    "id": "item-43",
    "path": "CSS/css-components-main/menus/menu-3/index.html",
    "title": "Menu 2",
    "category": "UI: Menus",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: menus implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1212,
    "featured": false
  },
  {
    "id": "item-41",
    "path": "CSS/css-components-main/menus/menu-1/index.html",
    "title": "Menus",
    "category": "UI: Menus",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: menus implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1111,
    "featured": false
  },
  {
    "id": "item-42",
    "path": "CSS/css-components-main/menus/menu-2/index.html",
    "title": "Menus",
    "category": "UI: Menus",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: menus implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1175,
    "featured": false
  },
  {
    "id": "item-45",
    "path": "CSS/css-components-main/navbars/navbar-2/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1905,
    "featured": false
  },
  {
    "id": "item-46",
    "path": "CSS/css-components-main/navbars/navbar-3/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1618,
    "featured": false
  },
  {
    "id": "item-47",
    "path": "CSS/css-components-main/navbars/navbar-4/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 894,
    "featured": false
  },
  {
    "id": "item-48",
    "path": "CSS/css-components-main/navbars/navbar-5/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1495,
    "featured": false
  },
  {
    "id": "item-49",
    "path": "CSS/css-components-main/navbars/navbar-6/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1326,
    "featured": false
  },
  {
    "id": "item-50",
    "path": "CSS/css-components-main/navbars/navbar-7/index.html",
    "title": "Navbars",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: navbars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1905,
    "featured": false
  },
  {
    "id": "item-51",
    "path": "CSS/css-components-main/parallax/parallax-1/index.html",
    "title": "Parallax",
    "category": "UI: Parallax",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: parallax implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2008,
    "featured": false
  },
  {
    "id": "item-65",
    "path": "CSS/img13.html",
    "title": "Responsive Gallery Grid Showcase",
    "category": "CSS Styling",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive css styling implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 471,
    "featured": false
  },
  {
    "id": "item-52",
    "path": "CSS/css-components-main/sidebars/sidebar-1/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1361,
    "featured": false
  },
  {
    "id": "item-53",
    "path": "CSS/css-components-main/sidebars/sidebar-2/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3757,
    "featured": false
  },
  {
    "id": "item-54",
    "path": "CSS/css-components-main/sidebars/sidebar-3/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2415,
    "featured": false
  },
  {
    "id": "item-55",
    "path": "CSS/css-components-main/sidebars/sidebar-4/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3413,
    "featured": false
  },
  {
    "id": "item-56",
    "path": "CSS/css-components-main/sidebars/sidebar-5/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2418,
    "featured": false
  },
  {
    "id": "item-57",
    "path": "CSS/css-components-main/sidebars/sidebar-6/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2171,
    "featured": false
  },
  {
    "id": "item-58",
    "path": "CSS/css-components-main/sidebars/sidebar-7/index.html",
    "title": "Sidebars",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: sidebars implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3430,
    "featured": false
  },
  {
    "id": "item-62",
    "path": "CSS/css-components-main/signups/signup-4/index.html",
    "title": "Sign Ups",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: signups implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1742,
    "featured": false
  },
  {
    "id": "item-59",
    "path": "CSS/css-components-main/signups/signup-1/index.html",
    "title": "Signups",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: signups implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2111,
    "featured": false
  },
  {
    "id": "item-61",
    "path": "CSS/css-components-main/signups/signup-3/index.html",
    "title": "Signups",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: signups implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Forms",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1403,
    "featured": false
  },
  {
    "id": "item-63",
    "path": "CSS/css-components-main/tricks/sticky-sidebar/index.html",
    "title": "Sticky Sidebar",
    "category": "UI: Tricks",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: tricks implementation built with semantic HTML & modern CSS.",
    "tags": [
      "JavaScript",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 2295,
    "featured": false
  },
  {
    "id": "item-64",
    "path": "CSS/css-components-main/widgets/widget-1/index.html",
    "title": "Widget 2 (HTML + CSS)",
    "category": "UI: Widgets",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean, responsive ui: widgets implementation built with semantic HTML & modern CSS.",
    "tags": [
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 3034,
    "featured": false
  }
];

  // State
  const state = {
    projects: VAULT_PROJECTS,
    filtered: VAULT_PROJECTS,
    searchQuery: '',
    currentCategory: 'all',
    currentTag: null,
    sortBy: 'featured',
    viewMode: localStorage.getItem('vault_view') || 'grid',
    favoritesOnly: false,
    favorites: JSON.parse(localStorage.getItem('vault_favs') || '[]'),
    theme: localStorage.getItem('vault_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
    activeProject: null,
    deviceMode: 'desktop',
    isLandscape: false,
    activeModalTab: 'preview' // 'preview' | 'code'
  };

  // Category Icon Map
  const CATEGORY_ICONS = {
    'Games & Mini-Apps': '🎮',
    'Frontend Tasks': '💼',
    'Frontend Tasks & Real-World': '💼',
    'UI Components': '🎨',
    'Cheatsheets': '📚',
    'Cheatsheets & References': '📚',
    'HTML Practice': '📝',
    'HTML Practice Labs': '📝',
    'Forms & Tables': '📊',
    'Forms & Tables Lab': '📊',
    'CSS Styling': '✨',
    'General': '⚡'
  };

  // DOM Elements
  const el = {
    grid: document.getElementById('projectsGrid'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    categoryTabs: document.getElementById('categoryTabs'),
    tagChips: document.getElementById('tagChips'),
    sortSelect: document.getElementById('sortSelect'),
    viewGridBtn: document.getElementById('viewGridBtn'),
    viewListBtn: document.getElementById('viewListBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    resultsCount: document.getElementById('resultsCount'),
    
    // Modal Elements
    modal: document.getElementById('simulatorModal'),
    modalTitle: document.getElementById('simProjectTitle'),
    modalBadge: document.getElementById('simProjectBadge'),
    modalIframe: document.getElementById('simIframe'),
    deviceContainer: document.getElementById('deviceContainer'),
    deviceBtns: document.querySelectorAll('.device-btn'),
    rotateBtn: document.getElementById('simRotateBtn'),
    openExternalBtn: document.getElementById('simOpenExternalBtn'),
    modalCloseBtn: document.getElementById('simCloseBtn'),
    tabPreviewBtn: document.getElementById('simTabPreview'),
    tabCodeBtn: document.getElementById('simTabCode'),
    sourcePanel: document.getElementById('sourceCodePanel'),
    codeDisplay: document.getElementById('codeDisplay'),
    copyCodeBtn: document.getElementById('copyCodeBtn')
  };

  // Apply Theme
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vault_theme', theme);
    if (el.themeToggleBtn) {
      el.themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  // Filter & Sort Pipeline
  function filterAndSort() {
    let res = state.projects.slice();

    // Favorites Filter
    if (state.favoritesOnly) {
      res = res.filter(p => state.favorites.includes(p.id));
    }

    // Category Filter
    if (state.currentCategory !== 'all') {
      res = res.filter(p => {
        if (state.currentCategory === 'favorites') return state.favorites.includes(p.id);
        return p.main_group === state.currentCategory || p.category === state.currentCategory;
      });
    }

    // Tag Filter
    if (state.currentTag) {
      res = res.filter(p => p.tags && p.tags.includes(state.currentTag));
    }

    // Search Filter
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      res = res.filter(p => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.path.toLowerCase().includes(q) ||
          (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
        );
      });
    }

    // Sort
    if (state.sortBy === 'featured') {
      res.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
      });
    } else if (state.sortBy === 'name-asc') {
      res.sort((a, b) => a.title.localeCompare(b.title));
    } else if (state.sortBy === 'category') {
      res.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
    } else if (state.sortBy === 'size') {
      res.sort((a, b) => b.size_bytes - a.size_bytes);
    }

    state.filtered = res;
    renderGrid();
    updateResultsCount();
  }

  // Render Category Tabs
  function renderCategoryTabs() {
    if (!el.categoryTabs) return;

    // Predefined top groups
    const groups = [
      { id: 'all', name: 'All Projects', icon: '✨' },
      { id: 'Games & Mini-Apps', name: 'Games & Apps', icon: '🎮' },
      { id: 'Frontend Tasks', name: 'Frontend Challenges', icon: '💼' },
      { id: 'UI Components', name: 'UI Components', icon: '🎨' },
      { id: 'HTML Practice', name: 'HTML Labs', icon: '📝' },
      { id: 'Forms & Tables', name: 'Forms & Tables', icon: '📊' },
      { id: 'Cheatsheets', name: 'Cheatsheets', icon: '📚' },
      { id: 'favorites', name: 'Saved Favorites', icon: '❤️' }
    ];

    el.categoryTabs.innerHTML = groups.map(g => {
      let count = 0;
      if (g.id === 'all') count = state.projects.length;
      else if (g.id === 'favorites') count = state.favorites.length;
      else count = state.projects.filter(p => p.main_group === g.id).length;

      const isActive = state.currentCategory === g.id ? 'active' : '';
      return `
        <button class="category-tab-btn ${isActive}" data-category="${g.id}">
          <span>${g.icon}</span>
          <span>${g.name}</span>
          <span class="tab-badge">${count}</span>
        </button>
      `;
    }).join('');

    el.categoryTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        el.categoryTabs.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentCategory = btn.dataset.category;
        state.favoritesOnly = (state.currentCategory === 'favorites');
        filterAndSort();
      });
    });
  }

  // Render Tag Chips
  function renderTagChips() {
    if (!el.tagChips) return;
    const commonTags = ['Playable', 'JavaScript', 'HTML5 Canvas', 'Animation', 'Forms', 'Tables', 'Responsive'];
    
    el.tagChips.innerHTML = `
      <button class="tag-filter-chip ${!state.currentTag ? 'active' : ''}" data-tag="">All Tags</button>
      ${commonTags.map(tag => `
        <button class="tag-filter-chip ${state.currentTag === tag ? 'active' : ''}" data-tag="${tag}">#${tag}</button>
      `).join('')}
    `;

    el.tagChips.querySelectorAll('.tag-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        el.tagChips.querySelectorAll('.tag-filter-chip').forEach(c => c.classList.remove('active'));
        const tag = chip.dataset.tag || null;
        chip.classList.add('active');
        state.currentTag = tag;
        filterAndSort();
      });
    });
  }

  // Update Result Indicators
  function updateResultsCount() {
    if (el.resultsCount) {
      el.resultsCount.innerHTML = `Showing <span class="highlight-count">${state.filtered.length}</span> of ${state.projects.length} projects`;
    }
  }

  // Render Projects Grid
  function renderGrid() {
    if (!el.grid) return;

    if (state.filtered.length === 0) {
      el.grid.innerHTML = `
        <div class="empty-results" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">No projects match your search</h3>
          <p class="empty-text">Try tweaking your search keywords, clearing tag filters, or browsing another category.</p>
          <button class="btn-header primary" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.searchQuery = '';
          state.currentCategory = 'all';
          state.currentTag = null;
          state.favoritesOnly = false;
          if (el.searchInput) el.searchInput.value = '';
          renderCategoryTabs();
          renderTagChips();
          filterAndSort();
        });
      }
      return;
    }

    el.grid.className = `projects-grid ${state.viewMode === 'list' ? 'list-view' : ''}`;

    el.grid.innerHTML = state.filtered.map(p => {
      const isFav = state.favorites.includes(p.id);
      const icon = CATEGORY_ICONS[p.main_group] || CATEGORY_ICONS[p.category] || '⚡';
      const encodedPath = encodeURI(p.path);

      return `
        <article class="project-card ${p.featured ? 'featured' : ''}" data-id="${p.id}">
          <div class="card-preview-banner">
            <div class="card-pattern"></div>
            <div class="card-badge-row">
              <span class="category-tag-pill">${p.category}</span>
              <div style="display:flex; align-items:center; gap:6px;">
                ${p.featured ? '<span class="featured-sparkle-pill">✨ Featured</span>' : ''}
                <button class="fav-btn ${isFav ? 'is-fav' : ''}" data-id="${p.id}" title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
                  ${isFav ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
            <div class="card-preview-icon">${icon}</div>
          </div>

          <div class="card-content">
            <div class="card-meta-left">
              <h3 class="card-title">${escapeHtml(p.title)}</h3>
              <p class="card-description">${escapeHtml(p.description)}</p>
              
              <div class="card-tags">
                ${(p.tags || []).map(t => `<span class="tag-badge">#${t}</span>`).join('')}
              </div>
            </div>

            <div class="card-footer">
              <button class="btn-card preview preview-trigger-btn" data-path="${encodedPath}" data-id="${p.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Preview
              </button>
              <a href="${encodedPath}" target="_blank" rel="noopener noreferrer" class="btn-card secondary" title="Open directly in new tab">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <button class="btn-card secondary code-trigger-btn" data-path="${encodedPath}" data-id="${p.id}" title="Inspect Source Code">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Listeners to cards
    el.grid.querySelectorAll('.preview-trigger-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = state.projects.find(p => p.id === btn.dataset.id);
        if (item) openSimulator(item, 'preview');
      });
    });

    el.grid.querySelectorAll('.code-trigger-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = state.projects.find(p => p.id === btn.dataset.id);
        if (item) openSimulator(item, 'code');
      });
    });

    el.grid.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(btn.dataset.id);
      });
    });
  }

  // Favorite toggle
  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.push(id);
    }
    localStorage.setItem('vault_favs', JSON.stringify(state.favorites));
    renderCategoryTabs();
    filterAndSort();
  }

  // Simulator Modal Management
  function openSimulator(item, initialTab = 'preview') {
    state.activeProject = item;
    state.activeModalTab = initialTab;
    
    if (el.modalTitle) el.modalTitle.textContent = item.title;
    if (el.modalBadge) el.modalBadge.textContent = item.category;

    const encodedPath = encodeURI(item.path);
    if (el.modalIframe) {
      el.modalIframe.src = encodedPath;
    }
    if (el.openExternalBtn) {
      el.openExternalBtn.href = encodedPath;
    }

    setDeviceMode(state.deviceMode);
    setModalTab(initialTab);

    if (el.modal) {
      el.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    if (initialTab === 'code') {
      loadSourceCode(item.path);
    }
  }

  function closeSimulator() {
    if (el.modal) {
      el.modal.classList.remove('active');
      document.body.style.overflow = '';
      if (el.modalIframe) el.modalIframe.src = 'about:blank';
    }
    state.activeProject = null;
  }

  function setDeviceMode(mode) {
    state.deviceMode = mode;
    if (!el.deviceContainer) return;

    el.deviceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.device === mode);
    });

    el.deviceContainer.className = `device-frame-container mode-${mode} ${state.isLandscape ? 'landscape' : ''}`;
  }

  function setModalTab(tab) {
    state.activeModalTab = tab;
    if (tab === 'preview') {
      if (el.tabPreviewBtn) el.tabPreviewBtn.classList.add('active');
      if (el.tabCodeBtn) el.tabCodeBtn.classList.remove('active');
      if (el.deviceContainer) el.deviceContainer.style.display = 'flex';
      if (el.sourcePanel) el.sourcePanel.classList.remove('active');
    } else {
      if (el.tabPreviewBtn) el.tabPreviewBtn.classList.remove('active');
      if (el.tabCodeBtn) el.tabCodeBtn.classList.add('active');
      if (el.deviceContainer) el.deviceContainer.style.display = 'none';
      if (el.sourcePanel) el.sourcePanel.classList.add('active');
      if (state.activeProject) loadSourceCode(state.activeProject.path);
    }
  }

  async function loadSourceCode(path) {
    if (!el.codeDisplay) return;
    el.codeDisplay.textContent = 'Loading source code...';
    try {
      const resp = await fetch(encodeURI(path));
      if (!resp.ok) throw new Error('Failed to load file');
      const text = await resp.text();
      el.codeDisplay.textContent = text;
    } catch (err) {
      el.codeDisplay.textContent = `Unable to fetch source code directly via fetch(): ${err.message}.\nYou can open the file in a new tab using the top-right button.`;
    }
  }

  // Utility escape
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

  // Setup Event Handlers
  function initEvents() {
    // Search Input
    if (el.searchInput) {
      el.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (el.searchClear) {
          el.searchClear.style.display = state.searchQuery ? 'flex' : 'none';
        }
        filterAndSort();
      });
    }

    // Search Clear
    if (el.searchClear) {
      el.searchClear.addEventListener('click', () => {
        state.searchQuery = '';
        el.searchInput.value = '';
        el.searchClear.style.display = 'none';
        el.searchInput.focus();
        filterAndSort();
      });
    }

    // Keyboard Shortcut (Cmd+K or /)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        el.searchInput?.focus();
      } else if (e.key === '/' && document.activeElement !== el.searchInput) {
        e.preventDefault();
        el.searchInput?.focus();
      } else if (e.key === 'Escape' && el.modal?.classList.contains('active')) {
        closeSimulator();
      }
    });

    // Sort Select
    if (el.sortSelect) {
      el.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        filterAndSort();
      });
    }

    // View Mode Switchers
    if (el.viewGridBtn) {
      el.viewGridBtn.addEventListener('click', () => {
        state.viewMode = 'grid';
        localStorage.setItem('vault_view', 'grid');
        el.viewGridBtn.classList.add('active');
        el.viewListBtn?.classList.remove('active');
        renderGrid();
      });
    }

    if (el.viewListBtn) {
      el.viewListBtn.addEventListener('click', () => {
        state.viewMode = 'list';
        localStorage.setItem('vault_view', 'list');
        el.viewListBtn.classList.add('active');
        el.viewGridBtn?.classList.remove('active');
        renderGrid();
      });
    }

    // Theme Toggle
    if (el.themeToggleBtn) {
      el.themeToggleBtn.addEventListener('click', () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    // Device Switcher Buttons
    el.deviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setDeviceMode(btn.dataset.device);
      });
    });

    // Orientation Rotate
    if (el.rotateBtn) {
      el.rotateBtn.addEventListener('click', () => {
        state.isLandscape = !state.isLandscape;
        el.rotateBtn.classList.toggle('active', state.isLandscape);
        setDeviceMode(state.deviceMode);
      });
    }

    // Modal Tabs
    if (el.tabPreviewBtn) {
      el.tabPreviewBtn.addEventListener('click', () => setModalTab('preview'));
    }
    if (el.tabCodeBtn) {
      el.tabCodeBtn.addEventListener('click', () => setModalTab('code'));
    }

    // Modal Close
    if (el.modalCloseBtn) {
      el.modalCloseBtn.addEventListener('click', closeSimulator);
    }

    // Copy Code Button
    if (el.copyCodeBtn) {
      el.copyCodeBtn.addEventListener('click', () => {
        if (el.codeDisplay) {
          navigator.clipboard.writeText(el.codeDisplay.textContent).then(() => {
            const oldText = el.copyCodeBtn.innerHTML;
            el.copyCodeBtn.innerHTML = '✓ Copied!';
            setTimeout(() => {
              el.copyCodeBtn.innerHTML = oldText;
            }, 2000);
          });
        }
      });
    }
  }

  // Initialize App
  function init() {
    applyTheme(state.theme);
    renderCategoryTabs();
    renderTagChips();
    initEvents();
    filterAndSort();

    if (state.viewMode === 'list') {
      el.viewListBtn?.classList.add('active');
      el.viewGridBtn?.classList.remove('active');
    } else {
      el.viewGridBtn?.classList.add('active');
      el.viewListBtn?.classList.remove('active');
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
