# Design System — Prince Jasani Portfolio

## Design Concept

**"Engineering ideas into useful products."**

This portfolio communicates technical confidence through editorial restraint.
It reads like a curated product page — not a template, not a resume dump.

---

## Color System

A warm neutral palette with a single restrained accent. No gradients, no glows.

### Light Theme (Primary)

| Role          | Token               | Value       | Usage                              |
|---------------|---------------------|-------------|-------------------------------------|
| Background    | `--bg-primary`      | `#FAFAF9`   | Page background (warm off-white)    |
| Surface       | `--bg-surface`      | `#FFFFFF`   | Elevated sections, cards            |
| Border        | `--border`          | `#E7E5E4`   | Thin dividers, section separators   |
| Border subtle | `--border-subtle`   | `#F5F5F4`   | Very light separation               |
| Text primary  | `--text-primary`    | `#1C1917`   | Headlines, strong content           |
| Text body     | `--text-body`       | `#44403C`   | Paragraph text                      |
| Text muted    | `--text-muted`      | `#78716C`   | Labels, dates, secondary info       |
| Text faint    | `--text-faint`      | `#A8A29E`   | Numbering, decorative text          |
| Accent        | `--accent`          | `#1C1917`   | Links, active states (text weight)  |
| Accent hover  | `--accent-hover`    | `#292524`   | Hover states                        |

### Design Rationale

- **No blue/purple accent**: Avoids "generic tech portfolio" look.
- **Warm stone neutrals** (Tailwind stone scale): Feels human, editorial, approachable.
- **Accent is the text color itself**: Confidence comes from typography weight and hierarchy, not color pops.
- **A functional highlight** (sparingly): `#D97706` (amber-600) — used ONLY for a single interactive indicator or active nav dot. Never decorative.

---

## Typography

### Font Stack

| Role       | Font                | Fallback            | Weight     |
|------------|---------------------|---------------------|------------|
| Headlines  | Inter               | system-ui, sans     | 600, 700   |
| Body       | Inter               | system-ui, sans     | 400, 500   |
| Technical  | JetBrains Mono      | monospace           | 400        |

### Why This Pairing

- **Inter**: Designed for screens. Tall x-height, excellent readability. The standard for serious product/developer sites (Vercel, Linear, Raycast). Variable font = fine-grained weight control.
- **JetBrains Mono**: Developer-native. Used sparingly for project numbers, technical labels, dates, and skill tags. Signals "this person writes code" without being gimmicky.

### Type Scale

| Element            | Size        | Weight | Tracking    |
|--------------------|-------------|--------|-------------|
| Hero headline      | 4rem (64px) | 700    | -0.03em     |
| Section title      | 2rem (32px) | 600    | -0.02em     |
| Subsection         | 1.25rem     | 600    | -0.01em     |
| Body               | 1rem (16px) | 400    | 0           |
| Body large         | 1.125rem    | 400    | 0           |
| Caption / Label    | 0.75rem     | 500    | 0.05em      |
| Technical label    | 0.75rem     | 400    | 0.08em      |

### Typography Rules

- Headlines use negative tracking (tighter) for density and confidence.
- Labels/captions use positive tracking (wider) for readability at small sizes.
- Maximum body text width: 65ch (optimal reading measure).
- Line height: 1.6 for body, 1.1 for headlines.

---

## Navigation Pattern

**Minimal sticky header** — appears compact on scroll.

### Structure

```
[PJ]                                    [About] [Work] [Experience] [Contact]
```

### Behavior

- Full-width, transparent on page load (blends with hero).
- On scroll past hero: becomes sticky with subtle `backdrop-blur` and thin bottom border.
- Mobile: Hamburger menu → slide-in panel from right.
- Active section indicated by text weight change (font-weight 600), not color.
- Navigation items use the monospace font at caption size with letter-spacing.

### Why This Pattern

- Recruiters scan fast — persistent nav lets them jump to what matters.
- Minimal treatment keeps focus on content.
- No logo text, just initials — confident, not corporate.

---

## Layout System

### Grid

- Max content width: `1200px`
- Content padding: `24px` (mobile), `48px` (tablet), `80px` (desktop)
- Section vertical spacing: `120px` (desktop), `80px` (mobile)
- 12-column grid for asymmetric compositions

### Section Structure

Each section follows this pattern:

```
[Technical label — monospace, uppercase, tracked]    ← e.g., "01 / ABOUT"
[Section headline — large, bold]                     ← e.g., "Background"
[Content]                                            ← Paragraphs, grids, lists
```

The numbered technical label creates visual rhythm and editorial structure.

---

## Component Patterns

### Hero Section

```
[Nav]

                        [Technical label: "Full-Stack Developer"]
        [Large headline: statement about what I do]
            [1-2 sentence supporting description]
                [Location · Email · GitHub]

```

- Vertically centered, left-aligned (or center-aligned — TBD based on content length).
- Statement headline, NOT "Hi, I'm Prince" — that's generic.
- Instead: "I build products that solve real problems." or similar.
- No hero image, no 3D, no particles. Typography IS the hero.

### Project Showcase

**Numbered list layout** (editorial pattern):

```
01  ─────────────────────────────────────────
    Project Name
    Brief description (2 lines max)
    [Tech tags in monospace]
    [Link →]

02  ─────────────────────────────────────────
    ...
```

- Each project gets a numbered entry with a thin divider above.
- On hover: subtle background shift or indent animation.
- Featured projects (1-2) can expand to show a screenshot/preview.
- No fake metrics. No star ratings. Just clear descriptions.

### Experience Section

**Left-aligned stack** (not a centered timeline):

```
2023 — Present     Role Title
                   Company Name
                   · Key responsibility or achievement
                   · Key responsibility or achievement

2022 — 2023        Role Title
                   ...
```

- Date in monospace on the left (or above on mobile).
- Thin left border connecting entries (1px, border color).
- Clean, scannable. Recruiters read this vertically.

### Skills Section

**Categorized label grid**:

```
Languages        [JavaScript] [TypeScript] [Python] ...
Frameworks       [React] [Node.js] [Express] ...
Tools            [Git] [Docker] [AWS] ...
```

- Skills as bordered inline labels (pill shape with 1px border, no fill).
- Grouped by category.
- Monospace font for the category headers.
- No progress bars. No percentages. No "expert/intermediate" labels.

### Contact Section

- Simple and direct.
- Email (linked), GitHub, LinkedIn.
- Optional: short message encouraging connection.
- No contact form (unless specifically needed).
- Location shown: "Surat, Gujarat, India"

---

## Animation & Interaction

### Philosophy

Animations serve **clarity** — they show what changed, guide attention, and reward interaction. They don't perform.

### Scroll Reveal

- Elements fade in + translate up 16px as they enter viewport.
- Duration: 600ms, easing: cubic-bezier(0.16, 1, 0.3, 1) (ease-out-expo feel).
- Stagger: 100ms between sibling elements.
- Triggered via IntersectionObserver (threshold: 0.1).
- Each element animates ONCE (no re-triggering on scroll up).

### Hover States

- Links: underline slides in from left (width animation).
- Project items: subtle translateX(4px) or background opacity shift.
- Nav items: opacity transition (0.5 → 1).
- Duration: 200-300ms for hover transitions.

### Page Load

- Hero content fades in with staggered delay (name → title → description → links).
- No loading screen. No dramatic entrance.

### What We Don't Do

- No parallax scrolling.
- No scroll-jacking.
- No infinite scroll animations.
- No bouncing elements.
- No typewriter effects.
- No cursor followers.

---

## Responsive Strategy

| Breakpoint | Width   | Behavior                                    |
|------------|---------|----------------------------------------------|
| Mobile     | < 640px | Single column, stacked, hamburger nav        |
| Tablet     | 640-1024px | Two columns where useful, compact spacing |
| Desktop    | > 1024px | Full layout, 12-col grid, generous spacing  |

### Mobile Priorities

- Content first (no decorative elements that push content down).
- Touch targets: minimum 44px.
- Font sizes stay readable (no smaller than 14px body).
- Horizontal scroll: never.

---

## Project Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Section.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── SectionLabel.jsx
│       ├── ProjectCard.jsx
│       ├── ExperienceItem.jsx
│       ├── SkillTag.jsx
│       └── AnimateOnScroll.jsx
├── hooks/
│   └── useScrollReveal.js
├── data/
│   └── content.js          ← All portfolio content (single source of truth)
├── App.jsx
├── main.jsx
└── index.css
```

### Architecture Rules

- All personal content lives in `data/content.js` — never hardcoded in components.
- Components are purely presentational.
- No state management library needed (simple site).
- Custom hook for IntersectionObserver scroll reveal.
- Tailwind for all styling — no CSS modules, no styled-components.

---

## Quality Checklist

Before shipping, the portfolio must pass:

- [ ] Looks custom-designed (not template-like)
- [ ] No fake data anywhere
- [ ] Reads well on mobile
- [ ] Loads fast (< 2s on 3G)
- [ ] Accessible (keyboard nav, screen reader labels, contrast ratios)
- [ ] No horizontal scroll at any breakpoint
- [ ] All links functional
- [ ] Content accurate to resume
- [ ] Typography hierarchy is clear and consistent
- [ ] Animations are subtle and purposeful
