# Personal Website — Creative & Strategy Brief
Status: approved creative direction and homepage approach for a **preview implementation**, not a final pixel-perfect specification or approval of public copy. Updated 2026-10-30.

## Purpose and positioning
A personal collection of ideas, experiments, and things worth thinking about. A curious person's home for marketing/strategy, books/reading, philosophy, creativity, personal reflection, and future interests. Not a conventional résumé site, corporate marketing funnel, or narrowly limited subject blog. Working concept: “The Curiosity Engine”; working hero thought: “Curiosity is a way of life.” Neither is approved final branding or final published copy.

### Three balanced goals
1. **Professional credibility:** visitors understand how the owner thinks and what he can do.
2. **Personal expression:** owner explores interests and develops ideas authentically.
3. **Audience/discovery:** useful, meaningful content can be found, read, shared, and revisited.

### Jobs to Be Done (visitor hypotheses, not validated personas)
- **Professional evaluator:** “Help me assess this person's thinking, abilities and fit.” Access projects, methodology, About and credible evidence.
- **Curious reader:** “Help me understand or rethink something.” Find a clear Note, related ideas, and a useful next read.
- **Fellow explorer:** “Surprise me with an interesting connection.” Discover whimsical moments, cross-topic threads and projects.
Every article should serve visitors arriving directly from search as well as homepage visitors. Avoid blocking core navigation behind surprises.

## Architecture
Primary navigation proposed: **Notes · Projects · Reading · About**, plus discreet identity/logo and accessible contact route. Notes are the publication label; “blog” may remain an internal technical content collection. Marketing, Books, Philosophy, Creativity, Life, Experiments are cross-cutting topics/tags, not all top-level navigation pages. Flexible taxonomy should accommodate new themes.

### Homepage hierarchy (proposed)
1. Restrained hero: intriguing idea, short explanation, clear route into content; identity present but understated.
2. **Selected Curiosities:** deliberately curated best Note/project/idea mix, not an automatic recent feed; cards may be image-free.
3. Explore the collection via a small number of topic routes.
4. Understated About/credibility introduction with a way to view meaningful professional work and connect.
5. Natural ending; no forced full-screen photographic footer.
Content priority: reader clarity first, editorial curation second, magical reward third. “Selected Curiosities” is a working section name.

## Visual direction
- Foundation: existing open-source Darkness Astro theme, customized rather than replaced gratuitously.
- Atmosphere: a calm, beautifully designed reading room **without literally depicting a reading room**.
- Colors: nearly-black charcoal and deep espresso brown; warm cream and muted antique gold/copper accents. Avoid dominant white backgrounds, bright neon, purple sci-fi glow, or generic AI-generated cozy/library interiors.
- Typography leads: elegant serif display/section headings, crisp and accessible body text, generous whitespace, hierarchy and breathing room.
- Minimal imagery; photographs, screenshots, charts and galleries appear when content warrants them, in their own natural colors. No requirement for every Note to match a sepia aesthetic.
- Structure: clear editorial presentation, readable content, restrained navigation, easy scanning.
- Magic: hidden enchantments + modern alchemy + storybook whimsy. Start quietly, reveal surprises upon deliberate exploration. Tiny star/glyph reveal; subtle geometrical pattern on interactive cards; occasional “follow another thread” cross-topic link. Creative surprises must never hide required information, harm legibility, or impose motion.
- Do not imitate copyrighted fictional franchises or introduce literal fantasy-world branding. Avoid excessive particles, giant orbs, floating books, elaborate collages, and decorative imagery.
- Preserve motion preferences: reduced motion, keyboard activation, touch behavior and reasonable load/performance budget. Darkness particle system may be adapted selectively, not blindly retained at full intensity.

## Homepage design direction for the first Codex preview (agreed 2026-10-30)
These are approved **design directions for a reviewable preview**, not permission to merge, deploy, publish sample content, or lock the final words. The visual mockups were exploratory. The actual responsive Astro implementation must be reviewed before design sign-off.

### Positioning and personality
- A free thinker's commonplace book: intellectually curious, welcoming, conversational, a little mischievous. Thoughtful ideas, good books, creative strategy, unusual connections, people, places, and things.
- Rough tonal balance: **70% literary/storybook whimsy, 30% subtle alchemical influence**. Alchemy is a hidden vocabulary of little geometric marks, not occult branding or literal fantasy imagery.
- A visitor should first notice the ideas and editorial quality; tiny moments of magic reward further attention.

### Visual hierarchy and layout
- **Mobile-first:** design/test at 360px, 390px, and 430px, then adapt gracefully to tablet and desktop. Avoid overflowing headlines, cramped touch targets, and unexpected horizontal scrolling.
- Desktop: understated identity plus a conventional top navigation for **Notes · Projects · Reading · About**. Do not duplicate these routes with a competing vertical topic navigation in the hero.
- Mobile: a clearly labeled, keyboard-operable **Menu** with the same routes; generous, readable tap targets (aim for at least 44×44 CSS px). Keep navigation discoverable without creating a mobile navigation maze.
- Hero: ample breathing room, a legible introductory promise, and one clear route into content. The CTA **must not collide with** the handwritten marginal note. Keep the note below the CTA in normal document flow on mobile, with meaningful vertical spacing. Minimize wasted hero height so Selected Curiosities appears soon.
- Below hero: deliberately curated typography-led **Selected Curiosities** cards, a few useful topics/interest routes, credible projects/experiments, and an understated About introduction. Cards should look complete without photos.
- Maintain strong scannability and legible article summaries; use editorial structure rather than filler decorations. Every section must serve the professional evaluator, curious reader, or fellow explorer JTBD.

### Typography direction
- **Newsreader**: thin, literary serif for prominent headings and card titles.
- **Manrope**: clear, modern body text and UI/navigation.
- **Fraunces Italic**: occasional expressive italic emphasis (for example, in a hero phrase). Use sparingly; it should remain special.
- **Caveat**: small, rare handwritten marginalia. Keep major headings, navigational links, labels, and CTAs straight and aligned; do not angle key elements.
- Font weights, exact sizes, loading strategy, fallbacks, and contrast must be validated in the real responsive build, not copied blindly from mockups.

### Imagery, color and enchantment
- Rich espresso/charcoal surfaces, warm cream text, restrained antique gold/copper accents. Exact color values are still subject to implementation review.
- Typography-first content **Option A** was chosen. Avoid filling the site with decorative AI-generated coffee-table photos. Real photography, book covers, project screenshots, original charts, or other relevant images are optional when they convey actual meaning and are approved.
- Quiet ambient stars, dots, imperfect hand-drawn marks, and near-transparent geometric/celestial linework may drift **very slowly in whitespace**, never across readable text. Keep alchemical iconography sparse, not forced or dominant.
- Tiny sparkle/glint reactions can reward hover, focus, and tap; optional hidden discoveries can appear occasionally. Do not gate links or important information behind surprises. Avoid visual noise, janky animations, or excessive particle effects.
- Respect reduced-motion preferences, touch and keyboard input, contrast, page speed, and accessible semantics. Keep a static/fallback state that is attractive without animation.

### Copy and publication boundary
- The homepage headline **“Good questions have a way of wandering.”**, highlighted word *wandering*, CTA **“Explore the collection”**, title **“Selected Curiosities”**, all illustrative article titles, and section/body text remain **provisional**. They are useful layout examples, not approved final publication copy.
- The owner will refine messaging, personal introduction, and content inventory in a separate editorial review. Do not invent lived experiences, published Notes, client outcomes, or personal claims to fill gaps.
- Codex may use **clearly flagged mockup/provisional text only in a non-production review branch or preview**; keep unfinished sample Notes and private drafts out of production, search, feeds, and `main` until specifically approved.
- Preserve existing Darkness functionality and MIT attribution where applicable. Codex works on its own branch, runs checks/build, provides desktop/mobile review evidence, and opens a PR **without merging**. An approved merge to `main` may publish immediately through Cloudflare.

## Editorial presentation
Notes index is text-first, approachable, filterable by useful topics, with curated features and clear format labels if helpful. Distinct adaptive reading experiences:
- **Field Note:** short, book-like, minimal layout.
- **Deep Note:** longer, supports headings, quotations, evidence, optional TOC and media.
- **Experiment:** supports question/method/observations/lessons, optional screenshots and results.
Same recognizable typography and layout rhythm across all three; no mandatory images or article lengths.

## Editorial selection & measurement
Homepage content is handpicked for relevance to visitor JTBD, originality, quality, variety, freshness. Do not auto-promote every new Note. Strategy need not enforce a publishing schedule.
Potential indicators: qualified professional interest, engaging related-content exploration, organic discovery, and meaningful returns; set targets only after baseline evidence, not invented KPIs.

## SEO foundations
Astro's static pages should be crawlable and fast. Verify unique titles/descriptions, canonical URLs, sitemap, robots instructions, social preview metadata, accessible images, internal links, truthful author and article fields. Implement Person/WebSite on appropriate pages, ProfilePage for About when eligible, BlogPosting for published Notes as appropriate; BreadcrumbList only when real hierarchy supports it. Structured data is descriptive, not guaranteed search ranking/rich results. Schema and public copy must reflect visible/true facts. Avoid ranking-driven content padding.

## Open decisions (do not guess)
Final site name and logo treatment; exact palette and font-loading/performance decisions; approved About copy, content inventory, hero and card wording; final layouts beyond the homepage, taxonomy, and contact mechanism; custom domain. The homepage typography, mobile-first structure, typography-led cards, and restrained magical interactions are chosen for **preview implementation**, but remain subject to real-site review and revision.

## Links
GitHub: https://github.com/JLyve/personal-website
Hosting: https://personal-website-alg.pages.dev
