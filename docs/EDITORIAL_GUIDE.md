# Notes — Editorial Guide & Voice-First Workflow
Status: agreed voice-first workflow; the private Notion Idea Inbox is **created and connected to ChatGPT** (owner-confirmed 2026-10-30). Exact database properties and automated integrations have not been verified. Updated 2026-10-30.

## Editorial promise
**Think freely. Question thoughtfully. Publish intentionally.**
The site publishes *Notes*, not public sections titled Blogs or Writings. A Note may be a short observation, researched idea, experiment, philosophical reflection, or conversation-shaped exploration. The author is not required to identify as a professional writer.

### Voice and quality
- Preserve the author's conversational style, dry humor, personal cadence, authentic vocabulary, uncertainty, and unusual connections. Improve clarity without flattening personality into generic “thought leadership.”
- ChatGPT is a **collaborative editor and thinking partner first**: explore, question, challenge assumptions, find strong ideas, then draft when asked. Seek approval before adding major ideas.
- Never invent lived experience, quotations, evidence, credentials, results, conviction or confidence. Separate source claims, personal interpretation and proposed framing. Distinguish philosophical/metaphysical belief from established research.
- No padded intros, keyword stuffing, mandatory word counts, formulaic conclusions or forced CTAs. The reader's job and subject dictate form.
- Editorial quality includes **voice fidelity** and **reader value**; either may require revision.

## Notes formats (flexible, not quotas)
**Field Note:** short, nearly book-like, sometimes a single sharp thought. Minimal subheads/media.
**Deep Note:** substantive exploration with structure, researched context, alternative perspectives and citations where warranted.
**Experiment:** real test or creation, question, what was tried, observed results and lessons, with evidence and visuals when helpful.
All can be conversational and well edited. Content length and metadata should match the material, not arbitrary SEO thresholds.

## Voice-first process
1. **Speak/capture:** author dictates in ChatGPT or Wispr Flow. Raw recordings/transcripts may contain private material. Preserve accessible original text/link separately.
2. **Thinking session:** ChatGPT identifies promising insights, assumptions, interesting tangents and useful questions; have a genuine discussion before defaulting to an article draft.
3. **Save intentionally:** only when author requests (“Capture this idea”), create or propose a private Notion Idea Inbox entry. Never imply saving succeeded without connector confirmation.
4. **Develop:** agree on a provisional central insight, reader JTBD, original contribution, weak points, evidence needs and likely form. Source interpretations and editorial additions should be labeled.
5. **Draft and review:** organize prose, keep voice, fact-check material claims, assess reader value and search intent if warranted; author approves the precise final copy.
6. **Handoff:** only approved copy moves to Codex as Markdown/MDX or otherwise explicitly approved content. Codex prepares Astro frontmatter, truthful SEO metadata/schema, optional imagery, internal links and a Cloudflare preview PR.
7. **Publish:** user reviews live preview and explicitly approves merging to `main`. Cloudflare deploys approved merges. No auto-publication.

## Idea Inbox — connected private workspace
The private Notion Idea Inbox is created and connected to ChatGPT. It is the source of truth for ideas, unedited voice transcript/source links, summaries, open questions, drafts and editorial progress. ChatGPT is the conversation layer, Notion the storage layer, Codex the website implementation layer, and GitHub source control. **Connection does not imply automatic synchronization or publication:** transfer to Codex/GitHub remains an intentional, approved handoff.

Proposed minimal fields (confirm against the actual connected database before assuming its properties match):
- **Idea** (title)
- **Status** (Captured, Exploring, Drafting, Review, Published, optional Parked)
- **Topics** (multi-select)
- **Format** (Field Note, Deep Note, Experiment, or undecided)
- **Captured** (date)

Inside each entry: source transcript or link, succinct summary, potentially valuable connections, JTBD hypothesis, editorial questions, drafts and approved copy when applicable. Original source should not be overwritten by edits. Do not store sensitive/private material in the **public GitHub repository**. Confirm whether Notion may store specific personal content before saving it.

## Five-question editorial brief
1. What is the **reader's job** (solve, understand, reflect, discover)?
2. What is the **central promise** or useful idea?
3. What is **distinctly the author's** (experience, perspective, original analysis)?
4. What requires **evidence, correction or nuance**? Is the Note search-led or perspective-led?
5. What **natural next step** or related thread might be helpful?

Do this proportionally: a 200-word Field Note should not require a huge strategy document. It's fine for an idea to stay Parked indefinitely.

## Publishing checklist
For every publicly approved Note: accurate title/summary, legible slug, author attribution, initial publication date, updated date only for meaningful changes, approved text, appropriate topics and format, unique SEO title/meta description, correct canonical, sensible semantic headings, accessible links/optional images, relevant truthful BlogPosting structured data, and nonmisleading social metadata. Use no placeholder claims or fictional author quotes. Cite external sources in content where they add necessary support. Link related content when useful, not automatically.

## Website implementation boundary
The current Astro theme may use `src/content/blog/` and existing routes. Public label “Notes” should not force an unreviewed URL/collection migration. Decide URL scheme and redirects separately. Draft material must not appear in generated production pages, sitemap, site search, or feeds. Repository files and deployment are public; privacy belongs in Notion/appropriate private tools until editorial approval.

## Deferred choices
Verification or refinement of the existing Notion database fields/permissions, potential Wispr Flow retrieval automation, storage location for raw audio, CMS, publishing automation, versioned draft collaboration, future topical taxonomy, first real Notes, final site copy. Do not build these without approval.
