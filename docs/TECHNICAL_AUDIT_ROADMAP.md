# Technical Audit and Launch-Readiness Roadmap

Status: active launch gate. Created November 5, 2026.

This document is the durable record of the website's technical audit: why it began, what has been completed, what remains, and when the deferred work must resume. It prevents the launch-readiness work from being lost while naming, design, and content continue.

## Origin

The owner initiated the audit after reading the Search Engine Land article [“Technical SEO checks for vibe-coded websites”](https://searchengineland.com/technical-seo-checks-vibe-coded-websites-500033). The source URL was supplied by the owner on November 5, 2026.

The resulting audit brief expanded beyond technical SEO to review:

- crawlability, metadata, structured data, links, redirects, and unpublished content;
- Core Web Vitals, JavaScript, Three.js, fonts, images, caching, and mobile performance;
- WCAG 2.2 AA accessibility, keyboard use, reduced motion, touch targets, and responsive behavior;
- dependency security, secrets, deployment configuration, Cloudflare considerations, and future integrations; and
- Astro and TypeScript reliability, maintainability, validation, and safeguards for future AI-assisted changes.

The goal is a technically sound, maintainable personal website, not a perfect audit score or unnecessary infrastructure.

## Current status

The urgent foundation work is complete. The comprehensive launch-readiness review is intentionally deferred until the design, navigation, and representative content are roughly 80–90% complete. Running detailed browser, accessibility, and performance work earlier would create avoidable rework while layouts and content are still changing.

The public Cloudflare address remains available for direct review, but search crawling and indexing are locked until the launch gates in this document are complete and the owner explicitly approves launch.

## Completed work

### Secure foundation and publication safeguards

Completed in [PR #9](https://github.com/JLyve/personal-website/pull/9):

- upgraded Astro and compatible integrations to patched versions;
- reduced the npm audit result to zero known vulnerabilities;
- removed the unused vulnerable RSS dependency;
- required explicit `draft` or `published` status for Notes and Projects;
- required truthful publication metadata for published Notes;
- excluded drafts from routes, indexes, homepage output, and the sitemap;
- removed the original theme's demonstration Notes and Projects from generated pages;
- removed the obsolete GitHub Pages workflow so Cloudflare Pages is the only deployment route; and
- integrated these safeguards with the Curiosity Engine preview design.

### Pre-launch search lock

Completed in [PR #10](https://github.com/JLyve/personal-website/pull/10):

- set the launch switch in `site.config.mjs` to `SITE_INDEXING_ENABLED = false`;
- added `noindex, nofollow, noarchive, nosnippet` to every page;
- added the matching Cloudflare `X-Robots-Tag` response header;
- blocked crawlers through `robots.txt`;
- suppressed the XML sitemap while the site is unfinished; and
- added `npm run check:search` to detect accidental search-visibility changes.

### Verified baseline

- `npm ci` succeeds from the lockfile.
- Astro and TypeScript checks report no errors, warnings, or hints.
- The static production build succeeds.
- The current generated routes are Home, About, Notes, Projects, and `robots.txt`.
- Canonical URLs use the configured Cloudflare production address.
- Cloudflare production deployment is working.
- Theme license and attribution remain intact.

## Work intentionally deferred

The following work is required before launch, but should resume only when the site is approximately 80–90% complete unless a new feature makes an earlier review necessary.

### Technical SEO and discovery

- Approve the final site name, public identity, page titles, and meta descriptions.
- Add accurate Open Graph and social-sharing metadata and an approved social image.
- Add only truthful, visible structured data: `WebSite` and eligible person/profile data, plus `BlogPosting` for approved Notes.
- Validate internal links, canonical URLs, trailing-slash behavior, status codes, redirects, and duplicate-content risks.
- Decide the custom-domain and canonical-domain plan.
- Confirm the launch version of `robots.txt` and the XML sitemap.
- Keep the search lock active until the final launch approval described below.

### Notes and article presentation

- Replace the remaining theme-era article presentation and “Darkness” labels with the approved editorial design.
- Validate Field Note, Deep Note, and Experiment layouts using approved representative content.
- Render author, publication date, meaningful update date, format, topics, canonical URL, social metadata, and applicable `BlogPosting` data accurately.
- Verify headings, citations, links, optional media, direct search arrivals, and related-content navigation.
- Complete this work before publishing the first real Note, even if the rest of the site is still evolving.

### Accessibility and mobile experience

- Test actual rendered pages at 360px, 390px, and 430px, plus tablet and desktop widths.
- Complete keyboard-only navigation and visible-focus testing.
- Test the mobile menu, touch targets, hover alternatives, heading order, landmarks, and screen-reader names.
- Verify color contrast against WCAG 2.2 AA.
- Confirm reduced-motion behavior stops or avoids nonessential animation rather than only shortening CSS animation.
- Check representative Notes and any approved images for accessible semantics and alternative text.

### Performance

- Run browser-based Lighthouse or equivalent testing against representative production builds.
- Measure LCP, CLS, and INP rather than assuming them from source code.
- Review shipped JavaScript, Astro transitions, cursor behavior, and the remaining Three.js bundle warning.
- Ensure Three.js has a reduced-motion and lower-powered-device fallback wherever it remains in use.
- Decide and validate the final font-loading strategy.
- Validate image dimensions, formats, lazy loading, caching, and layout stability once real media exists.

### Security and operational safeguards

- Review appropriate Cloudflare security headers beyond the existing search-control header.
- Add or confirm Dependabot configuration and an appropriate dependency-update review process.
- Recheck the repository for exposed credentials and unnecessary external scripts before launch.
- Review security and privacy separately before adding any form, analytics, email, search, comments, or other integration.
- Run a fresh dependency audit immediately before launch.

### Maintainability and permanent standards

- Add proportionate automated regression checks for routes, canonicals, draft leakage, sitemap behavior, metadata, and broken internal links.
- Decide whether a lightweight CI workflow is warranted in addition to Cloudflare builds.
- Complete the permanent development checklist originally designated as Phase 3.
- Update `AGENTS.md` and `docs/PROJECT_GUIDE.md` with the final mandatory and optional checks.

## When to resume the audit

Resume the comprehensive launch-readiness phase when all of the following are substantially true:

- the site name and identity are approved;
- Home, About, Notes, Projects, and primary navigation are structurally stable;
- final or near-final public copy is present;
- at least one representative approved Note is available if Notes will be part of launch;
- representative images or other media are present if they will be part of launch; and
- the owner believes the website is roughly 80–90% complete.

Resume the article-specific review earlier if the first Note is ready to publish before the rest of the website.

## Mandatory launch gates

Do not enable search indexing until every mandatory gate below is complete:

- [ ] Final public name, identity, copy, and content are approved.
- [ ] Final routes, canonical domain, and redirect requirements are approved.
- [ ] Browser-based mobile testing is complete at 360px, 390px, and 430px.
- [ ] Keyboard and WCAG 2.2 AA review is complete, with material issues resolved.
- [ ] Performance and Core Web Vitals testing is complete on representative pages.
- [ ] Final titles, descriptions, social metadata, and truthful structured data are verified.
- [ ] Published Notes, if any, pass the editorial and technical publishing checklist.
- [ ] Dependency, secrets, external-resource, and security-header reviews are complete.
- [ ] Production build, link, route, canonical, draft-leakage, and sitemap checks pass.
- [ ] The owner reviews the final Cloudflare preview and explicitly approves launch.
- [ ] A dedicated launch pull request changes `SITE_INDEXING_ENABLED` to `true` and passes `npm run check:search`.
- [ ] The post-merge production deployment is verified before submitting the sitemap or requesting indexing.

## Launch and post-launch sequence

1. Complete the deferred launch-readiness review and its fixes in scoped pull requests.
2. Run a final production-like audit with the search lock still enabled.
3. Review and merge the dedicated search-indexing launch pull request only after explicit owner approval.
4. Verify the production `robots.txt`, response headers, canonical URLs, and sitemap.
5. Submit the sitemap through the chosen search-engine webmaster tools.
6. Monitor indexing, crawl errors, Core Web Vitals, and broken links after launch.

This roadmap remains active until the launch gates are complete. After launch, retain it as the historical record and convert recurring checks into the permanent maintenance checklist.
