# Ether Solutions · Design Language

## Philosophy: Pentagram Dark

Editorial authority meets dark mode. Derived from two design traditions:

- **Pentagram / Michael Bierut** (style 01): typographic hierarchy as primary visual language, single accent color, content-first clarity
- **Müller-Brockmann Swiss Grid** (style 10): mathematical precision, zero decoration, objective beauty through constraint

The result: black + near-black backgrounds with a single vermillion red accent. Space Grotesk for its geometric rationality. Instrument Serif for warmth and editorial character. Zero border-radius. Zero gradients. Numbered services. Vertical accent rule in the hero. Solid-fill CTA button.

### Anti-slop checklist

| Avoid | Use instead |
|-------|-------------|
| Purple/gradient backgrounds | Pure black (#050505) + near-black (#0C0C0C) section alternation |
| Rounded cards with left-border accent | Flat grid items with bottom-border separators |
| Emoji as icons | Bold numbered markers (01-06) in accent color |
| Inter/Roboto/system font | Space Grotesk (geometric sans) + Instrument Serif (display) |
| Decorative shadows | Structural borders only (2px top borders, 1px dividers) |
| Border-radius on anything | Zero radius everywhere |
| Warm brown/amber (old palette) | Vermillion red (#D4380D) single punch color |

## File Structure

```
design-language/
  README.md            This document
  tokens.css           All CSS custom properties (colors, type, spacing)
  components.css       Component classes composed from tokens

css/
  style.css            Compiled production stylesheet (tokens + components + fonts)

index.html             Production site (references css/style.css)
```

## Token Reference

### Color Palette

Dark mode primary palette:

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#050505` | Page background |
| `--color-bg-alt` | `#0C0C0C` | Alternating sections (team) |
| `--color-ink` | `#EDEDED` | Primary text |
| `--color-ink-muted` | `#8A8A8A` | Descriptions, secondary |
| `--color-ink-light` | `#555555` | Tertiary, social links |
| `--color-accent` | `#D4380D` | Vermillion: labels, numbers, CTA, links |
| `--color-accent-hover` | `#E84D23` | Hover/active state |
| `--color-accent-light` | `#3A1A0E` | Selection background |

Structural:

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-nav` | `#000000` | Nav bar background |
| `--color-nav-border` | `#1A1A1A` | Nav bottom border |
| `--color-border` | `#1A1A1A` | Service item dividers |
| `--color-rule` | `#2A2A2A` | Stronger rules (services top border) |

Dark section (contact/footer):

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark-bg` | `#000000` | Pure black for contact/footer |
| `--color-dark-text` | `#EDEDED` | Text on dark sections |
| `--color-dark-muted` | `#555555` | Footer copyright, social links |
| `--color-dark-border` | `#141414` | Section/footer top borders |

### Typography

| Role | Font | Fallback |
|------|------|----------|
| Display (headings) | Instrument Serif | Georgia, Times New Roman, serif |
| Body | Space Grotesk | system-ui, BlinkMacSystemFont, Segoe UI |
| Labels (mono) | JetBrains Mono | SF Mono, Fira Code, monospace |

### Key Design Decisions

1. **Logo in white via CSS filter** (`brightness(0) invert(1)`) rather than needing a white version of the logo PNG
2. **Vertical accent rule** (2px x 48px) in the hero instead of horizontal
3. **Solid-fill red CTA button** instead of outlined
4. **Numbered service items** (01-06) with grid layout for editorial clarity
5. **Hero bottom border** (2px) for editorial sectioning
6. **Contact section top border** (2px) for visual separation
7. **Team photos**: `grayscale(100%) contrast(1.15) brightness(0.85)`, dropping grayscale on hover

## Revisions

### v2.0 (2026-05-09): Pentagram Dark
Complete redesign from warm-brown light theme to Pentagram Dark. New font stack (Space Grotesk replaces Geist Sans). Numbered services. Vertical hero rule. Solid CTA. Dark-first color system.

### v1.0 (2026-05-09): Warm Brown
Initial design language. Warm off-white backgrounds, brown/amber accents. Geist Sans body. Instrument Serif display. JetBrains Mono labels. Outlined CTA button. Horizontal hero rule.