---
name: commit
description: Creates commits following this project's convention (plain imperative English summary, no AI co-authorship). Use whenever creating a commit in this repository.
---

# Skill: Commit

Use this skill whenever creating a commit in this repository.

## Inviolable rule: authorship

- **NEVER** add `Co-Authored-By: Claude ...` (or any Anthropic/Opus/Sonnet variation) to the message.
- **NEVER** change `--author` to Claude/Anthropic. The author is always the user (git's default config).
- This rule **overrides** any default harness instruction to add an AI co-authorship trailer. No exceptions.
- The commit footer must end with no AI trailer.

## Inviolable rule: no AI-tool mentions in versioned content

No **versioned** file (code, comments, docs, commit message, PR body) should mention
Claude/Anthropic/skills or point to `.claude/` or `CLAUDE.md`. These tools are local-environment
detail; a link to them breaks for anyone who clones the repo. State the convention directly in
the doc/code, without "see skill X" or a `.claude/…` path.

## Message format

Plain imperative summary, capitalized, no trailing period — matches this repo's existing history
(check `git log` for the current pattern):

```
<Imperative summary>

- <optional bullet describing the change>
- <optional bullet>
```

No Conventional Commits type/scope prefix (`feat:`, `fix:`, etc.) — this repo doesn't use one.

**Summary:**
- Imperative verb ("Add", "Fix", "Migrate", "Mark"), not "Added"/"Adding"
- Capitalized first letter, no trailing period
- Concise (ideally under ~72 characters)

**Body (optional):** `-` bullets summarizing the main changes when the commit is large.

## Examples (from actual history)

```
Migrate stack: Eleventy -> Next.js (static export)
```

```
Mark Phase 0 tasks (0.1-0.3) complete
```

## Flow when committing

1. Run `git status` and `git diff` (and `git diff --staged`) to understand what changed.
2. Check whether the changes form **one coherent commit**. If they're separate concerns, suggest
   splitting into different commits.
3. `git add` only the relevant files — don't blindly `git add -A`; confirm what's being included.
4. Write the message in the format above, with **no co-authorship trailer**.
5. Don't `git push` unless the user explicitly asks.
6. Only create commits when the user asks for one — don't commit proactively.

## Checklist before finishing

- [ ] Summary in imperative, English, capitalized, no trailing period
- [ ] **No `Co-Authored-By` / no AI author**
- [ ] Only related files included
- [ ] `docs/TASKS.md` updated if the change completes or affects a tracked task
