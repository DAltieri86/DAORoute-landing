# DaoRoute Landing Page

Public landing page for DaoRoute, a non-custodial MCP decision layer for AI
agents and DeFi bots.

The page is intentionally simple:

- static HTML and CSS only;
- no build step;
- no secrets;
- ready for GitHub Pages;
- positioned as a controlled pilot, not a public performance launch.

## Files

```text
index.html              Main landing page
styles.css              Responsive styling
sample-output.json      Redacted example MCP response
og-image.svg            Social preview image for link sharing
404.html                GitHub Pages fallback page
.nojekyll               Disables Jekyll processing for static assets
```

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## GitHub Pages Setup

1. Open the repository on GitHub:

   ```text
   https://github.com/DAltieri86/DAORoute-landing
   ```

2. Go to:

   ```text
   Settings -> Pages
   ```

3. Under `Build and deployment`, set:

   ```text
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   ```

4. Push to `main`.

5. Wait for the native `pages build and deployment` check to complete.

No custom GitHub Actions workflow is required for this repository. Keeping the
deployment branch-based avoids duplicate Pages deploy jobs and misleading failed
checks.

The site URL will look like:

```text
https://daltieri86.github.io/DAORoute-landing/
```

## Pilot Access CTA

The current CTA uses email:

```text
softwaretamrsv@gmail.com
```

Pilot requests are intentionally handled by email while access is manually
reviewed. If a form or CRM is added later, replace the `mailto:` URL in
`index.html` with that public URL.

## Marketing Boundaries

The public copy must stay honest:

- controlled pilot, not full public launch;
- multi-source evidence layer, not a raw database marketplace;
- no guaranteed returns;
- no investment advice;
- no custody;
- no transaction signing or broadcasting by DaoRoute;
- no raw database dump access;
- not marketed as a governance prediction or trading signal tool.

