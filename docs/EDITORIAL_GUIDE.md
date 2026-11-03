# Notes -- Editorial Guide & Voice-First Workflow

Status: agreed voice-first workflow. The private Notion project workspace, Idea Inbox, Living Creative Direction, and Session Synopses are created and accessible to ChatGPT. The Idea Inbox fields were verified on 2026-11-03. There is no automatic synchronization or publication.

Updated 2026-11-03.

## Editorial promise

**Think freely. Question thoughtfully. Publish intentionally.**

The site publishes *Notes*, not public sections titled Blogs or Writings.

A Note may be a short observation, researched idea, experiment, philosophical reflection, or conversation-shaped exploration. The author is not required to identify as a professional writer.

### Voice and quality

- Preserve the author's conversational style, dry humor, personal cadence, authentic vocabulary, uncertainty, and unusual connections.
- Improve clarity without flattening personality into generic “thought leadership.”
- ChatGPT is a collaborative editor and thinking partner first. Explore, question, challenge assumptions, find strong ideas, and then draft when asked.
- Seek approval before adding major ideas or changing the author's intended meaning.
- Never invent lived experience, quotations, evidence, credentials, results, conviction, or confidence.
- Separate source claims, personal interpretation, and proposed framing.
- Distinguish philosophical or metaphysical belief from established research.
- Avoid padded introductions, keyword stuffing, mandatory word counts, formulaic conclusions, and forced calls to action.
- Let the reader's job and subject determine the form.
- Editorial quality includes voice fidelity and reader value. Either may require revision.

## Notes formats

These formats are flexible, not quotas.

**Field Note:** Short, nearly book-like, and sometimes built around one sharp thought. Use minimal subheadings and media.

**Deep Note:** A substantive exploration with structure, researched context, alternative perspectives, and citations when warranted.

**Experiment:** A real test or creation that explains the question, what was tried, observed results, and lessons. Include evidence and visuals when helpful.

All formats may be conversational and carefully edited. Content length and metadata should match the material rather than an arbitrary SEO target.

## Voice-first process

1. **Speak and capture:** The author dictates in ChatGPT or Wispr Flow. Raw recordings and transcripts may contain private material. Preserve an accessible original text or source link separately.
2. **Thinking session:** ChatGPT identifies promising insights, assumptions, useful questions, and interesting tangents. Have a genuine discussion before defaulting to an article draft.
3. **Save intentionally:** Create or propose an Idea Inbox entry only when the author explicitly asks to preserve an idea. Never imply that saving succeeded without connector confirmation.
4. **Develop:** Agree on a provisional central insight, reader job, original contribution, weak points, evidence needs, and likely format. Label source interpretations and editorial additions.
5. **Draft and review:** Organize the prose, protect the author's voice, check material facts, and assess reader value and search intent when warranted. The author approves the precise final copy.
6. **Handoff:** Only approved copy moves to Codex as Markdown, MDX, or another explicitly approved format. Codex prepares Astro frontmatter, truthful SEO metadata and schema, optional imagery, internal links, and a Cloudflare preview pull request.
7. **Publish:** The owner reviews the live preview and explicitly approves merging into `main`. Cloudflare deploys approved merges. There is no automatic publication.

## Private Notion project workspace

The private Notion workspace separates different kinds of information so they are not mistaken for one another.

### Idea Inbox

The Idea Inbox is the source of truth for:

- captured ideas;
- unedited source transcripts or links;
- summaries;
- open editorial questions;
- drafts; and
- editorial progress.

It is not the source of truth for approved website design, behavior, public copy, or implementation requirements.

### Living Creative Direction

The Living Creative Direction document records the current private understanding of the website.

It separates information into:

- **Approved Decision:** Jason explicitly accepted the direction, making it eligible for promotion into the relevant GitHub project document.
- **Working Direction:** The direction is promising and may guide further exploration, but it is not approved for implementation.
- **Exploratory Idea:** The idea is worth discussing or testing, but it has not been accepted as a direction.

An Approved Decision in Notion does not automatically update GitHub or authorize Codex to implement it. The relevant GitHub project document must be updated, or Jason must explicitly authorize the specific implementation.

### Session Synopses

Session Synopses preserve:

- the conversation's arc;
- who contributed each idea;
- decisions and reframes;
- meaningful quotes;
- open threads; and
- possible next steps.

Synopses are historical records. They do not override the Living Creative Direction or the GitHub project documents.

Create a synopsis only when the conversation contains a decision, reframe, resolved question, meaningful insight, or other information that would be costly to lose. Do not create one for routine questions or minor revisions.

### Source hierarchy

`docs/PROJECT_GUIDE.md` defines the full decision hierarchy.

For editorial work:

1. GitHub project documents govern approved implementation and publication.
2. The Living Creative Direction governs the current private discussion.
3. The Idea Inbox governs idea and draft status.
4. Session Synopses explain how the thinking developed.

If these sources conflict, surface the mismatch to Jason. Do not infer which source should win from its edit date.

ChatGPT is the conversation layer, Notion is the private thinking and storage layer, Codex is the implementation layer, GitHub is the approved source and change history, and Cloudflare Pages is the publishing layer.

Connection does not imply synchronization or publication. Every transfer remains intentional and approved.

## Verified Idea Inbox fields

The connected Idea Inbox currently uses:

- **Idea:** Title
- **Status:** Captured, Exploring, Drafting, Review, Published, or Parked
- **Topics:** Marketing, Books, Philosophy, Creativity, Life, or Experiments
- **Format:** Field Note, Deep Note, Experiment, or Undecided
- **Captured:** Date

Verify the live database again before depending on a property that may have changed.

Inside each entry, preserve the source transcript or link separately from edited text. Add a concise summary, useful connections, a reader-job hypothesis, editorial questions, drafts, and approved copy when applicable.

Do not overwrite original source material with later edits.

Do not store sensitive or private material in the public GitHub repository. Confirm whether Notion is an appropriate location before saving highly sensitive personal content.

## Five-question editorial brief

1. What is the reader's job: solve, understand, reflect, or discover?
2. What is the central promise or useful idea?
3. What is distinctly the author's: experience, perspective, or original analysis?
4. What requires evidence, correction, or nuance? Is the Note search-led or perspective-led?
5. What natural next step or related thread might help the reader?

Apply this proportionally. A 200-word Field Note should not require a large strategy document. An idea may remain Parked indefinitely.

## Publishing checklist

For every publicly approved Note, confirm:

- accurate title and summary;
- legible slug;
- author attribution;
- initial publication date;
- updated date only for meaningful changes;
- approved text;
- appropriate topics and format;
- unique SEO title and meta description;
- correct canonical URL;
- sensible semantic headings;
- accessible links and optional images;
- relevant, truthful `BlogPosting` structured data; and
- nonmisleading social metadata.

Do not use placeholder claims or fictional author quotations.

Cite external sources when they provide necessary support. Link related content when useful, not automatically.

## Website implementation boundary

The current Astro theme may use `src/content/blog/` and existing routes. The public label “Notes” should not force an unreviewed URL or collection migration. Decide the URL scheme and redirects separately.

Draft material must not appear in generated production pages, the sitemap, site search, or feeds.

Repository files and deployments are public. Private material belongs in Notion or another appropriate private tool until editorial approval.

## Deferred choices

Deferred choices include:

- a future review of Notion sharing and permission settings;
- possible Wispr Flow retrieval automation;
- storage for raw audio;
- a possible content management system;
- publishing automation;
- versioned draft collaboration;
- future topical taxonomy;
- the first real Notes; and
- final site copy.

Do not build these without approval.
