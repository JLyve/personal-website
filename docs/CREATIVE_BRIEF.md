# Personal Website -- Creative & Strategy Brief

Status: approved production starting baseline for the search-hidden site. The design and copy may continue to evolve. Updated 2026-11-17.

## Production starting baseline (approved 2026-11-17)

Jason approved the current PR #13 result for publication to the existing search-hidden production site as a starting baseline. This approval supersedes the merge and production-publication deferrals recorded in the dated preview notes below; those notes remain as historical context for how the result developed.

The approved production baseline includes:

- the collection-first homepage with no portrait;
- the normal empty-collection homepage state;
- the current identity and introductory homepage wording;
- the current About layout and larger vertical portrait;
- the complete current About copy;
- the published LinkedIn links to `https://www.linkedin.com/in/jasonlyvers/` and email link to `mailto:jasonalyvers@gmail.com`;
- the antique-gold **“Jason.”** heading treatment;
- the title star and four larger, faster section charms; and
- the current responsive, accessibility, keyboard, and reduced-motion behavior.

Approval establishes a production starting point, not a permanent creative lock. The site name, homepage wording, About copy, portrait treatment, and motion may be refined in later reviewed pull requests.

The following boundaries remain in force:

- Example collection content is review fixture content only and must not enter the normal production build.
- Empty Notes and Projects states may remain until real approved content is available.
- `SITE_INDEXING_ENABLED` must remain `false`.
- Search indexing and launch approval, a custom domain, new pages, real project evidence, and future content remain separate decisions.
- Private Notion material must not enter the public repository, and this approval does not authorize or imply a Notion update.

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

The dated subsections below preserve the review instructions and approval boundaries that applied while PR #13 was being developed. Statements that the current PR #13 result was not approved for merge or production were superseded by the production starting-baseline approval on 2026-11-17. The restrictions on example content, search indexing, private material, and separate future decisions remain active.

### Revised opening and collection direction (authorized for preview 2026-11-11)

This revision replaces the headline-led opening described below for the next review preview. The remaining atmosphere, typography, accessibility, and publication boundaries in this brief still apply.

- Keep **Not Entirely Unrelated** as the selected collection-name direction and clearly associate it with **Jason Lyvers** in the header. Final publication approval is separate from this preview direction.
- Replace the large slogan, promotional pitch, and hero CTA with a compact, conversational welcome. Use the owner-supplied wording for layout testing only; it remains provisional and is not approved production copy.
- Use a genuinely collection-first restrained hybrid: pair the modest welcome with the prominent featured item in the first-screen composition instead of making visitors pass through a separate hero. Use **From the collection** as a provisional label, with smaller supporting entries that can represent Notes, Projects, or Reading according to the real work available.
- Keep the compact welcome left aligned with no portrait or reserved portrait space on the homepage. The collection should follow the complete welcome as one uninterrupted sequence.
- The homepage must feel intentional with no published entries. Hide empty collection sections, category controls, and links without useful destinations.
- Keep layout examples separate from published collections and normal builds. Examples must use visibly structural bracketed placeholders rather than invented article titles, book choices, client results, or personal claims.
- Show the current owner-supplied review portrait only on the provisional About page. The larger vertical comparison described below supersedes the earlier square-thumbnail display for this preview; retain the square asset for comparison.

### About-only portrait comparison (authorized for preview 2026-11-16)

This direction supersedes the earlier PR #13 portrait-on-home placement for a comparison preview only. It does not approve the final portrait placement or an About design.

- Remove the portrait from both homepage review states and collapse its former space completely. Keep the current welcome copy, **Jason Lyvers**, **digital marketing strategist**, collection layout, heading sizes, typography, Wandering Magic stars, navigation, and responsive behavior unchanged except for spacing inherently removed with the portrait.
- Place the supplied portrait near the opening introduction on the provisional About page. Treat it as a natural introduction to the person rather than a large personal-brand hero or résumé headshot. The initial square-thumbnail implementation is retained in deployment history for comparison and is superseded in the current preview by the larger vertical treatment below.
- Use clearly labeled structural preview language for the future sequence: introduction to the person → how he thinks → professional approach → selected evidence-based work → invitation to connect. Do not invent biography, credentials, professional claims, evidence, email addresses, LinkedIn URLs, or Contact copy. Do not add a contact form or separate Contact page.
- This About-only portrait preview is authorized for comparison in the existing PR #13 only. Final portrait placement, final About layout, approved About copy, contact details, merge, publication, and production deployment remain unapproved.

### Larger vertical About portrait comparison (authorized for preview 2026-11-16)

This comparison replaces the 96px mobile and 120px desktop square thumbnail in the current PR #13 preview only. It does not approve the new photograph or make any About decision final.

- Use the owner-supplied **Warm Portrait by the Window** photograph as the current About portrait. Preserve the complete vertical composition, natural colors, facial appearance, clothing, background, and approximately 4:5 proportions. Create only a proportionally resized and compressed web derivative; do not retouch, regenerate, sharpen, recolor, stretch, or crop it. Keep the existing square portrait asset during comparison.
- On desktop, use a balanced two-column About opening with the editorial portrait on the left at approximately 320–352px wide and the provisional introduction on the right. On mobile, stack the portrait above the introduction at nearly the full content width with no horizontal overflow. The photograph should read as part of the introduction, without a mechanical component caption or a personal-brand hero treatment.
- Keep the page title and structural preview status clear. Use accurate alternative text, and keep all unapproved biography, professional evidence, and connection details as labeled placeholders. Do not add biography, credentials, client claims, performance results, an email address, LinkedIn URL, Contact copy, contact form, or separate Contact page.
- Keep the homepage portrait-free with no reserved image space, and otherwise leave its welcome, collection presentation, navigation, typography, animation, and responsive behavior unchanged. Keep `SITE_INDEXING_ENABLED = false`.
- The final image, exact size, portrait placement, About layout, About copy, contact details, merge, publication, and production deployment remain unapproved. This is an About-only review comparison in the existing PR.

### About copy preview (authorized 2026-11-16)

The owner supplied the following About copy for the existing PR #13 review preview. This authorization supersedes the earlier placeholder-only requirement for the rendered About page, but it does not approve the copy for publication. Use **more than a decade** rather than an exact experience total, and use the **past three-ish years** description of work helping a local cremation provider become easier to find online. Omit VYTL until it has a credible public presence.

For this review preview, activate **View my experience on LinkedIn** and **Find me on LinkedIn** with `https://www.linkedin.com/in/jasonlyvers/`, and activate **Email Jason** with `mailto:jasonalyvers@gmail.com`. Do not display the raw email address. “Explore selected projects” continues to link to the existing Projects route as a useful review destination. These contact destinations are supplied for preview evaluation only; contact publication remains unapproved.

#### About heading and restrained magic refinement (authorized for preview 2026-11-16)

- Keep the single semantic heading **“Hi, I’m Jason.”** in the existing Newsreader typeface, weight, size, spacing, and punctuation. Wrap only **“Jason.”** in a semantic inline span and use the homepage highlight’s muted antique gold (`#d6b477`); do not italicize it or change typeface.
- Place one small decorative four-point SVG star above “Jason.” using the existing homepage star geometry and antique-gold color. Give it a soft shimmer and an 18-second closed CSS motion path that stays within 8px of its anchor, outside the letterforms and document flow.
- Replace the numbered-gutter glints completely and keep **01 through 04** static. Place one small, section-specific antique-gold charm immediately to the right of each section heading: an incomplete hand-drawn orbit with a moving four-point star for **How I think**; a tilted diamond with a moving dash and corner spark for **How I work**; three connected nodes with a traveling glint for **Selected work**; and a horizontal thread whose two points approach, share a soft glow, and separate for **Connect**.
- Enlarge each charm without changing its section concept or SVG structure. Keep it outside document flow at 50px by 36px on desktop and 36px by 26px on phones, with moving marks approximately 6–8px on desktop and 5–6px on phones. Maintain clear separation from the heading so the charm reads as marginalia rather than punctuation, while reserving no layout space and leaving heading wrapping unchanged.
- Use faint supporting lines at roughly 24%–38% opacity, moving marks at approximately 52%–85%, and soft glows within 10–12px. Increase desktop travel to approximately 12–18px and mobile travel to approximately 8–12px so each distinct action becomes visible within two to three seconds of normal reading.
- Use independent, smooth closed CSS animations with 11-, 13-, 10-, and 12-second durations and staggered phases for **How I think**, **How I work**, **Selected work**, and **Connect** respectively. Let the incomplete orbit read as an orbit, the dash traverse multiple sides of the tilted diamond and cue its corner spark, the constellation glint travel between nodes, and the thread points visibly meet under a brighter shared glow before separating.
- Do not pause a charm or enforce the earlier two-decoration viewport limit. Every visible section charm may animate continuously; an unusually tall viewport may show up to three section charms plus the title star in motion. Independent timing and low visual weight must keep the composition secondary to the headings. Remove any code used only for a concurrency limit.
- The charms use inline SVG and CSS only, reserve no layout space, and must not affect heading wrapping or collide with headings, copy, links, the portrait, or viewport edges.
- Keep the title star and every section charm and SVG child `aria-hidden`, noninteractive, non-focusable, and `pointer-events: none`. Under `prefers-reduced-motion: reduce`, remove every animation and CSS motion path while retaining the title star and section charms as quiet static gold marks at reduced opacity.
- This revised section-specific charm treatment is authorized only for comparison in PR #13. The enlarged charms, faster motion, exact charm design and placement, contact publication, merge, publication, and production deployment remain unapproved.

#### Hi, I’m Jason.

I’m a digital marketing strategist, which is the tidy answer. The less tidy answer is that I’m a generalist with a curiosity that rarely stays in its lane.

I’ve worked in marketing for more than a decade. For the past three-ish years, I’ve been helping a local cremation provider become easier to find online.

People looking for funeral or cremation information may be grieving and under time pressure. A wrong fact can cost a family money or time, so I care a lot about getting the answer right and making it easy to understand.

The site gives the rest of my attention somewhere to go: books, philosophy, creativity, odd connections, and whatever has sent me down the latest rabbit hole.

#### How I think

My interests show up in little bursts of rabbit holes. I’ll get hooked on a question, follow it into neighboring subjects, and come back later when something pulls me in again.

I like taking an idea from one place and putting it next to something from somewhere else to see if they make each other better. A connection can turn into something useful, or show me exactly where my thinking broke.

I’m interested in what other people think and why they see things the way they do. I like conversations where someone can change their mind or leave with a better question.

Either one counts.

#### How I work

Most marketing advice starts with a tactic. I usually want to back up a step.

Who is this for? What are they trying to understand? What evidence do we have, and what would make the answer more useful?

Those questions shape how I work on websites and search. They also shape how I think about content that may appear in AI-generated answers.

AI is part of my process. I use it to research, compare sources, test ideas, and pressure-check writing. Two models can agree and still be wrong. I still read the work, check the links, and verify the claims. The final judgment stays with the person whose name is on the work.

LinkedIn has the dates and job titles, because someone ought to keep them in order.

View my experience on LinkedIn

#### Selected work

The projects here will be specific about what I contributed, who else was involved, and what the evidence supports. Good work is usually shared work, and every public result needs a source I can stand behind.

Explore selected projects

#### Connect

I like good questions, useful disagreements, unexpected common ground, and work worth thinking through.

Send me an email if something here makes you want to compare notes or talk about a project. You can also find me on LinkedIn.

No pitch required.

Email Jason

Find me on LinkedIn

This exact copy remains approved for preview only. Contact publication, the heading color, motion treatment, merge, publication, and production deployment remain unapproved. The larger vertical portrait and About layout also remain review-preview treatments rather than final design approval. Do not update Notion as part of this authorization.

### Welcome accent refinement (authorized for preview 2026-11-13)

The owner's latest welcome-copy request replaces the initial wording from the [earlier PR comment](https://github.com/JLyve/personal-website/pull/13#issuecomment-6853929481). It authorizes only the revised wording below for the existing PR #13 previews. Preserve the compact welcome, collection layout, heading sizes, gold Fraunces Italic phrase, and all three Wandering Magic stars with their current paths, timing, shimmer and reduced-motion rules.

Use this exact wording, **approved for preview only, not final publication copy**:

> I'm Jason Lyvers, a digital marketing strategist with a curiosity that rarely stays in its lane.
>
> I'm fascinated by life's mysteries, unexpected discoveries, and all the interesting things I might stumble across along the way.

- Wrap only **digital marketing strategist** in a semantic inline span, using the established **Fraunces Italic** in readable muted antique gold/copper against the surrounding Newsreader headline. Only those three words receive the accent; “with a curiosity that rarely stays in its lane” stays in the regular headline treatment.
- Preserve the tiny, softly illuminated four-point star as a decorative ornament above the phrase, not an inline mark after the final word. The owner's subsequent footnote-marker feedback replaces the initial static, after-phrase placement with the quiet motion described below. Keep it hidden from assistive technology, with no link, button, hover trigger, blinking, underline, chip, or heavy glow.
- Let the phrase wrap naturally on phone widths, using word anchors for decorations without changing the headline's size or the surrounding layout rules. The sentence continues normally after “strategist” with no inline star, added punctuation or reserved ornament space.
- Preserve the supplied portrait file for the About-only placement, the reduced collection-headline sizes, fonts already loaded, collection design, and both empty/example review states. Add no libraries or private material.

The wording and visual treatment remain approved for preview only. **Not Entirely Unrelated** remains the selected name direction, with final publication approval still separate. This authorization doesn't approve final copy, final design, merge, or production publication. Keep `SITE_INDEXING_ENABLED = false` and layout fixtures out of the normal build.

### Wandering Magic (authorized for preview 2026-11-13)

The owner's scoped Wandering Magic request replaces the limited back-and-forth drift around **digital marketing strategist** in the existing PR #13 previews. Keep exactly the current three antique-gold stars and make them feel like tiny magical fireflies gently exploring the phrase. Animation refinements must preserve the currently approved preview wording above and don't make any name, copy, or visual treatment final.

- Preserve the exact Fraunces Italic font, weight, gold text color, heading sizes, and existing four-point star. Keep the About-only portrait placement, welcome wording, homepage layout, and collection design unchanged.
- Use three independent, closed cubic-Bezier CSS motion paths: a shallow figure-eight above “digital” (16 seconds), a rightward curved loop around “marketing” (19 seconds), and a leftward curved loop below “strategist” (13 seconds). Each travels approximately 8 to 9px from its resting anchor, within the requested 6 to 10px range. Matching start/end points and tangents make the loops continuous, without a jump, pause or backtracking reset.
- Keep the paths mainly horizontal with only a few pixels of vertical movement to fit the whitespace between wrapped lines. Anchor each star to its word, with independent starting phases and brightness timing. The stars stay upright and slightly behind the lettering, never crossing readable strokes.
- Preserve the current original SVG size and shape, the smaller responsive 6 to 7px stars, and gentle 62% to 95% shimmer. Retain the staggered 17-, 16-, and 19-second brightness cycles; no flashes, trails, extra particles or larger halos.
- Preserve the earlier footnote-cue correction: keep the original star above “digital” outside the text flow, distribute the smaller points around “marketing” and “strategist”, and don't place any ornament inline after the highlighted phrase.
- A nearly transparent, static warm glow may sit behind each wrapped text fragment for depth. Don't animate, blur, fade, mask, or recolor the lettering itself. All words stay readable and selectable.
- Decorations are noninteractive and hidden from screen readers. They occupy no layout space and must not clip, collide with nearby text, or create horizontal scrolling at phone or desktop widths.
- Under `prefers-reduced-motion: reduce`, remove animations, transforms and motion paths from all three ornaments. Reset the path distance and retain the original star at 85% opacity and the smaller points at 62%, in the same detached composition.
- Review normal and example collection builds on phones and desktop, including wrapped phrases and reduced motion. Keep examples out of normal builds and `SITE_INDEXING_ENABLED = false`.

This is a preview-only refinement in PR #13. Final design approval, merge, and production publication remain pending. No new dependency, private source material, or automatic Notion update is authorized.

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

Possible future refinements to the site name and logo treatment, homepage wording, About copy, portrait treatment, and motion; exact palette and font-loading/performance decisions; content inventory; final layouts beyond the current Home and About baseline; taxonomy; custom domain; new pages; real project evidence; future content; and search-indexing launch approval. The current production baseline may be revised through later reviewed pull requests; do not treat approval of PR #13 as approval of these deferred decisions.

## Links

GitHub: https://github.com/JLyve/personal-website

Hosting: https://personal-website-alg.pages.dev
