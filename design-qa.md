# Design QA — Hero overlap correction

## Comparison target

- Source visual truth: `C:\Users\Mario\.codex\generated_images\019f8b65-cfd7-7fe2-b50e-0a99bad2b2da\call_F12vn1T5bcqllwa4GIalUp4I.png`
- User-reported defect evidence: `C:\Users\Mario\AppData\Local\Temp\codex-clipboard-d909375f-a476-4555-990a-bb8d2148f8a5.png`
- Corrected hero capture: `.audit/overlap-fix-1289-top-v2.png`
- Corrected lower hero/service capture: `.audit/overlap-fix-1289-service-final.png`
- Corrected mobile capture: `.audit/overlap-fix-mobile-final.png`
- Source pixels: 1486 × 1059 px
- Defect evidence: 1289 × 822 px
- Desktop implementation captures: 1274 × 812 px from a 1289 × 822 CSS viewport; the browser scrollbar accounts for the reduced content width.
- Mobile implementation capture: 375 × 812 px from a 390 × 844 CSS viewport.
- Density normalization: all captures are 1× browser screenshots and were compared at matching aspect ratio.
- State: homepage, light theme, menu closed; desktop repair scene 01 for the top capture and scene 02 for the focused lower capture.

## Full-view comparison evidence

The selected Version 3 mock, the reported overlapping implementation, and both corrected desktop regions were opened in one comparison input. The corrected implementation retains the parts-catalogue direction while separating the headline, image frame, stage index, workshop badge, technical callout, and service selector.

## Focused-region evidence

- Headline/image boundary: at 1289 px, the corrected headline ends 45 px before the image frame. At 1440 px the measured gap is 50 px; at 1180 px it is 41 px.
- Service/image boundary: at 1289, 1440, and 1180 px, the service selector starts 42 px below the image frame and 43 px below the workshop badge.
- Service labels: all six verified labels fit inside their own cells without clipping or forced mid-word breaks.
- Mobile: the stacked layout remains unchanged, uses two service columns, and has no horizontal overflow (`scrollWidth 375`, `clientWidth 375`).

## Findings

- No actionable P0, P1, or P2 findings remain.
- Fonts and typography: the display size was reduced only enough to keep “Meisterservice” inside its grid track; weight, type family, line height, and hierarchy remain faithful.
- Spacing and layout rhythm: the copy track is wider, the image track stays visually dominant, and the service rail now has a deliberate 42 px separation from the hero frame.
- Colors and tokens: unchanged.
- Image quality and asset fidelity: the original high-resolution repair cutouts, cassette asset, logo, and Phosphor service icons remain intact.
- Copy and content: unchanged; all six service destinations remain verified site content.
- Accessibility and interaction: exactly one scene selector is visible per breakpoint; the tested scene button updates `aria-pressed`.
- Browser console warnings/errors: none.

## Comparison history

1. [P1] The display headline crossed into the image frame at laptop widths.
   - Fix: rebalanced the desktop grid from `0.82 / 1.18` to `0.92 / 1.08` and capped the hero display size at `4.9rem`.
   - Post-fix evidence: `.audit/overlap-fix-1289-top-v2.png`; measured gap 45 px.
2. [P1] The floating service selector covered the stage index and workshop badge.
   - Fix: moved the service selector below the frame by reducing its negative margin and preserving a measured 42–43 px gap.
   - Post-fix evidence: `.audit/overlap-fix-1289-service-final.png`.
3. [P2] Narrow service cells clipped “Reparaturen” and “Hol- & Bringservice”.
   - Fix: restored a 700 px rail, reduced icon footprint and internal padding, and removed aggressive mid-word wrapping.
   - Post-fix evidence: `.audit/overlap-fix-1289-service-final.png`.

## Runtime checks

- Desktop geometry checked at 1440, 1289, and 1180 px widths.
- Mobile geometry checked at 390 px.
- Scene 02 interaction: passed; `aria-pressed="true"`.
- Production build: passed.
- Sites worker/package tests: 4 passed, 0 failed.
- Browser console: 0 warnings, 0 errors.

## Remaining P3 polish

- None required.

final result: passed
