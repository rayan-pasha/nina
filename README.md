# NINA — AgenQ landing site

Next.js 15 (App Router) landing page and blog for NINA, AgenQ's in-product
onboarding agent. Tailwind v4 + Framer Motion, no UI library.

## Setup

```bash
npm install
```

## Running

```bash
npm run dev
```

Serves on <http://localhost:3005>. `npm run build` produces the production
build; `npm start` serves it on the same port.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before
deploying — Open Graph and Twitter crawlers reject relative image URLs, so the
social cards need an absolute origin.

## Layout

```
app/            routes — landing page, /blog, /blog/[slug], /documentation
components/     every section and shared piece
lib/            content and configuration, no rendering
public/logos/   investor and partner marks used by BackedBy
content/        source documents for unpublished posts
```

### Content lives in `lib/`

Two files hold everything editable without touching a component:

- **`lib/posts.js`** — the blog. Ordered newest first: `posts[0]` is the
  featured article, the next three fill "Latest articles", and the whole list
  feeds "All articles" and generates `/blog/[slug]`. Adding a post is one
  object. Article bodies are block arrays (`p`, `h2`, `h3`, `ul`, `note`,
  `stats`) and `**bold**` renders as `<strong>`.
- **`lib/walkthroughs.js`** — the two animated product mocks. `STUDIO` drives
  the hero (AgenQ Studio creating a project); `LEDGERLY` drives the "she walks
  users through them" section (a fictional billing tool sending an invoice).
  Both run on the same engine in `components/Walkthrough.js`, so a third demo
  is a third config object.

`lib/links.js` holds every outbound URL in one place.

## Notes

- `components/Walkthrough.js` sizes itself with **container queries**, not
  viewport breakpoints — the hero gives it ~900px and the solution section
  about 630px, and it has to answer to its own box. Its `PACE` constant is a
  single dial for the whole animation timeline.
- Blog cover art is generated SVG (`components/BlogCover.js`), not image files.
- The featured post is a draft transcribed from `content/`; the other three
  are transcribed from the live articles at `agenq.com/blogs` and carry a
  `sourceUrl` back to the published version.
- Everything respects `prefers-reduced-motion`.
