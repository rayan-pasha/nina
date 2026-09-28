# Content backlog

Everything that used to say "Coming soon" on the site, removed on 2026-09-28 so
visitors don't meet unfinished pages. This is the record of what was there, so
it can be put back deliberately rather than remembered from scratch.

Restoring any item is the same two steps: add the entry back to `lib/footer.js`
(or `lib/nav.js`), and create the route. The removed files are in git history —
`git show 3bbca6b:components/PlaceholderPage.js` brings back the stub component
if a placeholder is ever wanted again.

## Pages that existed as placeholders and were removed

These had routes that rendered a title and the words "Coming soon". They were
`noindex` and were never in the sitemap, so search engines never carried them.

| Page | Route | What it needs |
|---|---|---|
| Why AgenQ | `/resources/why-agenq` | An angle distinct from the home page. The raw argument already exists in `components/Compare.js` (Without/With AgenQ) and the data arrays in `Problem.js`, `Solution.js`, `MeetNina.js`, `Setup.js` — but a page that only restates the home page isn't worth having. Decide what it says that the home page doesn't. **Was in the Resources nav dropdown.** |
| Security | `/resources/security` | Four facts nobody has supplied: certifications (SOC 2? ISO 27001?), the subprocessor list, data residency regions, and whether SSO/SAML ships today or is roadmap. The structure is ready — `BOUNDARIES` in `lib/product.js` and the six-article "Security and compliance" outline in `lib/docs.js` — so this is the cheapest of the four once the facts exist. |
| AgenQ vs WalkMe | `/resources/agenq-vs-walkme` | Specific, defensible claims about WalkMe. The core argument is already written: the copilot vs digital-adoption-platform vs execution-layer distinction in the FAQ of the Canada AI post (`lib/posts.js`), now also on `/resources/faq`. WalkMe is a DAP, so that answer is the spine of the page. |
| AgenQ vs Agentic Browsers | `/resources/agenq-vs-agentic-browsers` | Same: needs real claims about agentic browsers. Same spine. |

## Footer entries removed

Fourteen entries that rendered as muted text with a "Coming soon" tag. None had
routes. Two whole columns disappeared as a result.

**Solutions column** — three entries, kept alongside the six real solution pages:

- Vertical SaaS
- Internal tools
- Product-led growth

**Compare column** — removed entirely. Held the two comparison pages above plus
three unwritten entries:

- Guided steps vs product tours
- Docs vs in-app guidance
- Live training vs self-serve

**Glossary column** — removed entirely; all six were unwritten. Worth building
eventually: these are terms buyers actually search, so each is a short
definition page with real SEO value.

- In-product onboarding
- Time to value
- Activation rate
- Product adoption
- Agentic AI
- Support deflection

**Company column** — reduced to Privacy Policy alone:

- About
- Careers

## Not removed, and why

**The Documentation page** (`/documentation`) lists 50 article titles, none of
which have an `href`; each renders a small "Soon" tag. Hiding them would empty
the page completely, since there are no written articles at all — so they were
left alone. The page currently works as a table of contents that signals scope.
Worth revisiting: either write the articles, or cut the list down to the ones
that will exist soonest. The "Start here" cards at the top (`POPULAR` in
`lib/docs.js`) are likewise unlinked.

## Also outstanding

- **Terms of Service** — no route, never had one. Cheap to build now that
  `components/LegalPage.js` exists: it takes a content file in the shape of
  `lib/privacy.js`. Needs legal review, not writing.
- **Privacy policy corrections** — four things to confirm and fold in: the
  registered legal entity name, the Google Analytics retention period, whether
  HubSpot's cookie consent banner is enabled, and whether to move the contact
  address to `privacy@agenq.com`.
- **`studio.agenq.com` privacy policy** — `/privacy` states the product is
  covered separately by the customer agreement. If no such document exists,
  that's a gap.
