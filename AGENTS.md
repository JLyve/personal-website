# Codex operating instructions -- Personal Website

Read `docs/PROJECT_GUIDE.md`, `docs/CREATIVE_BRIEF.md`, and `docs/EDITORIAL_GUIDE.md` before substantial changes. Read `docs/TECHNICAL_AUDIT_ROADMAP.md` before launch-readiness work, publishing the first Note, or changing search visibility. These are the project's durable specifications. Treat design examples, private working directions, and sample copy as proposals unless the relevant GitHub document identifies them as approved.

## Roles and scope

- Codex implements and tests website changes in this Astro repository. ChatGPT is the thinking, creative-direction, and editorial partner.
- The private Notion project workspace contains an Idea Inbox, a Living Creative Direction document, and Session Synopses. These records support private thinking and editorial development, but they do not automatically authorize website changes.
- There is no automatic publishing or synchronization pipeline between Notion, Codex, GitHub, or Cloudflare. Never fetch, copy, publish, or commit private Notion material without explicit authorization.
- The owner is a nondeveloper working through Codex Cloud on a Mac. Do not require Terminal, local Node.js, VS Code, or manual coding.
- Preserve Darkness's MIT license and attribution and its working Astro foundations. Prefer simple, maintainable, accessible, fast static output over a complex app.
- Start from the latest `main`. Make scoped changes in a separate branch and pull request.
- Never merge, publish an editorial Note, connect a new service, spend money, or introduce large design changes without explicit approval. Explain the proposed effect in plain English.
- Review rendered layouts and actual interactions at desktop and mobile sizes whenever feasible.
- Run `npm run astro -- check` and `npm run build`, or the repository's current equivalents. Report results honestly and do not claim untested features work.
- The current production host is Cloudflare Pages at `https://personal-website-alg.pages.dev`. Approved merges to `main` can automatically deploy. Do not treat a merged pull request as a private change.
- Keep the pre-launch search lock in `site.config.mjs` disabled (`SITE_INDEXING_ENABLED = false`) until the owner explicitly approves making the site crawlable and indexable. Enabling it is a launch action requiring its own reviewed pull request.
- Treat the mandatory launch gates in `docs/TECHNICAL_AUDIT_ROADMAP.md` as blocking requirements. Do not enable indexing, submit a sitemap, or describe the site as launch-ready until those gates are complete and verified.
- Maintain appropriate canonical URLs, sitemap, accurate page metadata, accessible navigation, image handling, and relevant truthful structured data. SEO is a foundation, not an excuse to inflate text.
- Use semantic HTML. Provide keyboard and touch equivalents for hover effects, adequate contrast, reduced-motion support, and performance fallbacks for elaborate particle effects.
- If a request contradicts the project documents or requires a new product decision, surface the conflict rather than silently changing the concept.

## Decision authority and private working records

Use each source for one job.

1. **`docs/PROJECT_GUIDE.md`** governs the workflow, source hierarchy, approval handoff, review process, and publishing boundary.
2. **`docs/CREATIVE_BRIEF.md`** governs approved creative direction, approved preview directions, creative constraints, and open creative decisions.
3. **`docs/EDITORIAL_GUIDE.md`** governs the Notes workflow, editorial standards, voice protection, and content handoff.
4. **Notion Idea Inbox** stores ideas, source material, questions, drafts, and editorial progress. It is not the authority for approved website behavior or design.
5. **Notion Living Creative Direction** records the current private understanding using three states: Approved Decision, Working Direction, and Exploratory Idea.
6. **Notion Session Synopses** preserve historical reasoning, attribution, meaningful quotes, and open threads. They are context, not current instructions.

Apply these rules:

- GitHub project documents govern implementation.
- A Notion item marked **Approved Decision** is ready to be considered for promotion into the relevant GitHub document. It does not authorize implementation until the GitHub document is updated or the owner explicitly authorizes the specific change.
- Working Directions and Exploratory Ideas may guide discussion and prototypes, but they must not silently become implementation requirements.
- Session Synopses must never override the Living Creative Direction or a GitHub project document.
- A newer edit date does not automatically make one source authoritative.
- If Notion and GitHub conflict, stop and show the owner the exact conflict. Do not guess which direction replaced the other.
- When an approved decision changes the website direction, update the relevant GitHub document in the same pull request or before implementing the change.
- Keep private reflection, raw dictation, transcripts, and unapproved drafts out of the public repository.

## Visual and content guardrails

- Dark espresso or charcoal, warm cream or muted gold, generous negative space, elegant serif headlines, and legible sans-serif interface and body text.
- Calm editorial structure with restrained, discoverable enchantments: subtle alchemical geometry, tiny interactive details, and optional whimsical surprises.
- Do not create a Harry Potter imitation, space-themed interface, fake magical stock photography, or busy decorative collage.
- Keep the website text-first. Images are optional, not mandatory for Notes or homepage cards.
- Public navigation concept: Notes, Projects, Reading, About. Owner identity should be present but understated.
- The homepage should contain a curated mix of the strongest Notes, projects, and ideas rather than an automatic latest-post feed.
- Do not use “Blog” or “Writings” as public section labels. Use “Notes.” Technical Astro content paths may remain named `blog` until an approved migration.
- Never fabricate personal stories, quotes, outcomes, research, testimonials, professional credentials, or finished Note content.
- Placeholder copy must be clearly labeled and must not be deployed as owner-authored publication.

## Editorial handoff

- Only approved copy enters publication pull requests.
- Keep raw transcripts and sources separate from edited drafts.
- Avoid committing private transcripts or Notion content to this public repository.
- Notes use adaptable formats: Field Note, Deep Note, and Experiment.
- The author's spoken voice, nuance, humor, and uncertainty must survive editing.
- For individual Notes, use an accurate title, description, author, publication date, genuine update date when relevant, topics, format, optional hero imagery, and applicable `BlogPosting` markup.
- Distinguish personal beliefs and interpretations from established evidence.
- There is no automatic publication. Prepare previews and await approval before merging.

## Maintenance

Update the relevant project documents in the same pull request when an approved decision changes.

Clearly distinguish:

- approved requirements;
- working directions;
- exploratory ideas; and
- open questions.

For each pull request, summarize:

- changed files;
- checks performed;
- preview URL when available; and
- the next single action for the owner.
