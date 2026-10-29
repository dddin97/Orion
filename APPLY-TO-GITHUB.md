# Apply Phase 8 to your Orion repository

This is an **overlay package**, not a full repository export. Do not replace your whole repository with this folder.

1. Ensure Phase 7 changes are committed and `git status` is clean.
2. Extract this ZIP into a temporary folder.
3. Copy the contents of `orion-project/` into the root of your cloned `Orion` repository. Review changes before overwriting any local modifications.
4. Confirm these files are present:
   - `vercel.json`
   - `public/robots.txt` and `public/sitemap.xml` (use the current Vercel URL until a custom domain is selected)
   - `scripts/check-deployment.mjs`
   - `docs/PHASE-8-DEPLOYMENT.md`
   - `src/routes/AppRoutes.jsx`
5. Run:

```bash
npm ci
npm run lint
npm run build
node scripts/check-deployment.mjs
npm run preview
```

6. Manually test the URL list in `docs/PHASE-8-DEPLOYMENT.md`.
7. If all tests pass, commit and push:

```bash
git add vercel.json scripts/check-deployment.mjs docs/PHASE-8-DEPLOYMENT.md src/routes/AppRoutes.jsx public/robots.txt public/sitemap.xml APPLY-TO-GITHUB.md PHASE-8-CHANGELOG.md
git commit -m "feat: prepare ShowMarket frontend deployment"
git push
```

If you are using a feature branch, push that branch and test the Vercel Preview Deployment before merging to `main`.
