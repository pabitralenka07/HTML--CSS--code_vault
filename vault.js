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
    "id": "item-138",
    "path": "html-css-cheat-sheet-master/fixed-position-example.html",
    "title": "CSS Fixed Positioning & Persistent Overlay Layout",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Practical layout demonstrating viewport-relative fixed positioning, sticky banners, and z-index stacking context.",
    "tags": [
      "CSS Positioning",
      "Fixed Layout",
      "Viewport",
      "Cheatsheet"
    ],
    "icon": "book-open",
    "size_bytes": 2242,
    "featured": true
  },
  {
    "id": "item-137",
    "path": "html-css-cheat-sheet-master/animation.html",
    "title": "CSS Keyframe Animations & Cubic Bezier Transitions Guide",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Interactive reference guide demonstrating keyframe animations, transition timing functions, loaders, and micro-interactions.",
    "tags": [
      "CSS Animation",
      "Keyframes",
      "Transitions",
      "Cheatsheet"
    ],
    "icon": "book-open",
    "size_bytes": 48445,
    "featured": true
  },
  {
    "id": "item-139",
    "path": "html-css-cheat-sheet-master/html-css-cheat-sheet.html",
    "title": "HTML5 & CSS3 Master Developer Reference Cheatsheet",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Comprehensive quick-reference cheatsheet covering semantic HTML5 tags, CSS3 selectors, box model, and layout utilities.",
    "tags": [
      "Cheatsheet",
      "HTML5",
      "CSS3",
      "Reference"
    ],
    "icon": "book-open",
    "size_bytes": 257854,
    "featured": true
  },
  {
    "id": "item-140",
    "path": "html-css-cheat-sheet-master/tools.html",
    "title": "Modern Frontend Developer Tooling & Workflow Guide",
    "category": "Cheatsheets & References",
    "main_group": "Cheatsheets",
    "folder": "html-css-cheat-sheet-master",
    "description": "Curated guide to essential developer tools, browser devtools, linters, and productivity extensions for web development.",
    "tags": [
      "Tooling",
      "Workflow",
      "Developer Guide",
      "Cheatsheet"
    ],
    "icon": "book-open",
    "size_bytes": 4942,
    "featured": true
  },
  {
    "id": "item-67",
    "path": "FRONTEND TASKS/Clg_timetable.html",
    "title": "CSE Department Section B Academic Lecture Schedule Matrix",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Comprehensive weekly college class schedule matrix with lab slots, room allocations, subject codes, and faculty assignments.",
    "tags": [
      "Data Table",
      "Timetable",
      "Academic",
      "Schedule"
    ],
    "icon": "layout",
    "size_bytes": 3985,
    "featured": true
  },
  {
    "id": "item-74",
    "path": "FRONTEND TASKS/new_landpage.html",
    "title": "Flow AI \u2014 Voice-to-Text Modern Startup Landing Page",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "High-converting digital product landing page featuring animated hero typography, value props, feature grids, and CTA banners.",
    "tags": [
      "Landing Page",
      "SaaS",
      "Modern UI",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 10447,
    "featured": true
  },
  {
    "id": "item-68",
    "path": "FRONTEND TASKS/Gatetpass.html",
    "title": "Student Campus Security Out-Pass & Gate Pass Request System",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Official institutional security out-pass authorization form with student verification fields, hostel warden approval, and timestamps.",
    "tags": [
      "Forms",
      "Institutional",
      "Workflow",
      "Print-Ready"
    ],
    "icon": "layout",
    "size_bytes": 2891,
    "featured": true
  },
  {
    "id": "item-72",
    "path": "FRONTEND TASKS/id_card.html",
    "title": "Student Identity Card & Photo Badge Generator",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Customizable student identity badge generator with dynamic real-time field inputs, photo upload, barcode, and print layout.",
    "tags": [
      "Interactive",
      "Generator",
      "JavaScript",
      "Utility"
    ],
    "icon": "layout",
    "size_bytes": 11515,
    "featured": true
  },
  {
    "id": "item-91",
    "path": "HTML Practice/Car_Game.html",
    "title": "Drive Mad \u2014 3D Physics Racing Arcade Game",
    "category": "Games & Mini-Apps",
    "main_group": "Games & Mini-Apps",
    "folder": "HTML Practice",
    "description": "Full-screen playable 3D arcade driving game with obstacle tracks, suspension physics, score tracking, and keyboard controls.",
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
    "title": "Interactive Neumorphic Arithmetic Calculator",
    "category": "Games & Mini-Apps",
    "main_group": "Games & Mini-Apps",
    "folder": "FRONTEND TASKS",
    "description": "Responsive web calculator featuring arithmetic operators, decimal precision, clear display, and tactile button feedback.",
    "tags": [
      "Interactive",
      "JavaScript",
      "Utility",
      "Responsive"
    ],
    "icon": "gamepad",
    "size_bytes": 2997,
    "featured": true
  },
  {
    "id": "item-131",
    "path": "HTML Practice/tic_tac_toe_mvp.html",
    "title": "Tic Tac Toe \u2014 2-Player Interactive Multiplayer Game",
    "category": "Games & Mini-Apps",
    "main_group": "Games & Mini-Apps",
    "folder": "HTML Practice",
    "description": "Classic 2-player Tic-Tac-Toe game with winning combination detection, score counters, turn tracking, and reset controls.",
    "tags": [
      "Playable",
      "Game",
      "JavaScript",
      "Turn-Based"
    ],
    "icon": "gamepad",
    "size_bytes": 8892,
    "featured": true
  },
  {
    "id": "item-28",
    "path": "CSS/css-components-main/logins/login-1/index.html",
    "title": "Clean Modern Login Form with Floating Labels",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Minimalist login card featuring CSS floating label animations, password reveal trigger, and social OAuth options.",
    "tags": [
      "Logins",
      "Floating Labels",
      "Forms",
      "Auth"
    ],
    "icon": "palette",
    "size_bytes": 943,
    "featured": true
  },
  {
    "id": "item-4",
    "path": "CSS/css-components-main/cards/card-10/index.html",
    "title": "E-Commerce Checkout & Order Summary Card",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Checkout order review card listing items, subtotal, shipping fees, tax calculation, and payment authorization button.",
    "tags": [
      "Cards",
      "Checkout",
      "Order Summary",
      "E-Commerce"
    ],
    "icon": "palette",
    "size_bytes": 2507,
    "featured": true
  },
  {
    "id": "item-3",
    "path": "CSS/css-components-main/cards/card-1/index.html",
    "title": "Executive Contact & Profile Card (Kaye Morris)",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Personal profile card featuring avatar image, job title, verified badge, email trigger, and social profile links.",
    "tags": [
      "Cards",
      "Profile",
      "Avatar",
      "Social"
    ],
    "icon": "palette",
    "size_bytes": 918,
    "featured": true
  },
  {
    "id": "item-30",
    "path": "CSS/css-components-main/logins/login-12/index.html",
    "title": "Fintech Secure Payment Gateway Login",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Banking and payments authentication screen featuring security trust badges, encryption certificates, and dual-auth safeguards.",
    "tags": [
      "Logins",
      "Fintech",
      "Payment Gateway",
      "Security"
    ],
    "icon": "palette",
    "size_bytes": 1940,
    "featured": true
  },
  {
    "id": "item-32",
    "path": "CSS/css-components-main/logins/login-16/index.html",
    "title": "Floating Keyframe Animated Auth Card",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Dynamic sign-in container with gentle floating hover animation, ambient shadow pulse, and animated gradient button.",
    "tags": [
      "Logins",
      "CSS Animation",
      "Floating Card",
      "Micro-Interactions"
    ],
    "icon": "palette",
    "size_bytes": 4186,
    "featured": true
  },
  {
    "id": "item-29",
    "path": "CSS/css-components-main/logins/login-10/index.html",
    "title": "Minimalist Clean Border Email Login",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Lightweight, distraction-free sign-in form with crisp single-pixel borders, subtle focus glow, and inline error states.",
    "tags": [
      "Logins",
      "Minimalist",
      "Clean Borders",
      "Forms"
    ],
    "icon": "palette",
    "size_bytes": 1907,
    "featured": true
  },
  {
    "id": "item-31",
    "path": "CSS/css-components-main/logins/login-15/index.html",
    "title": "Moonpay Web3 & Crypto Wallet Login Portal",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Cryptocurrency and decentralized app login portal with wallet connect button, seed phrase protection, and token balances.",
    "tags": [
      "Logins",
      "Web3",
      "Crypto Wallet",
      "Moonpay"
    ],
    "icon": "palette",
    "size_bytes": 1966,
    "featured": true
  },
  {
    "id": "item-44",
    "path": "CSS/css-components-main/navbars/navbar-1/index.html",
    "title": "Responsive Sticky Brand Header with Action CTA",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean sticky navigation bar with brand monogram, navigation links, user menu, and primary sign-up call-to-action button.",
    "tags": [
      "Navbars",
      "Sticky Nav",
      "Header",
      "Responsive"
    ],
    "icon": "palette",
    "size_bytes": 1078,
    "featured": true
  },
  {
    "id": "item-12",
    "path": "CSS/css-components-main/dashboards/dashboard-1/index.html",
    "title": "SaaS Revenue, Refunds, & Monthly Profit Dashboard",
    "category": "UI: Dashboards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Executive analytics dashboard widget displaying monthly revenue KPI cards, sales volume, refunds, and currency formatting.",
    "tags": [
      "Dashboard",
      "Analytics",
      "KPI Cards",
      "Finance"
    ],
    "icon": "palette",
    "size_bytes": 2081,
    "featured": true
  },
  {
    "id": "item-136",
    "path": "Prime_practice/prime_Table.html",
    "title": "Prime Academic Records & Grades Table",
    "category": "Forms & Tables Lab",
    "main_group": "Forms & Tables",
    "folder": "Prime_practice",
    "description": "Structured data table detailing academic student records, roll numbers, subject marks, and grade classifications.",
    "tags": [
      "Data Table",
      "Academic Records",
      "Grades",
      "Table"
    ],
    "icon": "table",
    "size_bytes": 791,
    "featured": false
  },
  {
    "id": "item-135",
    "path": "Prime_practice/form_name.html",
    "title": "Prime Multi-Field Name & Credential Form",
    "category": "Forms & Tables Lab",
    "main_group": "Forms & Tables",
    "folder": "Prime_practice",
    "description": "Targeted input exercise focusing on first name, middle name, last name, and credential validation fields.",
    "tags": [
      "Forms",
      "Name Inputs",
      "Validation",
      "Inputs"
    ],
    "icon": "table",
    "size_bytes": 362,
    "featured": false
  },
  {
    "id": "item-134",
    "path": "Prime_practice/form.html",
    "title": "Prime Student Registration & Enrollment Form",
    "category": "Forms & Tables Lab",
    "main_group": "Forms & Tables",
    "folder": "Prime_practice",
    "description": "Focused practice registration form with student personal information, course enrollment fields, and submit controls.",
    "tags": [
      "Forms",
      "Registration",
      "Enrollment",
      "Inputs"
    ],
    "icon": "table",
    "size_bytes": 969,
    "featured": false
  },
  {
    "id": "item-76",
    "path": "FRONTEND TASKS/newtimetab.html",
    "title": "B.Tech 1st Year Semester Class Schedule Routine 2.0",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Modernized university class schedule grid with enhanced column headers, period timings, and department subject allocations.",
    "tags": [
      "Data Table",
      "Timetable",
      "Responsive",
      "Academic"
    ],
    "icon": "layout",
    "size_bytes": 2661,
    "featured": false
  },
  {
    "id": "item-77",
    "path": "FRONTEND TASKS/sec-c.html",
    "title": "B.Tech Computer Science Section C Daily Class Timetable",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Detailed classroom timetable table for Section C students mapping lecture periods, lab experiments, and tutorial sessions.",
    "tags": [
      "Data Table",
      "Timetable",
      "Academic",
      "Schedule"
    ],
    "icon": "layout",
    "size_bytes": 2532,
    "featured": false
  },
  {
    "id": "item-82",
    "path": "FRONTEND TASKS/timetable-c.html",
    "title": "B.Tech First Year Section C Weekly Schedule Matrix",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Complete semester weekly timetable matrix highlighting core engineering subjects, laboratory batches, and elective periods.",
    "tags": [
      "Data Table",
      "Timetable",
      "Engineering",
      "Academic"
    ],
    "icon": "layout",
    "size_bytes": 3240,
    "featured": false
  },
  {
    "id": "item-73",
    "path": "FRONTEND TASKS/movietask.html",
    "title": "Classic Cinema Filmography & Box Office Showcase Table",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Structured movie catalog table displaying classic Bollywood titles, release years, lead actors, and poster artwork.",
    "tags": [
      "Data Table",
      "Media",
      "Catalog",
      "Grid"
    ],
    "icon": "layout",
    "size_bytes": 1133,
    "featured": false
  },
  {
    "id": "item-78",
    "path": "FRONTEND TASKS/table2.html",
    "title": "College Routine & Faculty Period Distribution Matrix",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Faculty and course schedule matrix featuring merged cell headers, lecture halls, and practical session intervals.",
    "tags": [
      "Data Table",
      "Timetable",
      "Merged Cells",
      "Schedule"
    ],
    "icon": "layout",
    "size_bytes": 3237,
    "featured": false
  },
  {
    "id": "item-80",
    "path": "FRONTEND TASKS/task 2.html",
    "title": "Comprehensive HTML Semantic Lists & Hierarchy Showcase",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Educational demonstration of multi-level nested lists, definition lists, custom list markers, and Roman numeral ordering.",
    "tags": [
      "Semantic HTML",
      "Lists",
      "Structure",
      "Cheatsheet"
    ],
    "icon": "layout",
    "size_bytes": 880,
    "featured": false
  },
  {
    "id": "item-66",
    "path": "FRONTEND TASKS/30task3.html",
    "title": "Computer Hardware Architecture & Subsystem Hierarchy Guide",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Structured nested ordered list guide detailing computer architecture, CPU registers, buses, and storage hierarchies.",
    "tags": [
      "Semantic HTML",
      "Nested Lists",
      "Education",
      "Structure"
    ],
    "icon": "layout",
    "size_bytes": 775,
    "featured": false
  },
  {
    "id": "item-84",
    "path": "FRONTEND TASKS/web2.html",
    "title": "Computer System Hardware & OS Hierarchy Guide",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Technical guide outlining operating system layers, hardware interfaces, memory hierarchies, and kernel abstractions.",
    "tags": [
      "Education",
      "Computer Science",
      "Hierarchy",
      "Structure"
    ],
    "icon": "layout",
    "size_bytes": 1183,
    "featured": false
  },
  {
    "id": "item-81",
    "path": "FRONTEND TASKS/task 4.html",
    "title": "HTML5 Multimedia Master Hub (Audio, Video, Formatting)",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Multimedia rich showcase demonstrating native HTML5 audio controls, video embeds, table layouts, and text formatting tags.",
    "tags": [
      "Multimedia",
      "HTML5",
      "Audio/Video",
      "Showcase"
    ],
    "icon": "layout",
    "size_bytes": 2528,
    "featured": false
  },
  {
    "id": "item-85",
    "path": "FRONTEND TASKS/web3.html",
    "title": "Multi-Field User Information & Contact Portal",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Comprehensive personal registration interface with contact details, address fields, and account credential setup.",
    "tags": [
      "Forms",
      "User Profile",
      "Inputs",
      "Responsive"
    ],
    "icon": "layout",
    "size_bytes": 3473,
    "featured": false
  },
  {
    "id": "item-75",
    "path": "FRONTEND TASKS/newhard.html",
    "title": "Multi-Period Weekly College Schedule Routine",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Color-coded weekly academic routine matrix organizing theory lectures, lab sessions, and lunch breaks across all five weekdays.",
    "tags": [
      "Data Table",
      "Timetable",
      "Grid",
      "Academic"
    ],
    "icon": "layout",
    "size_bytes": 3659,
    "featured": false
  },
  {
    "id": "item-70",
    "path": "FRONTEND TASKS/Leave_form.html",
    "title": "Official Student Medical & Academic Leave Application Form",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Formal multi-field leave request document including reason selection, date range pickers, parental contact, and signature blocks.",
    "tags": [
      "Forms",
      "Application",
      "Institutional",
      "Workflow"
    ],
    "icon": "layout",
    "size_bytes": 6244,
    "featured": false
  },
  {
    "id": "item-79",
    "path": "FRONTEND TASKS/tablet3.html",
    "title": "Student Academic Marks & Timetable Ledger",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Structured ledger table combining student performance metrics, course grading criteria, and exam time intervals.",
    "tags": [
      "Data Table",
      "Ledger",
      "Grades",
      "Academic"
    ],
    "icon": "layout",
    "size_bytes": 3665,
    "featured": false
  },
  {
    "id": "item-69",
    "path": "FRONTEND TASKS/Lab_paper.html",
    "title": "University Semester Practical Examination Lab Record Sheet",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Official semester examination laboratory paper layout with course codes, question distribution, evaluation rubrics, and marks tally.",
    "tags": [
      "Academic",
      "Exam Paper",
      "Forms",
      "Print-Ready"
    ],
    "icon": "layout",
    "size_bytes": 2148,
    "featured": false
  },
  {
    "id": "item-83",
    "path": "FRONTEND TASKS/web1.html",
    "title": "User Personal Information & Registration Portal",
    "category": "Frontend Tasks & Real-World",
    "main_group": "Frontend Tasks",
    "folder": "FRONTEND TASKS",
    "description": "Clean structured user registration form with fieldsets, personal data inputs, date of birth picker, and submit actions.",
    "tags": [
      "Forms",
      "Registration",
      "Fieldset",
      "Validation"
    ],
    "icon": "layout",
    "size_bytes": 2920,
    "featured": false
  },
  {
    "id": "item-132",
    "path": "HTML Practice/timetable-c.html",
    "title": "Academic Routine & Weekly Period Allocator",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Weekly university timetable detailing lecture periods, faculty names, classroom numbers, and practical lab assignments.",
    "tags": [
      "Data Table",
      "Timetable",
      "Academic",
      "Schedule"
    ],
    "icon": "file-text",
    "size_bytes": 3240,
    "featured": false
  },
  {
    "id": "item-103",
    "path": "HTML Practice/hardtask.html",
    "title": "Advanced Multi-Column Semantic Layout Structure",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Challenging HTML layout challenge assembling headers, side navigation bars, main content articles, and supplementary widgets.",
    "tags": [
      "Layout Challenge",
      "Multi-Column",
      "Semantics",
      "Grid"
    ],
    "icon": "file-text",
    "size_bytes": 3280,
    "featured": false
  },
  {
    "id": "item-109",
    "path": "HTML Practice/marqee.html",
    "title": "Animated Breaking News Ticker & Scrolling Marquee",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Dynamic scrolling marquee ticker showcasing continuous horizontal animation, speed controls, and broadcast news styling.",
    "tags": [
      "Marquee",
      "Animation",
      "News Ticker",
      "Motion"
    ],
    "icon": "file-text",
    "size_bytes": 281,
    "featured": false
  },
  {
    "id": "item-120",
    "path": "HTML Practice/sec-c.html",
    "title": "B.Tech Section C Daily Class Schedule Table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Academic class routine table with period columns, day rows, and highlighted lab experiment hours.",
    "tags": [
      "Data Table",
      "Timetable",
      "Academic",
      "Schedule"
    ],
    "icon": "file-text",
    "size_bytes": 2532,
    "featured": false
  },
  {
    "id": "item-96",
    "path": "HTML Practice/center.html",
    "title": "CSS Alignment, Flexbox & Block Centering Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Practical experiments comparing traditional margin auto, flexbox justify/align, and absolute transform centering methods.",
    "tags": [
      "Centering",
      "Flexbox",
      "CSS Layout",
      "Lab"
    ],
    "icon": "file-text",
    "size_bytes": 253,
    "featured": false
  },
  {
    "id": "item-94",
    "path": "HTML Practice/bgtext.html",
    "title": "CSS Background-Clip & Gradient Text Effect Demo",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Modern CSS technique masking vivid gradient backgrounds into typography glyphs using background-clip: text.",
    "tags": [
      "CSS Tricks",
      "Gradient Text",
      "Typography",
      "Visual FX"
    ],
    "icon": "file-text",
    "size_bytes": 402,
    "featured": false
  },
  {
    "id": "item-86",
    "path": "HTML Practice/12task.html",
    "title": "CSS Box Model & Element Width Calculator Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Interactive layout demonstrating how content width, padding, borders, and margins combine to form total element dimensions.",
    "tags": [
      "CSS Box Model",
      "Dimensions",
      "Calculator",
      "Lab"
    ],
    "icon": "file-text",
    "size_bytes": 518,
    "featured": false
  },
  {
    "id": "item-87",
    "path": "HTML Practice/12task1.html",
    "title": "CSS Box Model Margin, Padding & Border Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Visual demonstration color-coding margin, border, padding, and content boxes to illustrate browser layout calculations.",
    "tags": [
      "CSS Box Model",
      "Padding/Margin",
      "Borders",
      "Lab"
    ],
    "icon": "file-text",
    "size_bytes": 926,
    "featured": false
  },
  {
    "id": "item-97",
    "path": "HTML Practice/class.html",
    "title": "CSS Class Selectors & Component Reusability Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Tutorial page illustrating CSS class naming conventions, selector specificity, and modular styling reuse.",
    "tags": [
      "CSS Classes",
      "Selectors",
      "Specificity",
      "Fundamentals"
    ],
    "icon": "file-text",
    "size_bytes": 3780,
    "featured": false
  },
  {
    "id": "item-90",
    "path": "HTML Practice/30task2.html",
    "title": "CSS Flexbox Table & Box Shadow Matrix",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Data table enhanced with CSS box shadows, rounded cell borders, and flexbox wrapper for modern presentation.",
    "tags": [
      "Data Table",
      "Box Shadow",
      "Styling",
      "CSS"
    ],
    "icon": "file-text",
    "size_bytes": 1328,
    "featured": false
  },
  {
    "id": "item-99",
    "path": "HTML Practice/day.html",
    "title": "Calendar Day & Schedule Card Interface",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Minimalist card layout displaying daily schedule agenda, date badge, and reminder notes.",
    "tags": [
      "Calendar",
      "Schedule",
      "Cards",
      "UI Design"
    ],
    "icon": "file-text",
    "size_bytes": 1396,
    "featured": false
  },
  {
    "id": "item-117",
    "path": "HTML Practice/pabi.html",
    "title": "Clean Minimalist User Login Card",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Compact authentication box with username and password input styling, green submit button, and centered screen alignment.",
    "tags": [
      "Forms",
      "Login",
      "Minimalist",
      "Auth"
    ],
    "icon": "file-text",
    "size_bytes": 497,
    "featured": false
  },
  {
    "id": "item-113",
    "path": "HTML Practice/newhard.html",
    "title": "Complex Flexbox Grid & Period Matrix Routine",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Advanced timetable layout organizing lecture periods, lab hours, and subject schedules using HTML table semantics.",
    "tags": [
      "Data Table",
      "Timetable",
      "Academic",
      "Schedule"
    ],
    "icon": "file-text",
    "size_bytes": 3659,
    "featured": false
  },
  {
    "id": "item-102",
    "path": "HTML Practice/form3.html",
    "title": "Comprehensive Student Survey & Questionnaire Form",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Extensive academic questionnaire form with checkboxes, multi-option selects, rating scales, and open-ended feedback areas.",
    "tags": [
      "Forms",
      "Survey",
      "Questionnaire",
      "Inputs"
    ],
    "icon": "file-text",
    "size_bytes": 3723,
    "featured": false
  },
  {
    "id": "item-107",
    "path": "HTML Practice/lenka.html",
    "title": "Custom Browser New Tab Landing Page",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean browser new tab page layout with background wallpaper container, search prompt, and quick access bookmarks.",
    "tags": [
      "New Tab",
      "Landing Page",
      "Dashboard",
      "Utility"
    ],
    "icon": "file-text",
    "size_bytes": 868,
    "featured": false
  },
  {
    "id": "item-118",
    "path": "HTML Practice/pabitra.html",
    "title": "Developer Authentication & Login Portal",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean sky-blue themed user login form with centered container, rounded input borders, and hover button transitions.",
    "tags": [
      "Forms",
      "Login Portal",
      "Themed UI",
      "Auth"
    ],
    "icon": "file-text",
    "size_bytes": 1833,
    "featured": false
  },
  {
    "id": "item-116",
    "path": "HTML Practice/optfrm.html",
    "title": "Dropdown Selection Menu & `<optgroup>` Form Controls",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Form control demonstration organizing options into grouped `<optgroup>` categories for university branch selection.",
    "tags": [
      "Forms",
      "Select Dropdown",
      "Optgroup",
      "Controls"
    ],
    "icon": "file-text",
    "size_bytes": 1934,
    "featured": false
  },
  {
    "id": "item-130",
    "path": "HTML Practice/textarea.html",
    "title": "Expandable Multi-Line Textarea & Message Input",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Form control demonstration showcasing `<textarea>` rows, columns, placeholder texts, and message submission layout.",
    "tags": [
      "Forms",
      "Textarea",
      "Input Controls",
      "Message Box"
    ],
    "icon": "file-text",
    "size_bytes": 855,
    "featured": false
  },
  {
    "id": "item-100",
    "path": "HTML Practice/form.html",
    "title": "Google Account Registration & Feedback Form",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Google-inspired registration form layout with user credential fields, validation attributes, and account setup guidelines.",
    "tags": [
      "Forms",
      "Registration",
      "Validation",
      "Inputs"
    ],
    "icon": "file-text",
    "size_bytes": 2648,
    "featured": false
  },
  {
    "id": "item-115",
    "path": "HTML Practice/newtitl.html",
    "title": "Gradient Header Titles with Glowing Accent Underline",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Decorative title design utilizing CSS linear gradient text, text-shadow glows, and stylized bottom border bars.",
    "tags": [
      "Typography",
      "Gradients",
      "Headings",
      "Visual FX"
    ],
    "icon": "file-text",
    "size_bytes": 328,
    "featured": false
  },
  {
    "id": "item-123",
    "path": "HTML Practice/table.html",
    "title": "HTML Data Table with Borders & Cell Padding",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Fundamental data table exercise illustrating `<th>`, `<tr>`, `<td>`, border spacing, and cell padding attributes.",
    "tags": [
      "Data Table",
      "Table Basics",
      "HTML Fundamentals",
      "Data"
    ],
    "icon": "file-text",
    "size_bytes": 1024,
    "featured": false
  },
  {
    "id": "item-92",
    "path": "HTML Practice/all input tag.html",
    "title": "HTML5 Form Input Controls Master Laboratory",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Complete showcase of every standard HTML5 input element: color picker, date/time, range slider, file, tel, and search.",
    "tags": [
      "HTML5 Inputs",
      "Form Controls",
      "Lab",
      "Cheatsheet"
    ],
    "icon": "file-text",
    "size_bytes": 534,
    "featured": false
  },
  {
    "id": "item-128",
    "path": "HTML Practice/task 4.html",
    "title": "HTML5 Multimedia & Formatting Demonstration",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Comprehensive page incorporating embedded audio, video player, image gallery, data tables, and rich text formatting.",
    "tags": [
      "Multimedia",
      "HTML5 Tags",
      "Rich Media",
      "Showcase"
    ],
    "icon": "file-text",
    "size_bytes": 2528,
    "featured": false
  },
  {
    "id": "item-98",
    "path": "HTML Practice/data.html",
    "title": "HTML5 Semantic `<data>` & `<meter>` Attributes Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Practical demonstration utilizing machine-readable HTML5 data attributes, custom data-* properties, and gauge meters.",
    "tags": [
      "HTML5",
      "Data Attributes",
      "Semantics",
      "Accessibility"
    ],
    "icon": "file-text",
    "size_bytes": 905,
    "featured": false
  },
  {
    "id": "item-111",
    "path": "HTML Practice/new_heart.html",
    "title": "Handy AI \u2014 MediaPipe Computer Vision & Hand Gesture Experience",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Cutting-edge computer vision app using MediaPipe hand tracking to create reactive particle trails and gesture interactions.",
    "tags": [
      "Playable",
      "AI / Vision",
      "JavaScript",
      "Canvas"
    ],
    "icon": "file-text",
    "size_bytes": 20130,
    "featured": false
  },
  {
    "id": "item-106",
    "path": "HTML Practice/ind.html",
    "title": "Hero Section Banner with Call-To-Action Highlights",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Web hero banner layout with prominent headline typography, subtitle description, and action buttons.",
    "tags": [
      "Hero Section",
      "Banner",
      "Layout",
      "CTA"
    ],
    "icon": "file-text",
    "size_bytes": 357,
    "featured": false
  },
  {
    "id": "item-93",
    "path": "HTML Practice/anchor.html",
    "title": "Hyperlink Navigation & Internal Page Anchors Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Demonstration of HTML hyperlink attributes, external target protocols, tel/mailto schemes, and internal section jumps.",
    "tags": [
      "Links",
      "Anchors",
      "Navigation",
      "HTML Fundamentals"
    ],
    "icon": "file-text",
    "size_bytes": 632,
    "featured": false
  },
  {
    "id": "item-121",
    "path": "HTML Practice/sp.html",
    "title": "Inline Text Span Highlights & Badge Accents Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Demonstration using `<span>` tags to apply localized background highlights, pill badges, and contrasting font weights.",
    "tags": [
      "Typography",
      "Span Highlights",
      "Badges",
      "HTML Basics"
    ],
    "icon": "file-text",
    "size_bytes": 2527,
    "featured": false
  },
  {
    "id": "item-110",
    "path": "HTML Practice/new.html",
    "title": "Modern Web Typography & Document Styling Template",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Clean starting template incorporating modern CSS resets, typographic hierarchy, responsive body margins, and heading styles.",
    "tags": [
      "Typography",
      "CSS Reset",
      "Boilerplate",
      "HTML"
    ],
    "icon": "file-text",
    "size_bytes": 1352,
    "featured": false
  },
  {
    "id": "item-127",
    "path": "HTML Practice/task 2.html",
    "title": "Nested Navigation Menu & Breadcrumb Trail",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Navigation interface showcasing nested list items styled as an interactive multi-level hierarchy.",
    "tags": [
      "Navigation",
      "Lists",
      "Breadcrumbs",
      "Structure"
    ],
    "icon": "file-text",
    "size_bytes": 880,
    "featured": false
  },
  {
    "id": "item-108",
    "path": "HTML Practice/list.html",
    "title": "Nested Ordered, Unordered, & Definition Lists Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Comprehensive exploration of HTML list types, ordered number styling, disc/circle bullets, and `<dl>` terms and descriptions.",
    "tags": [
      "Lists",
      "Definition List",
      "Semantics",
      "HTML Basics"
    ],
    "icon": "file-text",
    "size_bytes": 816,
    "featured": false
  },
  {
    "id": "item-129",
    "path": "HTML Practice/task.html",
    "title": "Personal Developer Profile & Skills Portfolio",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Introductory developer profile web page featuring personal photo placeholder, educational qualifications, and project links.",
    "tags": [
      "Portfolio",
      "Developer Profile",
      "Personal",
      "Resume"
    ],
    "icon": "file-text",
    "size_bytes": 1224,
    "featured": false
  },
  {
    "id": "item-124",
    "path": "HTML Practice/table2.0.html",
    "title": "Project Task History & Progress Data Table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Project management task ledger table recording task names, execution statuses, dates, and completion milestones.",
    "tags": [
      "Data Table",
      "Task History",
      "Project Mgmt",
      "Ledger"
    ],
    "icon": "file-text",
    "size_bytes": 2796,
    "featured": false
  },
  {
    "id": "item-101",
    "path": "HTML Practice/form2.html",
    "title": "Radio Button Gender Selection & Validation Form",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Targeted form exercise focusing on grouped radio button mechanics, label associations, and mutually exclusive selection.",
    "tags": [
      "Forms",
      "Radio Buttons",
      "Validation",
      "Inputs"
    ],
    "icon": "file-text",
    "size_bytes": 1416,
    "featured": false
  },
  {
    "id": "item-119",
    "path": "HTML Practice/page.html",
    "title": "Responsive Admin Login Dashboard Screen",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Full-height login dashboard screen incorporating clean CSS form styles, placeholder labels, and responsive layout.",
    "tags": [
      "Forms",
      "Login Dashboard",
      "Admin",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 879,
    "featured": false
  },
  {
    "id": "item-105",
    "path": "HTML Practice/image.html",
    "title": "Responsive Figure Elements & Image Captions Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Showcase of semantic `<figure>` and `<figcaption>` elements with responsive image scaling and aspect ratio maintenance.",
    "tags": [
      "Images",
      "Figure / Caption",
      "Media",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 23599,
    "featured": false
  },
  {
    "id": "item-88",
    "path": "HTML Practice/12task2.html",
    "title": "Responsive Mobile-Adaptive Data Table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Data table styled with responsive CSS to ensure clean horizontal scrolling and readable text on mobile screens.",
    "tags": [
      "Data Table",
      "Responsive",
      "Mobile-Friendly",
      "CSS"
    ],
    "icon": "file-text",
    "size_bytes": 1958,
    "featured": false
  },
  {
    "id": "item-133",
    "path": "HTML Practice/web.html",
    "title": "Responsive Personal Portfolio & Project Hub",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Multi-section developer portfolio featuring about me bio, project showcase links, skills grid, and contact details.",
    "tags": [
      "Portfolio",
      "Personal Hub",
      "Projects",
      "Responsive"
    ],
    "icon": "file-text",
    "size_bytes": 3046,
    "featured": false
  },
  {
    "id": "item-104",
    "path": "HTML Practice/icon.html",
    "title": "SVG Vector Icons & Icon Font Integration Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Laboratory demonstrating inline SVG graphics, scalable vector icons, color fills, and responsive sizing.",
    "tags": [
      "SVG Icons",
      "Vector",
      "Graphics",
      "UI Elements"
    ],
    "icon": "file-text",
    "size_bytes": 440,
    "featured": false
  },
  {
    "id": "item-126",
    "path": "HTML Practice/task 1.html",
    "title": "Semantic Web Page Architecture (Header, Article, Aside)",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Educational web page demonstrating semantic HTML5 structure with header, navigation bar, article content, and sidebar aside.",
    "tags": [
      "Semantic HTML",
      "Architecture",
      "HTML5",
      "Layout"
    ],
    "icon": "file-text",
    "size_bytes": 2527,
    "featured": false
  },
  {
    "id": "item-114",
    "path": "HTML Practice/newtimetab.html",
    "title": "Semester Class Timetable & Lab Slot Matrix",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Engineering college routine matrix organizing daily theory classes, lab batches, and lunch intervals across the week.",
    "tags": [
      "Data Table",
      "Timetable",
      "Engineering",
      "Academic"
    ],
    "icon": "file-text",
    "size_bytes": 2661,
    "featured": false
  },
  {
    "id": "item-95",
    "path": "HTML Practice/blockqt.html",
    "title": "Stylized Blockquotes & Pull Citations Showcase",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Typographical design demonstration styling HTML blockquote elements with decorative quotation marks and author citations.",
    "tags": [
      "Typography",
      "Blockquote",
      "Styling",
      "HTML Basics"
    ],
    "icon": "file-text",
    "size_bytes": 608,
    "featured": false
  },
  {
    "id": "item-122",
    "path": "HTML Practice/sunew.html",
    "title": "Tech Professional Bio & Profile Card ('Babu Tech')",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Personal developer introductory card with biographical summary, skills overview, and heading styling.",
    "tags": [
      "Profile",
      "Bio Card",
      "Personal",
      "Showcase"
    ],
    "icon": "file-text",
    "size_bytes": 498,
    "featured": false
  },
  {
    "id": "item-125",
    "path": "HTML Practice/table2.html",
    "title": "University Department Course Curriculum Table",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Curriculum outline table detailing semester subjects, credit hours, prerequisites, and syllabus distribution.",
    "tags": [
      "Data Table",
      "Curriculum",
      "Academic",
      "Courses"
    ],
    "icon": "file-text",
    "size_bytes": 3243,
    "featured": false
  },
  {
    "id": "item-89",
    "path": "HTML Practice/30task1.html",
    "title": "User Information & Registration Form 2.0",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Comprehensive personal registration interface with grouped form fields, validation attributes, and clean button styles.",
    "tags": [
      "Forms",
      "Registration",
      "Validation",
      "Inputs"
    ],
    "icon": "file-text",
    "size_bytes": 1782,
    "featured": false
  },
  {
    "id": "item-112",
    "path": "HTML Practice/newfont.html",
    "title": "Web Font Pairing & Heart Emoji Styling Lab",
    "category": "HTML Practice Labs",
    "main_group": "HTML Practice",
    "folder": "HTML Practice",
    "description": "Typography experiment pairing custom web fonts with inline Unicode heart emojis and decorative text styling.",
    "tags": [
      "Typography",
      "Web Fonts",
      "Emojis",
      "Text FX"
    ],
    "icon": "file-text",
    "size_bytes": 444,
    "featured": false
  },
  {
    "id": "item-17",
    "path": "CSS/css-components-main/footers/footer-1/index.html",
    "title": "Animated Vector Wave SVG Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Creative website footer featuring multi-layer SVG animated ocean waves that gently oscillate across the bottom.",
    "tags": [
      "Footers",
      "SVG Animation",
      "Waves",
      "Creative"
    ],
    "icon": "palette",
    "size_bytes": 3525,
    "featured": false
  },
  {
    "id": "item-23",
    "path": "CSS/css-components-main/footers/footer-5/index.html",
    "title": "Brand Identity & Product Links Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean brand footer featuring high-contrast logo typography, mission statement, compliance certifications, and legal links.",
    "tags": [
      "Footers",
      "Brand Identity",
      "Legal",
      "Clean UI"
    ],
    "icon": "palette",
    "size_bytes": 4548,
    "featured": false
  },
  {
    "id": "item-1",
    "path": "CSS/1st.html",
    "title": "CSS Core Styling & Selectors Foundation Lab",
    "category": "CSS Styling",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Foundational demonstration of CSS color palettes, font stacks, element selectors, and basic cascade rules.",
    "tags": [
      "CSS Basics",
      "Selectors",
      "Typography",
      "Colors"
    ],
    "icon": "palette",
    "size_bytes": 4096,
    "featured": false
  },
  {
    "id": "item-20",
    "path": "CSS/css-components-main/footers/footer-2/index.html",
    "title": "Call-to-Action Free Trial Conversion Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Pre-footer conversion banner urging visitors to start a free trial, flanked by company links and copyright notice.",
    "tags": [
      "Footers",
      "CTA Banner",
      "Conversion",
      "SaaS"
    ],
    "icon": "palette",
    "size_bytes": 2397,
    "featured": false
  },
  {
    "id": "item-15",
    "path": "CSS/css-components-main/dropdowns/dropdown-3/index copy.html",
    "title": "Categorized Command Palette Dropdown Menu",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Versatile command palette dropdown with grouped action sections, icon prefixes, and subtle shadow elevation.",
    "tags": [
      "Dropdown",
      "Command Menu",
      "Navigation",
      "Icons"
    ],
    "icon": "palette",
    "size_bytes": 2994,
    "featured": false
  },
  {
    "id": "item-47",
    "path": "CSS/css-components-main/navbars/navbar-4/index.html",
    "title": "Centered Navigation Links Header with Auth Buttons",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Symmetric navbar design with centered category links, left-aligned brand logo, and right-aligned sign-in options.",
    "tags": [
      "Navbars",
      "Centered Nav",
      "Auth Buttons",
      "Clean UI"
    ],
    "icon": "palette",
    "size_bytes": 894,
    "featured": false
  },
  {
    "id": "item-43",
    "path": "CSS/css-components-main/menus/menu-3/index.html",
    "title": "Circular Radial Floating Action Navigation Menu",
    "category": "UI: Menus",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Radial floating action button that blossoms into circular sub-navigation items with smooth rotation transitions.",
    "tags": [
      "Menu",
      "Radial Nav",
      "Floating Button",
      "Animation"
    ],
    "icon": "palette",
    "size_bytes": 1212,
    "featured": false
  },
  {
    "id": "item-53",
    "path": "CSS/css-components-main/sidebars/sidebar-2/index.html",
    "title": "Collapsible Icon-Only Dock Navigation Sidebar",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Space-saving vertical dock sidebar featuring tooltips on hover, active state pill markers, and system settings icon.",
    "tags": [
      "Sidebars",
      "Icon Dock",
      "Collapsible",
      "Compact"
    ],
    "icon": "palette",
    "size_bytes": 3757,
    "featured": false
  },
  {
    "id": "item-26",
    "path": "CSS/css-components-main/footers/footer-8/index.html",
    "title": "Company Overview, Careers & Legal Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Informational footer highlighting company history, open job listings badge, privacy policy, and cookie settings.",
    "tags": [
      "Footers",
      "Careers",
      "About Us",
      "Company"
    ],
    "icon": "palette",
    "size_bytes": 2645,
    "featured": false
  },
  {
    "id": "item-59",
    "path": "CSS/css-components-main/signups/signup-1/index.html",
    "title": "Comprehensive Multi-Field Registration Form",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Complete user onboarding form with full name, email, password strength meter, and terms of service acceptance checkbox.",
    "tags": [
      "Signups",
      "Registration",
      "Strength Meter",
      "Forms"
    ],
    "icon": "palette",
    "size_bytes": 2111,
    "featured": false
  },
  {
    "id": "item-24",
    "path": "CSS/css-components-main/footers/footer-6/index.html",
    "title": "Corporate Enterprise Sitemap Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Comprehensive corporate sitemap footer organizing global offices, investor relations, career openings, and language selector.",
    "tags": [
      "Footers",
      "Corporate",
      "Sitemap",
      "Global"
    ],
    "icon": "palette",
    "size_bytes": 2077,
    "featured": false
  },
  {
    "id": "item-10",
    "path": "CSS/css-components-main/cards/card-9/index.html",
    "title": "Creative Artist Portfolio Showcase Card (Alexe Milne)",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Designer portfolio showcase card with artwork preview, creator bio, follower counter, and hire button.",
    "tags": [
      "Cards",
      "Portfolio",
      "Creative",
      "Artist"
    ],
    "icon": "palette",
    "size_bytes": 1841,
    "featured": false
  },
  {
    "id": "item-27",
    "path": "CSS/css-components-main/footers/footer-9/index.html",
    "title": "Customer Support & Help Center Contact Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Support-focused footer providing 24/7 help center links, live chat trigger, email support form, and community discord link.",
    "tags": [
      "Footers",
      "Support",
      "Help Center",
      "Contact"
    ],
    "icon": "palette",
    "size_bytes": 2194,
    "featured": false
  },
  {
    "id": "item-25",
    "path": "CSS/css-components-main/footers/footer-7/index.html",
    "title": "Dark Neon Glow Accent Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Futuristic dark theme footer illuminated with glowing neon cyan border lines, dark glassmorphism, and icon links.",
    "tags": [
      "Footers",
      "Neon Glow",
      "Dark Theme",
      "Visual FX"
    ],
    "icon": "palette",
    "size_bytes": 3522,
    "featured": false
  },
  {
    "id": "item-34",
    "path": "CSS/css-components-main/logins/login-3/index.html",
    "title": "Dark Obsidian Authentication Portal",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Sleek dark theme sign-in interface designed with dark slate backgrounds, neon focus rings, and remember me checkbox.",
    "tags": [
      "Logins",
      "Dark Mode",
      "Obsidian",
      "Sleek"
    ],
    "icon": "palette",
    "size_bytes": 1049,
    "featured": false
  },
  {
    "id": "item-56",
    "path": "CSS/css-components-main/sidebars/sidebar-5/index.html",
    "title": "Datalens Business Intelligence Analytics Sidebar",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Data analytics platform navigation sidebar displaying query history, dashboard bookmarks, data sources, and cloud status.",
    "tags": [
      "Sidebars",
      "Analytics",
      "BI Platform",
      "Data"
    ],
    "icon": "palette",
    "size_bytes": 2418,
    "featured": false
  },
  {
    "id": "item-49",
    "path": "CSS/css-components-main/navbars/navbar-6/index.html",
    "title": "E-Commerce Navigation Header with Cart Counter",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Retail store header bar with shopping bag item counter, currency selector, wishlist shortcut, and mega-menu links.",
    "tags": [
      "Navbars",
      "E-Commerce",
      "Cart Counter",
      "Retail"
    ],
    "icon": "palette",
    "size_bytes": 1326,
    "featured": false
  },
  {
    "id": "item-19",
    "path": "CSS/css-components-main/footers/footer-11/index.html",
    "title": "Email Newsletter & Community Growth Footer ('Join 2000+ users')",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Community-focused footer featuring an email newsletter subscription input, user count social proof, and privacy guarantee.",
    "tags": [
      "Footers",
      "Newsletter",
      "Email Subscribe",
      "Social Proof"
    ],
    "icon": "palette",
    "size_bytes": 3347,
    "featured": false
  },
  {
    "id": "item-38",
    "path": "CSS/css-components-main/logins/login-7/index.html",
    "title": "Encrypted Private File Sharing Auth Portal",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "High-privacy service authentication interface with client-side encryption indicator, passkey support, and session timer.",
    "tags": [
      "Logins",
      "Encryption",
      "Privacy",
      "Security"
    ],
    "icon": "palette",
    "size_bytes": 1938,
    "featured": false
  },
  {
    "id": "item-2",
    "path": "CSS/css-components-main/accordions/accordion-1/index.html",
    "title": "Expandable Team Members Profile Accordion",
    "category": "UI: Accordions",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Smooth interactive accordion menu showcasing team member bios, social profile links, and animated panel transitions.",
    "tags": [
      "Accordion",
      "Team",
      "Transitions",
      "Interactive"
    ],
    "icon": "palette",
    "size_bytes": 1337,
    "featured": false
  },
  {
    "id": "item-42",
    "path": "CSS/css-components-main/menus/menu-2/index.html",
    "title": "Floating Pill Bottom Action Bar Navigation Menu",
    "category": "UI: Menus",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Modern mobile-friendly floating navigation bar with active icon indicators, smooth hover transitions, and rounded pill shape.",
    "tags": [
      "Menu",
      "Floating Bar",
      "Mobile Nav",
      "Pill"
    ],
    "icon": "palette",
    "size_bytes": 1175,
    "featured": false
  },
  {
    "id": "item-41",
    "path": "CSS/css-components-main/menus/menu-1/index.html",
    "title": "Full-Screen Overlay Navigation Menu with Background Blur",
    "category": "UI: Menus",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Full-page sliding navigation overlay with staggered link fade-ins, social media icons, and blurred background backdrop.",
    "tags": [
      "Menu",
      "Overlay",
      "Navigation",
      "Glassmorphism"
    ],
    "icon": "palette",
    "size_bytes": 1111,
    "featured": false
  },
  {
    "id": "item-48",
    "path": "CSS/css-components-main/navbars/navbar-5/index.html",
    "title": "Glassmorphic Bordered Navbar with Blur Backdrop",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Frosted glass floating header featuring backdrop-filter blur, subtle outline border, and responsive mobile layout.",
    "tags": [
      "Navbars",
      "Glassmorphism",
      "Floating",
      "Modern UI"
    ],
    "icon": "palette",
    "size_bytes": 1495,
    "featured": false
  },
  {
    "id": "item-8",
    "path": "CSS/css-components-main/cards/card-7/index.html",
    "title": "Google Workspace Integration & Cloud Sync Card",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Third-party application integration card with service logo, connectivity status toggle, and permissions summary.",
    "tags": [
      "Cards",
      "Integration",
      "Cloud",
      "SaaS"
    ],
    "icon": "palette",
    "size_bytes": 1487,
    "featured": false
  },
  {
    "id": "item-33",
    "path": "CSS/css-components-main/logins/login-2/index.html",
    "title": "Gradient Glassmorphic Social Login Form",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Modern authentication card over a vibrant color gradient background with Google, GitHub, and email credentials.",
    "tags": [
      "Logins",
      "Glassmorphism",
      "Social Auth",
      "Gradients"
    ],
    "icon": "palette",
    "size_bytes": 891,
    "featured": false
  },
  {
    "id": "item-58",
    "path": "CSS/css-components-main/sidebars/sidebar-7/index.html",
    "title": "Hierarchical Tree-View Enterprise Sidebar",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "File tree and organizational hierarchy sidebar with expandable directory arrows, document icons, and status badges.",
    "tags": [
      "Sidebars",
      "Tree View",
      "Directory",
      "Enterprise"
    ],
    "icon": "palette",
    "size_bytes": 3430,
    "featured": false
  },
  {
    "id": "item-18",
    "path": "CSS/css-components-main/footers/footer-10/index.html",
    "title": "High-Impact Conversion Banner Footer ('Are you ready?')",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "High-impact footer featuring a bold call-to-action question, instant sign-up input, and customer testimonial quotes.",
    "tags": [
      "Footers",
      "Conversion",
      "CTA Banner",
      "Growth"
    ],
    "icon": "palette",
    "size_bytes": 4548,
    "featured": false
  },
  {
    "id": "item-39",
    "path": "CSS/css-components-main/logins/login-8/index.html",
    "title": "Holla Creative App Sign-In with Social Auth",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Vibrant modern consumer app sign-in card with playful branding, social buttons, and quick password reset link.",
    "tags": [
      "Logins",
      "Creative",
      "Social Login",
      "Modern UI"
    ],
    "icon": "palette",
    "size_bytes": 1787,
    "featured": false
  },
  {
    "id": "item-6",
    "path": "CSS/css-components-main/cards/card-3/index.html",
    "title": "Interactive Product Feature Showcase Card",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Card component with image badge, feature highlights, subtle border glow, and interactive action buttons.",
    "tags": [
      "Cards",
      "Product",
      "Feature",
      "Modern UI"
    ],
    "icon": "palette",
    "size_bytes": 1820,
    "featured": false
  },
  {
    "id": "item-13",
    "path": "CSS/css-components-main/dropdowns/dropdown-1/index.html",
    "title": "Joemail User Account & Inbox Navigation Dropdown",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Profile menu dropdown with user status avatar, storage quota indicator, unread message badges, and logout link.",
    "tags": [
      "Dropdown",
      "User Menu",
      "Navigation",
      "Badges"
    ],
    "icon": "palette",
    "size_bytes": 3506,
    "featured": false
  },
  {
    "id": "item-37",
    "path": "CSS/css-components-main/logins/login-6/index.html",
    "title": "Jolt Onboarding & Member Sign-In Screen",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Productivity suite login screen with animated welcome greeting, single sign-on buttons, and account recovery help.",
    "tags": [
      "Logins",
      "Onboarding",
      "SSO",
      "Clean UI"
    ],
    "icon": "palette",
    "size_bytes": 3698,
    "featured": false
  },
  {
    "id": "item-45",
    "path": "CSS/css-components-main/navbars/navbar-2/index.html",
    "title": "Minimalist Dark Mode Navigation Bar with Sub-Links",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Dark theme header bar featuring sleek typography, dropdown indicators, search trigger, and notifications icon.",
    "tags": [
      "Navbars",
      "Dark Mode",
      "Navigation",
      "Minimalist"
    ],
    "icon": "palette",
    "size_bytes": 1905,
    "featured": false
  },
  {
    "id": "item-22",
    "path": "CSS/css-components-main/footers/footer-4/index.html",
    "title": "Mobile App Store Badges Download Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "App showcase footer featuring official App Store and Google Play badges, QR code download trigger, and platform ratings.",
    "tags": [
      "Footers",
      "App Store Badges",
      "Download",
      "Mobile App"
    ],
    "icon": "palette",
    "size_bytes": 2552,
    "featured": false
  },
  {
    "id": "item-21",
    "path": "CSS/css-components-main/footers/footer-3/index.html",
    "title": "Multi-Column Services & Solutions Footer",
    "category": "UI: Footers",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Structured 4-column footer mapping product solutions, developer documentation, company links, and social feeds.",
    "tags": [
      "Footers",
      "Multi-Column",
      "Sitemap",
      "Corporate"
    ],
    "icon": "palette",
    "size_bytes": 2713,
    "featured": false
  },
  {
    "id": "item-51",
    "path": "CSS/css-components-main/parallax/parallax-1/index.html",
    "title": "Multi-Layer CSS Parallax Scrolling Experience",
    "category": "UI: Parallax",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Depth-simulating parallax scrolling demonstration using 3D transforms, layer stacking, and smooth perspective shifts.",
    "tags": [
      "Parallax",
      "3D Transforms",
      "Scrolling",
      "Visual FX"
    ],
    "icon": "palette",
    "size_bytes": 2008,
    "featured": false
  },
  {
    "id": "item-11",
    "path": "CSS/css-components-main/carousels/carousel-2/index.html",
    "title": "Multi-Slide Image Gallery Carousel Slider",
    "category": "UI: Carousels",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Responsive image carousel slider featuring smooth sliding transitions, pagination dots, and picture card hover effects.",
    "tags": [
      "Carousel",
      "Image Slider",
      "Gallery",
      "Animation"
    ],
    "icon": "palette",
    "size_bytes": 1248,
    "featured": false
  },
  {
    "id": "item-16",
    "path": "CSS/css-components-main/dropdowns/dropdown-3/index.html",
    "title": "Multi-Tier Action Context Menu Dropdown",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Contextual action dropdown featuring categorized command icons, keyboard shortcuts, and hover highlights.",
    "tags": [
      "Dropdown",
      "Context Menu",
      "Actions",
      "Icons"
    ],
    "icon": "palette",
    "size_bytes": 2763,
    "featured": false
  },
  {
    "id": "item-35",
    "path": "CSS/css-components-main/logins/login-4/index.html",
    "title": "Neumorphic Soft Shadow Sign-In Card",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Tactile neumorphism design with extruded inner and outer soft shadows on form inputs and submission buttons.",
    "tags": [
      "Logins",
      "Neumorphism",
      "Soft Shadows",
      "Tactile"
    ],
    "icon": "palette",
    "size_bytes": 1385,
    "featured": false
  },
  {
    "id": "item-62",
    "path": "CSS/css-components-main/signups/signup-4/index.html",
    "title": "One-Click Social Sign-Up (Google & Apple)",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Frictionless registration card highlighting prominent one-click Google and Apple OAuth authentication buttons.",
    "tags": [
      "Signups",
      "Social Auth",
      "Google / Apple",
      "Conversion"
    ],
    "icon": "palette",
    "size_bytes": 1742,
    "featured": false
  },
  {
    "id": "item-14",
    "path": "CSS/css-components-main/dropdowns/dropdown-2/index.html",
    "title": "Pexels Photo Media Filter & Orientation Dropdown",
    "category": "UI: Dropdowns",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Media filtering dropdown menu allowing users to select image orientation, color palettes, and photography sorting options.",
    "tags": [
      "Dropdown",
      "Filters",
      "Media",
      "Clean UI"
    ],
    "icon": "palette",
    "size_bytes": 1412,
    "featured": false
  },
  {
    "id": "item-60",
    "path": "CSS/css-components-main/signups/signup-2/index.html",
    "title": "Profile Avatar Upload Registration Screen",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "User sign-up form with interactive profile photo uploader, circular avatar preview, and personal details inputs.",
    "tags": [
      "Signups",
      "Avatar Upload",
      "Profile",
      "Interactive"
    ],
    "icon": "palette",
    "size_bytes": 1078,
    "featured": false
  },
  {
    "id": "item-65",
    "path": "CSS/img13.html",
    "title": "Responsive Image Gallery & Photo Grid Showcase",
    "category": "CSS Styling",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Image gallery layout utilizing CSS grid and flexbox to arrange photos with hover scaling effects and captions.",
    "tags": [
      "Image Gallery",
      "Photo Grid",
      "Responsive",
      "CSS Grid"
    ],
    "icon": "palette",
    "size_bytes": 471,
    "featured": false
  },
  {
    "id": "item-36",
    "path": "CSS/css-components-main/logins/login-5/index.html",
    "title": "Saferly Two-Factor Security Verification Screen",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Enterprise security verification card with multi-factor code inputs, device trust confirmation, and biometric prompt.",
    "tags": [
      "Logins",
      "2FA Security",
      "Verification",
      "Enterprise"
    ],
    "icon": "palette",
    "size_bytes": 1371,
    "featured": false
  },
  {
    "id": "item-46",
    "path": "CSS/css-components-main/navbars/navbar-3/index.html",
    "title": "Search-Centric Webmail App Header Navigation Bar",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Productivity app header featuring integrated search box, filter chips, settings icon, and user account status.",
    "tags": [
      "Navbars",
      "Search Bar",
      "Web App",
      "Header"
    ],
    "icon": "palette",
    "size_bytes": 1618,
    "featured": false
  },
  {
    "id": "item-64",
    "path": "CSS/css-components-main/widgets/widget-1/index.html",
    "title": "Security & Privacy Permissions Toggle Widget",
    "category": "UI: Widgets",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Settings control widget featuring smooth switch toggles, permission descriptions, and device security indicators.",
    "tags": [
      "Widget",
      "Toggle Switch",
      "Settings",
      "Security"
    ],
    "icon": "palette",
    "size_bytes": 3034,
    "featured": false
  },
  {
    "id": "item-7",
    "path": "CSS/css-components-main/cards/card-4/index.html",
    "title": "Social Media Influencer Profile & Stats Card (Jill Scott)",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Social follower statistics card with banner cover photo, follower metrics, engagement numbers, and message button.",
    "tags": [
      "Cards",
      "Social Media",
      "Stats",
      "Profile"
    ],
    "icon": "palette",
    "size_bytes": 1499,
    "featured": false
  },
  {
    "id": "item-40",
    "path": "CSS/css-components-main/logins/login-9/index.html",
    "title": "Split-Screen Photography Hero Login Card",
    "category": "UI: Logins",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Two-column login layout pairing high-resolution photography on one side with a focused credential form on the other.",
    "tags": [
      "Logins",
      "Split Screen",
      "Photography",
      "Hero Layout"
    ],
    "icon": "palette",
    "size_bytes": 1368,
    "featured": false
  },
  {
    "id": "item-61",
    "path": "CSS/css-components-main/signups/signup-3/index.html",
    "title": "Step-by-Step Corporate Account Onboarding Wizard",
    "category": "UI: Signups",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Multi-step registration wizard guiding new enterprise accounts through organization details, team size, and admin credentials.",
    "tags": [
      "Signups",
      "Wizard",
      "Multi-Step",
      "Enterprise"
    ],
    "icon": "palette",
    "size_bytes": 1403,
    "featured": false
  },
  {
    "id": "item-63",
    "path": "CSS/css-components-main/tricks/sticky-sidebar/index.html",
    "title": "Sticky Filter Sidebar with Scroll-Spy Layout",
    "category": "UI: Tricks",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "UX pattern demonstrating CSS position: sticky for a product filter sidebar that stays in view while page content scrolls.",
    "tags": [
      "Sticky Sidebar",
      "UX Trick",
      "CSS Layout",
      "Filters"
    ],
    "icon": "palette",
    "size_bytes": 2295,
    "featured": false
  },
  {
    "id": "item-50",
    "path": "CSS/css-components-main/navbars/navbar-7/index.html",
    "title": "Tabbed Indicator Navigation Bar with Sliding Underline",
    "category": "UI: Navbars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Interactive navigation header with animated underline indicator that tracks the active link on hover.",
    "tags": [
      "Navbars",
      "Tabbed Nav",
      "Animation",
      "Interactive"
    ],
    "icon": "palette",
    "size_bytes": 1905,
    "featured": false
  },
  {
    "id": "item-5",
    "path": "CSS/css-components-main/cards/card-2/index.html",
    "title": "Tiered SaaS Pricing Comparison Card (Free vs Pro)",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Clean subscription pricing card detailing monthly costs, included features, quota limits, and conversion call-to-action.",
    "tags": [
      "Cards",
      "Pricing Tier",
      "SaaS",
      "Conversion"
    ],
    "icon": "palette",
    "size_bytes": 2580,
    "featured": false
  },
  {
    "id": "item-9",
    "path": "CSS/css-components-main/cards/card-8/index.html",
    "title": "Travel Destination & Flight Booking Card (Malaysia)",
    "category": "UI: Cards",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Travel inspiration card featuring destination photography, price per night badge, star rating, and booking button.",
    "tags": [
      "Cards",
      "Travel",
      "Booking",
      "E-Commerce"
    ],
    "icon": "palette",
    "size_bytes": 1632,
    "featured": false
  },
  {
    "id": "item-55",
    "path": "CSS/css-components-main/sidebars/sidebar-4/index.html",
    "title": "Untitled UI SaaS Admin Navigation Drawer",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Comprehensive admin dashboard navigation drawer featuring nested sub-menus, search bar, notification badges, and user profile.",
    "tags": [
      "Sidebars",
      "SaaS Admin",
      "Drawer",
      "Navigation"
    ],
    "icon": "palette",
    "size_bytes": 3413,
    "featured": false
  },
  {
    "id": "item-57",
    "path": "CSS/css-components-main/sidebars/sidebar-6/index.html",
    "title": "User Profile & Account Settings Navigation Sidebar",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Account preferences sidebar organizing billing, security keys, notification settings, and team access permissions.",
    "tags": [
      "Sidebars",
      "Account Settings",
      "Preferences",
      "User"
    ],
    "icon": "palette",
    "size_bytes": 2171,
    "featured": false
  },
  {
    "id": "item-52",
    "path": "CSS/css-components-main/sidebars/sidebar-1/index.html",
    "title": "Violet AI Assistant & Prompt History Sidebar",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "AI chat interface sidebar organizing saved prompt history, model selector, new chat button, and user credits counter.",
    "tags": [
      "Sidebars",
      "AI Chat",
      "History",
      "Dark Mode"
    ],
    "icon": "palette",
    "size_bytes": 1361,
    "featured": false
  },
  {
    "id": "item-54",
    "path": "CSS/css-components-main/sidebars/sidebar-3/index.html",
    "title": "teams.co Multi-Workspace Collaboration Sidebar",
    "category": "UI: Sidebars",
    "main_group": "UI Components",
    "folder": "CSS",
    "description": "Enterprise team collaboration sidebar with workspace switcher, channels list, direct message indicators, and voice status.",
    "tags": [
      "Sidebars",
      "Team Chat",
      "Workspaces",
      "Channels"
    ],
    "icon": "palette",
    "size_bytes": 2415,
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
