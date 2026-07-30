# Portfolio Analysis — Ahmed Cherqui Amine
> Updated after full codebase + CV + spec review

---

## 1. Who You Are (CV Deep Dive)

### Identity
- **Name:** Cherqui Ahmed Amine
- **Title:** AI & Data Engineering Student | Business Intelligence | Data Analytics
- **Location:** Maroc → Nice → Lyon (current)
- **Email:** cherqui2003@gmail.com | **Phone:** +212618824792
- **LinkedIn:** /ahmed-amine-cherqui

### Profile Summary
Engineering student specializing in AI, BI, and Data Analytics. Passionate about designing AI-powered, data-driven solutions that transform complex data into actionable business insights. Continuously expanding expertise in Data Engineering and Machine Learning.

---

## 2. Academic Background (Chronological)

| Period | Institution | Degree |
|---|---|---|
| 2020–2021 | Bourgogne School Group (GSB) | Baccalaureate – Physics & Chemistry |
| 2021–2023 | EMSI | Preparatory Classes |
| 2023–2026 | EMSI | Engineering Cycle — Computer Science & Networks |
| 2025–2026 | Université Côte d'Azur | Double Diploma – Master AI (MIAGE) |
| 2026–Present | Université Claude Bernard Lyon 1 | Master MIAGE – Business Intelligence |

**Story:** A clear upward trajectory crossing 3 complementary domains — CS foundation → AI specialization → BI mastery.

---

## 3. Professional Experience

### Aurora — AI & BI Developer *(Feb 2026 – Jun 2026)*
- AI-powered esports analytics platform for Valorant players
- Performance analysis + interactive BI dashboards + personalized AI recommendations
- Stack: RAG + Machine Learning + Business Intelligence dashboards

### DevAktus — AI & Data Application Developer *(Jul 2025 – Aug 2025)*
- Multimodal AI content moderation platform (text, images, videos, audio, copyright)
- AI-powered REST APIs with FastAPI + React frontend
- Integrated multiple AI models for automated moderation

---

## 4. Academic Projects

| Project | Period | Description |
|---|---|---|
| Intelligent Document Processing (SmartRPA) | Feb–Jul 2026 | OCR + NLP + FastAPI to automate banking form extraction |
| AI Assistant | May–Jun 2024 | Dataset analysis + automated viz generation (Python, Flask, React) |
| Power BI Dashboard | Jul 2024 | Interactive BI dashboards, KPI monitoring |
| Customer Churn Prediction | Mar–Apr 2025 | ML predictive analytics on customer behavior |

---

## 5. Technical Skills

### Programming
Python · SQL · Java · C# · JavaScript

### Business Intelligence & Data Visualization
Power BI · Tableau · Excel · Power Pivot · Google Data Studio

### Databases
MySQL · SQL Server · PostgreSQL · SQLite · BigQuery

### Frameworks & Tools
FastAPI · Flask · React · Spring Boot · Docker · OCR · NLP · RAG · PySpark · Azure

---

## 6. Certifications (45 total — Coursera)

### Cluster: Business Intelligence & Data Visualization (strongest)
Power BI series (6 certs) · DAX Advanced · Data Modeling in Power BI · Foundations of BI · Google Data Studio (2 certs) · Tableau series (4 certs) · Excel Charts & Dashboards

### Cluster: AI & Machine Learning
ML with PySpark: Customer Churn · GenAI for Data Analysis (OpenAI API) · Generative AI: Introduction & Applications

### Cluster: Data Science & Python
Python for Data Analysis (Pandas/NumPy) · Python Basics · Prepare Data for Exploration · Foundations: Data Everywhere · Ask Questions to Make Data-Driven Decisions · What is Data Science?

### Cluster: Web & Software Development
React Basics · SQL · HTML5 · CSS3 · JavaScript · HTML/CSS/JS for Web Devs · Web Scraping with Python · Advanced Styling with Responsive Design · Software Engineering Design & PM

### Cluster: Infrastructure & Cloud
Docker/Kubernetes/OpenShift (IBM) · Azure Virtual Networks · Unix Workbench · Arduino/C Programming

### Cluster: Soft Skills & General
Job Interview · People & Soft Skills (Specialization) · Probability · Accounting · Finance for Managers · La recherche documentaire · SDGs Impact · Sustainable Development · OOP in C++

---

## 7. Soft Skills & Languages

### Soft Skills
Perseverance · Adaptability · Following instructions · Attentive / Good listener · Active listening

### Languages
Arabic — Native · French — Intermediate · English — Intermediate

### Interests
Reading · Chess · Fitness / Weight Training

---

## 8. Complete Existing Codebase Audit

### Package Stack (`package.json`)
| Package | Version | Status |
|---|---|---|
| React | 19.x | ✅ Keep |
| TypeScript | ~6.0 | ✅ Keep |
| Vite | 8.x | ✅ Keep |
| Framer Motion | 12.x | ✅ Keep — not yet used |
| React Icons | 5.x | ✅ Keep |
| React Router DOM | 7.x | ✅ Keep |
| Bootstrap | 5.x | ⚠️ Conflicts with custom CSS — unused |
| React-Bootstrap | 2.x | ⚠️ Conflicts — unused |

> **Decision needed:** Remove Bootstrap/React-Bootstrap and commit fully to custom CSS + React Icons.

---

### CSS Files

#### `globals.css` (268 lines — partial implementation)
Variables defined:
```
--bg: #0d1222          (dark navy)
--card: #161d31        (card surface)
--primary: #3b82f6     (blue)
--text: #ffffff
--gray: #a8b3cf
```
**What's styled:** Navbar + Hero only. All other sections are unstyled.

#### `theme.css` (21 lines — second variable set, conflicts with globals.css)
```
--background: #0B1120
--surface: #111827
--surface-light: #1F2937
--primary: #2563EB
--secondary: #38BDF8
--accent: #06B6D4
--text: #F8FAFC
--text-secondary: #94A3B8
--border: rgba(255,255,255,.08)
```
> ⚠️ Two CSS variable systems coexist and are inconsistent. Needs to be unified into one design token system.

---

### Components (`src/components/`)

| File | Status | Notes |
|---|---|---|
| `Navbar.tsx` | ✅ Implemented | Logo + nav links + Download CV button. Clean. |
| `Hero.tsx` | ✅ Implemented | 2-col grid: text left + profile photo right. Info cards. |
| `About.tsx` | ❌ Empty | Zero content |
| `Education.tsx` | ❌ Empty | Zero content |
| `Projects.tsx` | ❌ Empty | Zero content |
| `Skills.tsx` | ❌ Empty | Zero content |
| `Certifications.tsx` | ❌ Empty | Zero content |
| `Footer.tsx` | ❌ Empty | Zero content |
| `Contact.txt` | ❌ Wrong file type | Not even a .tsx — completely missing |

**App.tsx** only renders `<Navbar />` and `<Hero />`. Nothing else is wired up.

---

### Data Files (`src/data/`)

| File | Status |
|---|---|
| `projects.ts` | ❌ Empty |
| `skills.ts` | ❌ Empty |
| `certifications.ts` | ❌ Empty |

**All data files are completely empty.** No typed interfaces, no data arrays.

---

## 9. The New Data Architecture (One File Per Domain)

The core principle: **every editable piece of content lives in its own typed data file**. To update any info in the future, you only touch the relevant data file — never the component.

```
src/data/
├── personal.ts          ← Name, title, tagline, vision statement, availability status
├── contact.ts           ← Email, phone, LinkedIn, GitHub, location, CV file path
├── education.ts         ← Academic background (degree, institution, period, description, highlights)
├── experience.ts        ← Professional work experience (role, company, period, description, tech)
├── projects.ts          ← Academic & personal projects (title, type, period, description, tech, links)
├── technicalSkills.ts   ← Technical skills grouped by category (languages, BI tools, databases, frameworks)
├── softSkills.ts        ← Soft skills list (label + optional icon/color)
├── languages.ts         ← Language proficiencies (language, level, flag)
├── interests.ts         ← Personal interests (label + icon)
├── certifications.ts    ← All 45 certifications (title, provider, category, credentialLink, date)
├── about.ts             ← About section paragraphs, values, philosophy, stats
└── navigation.ts        ← Nav links array (label, anchor) — so Navbar never hardcodes links
```

### What Goes in Each File

#### `personal.ts`
```ts
// Who you are at a glance
{
  firstName: "Ahmed",
  lastName: "Cherqui Amine",
  title: "Business Intelligence · Data Engineering · Artificial Intelligence",
  tagline: "Building intelligent systems that transform raw data into actionable business decisions.",
  availability: "Available for Internship",
  profileImage: "/images/profile.png",
  cvFile: "/resume.pdf"
}
```

#### `contact.ts`
```ts
// All contact vectors — change email/LinkedIn here once
{
  email: "cherqui2003@gmail.com",
  phone: "+212618824792",
  linkedin: "https://linkedin.com/in/ahmed-amine-cherqui",
  github: "https://github.com/...",
  location: "Lyon, France",
  availabilityStatus: "Open to internship opportunities"
}
```

#### `education.ts`
```ts
// Array of education entries — ordered chronologically
[
  {
    id: "gbs-bac",
    institution: "Bourgogne School Group (GSB)",
    degree: "Baccalaureate",
    field: "Physics & Chemistry",
    period: "2020 – 2021",
    location: "Maroc",
    highlights: [],
    type: "bac"
  },
  {
    id: "emsi-prep",
    institution: "EMSI",
    degree: "Preparatory Classes",
    ...
  },
  {
    id: "emsi-engineering",
    institution: "EMSI",
    degree: "Engineering Cycle",
    field: "Computer Science & Networks",
    period: "2023 – 2026",
    highlights: ["CS & Networks focus", "MIAGE track"]
  },
  {
    id: "uca-ai",
    institution: "Université Côte d'Azur",
    degree: "Double Diploma – Master's Degree",
    field: "Artificial Intelligence (MIAGE)",
    period: "2025 – 2026",
    location: "Nice, France"
  },
  {
    id: "lyon-bi",
    institution: "Université Claude Bernard Lyon 1",
    degree: "Master MIAGE",
    field: "Business Intelligence",
    period: "2026 – Present",
    location: "Lyon, France",
    isCurrent: true
  }
]
```

#### `experience.ts`
```ts
// Professional experience entries
[
  {
    id: "aurora",
    role: "AI & BI Developer",
    company: "Aurora",
    type: "professional",  // professional | internship
    period: "Feb 2026 – Jun 2026",
    description: "...",
    responsibilities: ["..."],
    technologies: ["RAG", "Machine Learning", "Power BI", "Python"],
    github: null,
    demo: null
  },
  {
    id: "devaktus",
    role: "AI & Data Application Developer",
    company: "DevAktus",
    type: "internship",
    period: "Jul 2025 – Aug 2025",
    description: "...",
    responsibilities: ["..."],
    technologies: ["FastAPI", "React", "AI Models"],
    ...
  }
]
```

#### `projects.ts`
```ts
// Academic + side projects
[
  {
    id: "smartrpa",
    title: "SmartRPA – Intelligent Document Processing",
    category: "data-engineering",  // data-engineering | ai | bi | software
    type: "academic",
    period: "Feb 2026 – Jul 2026",
    description: "...",
    problem: "...",
    solution: "...",
    technologies: ["Python", "FastAPI", "OCR", "NLP"],
    github: null,
    demo: null,
    image: "/images/projects/smartrpa.png",
    featured: true
  },
  // AI Assistant, Power BI Dashboard, Customer Churn Prediction
]
```

#### `technicalSkills.ts`
```ts
// Grouped by domain
[
  {
    category: "Business Intelligence",
    icon: "chart",
    color: "#f59e0b",
    skills: [
      { name: "Power BI", level: "advanced" },
      { name: "Tableau", level: "intermediate" },
      { name: "Google Data Studio", level: "intermediate" },
      { name: "Excel / Power Pivot", level: "advanced" },
      { name: "DAX", level: "intermediate" }
    ]
  },
  {
    category: "Data Engineering",
    icon: "database",
    color: "#3b82f6",
    skills: [
      { name: "SQL", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
      { name: "ETL", level: "intermediate" },
      { name: "PySpark", level: "beginner" },
      { name: "BigQuery", level: "beginner" }
    ]
  },
  {
    category: "Artificial Intelligence",
    icon: "brain",
    color: "#a855f7",
    skills: [
      { name: "Machine Learning", level: "intermediate" },
      { name: "RAG", level: "intermediate" },
      { name: "NLP", level: "intermediate" },
      { name: "OpenAI API", level: "intermediate" },
      { name: "FastAPI", level: "intermediate" },
      { name: "OCR", level: "intermediate" }
    ]
  },
  {
    category: "Software Engineering",
    icon: "code",
    color: "#06b6d4",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Docker", level: "beginner" },
      { name: "Flask", level: "intermediate" },
      { name: "Spring Boot", level: "beginner" },
      { name: "Java", level: "intermediate" },
      { name: "C#", level: "beginner" }
    ]
  }
]
```

#### `softSkills.ts`
```ts
// Personal soft competencies
[
  { label: "Perseverance", icon: "🏋️" },
  { label: "Adaptability", icon: "🔄" },
  { label: "Active Listening", icon: "👂" },
  { label: "Attentive", icon: "🎯" },
  { label: "Following Instructions", icon: "📋" }
]
```

#### `languages.ts`
```ts
// Spoken/written languages
[
  { language: "Arabic", level: "Native", flag: "🇲🇦", proficiency: 100 },
  { language: "French", level: "Intermediate", flag: "🇫🇷", proficiency: 70 },
  { language: "English", level: "Intermediate", flag: "🇬🇧", proficiency: 65 }
]
```

#### `interests.ts`
```ts
[
  { label: "Reading", icon: "📚" },
  { label: "Chess", icon: "♟️" },
  { label: "Fitness / Weight Training", icon: "💪" }
]
```

#### `certifications.ts`
```ts
// All 45 certifications
[
  {
    id: "cert-powerbi-1",
    title: "Preparing Data for Analysis with Microsoft Excel",
    provider: "Coursera / Microsoft",
    category: "bi",  // bi | ai | data-science | web-dev | infrastructure | soft-skills
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/GEVFWBWUOUHH",
    date: null,
    featured: false
  },
  // ... all 45 entries
]
```

#### `about.ts`
```ts
// About section content — edit the copy here, never in the component
{
  paragraphs: [
    "I'm an engineering student on a deliberate journey...",
    "What drives me is the bridge between raw data and business decisions..."
  ],
  values: [
    "Continuous Learning",
    "Technical Excellence",
    "Business Impact",
    "Problem Solving",
    "Innovation",
    "Curiosity"
  ],
  stats: [
    { label: "Projects", value: "6+" },
    { label: "Certifications", value: "45+" },
    { label: "Domains", value: "3" },
    { label: "Universities", value: "3" }
  ],
  pillars: [
    { label: "Computer Science", subtitle: "EMSI Engineering", icon: "💻" },
    { label: "Artificial Intelligence", subtitle: "Université Côte d'Azur", icon: "🤖" },
    { label: "Business Intelligence", subtitle: "Université Lyon 1", icon: "📊" }
  ]
}
```

#### `navigation.ts`
```ts
// Nav links — Navbar reads from here
[
  { label: "About", anchor: "#about" },
  { label: "Journey", anchor: "#journey" },
  { label: "Projects", anchor: "#projects" },
  { label: "Skills", anchor: "#skills" },
  { label: "Certifications", anchor: "#certifications" },
  { label: "Contact", anchor: "#contact" }
]
```

---

## 10. Full Architecture Plan (Component-Based)

### Directory Structure (Proposed — Full Remake)

```
src/
├── components/
│   ├── ui/                         ← Primitive reusable components
│   │   ├── Button.tsx              ← Primary / Secondary / Ghost variants
│   │   ├── Card.tsx                ← Base glassmorphism card wrapper
│   │   ├── Badge.tsx               ← Tech tags, category labels
│   │   ├── SectionHeader.tsx       ← Title + subtitle block for every section
│   │   ├── AnimatedSection.tsx     ← Framer Motion scroll reveal wrapper
│   │   └── Divider.tsx             ← Decorative section separator
│   │
│   ├── sections/                   ← One file per page section
│   │   ├── Navbar.tsx              ← Reads from navigation.ts + personal.ts
│   │   ├── Hero.tsx                ← Reads from personal.ts + contact.ts
│   │   ├── About.tsx               ← Reads from about.ts
│   │   ├── Journey.tsx             ← Reads from education.ts
│   │   ├── Experience.tsx          ← Reads from experience.ts
│   │   ├── Projects.tsx            ← Reads from projects.ts
│   │   ├── Skills.tsx              ← Reads from technicalSkills.ts + softSkills.ts + languages.ts
│   │   ├── Certifications.tsx      ← Reads from certifications.ts
│   │   ├── Contact.tsx             ← Reads from contact.ts + personal.ts
│   │   └── Footer.tsx              ← Reads from navigation.ts + personal.ts + contact.ts
│   │
│   └── features/                   ← Section-specific sub-components
│       ├── ProjectCard.tsx         ← Used by Projects.tsx
│       ├── ExperienceCard.tsx      ← Used by Experience.tsx
│       ├── TimelineNode.tsx        ← Used by Journey.tsx
│       ├── SkillCategory.tsx       ← Used by Skills.tsx
│       ├── SkillBadge.tsx          ← Used by SkillCategory.tsx
│       ├── CertCard.tsx            ← Used by Certifications.tsx
│       ├── CertFilter.tsx          ← Category filter tabs for Certifications
│       ├── StatCard.tsx            ← Used by About.tsx (stats strip)
│       └── LanguageCard.tsx        ← Used by Skills.tsx (language proficiency)
│
├── data/                           ← ALL content lives here — 12 files
│   ├── personal.ts
│   ├── contact.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── technicalSkills.ts
│   ├── softSkills.ts
│   ├── languages.ts
│   ├── interests.ts
│   ├── certifications.ts
│   ├── about.ts
│   └── navigation.ts
│
├── styles/
│   ├── tokens.css                  ← Single unified design token system (replaces theme.css + partial globals.css)
│   ├── globals.css                 ← Reset, base styles, typography
│   ├── components.css              ← Reusable UI component styles
│   └── animations.css              ← Keyframes, transition utilities
│
├── hooks/
│   ├── useScrollSpy.ts             ← Active nav link based on scroll position
│   └── useScrollAnimation.ts      ← Framer Motion scroll reveal helper
│
├── types/
│   └── index.ts                    ← Shared TypeScript interfaces for all data shapes
│
├── App.tsx
└── main.tsx
```

---

## 11. Design System (Unified)

### Color Tokens (resolving the globals.css vs theme.css conflict)

```css
:root {
  /* Backgrounds */
  --bg-deep:       #080d1a;   /* deepest background */
  --bg-base:       #0b1120;   /* main background */
  --bg-surface:    #111827;   /* card/section surface */
  --bg-elevated:   #1a2236;   /* hover / elevated card */

  /* Accents */
  --blue:          #3b82f6;   /* primary CTA, highlights */
  --blue-dark:     #2563eb;   /* hover state */
  --cyan:          #06b6d4;   /* secondary accent, gradient partner */
  --gold:          #f59e0b;   /* certifications, stats, warmth */
  --purple:        #a855f7;   /* AI domain color */

  /* Text */
  --text-primary:  #f8fafc;
  --text-secondary:#94a3b8;
  --text-muted:    #64748b;

  /* Borders & Glass */
  --border:        rgba(255,255,255,0.07);
  --border-hover:  rgba(59,130,246,0.4);
  --glass-bg:      rgba(255,255,255,0.03);
}
```

### Domain Color Coding (used in badges, cards, timeline nodes)
| Domain | Color |
|---|---|
| Business Intelligence | `--gold` #f59e0b |
| Data Engineering | `--blue` #3b82f6 |
| Artificial Intelligence | `--purple` #a855f7 |
| Software Engineering | `--cyan` #06b6d4 |

### Typography
- **Body:** Inter (current — keep)
- **Headings:** Space Grotesk (premium, technical feel, pairs perfectly with Inter)
- Load both from Google Fonts

### Animations (Framer Motion)
| Element | Animation |
|---|---|
| Hero | Staggered entrance: badge → name → roles → description → buttons → cards |
| All sections | `whileInView` fade + slide-up on scroll |
| Timeline nodes | Sequential reveal as you scroll down |
| Project cards | Hover lift + glow border |
| Skill badges | Stagger reveal on viewport entry |
| Cert grid | Stagger reveal + filter transitions |
| Navbar | Scroll-aware background blur intensification |

---

## 12. Section-by-Section Plan

### Navbar
- Reads: `navigation.ts`, `personal.ts`
- Scroll-aware active link highlight
- Mobile hamburger menu
- Logo: AC initials in gradient circle + name + subtitle

### Hero
- Reads: `personal.ts`, `contact.ts`
- Animated background: subtle floating orbs or grid mesh
- Pulsing green availability badge
- Typewriter / staggered animation on title lines (BI / Data Engineering / AI)
- 3 info cards: location, degree, university
- CTA: "View Projects" (primary) + "Download CV" (secondary)

### About
- Reads: `about.ts`
- Left: text paragraphs + values as pill tags
- Right: 3 pillar cards (CS/AI/BI) with icons
- Stats strip at bottom (projects, certifications, domains, universities)

### Journey (Education Timeline)
- Reads: `education.ts`
- Vertical animated timeline, left-to-right alternating cards
- Each node: institution, degree, period, location, key highlights
- Final node: "Career Goals" in lighter/future style

### Experience
- Reads: `experience.ts`
- Cards for each role with type badge (Professional / Internship)
- Tech stack pills under each card

### Projects
- Reads: `projects.ts`
- Filterable grid (All / BI / AI / Data Engineering)
- Each card: domain badge, title, description, tech pills, GitHub + Demo links
- Featured flag for top projects

### Skills
- Reads: `technicalSkills.ts`, `softSkills.ts`, `languages.ts`, `interests.ts`
- Tab sections: Technical | Soft Skills | Languages
- Technical: 4 domain panels with skill badges
- Soft Skills: icon + label cards
- Languages: flag + level + progress bar

### Certifications
- Reads: `certifications.ts`
- Category filter tabs: All / BI / AI / Python & Data / Web Dev / Infrastructure / Soft Skills
- Compact card grid: title + provider logo area + verify link
- Show count per category

### Contact
- Reads: `contact.ts`, `personal.ts`
- Left: contact info cards (email, LinkedIn, GitHub, location, availability)
- Right: simple message form OR prominent CTA buttons
- "Open to Internship" status card with pulsing indicator

### Footer
- Reads: `navigation.ts`, `personal.ts`, `contact.ts`
- Minimal: logo + name + nav links + social icons + copyright

---

## 13. Decisions — All Resolved ✅

| # | Question | Decision |
|---|---|---|
| 1 | Profile photo | ✅ `src/assets/images/profile.png` — confirmed |
| 2 | CSS approach | ✅ **Pure custom CSS** — see rationale below |
| 3 | GitHub repos | ⏳ None yet — links will be added later when projects are pushed |
| 4 | Project screenshots | ⏳ None yet — generated placeholder visuals will be used |
| 5 | CV placement | ✅ Copy PDF to `public/resume.pdf` |
| 6 | Experience section | ✅ **Separate "Experience" section** — Aurora & DevAktus there; academic work in Projects |
| 7 | Certifications | ✅ **All 45** — default view shows top 10–20, "Show All" toggle + provider/category filters |
| 8 | Contact | ✅ Social link cards only (no form for now) |
| 9 | Remake scope | ✅ **Full remake** — see rationale below |

---

## 14. My Recommendations on CSS & Remake Scope

### CSS: Pure Custom CSS — Not Tailwind

For this specific portfolio, **custom CSS is the right call**:

- **Glassmorphism needs precision.** `backdrop-filter`, layered gradients, animated glow borders — these are verbose and awkward in Tailwind utility classes.
- **Animation control.** Framer Motion + CSS keyframes for floating orbs, shimmer effects, pulsing indicators — far cleaner in vanilla CSS.
- **Design tokens already defined.** The color system (blues, cyan, gold, purple), spacing, and glassmorphism direction are established. CSS custom properties are the native, most flexible way to use them.
- **Bespoke ≠ utility-first.** Tailwind excels at fast, consistent product UIs. A handcrafted premium portfolio needs custom CSS to feel truly unique, not assembled from pre-set classes.
- **The foundation already exists.** `globals.css` and `theme.css` just need to be unified — not discarded for a different paradigm.

> **Decision:** Remove Bootstrap + React-Bootstrap. Keep and unify custom CSS into `tokens.css` → `globals.css` → `components.css` → `animations.css`.

---

### Remake Scope: Full Remake — Not Refactor

**Complete fresh start is the right move.** Reasoning:

**What currently exists is barely a skeleton:**
- `Navbar.tsx` — 33 lines, nav links are hardcoded (should read from `navigation.ts`), no scroll-spy, no mobile menu
- `Hero.tsx` — 89 lines, no animations, no background effects, no typewriter — pure static HTML
- `globals.css` — covers Navbar + Hero only, no design system beyond 5 variables
- Every other component — literally zero bytes
- All 3 data files — empty

**The architecture must change completely anyway:**
- `ui/`, `sections/`, `features/` subdirectory structure needs to be created
- `types/index.ts` with shared TypeScript interfaces needs to be written
- `hooks/` directory for scroll behavior doesn't exist
- CSS goes from 2 conflicting files → 4 unified files
- 12 data files need to be written from scratch regardless

**Refactoring cost vs. remake cost:**
- Refactoring the existing 2 components = gutting 80–90% of the code anyway
- Starting clean with the right architecture = zero tech debt from day one
- The entire data layer has to be built from scratch regardless of this choice

> **Decision:** Wipe all existing component content, unify the CSS system, and build everything fresh with the architecture defined in section 10. Clean slate, correct foundations.
