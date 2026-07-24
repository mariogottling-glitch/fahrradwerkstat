# Design QA — Homepage section rail

## Comparison target

- User reference: `C:\Users\Mario\AppData\Local\Temp\codex-clipboard-998b4a93-f248-48a3-bc32-837f278b6c20.png`
- Start-state capture: `.audit/section-rail-start-final.png`
- Dark-section capture: `.audit/section-rail-process-final.png`

## Verified result

- The original numbered technical line is now a fixed desktop section navigator with seven homepage stations.
- The active orange marker advances with the current section while the remaining points stay neutral gray.
- Each number is an accessible anchor link and scrolls directly to its associated section.
- The tested `03 Werkstatt` link updated the URL hash, aligned the target below the fixed header, and activated the matching marker.
- The tested `04 Ablauf` state remained fixed and readable over the dark process section.
- At a 1289 px viewport the rail ends at x=46 and the hero copy begins at x=52, leaving a 6 px non-overlapping gap.
- Desktop has no horizontal overflow (`scrollWidth 1274`, `clientWidth 1274`).
- The rail is hidden at tablet/mobile widths; mobile has no horizontal overflow (`scrollWidth 375`, `clientWidth 375`).

## Findings

- No actionable P0, P1, or P2 findings remain.
- The rail retains the thin line, muted numbering, orange dot, and short horizontal accent from the supplied reference.
- The hero repair-scene controls remain independent and unchanged.
- Production build: passed.
- Sites worker/package tests: 4 passed, 0 failed.

final result: passed
