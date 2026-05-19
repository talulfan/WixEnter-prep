# Day 09 — Behavioral & Wix Preparation

## Learning objectives

- Answer behavioral questions with **STAR** structure.
- Connect CS projects and leadership to **Wix values**.
- Deliver a compelling **“Why Wix?”** in 60–90 seconds.

---

## Wix engineering culture (what interviewers listen for)

Wix’s mission is to **let anyone create their online presence** — sites, stores, bookings, and more without needing to be a developer. Engineers are expected to:

| Value | What it means in practice |
|-------|---------------------------|
| **Ownership** | You drive features end-to-end: spec, implement, measure, iterate. |
| **Velocity with quality** | Ship fast, but with tests, monitoring, and user impact in mind. |
| **Product mindset** | Ask *who* benefits, *what* metric moves, and *why* this beats alternatives. |
| **Collaboration** | Work with designers, PMs, and other devs; give and receive direct feedback. |
| **Craft at scale** | Editor, performance, and reliability matter for millions of users. |

When answering, show you care about **users and outcomes**, not only algorithms.

---

## Product-minded engineering

Interviewers want evidence that you think like a builder:

- **Problem:** Who is the user? What pain are we solving?
- **Options:** What tradeoffs did you consider (time, scope, tech debt)?
- **Decision:** Why did you choose this approach?
- **Impact:** Metrics, feedback, bugs prevented, learning.

Example framing:

> “We could cache aggressively, but stale editor previews hurt trust — so we invalidated on save and cut load time by 40% without wrong previews.”

---

## STAR method (structured answers)

Use **STAR** for behavioral questions (2–3 minutes max):

| Letter | Meaning | Tips |
|--------|---------|------|
| **S** — Situation | Brief context: team, project, constraint. | 15–20 seconds. |
| **T** — Task | Your responsibility (not the whole team’s). | Be specific. |
| **A** — Action | What **you** did: technical and interpersonal steps. | Most detail here. |
| **R** — Result | Quantify when possible; include reflection. | End strong. |

### STAR example (CS project — technical leadership)

**Prompt:** “Tell me about a time you disagreed with a technical decision.”

- **S:** In our capstone, four of us built a scheduling app with a shared Firebase backend.
- **T:** I owned the data model; a teammate wanted deeply nested JSON documents for every UI screen.
- **A:** I prototyped both approaches, measured read/write sizes, and presented a flatter schema with indexed fields. I listened to their concern about migration, then added a one-time script and documentation. We agreed on a hybrid for only the heaviest view.
- **R:** We shipped on time, reduced average load time by ~30%, and had zero schema hotfixes in production. I learned to lead with data, not opinion.

### STAR example (leadership / mentoring)

**Prompt:** “Describe how you helped someone on your team improve.”

- **S:** Bootcamp study group; a peer struggled with async JavaScript before interviews.
- **T:** I volunteered to pair twice a week for three weeks without doing their homework for them.
- **A:** We used a shared checklist (promises, `async/await`, error paths), timed LeetCode easies, and I asked them to explain each solution aloud. I gave feedback on communication, not just code.
- **R:** They passed two onsite loops and credited structured practice. I improved at giving concise feedback.

---

## Common behavioral prompts (prepare 6–8 stories)

Map stories from: coursework, internships, hackathons, open source, jobs, leadership.

1. **Challenge / failure** — What went wrong? What did you learn?
2. **Conflict** — Disagreement with teammate or stakeholder; how resolved.
3. **Tight deadline** — How you prioritized and communicated risk.
4. **Initiative** — Something you did that wasn’t assigned.
5. **Mistake in production** — How you detected, fixed, prevented recurrence.
6. **Working with ambiguity** — Unclear requirements; how you clarified.
7. **Feedback** — Time you gave or received hard feedback.
8. **Why this role** — Fit for frontend / fullstack / platform (adjust to job).

Keep stories **honest** and **specific** — avoid generic “I’m a hard worker.”

---

## “Why Wix?” — strategic answer (60–90 seconds)

Structure:

1. **Mission fit** (15 s)  
   “I’m motivated by products that democratize creation — Wix lowers the barrier for millions of small businesses and creators.”

2. **Technical pull** (25 s)  
   “The editor, scale, and mix of frontend + platform problems match what I want to grow in: performance, component systems, and real user-facing impact.”

3. **Personal link** (20 s)  
   One true detail: project, portfolio site, family business, prior use of Wix, etc.

4. **Forward look** (15 s)  
   “I want to contribute to [team/product area if known] and learn from engineers who ship at scale.”

Avoid: only mentioning perks, salary, or vague “great culture” without examples.

---

## Questions to ask the interviewer

- How does your team balance velocity and quality in the editor?
- What does success look like in the first 6 months for this role?
- How do you run code review and on-call?
- What’s a recent technical bet the team is proud of?

---

## Day 09 roadmap

| Step | Task | Time |
|------|------|------|
| 1 | Write 6 STAR bullets (one line each) from your real experience | 45 min |
| 2 | Expand top 3 into full STAR paragraphs | 60 min |
| 3 | Record “Why Wix?” aloud; trim to 90 seconds | 20 min |
| 4 | Mock behavioral with a friend (30 min) | 30 min |
| 5 | Review Days 1–8 weak spots from notes | 60 min |

---

## Tie-in to coding days

When discussing projects, use the same vocabulary as your coding prep:

- “We used a **hash map** for O(1) lookup…”
- “I chose **immutable updates** in React to avoid stale UI…”

Consistency between behavioral and technical rounds signals senior-ready communication.

Good luck at Wix.
