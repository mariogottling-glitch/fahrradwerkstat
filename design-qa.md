# Design QA — Parts Catalogue Hero, Version 3

## Comparison target

- Source visual truth: `C:\Users\Mario\.codex\generated_images\019f8b65-cfd7-7fe2-b50e-0a99bad2b2da\call_F12vn1T5bcqllwa4GIalUp4I.png`
- Final desktop implementation: `.audit/homepage-version3-desktop-rail-scene1.png`
- Final mobile implementation: `.audit/homepage-version3-mobile-rail-final.png`
- Source pixels: 1486 × 1059 px
- Desktop capture: 1425 × 1013 px from a 1440 × 1024 browser viewport
- Mobile capture: 375 × 812 px from a 390 × 844 browser viewport
- State: homepage, light theme, repair scene 01, desktop navigation visible

## Full-view evidence

The reference and final desktop implementation were opened together in one comparison input at matching aspect ratio and interaction state. The final implementation preserves the reference hierarchy and visual language: large top-left workshop mark, editorial navigation, functional 01/02/03 scene rail, oversized headline, asymmetric repair cutout, edge-anchored cassette, technical callout, and a compact rounded service rail crossing the lower edge of the hero visual.

## Focused-region evidence

- Header: the real logo is enlarged substantially on desktop while remaining contained and readable on mobile.
- Hero visual: all three repair scenes keep hands attached to the right edge of the framed stage; no detached or floating limbs appear.
- Service rail: six verified service destinations remain available and are compacted into the catalogue-style floating rail without inventing new offerings.
- Decorative layer: the rejected brick texture is fully removed. The remaining graphics are real bicycle-component assets and restrained technical rules.

## Findings

- No P0, P1, or P2 issues remain.
- Typography and hierarchy closely match the selected mock. Existing verified copy is preserved.
- Desktop spacing is slightly more compact than the generated reference, which keeps the full conversion content inside the common laptop viewport without weakening the intended composition.
- The floating rail uses six verified services rather than the four generic mock labels. This is an intentional content-fidelity adjustment.
- Mobile falls back to the established stacked layout: the catalogue side rail and lower callout are removed, one compact scene control remains, and horizontal overflow is zero (`scrollWidth 375`, `clientWidth 375`).
- Console warnings/errors: none.

## Interaction checks

- Desktop 01/02/03 scene selector: passed; one visible selector at the breakpoint and `aria-pressed` updates correctly.
- Mobile scene selector: passed; one visible selector at the breakpoint.
- Automatic repair slideshow: retained.
- Primary booking and service links: retained.
- Production build: passed.
- Sites worker/package tests: 4 passed, 0 failed.
- Vercel production deployment: verified with the final CSS bundle.

## Comparison history

1. Initial implementation added the catalogue rail, edge component, and callout but retained a large below-hero service section.
2. Desktop logo was enlarged after the first browser capture showed insufficient presence.
3. Duplicate desktop scene controls were removed while retaining the compact control on mobile.
4. The verified service list was converted into the floating rounded hero rail from the selected reference.
5. Final desktop and mobile captures were rechecked after Vercel deployed the last bundle.

## Remaining P3 polish

- None required for handoff. Further changes should be preference-led rather than corrective.

final result: passed
