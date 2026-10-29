# Personal Website Project Guide

This repository is the starting point for a personal website built from the free **Darkness** Astro theme by [kpab](https://github.com/kpab/astro-darkness). The original design and sample content are still in place so they can be used as a safe visual baseline while the site is customized.

The theme's MIT license and original attribution are preserved in [`LICENSE`](../LICENSE) and the main [`README.md`](../README.md).

## What technology the site uses

- **Astro 6** builds the pages into a fast, static website.
- **TypeScript** helps catch technical mistakes before publishing.
- **Three.js** creates the animated particle background.
- **Markdown and MDX** make it possible to write articles and project entries as simple text files.
- **Node.js 22 or newer** and **npm** install and run the development tools inside Codex Cloud. Nothing needs to be installed on your Mac.

The exact dependency versions are recorded in `package-lock.json`. Codex uses that file so the cloud environment installs the same tested versions each time.

## Where the website files are stored

| Location | What it contains |
| --- | --- |
| `src/pages/` | The main Home, About, Blog, and Projects pages. |
| `src/content/blog/` | Blog articles written in Markdown. |
| `src/content/projects/` | Project entries written in Markdown. |
| `src/components/` | Reusable pieces such as navigation, cards, the hero area, and the animated background. |
| `src/layouts/` | Shared page structures for normal pages and blog articles. |
| `src/styles/global.css` | The site's colors, typography, spacing, and shared visual rules. |
| `public/` | Files copied directly to the published site, such as the favicon. |
| `astro.config.mjs` | The main Astro settings, including the public website address. |
| `dist/` | Generated production files. Codex creates this folder during a test build; it should not be edited by hand or saved to GitHub. |

## How Codex makes and saves changes

You can describe a change in ordinary language. For example:

> Replace the sample biography with my biography, but keep the current layout.

Codex will locate the relevant files, make the change in the cloud workspace, and run the appropriate checks. Changes should normally be made on a separate Git branch so the approved website remains untouched.

A change is not part of the final website merely because it exists in the cloud workspace. Codex saves completed work as Git commits and prepares a pull request for review. A pull request is simply a review page that shows what changed before it is added to the main branch.

## How changes are reviewed before publishing

The normal review process is:

1. You describe the desired content or design change in Codex.
2. Codex makes the change on a separate branch.
3. Codex runs the Astro and TypeScript check and creates a production build.
4. Codex opens a pull request on GitHub.
5. Cloudflare Pages builds that pull request and provides a separate preview address. The preview lets you inspect the real website without changing the public site.
6. You review the preview and the pull request. You can request changes in plain language.
7. The change is added to the public website only after you approve and merge the pull request.

Codex will not merge a pull request or publish a change without your approval.

## How GitHub and Cloudflare Pages work together

**Cloudflare Pages is the selected hosting provider.** GitHub stores the website source and its change history. After you connect this repository to Cloudflare Pages, Cloudflare will watch GitHub and build the website for you.

Use these Cloudflare Pages build settings when the project is connected:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` or newer |

The site is a static Astro build, so it does not need a Cloudflare server adapter or server-side runtime.

The first Cloudflare Pages project should use the name `personal-website`. Cloudflare normally gives that project the free address `https://personal-website.pages.dev`. The Astro configuration uses that address by default and serves the website at the root, with no `/astro-darkness` path.

No Cloudflare project or deployment was created during this preparation phase.

## How future changes are deployed

Once GitHub and Cloudflare Pages are connected:

- A new pull request creates a Cloudflare preview deployment. It does not replace the public website.
- Updating the pull request automatically updates its preview.
- Merging an approved pull request into `main` starts a production deployment.
- Cloudflare publishes the new `dist` build when that production build succeeds.
- If a build fails, Cloudflare keeps the previous successful production version online.

This means GitHub's `main` branch is the approved source for the public website, while pull-request branches are safe review areas.

## How to connect a custom domain later

The free `pages.dev` address can be used for as long as you want. A custom domain can be added later without redesigning the website:

1. Open the project in the Cloudflare dashboard.
2. Choose **Custom domains**, then **Set up a custom domain**.
3. Enter the domain or subdomain you want to use.
4. Follow Cloudflare's DNS instructions. Cloudflare manages this automatically when the domain already uses Cloudflare DNS.
5. Set a Cloudflare Pages environment variable named `SITE_URL` to the full preferred address, such as `https://www.example.com`, for both production and preview builds.
6. Trigger a new deployment so the sitemap uses the custom address.

The `SITE_URL` setting changes generated absolute URLs, such as the sitemap. Navigation and assets remain rooted correctly without code changes.

## How to request future changes

You never need to write code or use Terminal. Tell Codex:

- what page or article you want to change;
- the words, images, or idea you want to use;
- what should stay the same;
- any visual references you like; and
- whether you want an exploratory mockup or a finished implementation.

For visual work, ask Codex to show a browser preview before the change is finalized. You can give feedback in plain language, such as "make this warmer," "reduce the motion," or "show me how this looks on a phone."

## Technical baseline verified on October 29, 2026

- Phase 1 is present on the GitHub `main` branch.
- The repository matches the current upstream Darkness 1.1.0 source plus the project documentation.
- The site is configured for a root-level Cloudflare Pages deployment.
- The default public address is `https://personal-website.pages.dev`; a later `SITE_URL` environment variable can replace it.
- Dependencies install successfully from the npm lockfile in Codex Cloud.
- Astro and TypeScript report zero errors, warnings, or hints.
- The production build generates the Home, About, Blog, Projects, and three sample article pages successfully.
- The original design, sample content, animations, license, and attribution remain unchanged.
