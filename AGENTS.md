# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable design decision

- The user selected the first generated direction (“Precision Editorial Workshop”) as the visual target.
- Preserve its warm off-white canvas, charcoal typography, burnt-orange actions, asymmetric image-led hero, fine technical rules, generous whitespace, compact service selector, and restrained rounded surfaces.
- Replace any mock-generated facts with the verified content from diefahrradmeisterei.de. The coded site must never invent reviews, staff, awards, partners, prices, contact details, guarantees, statistics, or opening hours.

## GitHub publishing

- Keep `mariogottling-glitch/fahrradwerkstat` synchronized with this prototype: after each completed and verified change, commit and push the updated project source unless the user explicitly asks not to publish that change.

## Deployment

- The production site is deployed through Vercel from the GitHub repository. Preserve `vercel.json`, the `dist/client` output directory, and SPA fallback routing so both direct visits and client-side routes work after every deployment.
