# DaoRoute Landing

Public landing page for **DaoRoute**, a non-custodial MCP decision layer for AI
agents and DeFi automation builders.

Live site:

```text
https://www.daoroute.com/
```

GitHub Pages fallback:

```text
https://daltieri86.github.io/DAORoute-landing/
```

Public pilot documentation:

```text
https://github.com/DAltieri86/DAORoute-mcp
```

DaoRoute is currently positioned as a **controlled pilot**, not a public
performance product. The landing page is designed to convert qualified builders
into pilot access requests while keeping the product boundaries clear.

## Positioning

DaoRoute helps AI agents and DeFi bots evaluate stablecoin allocation routes
through:

- multi-source data evidence;
- validation evidence with baseline comparisons and pilot-readiness boundaries;
- risk-adjusted pool and protocol context;
- live security gates;
- non-custodial execution metadata;
- short-lived signed attestations;
- agent-readable MCP responses.

The public pilot currently presents four tool categories:

- `get_market_snapshot` for aggregate market/data coverage;
- `get_pool_evidence` for one-pool evidence lookups;
- `get_protocol_security_status` for live safety state;
- `get_optimal_allocation` for the final allocation decision packet.

The public message is intentionally specific: DaoRoute packages decision
evidence. It does not custody funds, sign transactions, broadcast transactions,
or guarantee yields.

## Repository Scope

This repository contains only the public landing page and redacted sample
materials.

It does **not** contain:

- model weights;
- ingestion pipelines;
- private databases;
- production credentials;
- backend source code;
- trading or allocation engine internals.

## Files

```text
index.html          Main landing page
styles.css          Responsive styling
sample-output.json  Redacted example MCP response
og-image.svg        Social preview image
404.html            GitHub Pages fallback
pilot-form.js       Custom pilot request form integration
CNAME               GitHub Pages custom domain
docs/               Public setup notes for the pilot form
.nojekyll           Static GitHub Pages marker
```

## Content Rules

Keep the public copy disciplined:

- say **controlled pilot**, not mass public launch;
- say **decision evidence**, not guaranteed alpha;
- say **validation evidence**, not public performance claim;
- say **non-custodial**, not automated fund management;
- say **aggregate evidence**, not raw database access;
- say **execution metadata**, not transaction execution;
- avoid performance promises, APY guarantees, or investment advice.

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## GitHub Pages Deployment

This repository uses GitHub Pages branch deployment.

Recommended settings:

```text
Settings -> Pages
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

No custom GitHub Actions workflow is required. Avoid adding a duplicate Pages
workflow unless the deployment model changes.

Custom domain:

```text
www.daoroute.com
```

DNS target for the `www` CNAME:

```text
daltieri86.github.io
```

The apex domain `daoroute.com` should point to GitHub Pages A records and
redirect to `www.daoroute.com` through GitHub Pages once DNS and HTTPS finish
propagating.

## Pilot Access

Pilot requests are handled by the custom form in `index.html`.

The form posts to Google Apps Script after `pilot-form.js` is configured with a
Web App `/exec` URL. Until then, it opens a prefilled email fallback to:

```text
softwaretamrsv@gmail.com
```

Form setup instructions:

```text
docs/PILOT_FORM_SETUP.md
```

Requests are reviewed manually. Approved users receive the MCP endpoint, pilot
API key, quickstart, example requests, and response interpretation guide.

## Maintenance Checklist

Before publishing changes:

```bash
python3 -m json.tool sample-output.json
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

class Parser(HTMLParser):
    pass

for name in ("index.html", "404.html"):
    parser = Parser()
    parser.feed(Path(name).read_text())
    print(f"{name}: html parse ok")
PY
```

Also verify that no private email, API key, model artifact, database dump, or
backend path has been added accidentally.

## Public Repositories

Use this landing page for marketing and conversion.

Use the separate public MCP pilot repository for integration documentation,
marketplace metadata, sample requests, and API key policy. The private engine
remains closed.

```text
https://github.com/DAltieri86/DAORoute-mcp
```
