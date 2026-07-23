# Design QA — Brick Line Pattern

**Comparison Target**

- Source visual truth: `C:\Users\Mario\AppData\Local\Temp\codex-clipboard-055cd769-1dec-4587-ba2d-a8ec3ed132f8.png` for the natural masonry proportions and `C:\Users\Mario\AppData\Local\Temp\codex-clipboard-ffbe3c89-d536-45da-bfb3-e366b59ee5f6.png` for the requested charcoal-gray tone.
- Browser-rendered implementation: `.audit/brick-lines-hero-v1.png`, `.audit/brick-lines-desktop-v2.png`, and `.audit/brick-lines-mobile-v2.png`.
- Combined comparison: `.audit/brick-lines-comparison-final.png`.
- State: homepage, light theme, menu closed.
- CSS viewport: 1871 × 1216 px desktop and 390 × 844 px mobile at 1× density. Browser scrollbar reduces captured mobile content width to 375 px.
- Source pixels: 454 × 655 px courtyard photo and 336 × 142 px gray-tone reference. Pattern asset: 960 × 224 SVG viewBox. Desktop implementation: 1871 × 1216 px; mobile implementation: 375 × 812 px.
- Normalization: the masonry photo, gray swatch, and rendered homepage were fitted into one equal-height comparison board. The sources define shape and tone rather than a literal page mockup.

**Findings**

- No actionable P0, P1, or P2 findings remain.
- Typography: hierarchy, wrapping, font weights, and text contrast remain intact. The thin mortar lines pass behind copy without obscuring letterforms.
- Spacing and layout: no page dimensions, grids, gaps, card radii, or section boundaries changed. White, gray, orange, and dark surfaces remain unpatterned.
- Colors and tokens: the pattern uses the requested `#171a18` charcoal at 14% stroke opacity over the existing `#f7f4ee` beige canvas.
- Asset fidelity: `public/assets/textures/courtyard-brick-lines.svg` contains only transparent, slightly irregular mortar paths. The rejected photographic WebP texture was removed completely; there is no fill, noise, brick color, lighting, or material photograph.
- Copy and content: unchanged.
- Responsiveness: desktop uses a 960 × 224 px repeat; mobile scales it to 720 × 168 px for more natural brick proportions. Horizontal overflow is zero at both checked widths.
- Accessibility: text contrast and semantic behavior are unchanged. The decorative pattern is CSS background content and is absent from the accessibility tree.

**Open Questions**

- None.

**Comparison History**

1. Rejected direction: pale photographic brick texture.
   - [P1, visual direction] The raster treatment was too washed out and did not match the requested line-only graphic language.
   - Fix: removed the WebP asset and replaced it with a transparent irregular vector mortar pattern in the site charcoal tone.
   - Post-fix evidence: `.audit/brick-lines-hero-v1.png`, `.audit/brick-lines-mobile-v2.png`, and `.audit/brick-lines-comparison-final.png`.

**Runtime Checks**

- Homepage desktop and mobile rendering checked in the in-app browser.
- Beige canvas patterned; solid section surfaces remain clean.
- Browser console warnings/errors: none.
- Production build: passed.
- Sites worker/package tests: 4 passed, 0 failed.

**Implementation Checklist**

- [x] Remove the photographic background texture
- [x] Draw only natural, slightly irregular brick joints
- [x] Use the requested charcoal-gray tone
- [x] Keep all non-beige surfaces clean
- [x] Tune brick scale separately for desktop and mobile
- [x] Validate overflow, console, build, and tests

**Follow-up Polish**

- Optional P3: stroke opacity can be adjusted in one place inside the SVG if a slightly quieter or stronger presence is desired later.

final result: passed
