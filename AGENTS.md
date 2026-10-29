# Codex operating instructions — Personal Website

Read `docs/CREATIVE_BRIEF.md`, `docs/EDITORIAL_GUIDE.md`, and `docs/PROJECT_GUIDE.md` before substantial changes. These are the project’s durable specifications. Treat design examples and sample copy as proposals, not approved published content.

## Roles and scope
- Codex implements and tests website changes in this Astro repository. ChatGPT is the thinking, creative-direction, and editorial partner. Notion is the planned private source of truth for idea capture and drafts; it is not yet configured as an integrated publishing system.
- The owner is a nondeveloper working through Codex Cloud on a Mac. Do not require Terminal, local Node.js, VS Code, or manual coding.
- Preserve Darkness's MIT license/attribution and its working Astro foundations. Prefer simple, maintainable, accessible, fast static output over a complex app.
- Start from the latest `main`. Make scoped changes in a separate branch and pull request. Never merge, publish an editorial Note, connect a new service, spend money, or introduce large design changes without explicit approval. Explain the proposed effect in plain English.
- Review rendered layouts and actual interactions at desktop and mobile sizes whenever feasible. Run `npm run astro -- check` and `npm run build` (or the repo’s current equivalent), report results honestly, and do not claim untested features work.
- The current production host is Cloudflare Pages at https://personal-website-alg.pages.dev; approved merges to `main` can automatically deploy. Do not treat a merged PR as a private change.
- Maintain appropriate canonical URLs, sitemap, accurate page metadata, accessible navigation, image handling, and relevant truthful structured data. SEO is a foundation, not an excuse to inflate text.
- Use semantic HTML; provide keyboard/touch equivalents for hover effects, adequate contrast, reduced-motion support, and performance fallbacks for elaborate particle effects.
- If a request contradicts these documents or requires a new product decision, surface the conflict rather than silently changing the concept.

## Visual and content guardrails
- Dark espresso/charcoal, warm cream/muted gold, generous negative space, elegant serif headlines and legible sans-serif UI/body text.
- Calm editorial structure with restrained *discoverable* enchantments: subtle alchemical geometry, tiny interactive details, optional whimsical surprises. Not a Harry Potter imitation, space-themed interface, fake magical stock photography, or busy decorative collage.
- Text-first. Images are optional, not mandatory for Notes or homepage cards.
- Public navigation concept: Notes, Projects, Reading, About; owner identity present but understated. Homepage has a curated mix of strongest Notes, projects and ideas, not an automatic latest-post feed.
- Do not use “Blog” or “Writings” as public section labels; use “Notes.” Technical Astro content paths can remain named `blog` until an approved migration.
- Never fabricate personal stories, quotes, outcomes, research, testimonials, professional credentials, or finished Note content. Placeholder copy must be clearly labeled and not deployed as owner-authored publication.

## Editorial handoff
- Only approved copy enters publication PRs. Keep raw transcript/source separate from edited drafts; avoid committing private transcripts or Notion content to this public repository.
- Notes come in adaptable formats: Field Note, Deep Note, Experiment. The author's spoken voice, nuance, humor, and uncertainty must survive editing.
- For individual Notes use title, description, author, publication date, genuine update date if relevant, topics, format, optional hero imagery, and applicable BlogPosting markup. Distinguish beliefs from established evidence.
- No automatic publication. Prepare previews and await approval before merging.

## Maintenance
Update the relevant docs in the same PR when an approved decision changes. Clearly distinguish decided requirements from open questions. For each PR summarize changed files, checks, preview URL if available, and next single action for the owner.
