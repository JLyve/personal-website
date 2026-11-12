# Personal Website Project Guide

This repository is the starting point for a personal website built from the free **Darkness** Astro theme by [kpab](https://github.com/kpab/astro-darkness). The Astro foundations remain in place while the public-facing design is adapted to The Curiosity Engine direction. The original demo articles, projects, and biography have been removed from generated pages rather than presented as owner content.

The theme's MIT license and original attribution are preserved in [`LICENSE`](../LICENSE) and the main [`README.md`](../README.md).

## What technology the site uses

- **Astro 7** builds the pages into a fast, static website.
- **TypeScript** helps catch technical mistakes before publishing.
- **Three.js** remains available for the preserved Darkness particle background, while the new editorial pages use lighter CSS-only atmosphere.
- **Markdown and MDX** make it possible to write articles and project entries as simple text files.
- **Node.js 22.12 or newer** and **npm** install and run the development tools inside Codex Cloud. Nothing needs to be installed on the owner's Mac.

The exact dependency versions are recorded in `package-lock.json`. Codex uses that file so the cloud environment installs the same tested versions each time.

## Who owns the work

- **ChatGPT is the creative and technical lead.** It develops the direction with Jason, assesses software and workflow choices, reviews code and rendered previews, compares approved decisions with GitHub, and prepares the implementation and reconciliation handoffs. It reports what it could actually inspect.
- **Codex is the implementation engineer.** It makes approved code and documentation changes together, checks the result, maintains the PR and preview, and supplies verified merged files after approval.
- **Jason is the owner.** He makes meaningful creative and publishing decisions. He isn't expected to code, select repository paths, reconstruct prior decisions, or manage synchronization. When the app requires a manual Project-file upload or Custom Instructions replacement, the assistants provide the complete files and one clear set of steps.

Keep the current tools and existing documents. This is a verified handoff process, not an automatic synchronization service or a new database.

## How project knowledge is organized

Each source has one job. Keeping those jobs separate prevents private exploration from silently becoming a public website requirement.

### GitHub project documents

**`docs/PROJECT_GUIDE.md`**

This file governs:

- the project workflow;
- source authority;
- the approval handoff;
- technical review;
- pull requests;
- deployment; and
- publishing boundaries.

**`docs/CREATIVE_BRIEF.md`**

This file governs:

- approved creative direction;
- approved preview directions;
- visual and experience constraints;
- positioning;
- information architecture;
- visitor jobs; and
- open creative decisions.

Ideas in this file that are labeled proposed, provisional, exploratory, or open are not final requirements.

**`docs/EDITORIAL_GUIDE.md`**

This file governs:

- the Notes workflow;
- voice protection;
- editorial standards;
- private idea capture;
- content approval;
- editorial handoff; and
- publication checks.

**`AGENTS.md`**

This file gives Codex the operating instructions it must follow when working inside the repository.

### Private Notion records

**Idea Inbox**

Stores ideas, source material, questions, drafts, and editorial progress. It is the private source of truth for idea capture and draft status.

**Living Creative Direction**

Stores the current private understanding of the website. It separates Approved Decisions, Working Directions, and Exploratory Ideas.

**Session Synopses**

Store selective historical records of important conversations. They preserve the arc, attribution, decisions, quotes, and unresolved questions behind the current direction.

A synopsis explains how the thinking developed. It does not define the current decision.

## Decision authority and conflict rule

GitHub project documents govern website implementation.

Private Notion records support discussion and preserve context, but they do not automatically authorize code, public copy, publishing, or design changes.

Use this decision flow:

1. Explore ideas in conversation.
2. Save ideas or drafts in the Idea Inbox when Jason requests it.
3. Update the Living Creative Direction when the current private understanding changes.
4. Create a Session Synopsis only when the reasoning or conversation history is worth preserving.
5. When Jason approves a direction, mark it appropriately in the Living Creative Direction.
6. Update the relevant GitHub project document before implementation, or receive explicit authorization from Jason for the specific change.
7. Codex implements the approved change on a review branch.
8. Jason reviews the pull request and Cloudflare preview.
9. The change reaches production only after Jason approves and merges the pull request.

Apply these rules:

- A Working Direction may guide exploration but not implementation.
- An Exploratory Idea may guide discussion or a clearly labeled prototype but not implementation.
- An Approved Decision in Notion is eligible for promotion into the relevant GitHub project document. It is not an automatic instruction to Codex.
- A Session Synopsis never overrides the Living Creative Direction or a GitHub document.
- A newer edit date does not automatically make a source authoritative.
- If Notion and GitHub conflict, show the exact mismatch and check for an explicit later approval. If a decision is still unresolved, ask Jason one focused question and pause only dependent work. Don't infer authority from edit dates.
- Update the relevant GitHub document when an approved decision changes. Do not create a second competing specification.
- Keep private reflection, raw dictation, transcripts, and unapproved drafts out of the public repository.
- There is no automatic synchronization among ChatGPT, Notion, Codex, GitHub, and Cloudflare.

### Required decision check

ChatGPT owns the decision comparison before each implementation handoff and again before recommending a merge. Codex verifies the code, documentation, and checks. Jason shouldn't have to reconstruct decisions or locate technical files.

1. Read the latest relevant GitHub documents and PR changes. Compare them with the approved conversation and the relevant private Notion decisions when access and Jason's authorization permit it. Stay within the current task's scope.
2. Confirm what Jason authorized: preview or production. Working Directions, Exploratory Ideas, provisional names, and provisional copy don't become production requirements automatically.
3. For each relevant approved decision, identify its GitHub document and implementation evidence. Put approved public-safe requirements into the existing document and the same PR as the code change. An updated document alone doesn't prove the code follows it.
4. List missing items, material conflicts, and owner-approved deferrals in the existing handoff and PR. If a source isn't accessible, identify the verified public-safe handoff used and the access limit; don't claim a direct Notion comparison. Pause only dependent work while resolving a required gap.
5. Don't recommend merging until required decisions, documentation, implementation checks, and production-content approvals are complete. A successful build or approval of a preview isn't permission to publish.
6. After a verified merge, check the merged result. ChatGPT reconciles the private decision record when authorized; Codex supplies complete merged files and Custom Instructions for the required manual Project replacements in one handoff. Deployment and manual replacement stay pending until separately verified.

Keep private reflection, transcripts, drafts, and private Notion links out of public files and PRs. Transfer only the specific public-safe material Jason has authorized. Don't create another tracker, duplicate specification, background task, or synchronization service.

### Private decision record

Use the existing Living Creative Direction page. For each approved decision, keep one compact entry with its preview or production approval scope, GitHub document and PR link, and progress: **Awaiting implementation**, **In a PR**, or **Merged**. Note any remaining documentation, implementation, deployment, or Project-file action.

These labels describe progress, not approval. A PR isn't merged merely because it was opened, and merging a document doesn't make its provisional design or copy final. Keep Working Directions and Exploratory Ideas in their existing sections.

## Reading order for future work

Before substantial website work:

1. Read this Project Guide for process and source authority.
2. Read the Creative Brief for approved creative direction and open decisions.
3. Read the Editorial Guide when the task involves Notes, voice, ideas, drafts, or publication.
4. Read the [Technical Audit and Launch-Readiness Roadmap](TECHNICAL_AUDIT_ROADMAP.md) before launch-readiness work, publishing the first Note, or changing search visibility.
5. Consult the Living Creative Direction when the task involves evolving identity, atmosphere, naming, homepage messaging, or another unresolved creative direction.
6. Consult Session Synopses only when the reasoning, attribution, or history behind a decision matters.

Do not load every synopsis by default. Use the smallest amount of history needed for the current task.

Before implementing a Notion direction, confirm that it has been promoted into the relevant GitHub document or that Jason has explicitly authorized that specific implementation.

## Where the website files are stored

| Location | What it contains |
| --- | --- |
| `src/pages/` | The main Home, About, Notes (technical `/blog/` route), and Projects pages. |
| `src/content/blog/` | Approved future Notes written in Markdown; currently empty. |
| `src/content/projects/` | Approved future project entries written in Markdown; currently empty. |
| `src/components/` | Reusable pieces such as navigation, cards, the hero area, and the animated background. |
| `src/layouts/` | Shared page structures for normal pages and blog articles. |
| `src/styles/global.css` | The site's colors, typography, spacing, and shared visual rules. |
| `public/` | Files copied directly to the published site, such as the favicon. |
| `astro.config.mjs` | The main Astro settings, including the public website address. |
| `dist/` | Generated production files. Codex creates this folder during a test build. It should not be edited by hand or saved to GitHub. |

## How Codex makes and saves changes

The owner can describe a change in ordinary language. For example:

> Replace the sample biography with my biography, but keep the current layout.

Codex locates the relevant files, makes the change in the cloud workspace, and runs the appropriate checks. Changes should normally be made on a separate Git branch so the approved website remains untouched.

A change is not part of the final website merely because it exists in the cloud workspace.

Codex saves completed work as Git commits and prepares a pull request for review. A pull request is a review page that shows what changed before it is added to the main branch.

## How changes are reviewed before publishing

The normal review process is:

1. The owner describes the desired content or design change in Codex.
2. Codex confirms the relevant approved direction and surfaces any conflicts or missing decisions.
3. Codex makes the change on a separate branch.
4. Codex runs the Astro and TypeScript checks and creates a production build.
5. Codex opens a pull request on GitHub.
6. Cloudflare Pages builds the pull request and provides a separate preview address.
7. The owner reviews the preview and pull request and may request changes in plain language.
8. ChatGPT completes the required decision check and Codex verifies the implementation and documentation. The PR identifies approved decisions, missing or deferred items, and any remaining owner decision before recommending a merge.
9. The change reaches the public website only after the owner approves and merges the pull request. Verify the production deployment separately.

Codex will not merge a pull request or publish a change without approval.

## How the Personal Website project stays aligned

GitHub is the authoritative source for the website and its durable documentation. The separate Personal Website project may contain convenience copies of Markdown files plus a Custom Instructions field, but those copies do not synchronize automatically.

The canonical Custom Instructions are stored in [`docs/PROJECT_CUSTOM_INSTRUCTIONS.md`](PROJECT_CUSTOM_INSTRUCTIONS.md). When that file changes, the owner must manually replace the Personal Website project's Custom Instructions with the complete merged version.

Every pull request must use the repository pull-request template to identify whether it changes a file mirrored in the Personal Website project. The mirrored set currently includes:

- `AGENTS.md`;
- `docs/PROJECT_GUIDE.md`;
- `docs/CREATIVE_BRIEF.md`;
- `docs/EDITORIAL_GUIDE.md`;
- `docs/TECHNICAL_AUDIT_ROADMAP.md`;
- `docs/PROJECT_CUSTOM_INSTRUCTIONS.md`; and
- any additional file the owner later chooses to upload as Project knowledge.

After every merge, Codex must compare the merged files against this set without waiting for a reminder. If synchronization is required, Codex provides the complete merged files and clear add, replace, or remove instructions in one handoff. If synchronization is not required, Codex explicitly says so. ChatGPT verifies the merged decision record and, when authorized, updates the private Notion status. The owner performs only the app-required manual upload or Custom Instructions replacement and confirms completion. Record any uncompleted step as pending.

If a new task begins before that confirmation, GitHub still governs. Codex should fetch the latest GitHub documentation, identify any mismatch with the Project copies, and continue only from the authoritative GitHub version.

## How GitHub and Cloudflare Pages work together

**Cloudflare Pages is the selected hosting provider.**

GitHub stores the website source and its change history. Cloudflare watches GitHub and builds the website.

Use these Cloudflare Pages build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22.12` or newer |

The site is a static Astro build, so it does not need a Cloudflare server adapter or server-side runtime.

The website is deployed at `https://personal-website-alg.pages.dev`. The Astro configuration uses that production address for canonical links and, once indexing is enabled, the sitemap. It serves the website at the root with no `/astro-darkness` path.

### Pre-launch search lock

The public Cloudflare address remains intentionally hidden from search results while the site name, copy, metadata, and content are unfinished. `SITE_INDEXING_ENABLED` in `site.config.mjs` is the single launch switch and must remain `false` until the owner explicitly approves search indexing.

While the switch is off:

- every page outputs `noindex, nofollow, noarchive, nosnippet` metadata;
- Cloudflare sends the same instruction through `X-Robots-Tag`;
- `robots.txt` blocks all crawlers; and
- the production build does not publish a sitemap.

Turning the switch on is a launch action, not ordinary development. It requires an explicit owner-approved pull request, a successful `npm run check:search`, and a production verification after merging.

The [Technical Audit and Launch-Readiness Roadmap](TECHNICAL_AUDIT_ROADMAP.md) records the audit's origin, completed work, deferred findings, resume trigger, and mandatory launch gates. The comprehensive review should resume when the site is roughly 80 to 90% complete. Article-specific review must happen earlier if the first real Note is ready to publish. Search indexing cannot be enabled until the roadmap's mandatory gates are complete.

Cloudflare Pages is connected to the GitHub repository, and the first production deployment is live.

## How future changes are deployed

- A new pull request creates a Cloudflare preview deployment. It does not replace the public website.
- Updating the pull request automatically updates its preview.
- Merging an approved pull request into `main` starts a production deployment.
- Cloudflare publishes the new `dist` build when that production build succeeds.
- If a build fails, Cloudflare keeps the previous successful production version online.

GitHub's `main` branch is the approved source for the public website. Pull-request branches are safe review areas.

## How to connect a custom domain later

The free `pages.dev` address can be used for as long as needed. A custom domain can be added later without redesigning the website:

1. Open the project in the Cloudflare dashboard.
2. Choose **Custom domains**, then **Set up a custom domain**.
3. Enter the preferred domain or subdomain.
4. Follow Cloudflare's DNS instructions. Cloudflare manages this automatically when the domain already uses Cloudflare DNS.
5. Set a Cloudflare Pages environment variable named `SITE_URL` to the full preferred address, such as `https://www.example.com`, for production and preview builds.
6. Trigger a new deployment so the sitemap uses the custom address.

The `SITE_URL` setting changes generated absolute URLs such as the sitemap. Navigation and assets remain rooted correctly without code changes.

## How to request future changes

The owner does not need to write code or use Terminal.

Tell Codex:

- what page or article should change;
- the words, images, or idea to use;
- what should stay the same;
- which approved project direction applies;
- any visual references;
- whether the request is exploratory or approved for implementation; and
- whether the desired result is a mockup, reviewable preview, or finished implementation.

For visual work, ask Codex to show a browser preview before finalizing the change.

Feedback may use plain language such as:

- “Make this warmer.”
- “Reduce the motion.”
- “Show me how this looks on a phone.”
- “This feels too polished and not curious enough.”

An intuitive reaction is valid creative feedback. Codex should translate it into concrete design or content changes without inventing a new creative decision.

## Technical baseline verified on November 5, 2026

- The Curiosity Engine preview and Phase 1 security/publication safeguards were integrated through PR #9 and merged into `main`.
- The pre-launch search lock was added through PR #10 and is active in production.
- The repository retains the Darkness 1.1.0 Astro foundations, MIT license, attribution, and original animation components.
- The site is configured for a root-level Cloudflare Pages deployment.
- The production address is `https://personal-website-alg.pages.dev`.
- A later `SITE_URL` environment variable can replace the production address when a custom domain is connected.
- Every generated page includes a canonical URL on that production address.
- Search indexing is locked before launch, so every page is marked `noindex`, crawlers are blocked, and no sitemap is generated. Once the owner approves launch, the sitemap will use the same production address as the canonical links.
- Dependencies install successfully from the npm lockfile in Codex Cloud.
- Astro and TypeScript report zero errors, warnings, or hints.
- The production build generates the Home, About, Notes index, and Projects pages successfully.
- Notes, Projects, and About use clearly provisional empty states. The original Darkness sample articles, projects, and biography are not generated, and the pre-launch build does not publish a sitemap.
- Deferred launch-readiness work is tracked in `docs/TECHNICAL_AUDIT_ROADMAP.md` and must resume when the website is roughly 80 to 90% complete.
