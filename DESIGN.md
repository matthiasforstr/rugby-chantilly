# Design System Strategy: Chateau Athleticism — Rugby Chantilly

## 1. Overview & Creative North Star
**Creative North Star: "The Heritage Tactician"**

This design system is a collision of storied tradition and elite performance. It moves away from the "generic sports template" by leaning into a high-end editorial aesthetic. We treat the digital interface like a bespoke rugby kit or a gallery program: it is heavy, intentional, and authoritative. 

To break the "template" look, we utilize **Intentional Asymmetry**. Layouts should feel like an editorial spread—heavy display typography pushed to the edges, overlapping image treatments that break container boundaries, and a reliance on tonal depth rather than structural lines. This system doesn't just display information; it archives a legacy while signaling a high-performance future.

---

## 2. Colors & The Surface Manifesto

The palette is anchored by the deep `primary` (#002c13) of the forest and the aggressive `secondary` (#b6171e) of the pitch.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. A "Chateau" aesthetic is seamless. Boundaries must be defined solely through background color shifts. For example, a section using `surface-container-low` (#f4f4ef) sitting against a `surface` (#fafaf5) background provides a sophisticated, architectural transition that a border cannot replicate.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of heavy vellum.
*   **Lowest Tier (`surface-container-lowest`):** Used for primary content cards or floating "hero" modules to provide maximum lift.
*   **Highest Tier (`surface-container-highest`):** Used for utility bars or "deep" background elements that sit furthest from the user.
*   **The Layering Rule:** An inner container must always be a minimum of one "tier" different from its parent to define its importance without a stroke.

### The "Glass & Gradient" Rule
To elevate the "High-Performance" feel, use **Glassmorphism** for floating navigation or overlay stats. Use a semi-transparent `surface` color with a `backdrop-blur` of 20px. 
*   **Signature Texture:** For hero backgrounds or CTAs, use a subtle radial gradient transitioning from `primary` (#002c13) to `primary_container` (#014421). This adds a "silk-screen" depth that prevents the green from feeling flat or digital.

---

## 3. Typography: The Space Grotesk Authority

We use **Space Grotesk** exclusively. Its monospaced DNA suggests technical precision, while its wide apertures feel premium and modern.

*   **Display (lg/md):** These are your "Club Pillars." Use `display-lg` (3.5rem) with tight tracking (-0.02em). It should feel massive, nearly touching the edges of the screen.
*   **Headline (lg/md):** Reserved for section titles. Pair these with `secondary` (#b6171e) accents to draw the eye.
*   **Body (lg/md):** Set in `on_surface` (#1a1c19). Ensure line-height is generous (1.6) to maintain the "Editorial" breathing room.
*   **Labels (md/sm):** Use these for "Technical Data" (player stats, dates). Always use All-Caps with +0.05em letter spacing to evoke the feel of a vintage clubhouse plaque.

---

## 4. Elevation & Depth: Tonal Layering

We do not use shadows to mimic light; we use tone to mimic weight.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#eeeee9) section. The slight delta in hex value creates a "soft lift" that feels integrated into the architecture.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a "Ghost Shadow": `color: on_surface`, `opacity: 6%`, `blur: 40px`, `y-offset: 12px`. It must feel like an ambient glow, not a drop shadow.
*   **The Ghost Border Fallback:** If accessibility requires a container edge, use `outline_variant` (#c0c9be) at **15% opacity**. This creates a "whisper" of a line that disappears upon glance but assists the eye when needed.

---

## 5. Components

### Buttons: The "Kit" Variants
*   **Primary:** `primary` background with `on_primary` text. Use `rounded-md` (0.375rem). The hover state should transition to `primary_container`.
*   **Secondary:** `secondary` background. This is the "Match Day" button—high energy, high contrast.
*   **Tertiary:** No background, no border. Use `label-md` uppercase text with a small `secondary` dot to the left to indicate action.

### Cards & Lists: The No-Divider Standard
*   **Standard:** Strictly forbid divider lines between list items. Use the `spacing-4` (1.4rem) scale to create "active white space." 
*   **Stat Cards:** Use `surface-container-low` with a `secondary` top-accent bar (2px) to signify elite performance metrics.

### Inputs: The Architectural Field
*   **Fields:** Use `surface_variant` with a bottom-only "Ghost Border." Labels sit inside the field in `label-sm` to maintain a compact, technical look.

### Additional Component: The "Match-Tape" Chip
*   **Chips:** Use `tertiary_fixed` (#ffdea5) with `on_tertiary_fixed` (#261900) for status indicators. This "old gold" color adds a sense of trophy-room heritage to modern status tags.

---

## 6. Do's and Don'ts

### Do:
*   **Overhang Elements:** Let images of players or the "Chateau" architecture bleed off the grid or overlap between two background color sections.
*   **Use Wide Spacing:** Utilize `spacing-16` (5.5rem) and `spacing-20` (7rem) to separate major content blocks. Luxury is defined by the space you *don't* use.
*   **Monochromatic Text:** Keep 90% of text in `on_surface`. Use `secondary` (red) only for critical "Pulse" moments (Live scores, CTA buttons).

### Don't:
*   **Never use 100% Black:** Use `primary_fixed_variant` (#14512d) for deep darks to keep the "Forest Green" soul alive in the shadows.
*   **No Rounded-Full Pill Buttons:** Stick to `rounded-md` or `rounded-lg`. Circular "pill" buttons feel too "consumer-tech" and lack the rugged, structural feel of a rugby club.
*   **Avoid Symmetry:** If you have a two-column layout, try a 60/40 split instead of 50/50. It creates a more dynamic, editorial flow.

---
*Document produced for the Rugby Chantilly site. Follow these constraints to maintain the integrity of the Heritage Design System.*