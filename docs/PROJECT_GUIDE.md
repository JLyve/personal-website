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
| `astro.config.mjs` | The main Astro settings, including the future public website address. |
| `dist/` | Generated production files. Codex creates this folder during a test build; it should not be edited by hand or saved to GitHub. |

## How Codex makes and saves changes

You can describe a change in ordinary language. For example:

> Replace the sample biography with my biography, but keep the current layout.

Codex will locate the relevant files, make the change in the cloud workspace, and run the appropriate checks. Changes should normally be made on a separate Git branch so the approved website remains untouched.

A change is not part of the final website merely because it exists in the cloud workspace. Codex saves completed work as Git commits and, when GitHub access permits, prepares a pull request for review. A pull request is simply a review page that shows what changed before it is added to the main branch.

## How changes are reviewed

The normal review process is:

1. You describe the desired content or design change in Codex.
2. Codex makes the change on a separate branch.
3. Codex runs the Astro and TypeScript check and creates a production build.
4. You review the real website in a browser preview, including desktop and mobile sizes.
5. Codex explains the result in plain English and prepares a pull request when appropriate.
6. The change is added to the main website only after you approve it. Codex will not merge or publish it without approval.

## How the website will be published

Hosting has not been connected yet, so no public deployment was created during the technical-foundation phase.

The recommended host is **Cloudflare Pages**. It can connect to the GitHub repository, create a private-to-share preview URL for each pull request, and automatically update the production website after an approved change reaches the production branch. A custom domain can be connected later.

Before the first deployment, Codex will update `astro.config.mjs`. It still contains the original theme author's GitHub Pages address and `/astro-darkness` path. Those values are intentionally preserved until the host and final domain are chosen; they are correct for the original demo but not for the future personal website.

The repository also contains the original theme's GitHub Pages workflow. It is not the planned publishing method and does not publish changes from the current Codex branch.

## How to request future changes

You never need to write code or use Terminal. Tell Codex:

- what page or article you want to change;
- the words, images, or idea you want to use;
- what should stay the same;
- any visual references you like; and
- whether you want an exploratory mockup or a finished implementation.

For visual work, ask Codex to show a browser preview before the change is finalized. You can give feedback in plain language, such as "make this warmer," "reduce the motion," or "show me how this looks on a phone."

## Technical baseline verified on October 29, 2026

- The repository matches the current upstream Darkness 1.1.0 source commit.
- Dependencies install successfully from the npm lockfile in Codex Cloud.
- Astro and TypeScript report zero errors, warnings, or hints.
- The production build generates the Home, About, Blog, Projects, and three sample article pages successfully.
- The original design, sample content, animations, license, and attribution remain unchanged.
