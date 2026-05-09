# Ether Solutions

Public website for [ethersolutions.ca](https://ethersolutions.ca).

## Design Language

The site uses a custom design language documented in `design-language/`:

- **tokens.css** -- CSS custom properties (colors, typography, spacing, shadows, transitions)
- **components.css** -- Component classes composed from tokens
- **README.md** -- Philosophy, anti-slop checklist, token summary

### Philosophy

Build Studio (constraint + authority) crossed with Information Architects (content-first clarity).

One detail at 120%. Restraint everywhere else. The whitespace is the design.

### Key Decisions

| Element | Choice | Reason |
|---------|--------|--------|
| Accent color | #8B5E3C (warm brown) | From logo palette. Structure, earth, reliability. |
| Display font | Instrument Serif | Authoritative without shouting. Not Inter/Roboto. |
| Body font | Geist Sans | Clean, professional, not烂大街. |
| Label font | JetBrains Mono | Precision. Technical. Small caps tracking. |
| Service layout | Stacked list, not cards | Equal weight, no decorative containers. |
| Hero | Logo + rule + tagline | No stock photo. Whitespace carries confidence. |

## Development

Static HTML/CSS. No build step. No JavaScript framework.

Font loading via Google Fonts CDN and jsDelivr (Geist Sans).

To preview locally:

```bash
cd /path/to/nothingmn.github.io
python3 -m http.server 8000
```

Then open `http://localhost:8000`.