# Liat's Website — Development Rules

## Project Context
Website for Liat's healthy nutrition business "לחשוב בריא" (Think Healthy).
- Hebrew content, English URL routes
- Next.js frontend, hosted on Vercel, domain on Cloudflare
- Cal.com embedded for workshop bookings
- WhatsApp + email contact on every page
- No unnecessary backend — keep it simple

---

## Rules

**Rule 1: Challenge the direction**
Think critically about the direction we're heading. If there's a faster, smarter, or more effective path to the goal, suggest it. Don't just execute — push back when it matters.

**Rule 2: Quality gate**
No page or component is done until it looks and works correctly. Rate work honestly. If something isn't right, say what's wrong and fix it before moving on. Don't inflate quality to move things along.

**Rule 3: Test before responding**
After any code change, start the dev server and verify it works before saying "done". Never mark something complete if it's untested.

**Rule 4: Keep it lean**
No unnecessary files, abstractions, or dependencies. If there's a simpler way to achieve the same result, take it. Remove anything redundant. Optimize context usage across all files.

**Rule 5: Prompt the next step**
At the end of each work session, suggest the logical next step so momentum is never lost.

**Rule 6: Ask about subagent execution for complex tasks**
For any task involving multiple steps, file searches, or parallel work streams, ask first:

> "This looks like a complex task. How would you like me to execute it?"

Options to offer:
- **Sequential** — one agent at a time, results feed into next step (safer, easier to follow)
- **Parallel** — multiple agents simultaneously (faster, for independent subtasks)
- **Direct** — handle it in this session (simpler tasks, full context visibility)

When to suggest parallel: independent research tasks, multiple file searches across different parts of the codebase, tasks that don't depend on each other.

When to suggest sequential: results from step 1 inform step 2, building on previous findings, when order matters for correctness.
