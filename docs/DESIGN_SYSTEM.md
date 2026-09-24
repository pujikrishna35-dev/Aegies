# Aegis Overseas Design System & Brand Guidelines ✨

## Visual Personality
- **Editorial Luxury**: Crisp serif headlines paired with ultra-clean modern sans-serif body text.
- **Cinematic Atmosphere**: Moody deep navy night skies overlaid with golden flight arcs, world-grid coordinates, and glowing points of light.
- **Student-Centric Warmth**: Natural imagery of students exploring university cities, authentic quotes, and clear, welcoming step-by-step guidance.

## Color Palette

| Token | Hex | Role | Usage |
|---|---|---|---|
| `--color-navy-950` | `#050B17` | Deepest Background | Footer, dark section contrast |
| `--color-navy-900` | `#071228` | Primary Brand Navy | Hero section, headers, dark cards |
| `--color-navy-800` | `#0D1F3F` | Secondary Navy | Form cards, borders, hover states |
| `--color-gold-500` | `#C5A059` | Primary Accent Gold | Buttons, badges, key phrase highlights |
| `--color-gold-400` | `#E5C378` | Highlight Gold | Gradient text, glowing nodes, star ratings |
| `--color-ivory-50` | `#FDFBF7` | Light Background | Trust bar, journey section, cards |
| `--color-sky-100`  | `#E8F1FA` | Soft Sky Tint | Tags, subtle highlights |

## Typography Combination

- **Headings**: `Playfair Display` or `DM Serif Display`
  - Large display headings with relaxed tracking and luxury feel.
  - Used for `Your Future Has No Borders.`, `Explore Your Dream Destination`.
- **Body**: `Inter` or `Manrope`
  - High legibility at 14px - 16px.
  - Generous line height (1.6 - 1.7) for relaxed reading.

## UI Primitives & Interactions
- **Floating Destination Cards**: Subtle continuous Y-axis hover float (`animation: float 6s ease-in-out infinite`), frosted glass background (`backdrop-blur-md bg-white/10`).
- **Connected Journey Dots**: Fine champagne dotted line (`border-dashed border-gold-300`) with step counter circular nodes.
- **Micro-interactions**: Smooth scale transforms on cards (`hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`).
