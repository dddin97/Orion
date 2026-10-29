# Phase 8 Changelog — Deployment Frontend

- Added Vercel configuration for a Vite production build with `dist` output.
- Added SPA rewrite for direct route access and refreshes.
- Added basic response security headers and long-lived cache policy for hashed build assets.
- Registered `/kebijakan-privasi` and `/syarat-penggunaan` in React Router; the page components already existed but were not present in the inspected route map.
- Added `robots.txt` and a sitemap for the currently linked Vercel project URL, clearly treated as temporary until a custom domain is chosen.
- Added a local post-build smoke-check script for output files, local asset references, SPA rewrite config, and legal route registration.
- Added deployment, HTTPS/custom-domain, preview validation, and rollback documentation.

No dependencies were added. No production deployment or GitHub push was performed by this package creation.
