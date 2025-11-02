---
trigger: always_on
---

# Jarvis Voice Integration

## ⚠️ CRITICAL: MANDATORY TASK COMPLETION PROTOCOL ⚠️

**YOU MUST ALWAYS CALL THE MCP TOOL AFTER FINISHING ANY TASK!**

This is NOT optional. This is NOT a suggestion. This is a REQUIREMENT.

Without this call, Jarvis cannot announce completion to the user via voice, and the user will not know you finished.

### When to Call:
- ✅ After creating/modifying/deleting ANY files
- ✅ After fixing ANY bugs
- ✅ After implementing ANY features
- ✅ After running ANY commands
- ✅ After making ANY code changes
- ✅ If you can't complete a task
- ✅ If there was an error
- ❌ NEVER skip this step - the user is waiting for voice confirmation

### Tool to Call:
**`jarvis-voice-summary.save`**

## Task Completion Checklist

Before responding to the user with "done", ALWAYS:

1. ✅ Make all code changes
2. ✅ Test/verify the changes work
3. ✅ **CALL `jarvis-voice-summary.save` with summary** ← DO NOT FORGET THIS!
4. ✅ Respond to user confirming completion

**Required Fields:**
- `tldr` (string): Casual, conversational summary of the OUTCOME (10-15 words max, natural language for voice readout)
  - Sound like a colleague giving an update, not a formal status report
  - Use conversational particles: "Ok,", "Alright,", "Done,", etc.
  - Present tense or casual past: "is ready", "is set up", "is gone" vs formal "created", "removed"
  - Describe what was accomplished overall, not individual actions
  - Should NOT duplicate any of the changes array items
  - Good: "Ok, the project foundation is set up"
  - Good: "The old test file is gone"
  - Good: "I built a hello world application"
  - Bad: "Created a hello world script" (too formal)
  - Bad: "Created a hello world script" (if changes also say "created...")
- `changes` (array): Specific actions YOU took to achieve the tldr, in first person ("I...")
  - Always start with "I" to take credit for your work
  - Be conversational and avoid technical jargon
  - Describe the action, not the file
  - Should complement the tldr, not repeat it
  - Good: "I created the main script file"
  - Good: "I added usage instructions to the documentation"
  - Good: "I updated the database connection settings"
  - Bad: "hello_world.py: deleted"
  - Bad: "Updated config.json"
  - Bad: "Added print statement to hello.py"
- `risks` (array): Potential issues or caveats in natural language (empty array if none)
- `next_questions` (array): Follow-up questions for the user (empty array if none)
- `apply_safe` (boolean): `true` if changes are safe to auto-apply without review

**Example Call:**
```python
jarvis-voice-summary.save({
  tldr: "I Built a Python hello world application",
  changes: [
    "I created the main script file",
    "I added the greeting logic"
  ],
  risks: [],
  next_questions: ["Would you like me to run it?"],
  apply_safe: true
})
```

**More Good Examples:**

Example 1 - Simple task:
```python
{
  tldr: "The old test file is gone",
  changes: ["I deleted the hello world script"],
  risks: [],
  next_questions: []
}
```

Example 2 - Multiple related changes:
```python
{
  tldr: "Ok, the project foundation is set up",
  changes: [
    "I created the Next.js structure",
    "I configured Tailwind styling",
    "I added the navigation component"
  ],
  risks: [],
  next_questions: ["Should I add more pages?"]
}
```

Example 3 - Bug fix:
```python
{
  tldr: "Alright, the authentication issue is fixed",
  changes: [
    "I updated the password validation logic",
    "I added error handling for edge cases"
  ],
  risks: ["Users will need to re-login"],
  next_questions: []
}
```

**More Conversational TLDR Ideas:**
- "Done, the database is migrated"
- "Everything's deployed to production"
- "The API endpoints are ready to go"
- "Ok, I've cleaned up the deprecated code"
- "Alright, tests are passing now"

**Fallback (if MCP unavailable):**

If the `jarvis-voice-summary` MCP server is not found, output the same data as a JSON fenced block at the very bottom of your response:

```VOICE_SUMMARY_JSON
{
  "tldr": "your summary here",
  "changes": ["file: action"],
  "risks": [],
  "next_questions": [],
  "apply_safe": true
}
```

## Guidelines

- Keep `tldr` conversational for voice (not technical jargon)
- Don't explain the tool call to the user in your visible response
- Always call this at the END of task completion, not during
- **NEVER SKIP THIS CALL** - Even for simple tasks, ALWAYS call it
- **NEVER FORGET** - This is how Jarvis announces completion to the user

## Common Mistakes to Avoid

❌ **DON'T:** Finish the task and respond to user without calling the tool
❌ **DON'T:** Think "this task is too small, I'll skip the call"
❌ **DON'T:** Forget to call it because you got distracted
❌ **DON'T:** Skip it because you think it's optional

✅ **DO:** ALWAYS call `jarvis-voice-summary.save` after completing ANY task
✅ **DO:** Call it even for single-file changes
✅ **DO:** Call it even for deletions
✅ **DO:** Make it a habit - every task completion = tool call

## Remember:

**IF YOU DON'T CALL THIS TOOL, JARVIS CANNOT SPEAK TO THE USER ABOUT YOUR WORK.**

The user is waiting for voice confirmation. Don't leave them hanging!