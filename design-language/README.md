# Ether Solutions · Design Language

> Philosophy: Build Studio (constraint + authority) crossed with Information Architects (content-first clarity). One detail at 120%. Restraint everywhere else.

## Design Direction

The previous site used a generic Bootstrap "Agency" template with yellow-gold accent (#fed136), Kaushan Script decorative font, Font Awesome circle icons, stock photography, and uppercase section headings. It said "installed a template," not "we build serious things."

This design language replaces that with a vocabulary of **quiet authority**. The whitespace is the design. The logo carries the brand. The content speaks for itself.

## Anti-Slop Checklist

What we removed and why:

| Pattern | Why removed |
|---------|------------|
| Font Awesome circle+icon stacks | Generic template decoration. No icon carries meaningful information here. |
| Kaushan Script brand font | Decorative script on a consultancy says "party planner," not "strategic partner." |
| Yellow/gold primary (#fed136) | Classic Agency template default. No connection to the brand. |
| Uppercase section headings ("SERVICES", "TEAM") | Shouting at the reader. Lowercase with tracking is authoritative. |
| Stock photo hero background | Adds no information. The whitespace communicates confidence. |
| Rounded team photos with thick white border | Dated template pattern. Subtle grayscale is more professional. |
| Bootstrap 3-column card grid | Uniform cards suggest uniform (generic) content. A list respects each service's equal weight without forcing them into visual containers. |
| Gradient buttons | Aggressive. A bordered link is more refined. |
| Card left-border accent | AI slop pattern par excellence. |
| Circular social icon buttons with dark background | Template decoration. A text link is cleaner. |

## Files

- **tokens.css** -- CSS custom properties: colors, typography scale, spacing, shadows, transitions. Import this first.
- **components.css** -- Component classes composed from tokens. The actual layout and visual rules.

## Token Summary

### Colors

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-bg` | `#FAFAF8` | Warm off-white. Never pure white. |
| `--color-ink` | `#1A1A1A` | Primary text. Softer than black. |
| `--color-ink-muted` | `#6B6B6B` | Secondary text, descriptions. |
| `--color-accent` | `#8B5E3C` | Warm brown/amber. From logo palette. Structure, earth, reliability. |
| `--color-accent-light` | `#D4C4B0` | Light tint for backgrounds, dividers. |
| `--color-nav` | `#111111` | Dark navigation bar. |
| `--color-border` | `#E8E5E0` | Subtle warm dividers. |

### Typography

| Role | Family | Weight |
|------|--------|--------|
| Display (headings) | Instrument Serif | Regular (400) |
| Body | Geist Sans | Regular / Medium |
| Mono (labels) | JetBrains Mono | Regular |

### Spacing

8px base grid. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128px.

### The 120% Detail

The hero section: logo rendered large and confident at center, a single thin rule line beneath, tagline in monospaced small caps. That's the one moment of deliberate visual weight. Everything else is restraint.

## Content Principles

1. **No icons without information.** If an icon doesn't communicate something the text doesn't, it doesn't earn its place.
2. **No decoration.** Every element serves content. Whitespace serves content too.
3. **Service items as a list, not cards.** Equal textual weight, thin top border separator, no container.
4. **Mono-spaced labels.** Section labels and roles use JetBrains Mono with letter-spacing. This says "precision" without saying it.
5. **One accent, used sparingly.** The warm brown appears in the hero rule, section labels, links, and hover states. Nowhere else.

## Bridges to Other Contexts

This design language can be adapted for:

- **Dark backgrounds** (carousel slides, PDF decks): Swap `--color-bg` / `--color-ink` and use the `--color-dark-*` tokens. See `.section--dark` components.
- **Print**: Increase font sizes 20%, remove hover states, ensure 300dpi images.
- **Email**: Flatten to tables, inline styles, Geist Sans fallback to `-apple-system`.