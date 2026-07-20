# Deployment

The site is built as static files and published to GitHub Pages from GitHub
Actions.

## One-time repository setting

In the GitHub repository:

```text
Settings → Pages → Build and deployment → Source: GitHub Actions
```

The organization site is served from the domain root, so Vite uses `/` as its
base path. If the repository is moved to a project path such as
`example.github.io/aiforpeace/`, update the Vite base configuration before
deploying.

## Automatic release

A push to `master` triggers [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).
The workflow:

1. checks out the repository;
2. installs Node.js 20;
3. runs `npm ci`;
4. runs `npm run build`;
5. uploads `dist/` as the Pages artifact;
6. deploys the artifact to the `github-pages` environment.

Deployments can also be started manually from **Actions → Deploy to GitHub
Pages → Run workflow**.

## Release checklist

Run locally:

```bash
npm ci
npm run lint
npm run build
npm run preview
```

Then verify:

- [ ] Home page loads at `/`.
- [ ] First-edition archive loads at `/first-edition`.
- [ ] Refreshing `/first-edition` does not return a 404.
- [ ] Submission form opens the correct form.
- [ ] Contact email is correct.
- [ ] Current deadline agrees across the page.
- [ ] Portraits and the favicon load without mixed-content or 404 errors.
- [ ] Light and dark themes work.
- [ ] Mobile navigation opens, closes, and follows links.
- [ ] No console errors appear.

## Why the build creates route entry files

GitHub Pages does not know about React Router routes. The build script copies
`dist/index.html` to `dist/first-edition/index.html`, so direct visits and
refreshes return the archive application with HTTP 200. It also writes
`dist/404.html` as a fallback for unknown client-side routes.

Do not remove this part of the build script unless routing or hosting changes:

```json
"build": "tsc -b && vite build && mkdir -p dist/first-edition && cp dist/index.html dist/first-edition/index.html && cp dist/index.html dist/404.html"
```

## Troubleshooting

### The workflow cannot deploy

Confirm that Pages is set to **GitHub Actions**, then check that the workflow has
these permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

### Assets work locally but not on GitHub Pages

Check whether the site is hosted at the domain root or under a repository path.
The current configuration assumes the root. Also confirm that public asset URLs
begin with `/`, for example `/img/speakers/name.jpg`.

### A route returns 404 after refresh

Open the workflow artifact and confirm that `index.html`,
`first-edition/index.html`, and `404.html` are present in `dist/`.

### The old favicon remains visible

Favicons are cached aggressively. Change the version query in `index.html`, for
example from `/favicon.svg?v=2` to `/favicon.svg?v=3`, then redeploy.
