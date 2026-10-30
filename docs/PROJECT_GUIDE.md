# Personal Website Project Guide

This repository is the starting point for a personal website built from the free **Darkness** Astro theme by [kpab](https://github.com/kpab/astro-darkness). The Astro foundations remain in place while the public-facing design is adapted to The Curiosity Engine direction. The original demo articles, projects, and biography have been removed from generated pages rather than presented as owner content.

The theme's MIT license and original attribution are preserved in [`LICENSE`](../LICENSE) and the main [`README.md`](../README.md).

## What technology the site uses

- **Astro 6** builds the pages into a fast, static website.
- **TypeScript** helps catch technical mistakes before publishing.
- **Three.js** remains available for the preserved Darkness particle background, while the new editorial pages use lighter CSS-only atmosphere.
- **Markdown and MDX** make it possible to write articles and project entries as simple text files.
- **Node.js 22 or newer** and **npm** install and run the development tools inside Codex Cloud. Nothing needs to be installed on the owner's Mac.

The exact dependency versions are recorded in `package-lock.json`. Codex uses that file so the cloud environment installs the same tested versions each time.

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
- If Notion and GitHub conflict, show Jason the exact mismatch and ask for one decision. Do not guess which source replaced the other.
- Update the relevant GitHub document when an approved decision changes. Do not create a second competing specification.
- Keep private reflection, raw dictation, transcripts, and unapproved drafts out of the public repository.
- There is no automatic synchronization among ChatGPT, Notion, Codex, GitHub, and Cloudflare.

## Reading order for future work

Before substantial website work:

1. Read this Project Guide for process and source authority.
2. Read the Creative Brief for approved creative direction and open decisions.
3. Read the Editorial Guide when the task involves Notes, voice, ideas, drafts, or publication.
4. Consult the Living Creative Direction when the task involves evolving identity, atmosphere, naming, homepage messaging, or another unresolved creative direction.
5. Consult Session Synopses only when the reasoning, attribution, or history behind a decision matters.

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
8. The change reaches the public website only after the owner approves and merges the pull request.

Codex will not merge a pull request or publish a change without approval.

## How GitHub and Cloudflare Pages work together

**Cloudflare Pages is the selected hosting provider.**

GitHub stores the website source and its change history. Cloudflare watches GitHub and builds the website.

Use these Cloudflare Pages build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` or newer |

The site is a static Astro build, so it does not need a Cloudflare server adapter or server-side runtime.

The website is deployed at `https://personal-website-alg.pages.dev`. The Astro configuration uses that production address for canonical links and the sitemap and serves the website at the root with no `/astro-darkness` path.

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

## Technical baseline verified on October 30, 2026

- Phase 2 is being reviewed in a pull request and has not been merged to `main`.
- The repository retains the Darkness 1.1.0 Astro foundations, MIT license, attribution, and original animation components.
- The site is configured for a root-level Cloudflare Pages deployment.
- The production address is `https://personal-website-alg.pages.dev`.
- A later `SITE_URL` environment variable can replace the production address when a custom domain is connected.
- Every generated page includes a canonical URL on that production address.
- The sitemap uses the same address.
- Dependencies install successfully from the npm lockfile in Codex Cloud.
- Astro and TypeScript report zero errors, warnings, or hints.
- The production build generates the Home, About, Notes index, and Projects pages successfully.
- Notes, Projects, and About use clearly provisional empty states. The original Darkness sample articles, projects, and biography are not generated or included in the sitemap.
