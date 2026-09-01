Drop page images here. Any filename works; a descriptive one helps.

Before an image is wired into a page it gets resized to 1400px wide and
converted to webp, and the original is moved to content/images/ so the
full-size file is kept but never shipped. (Everything in public/ is copied
into the build as-is, so a 1.7MB PNG left here would be downloaded by every
visitor.) The first one went 1664KB -> 53KB.

Slots still waiting on an image:

Product page (/)
  ask-annual-billing     AgenQ running the annual billing workflow
  ask-report             AgenQ building the report
  ask-approval           AgenQ requesting approval
  vertical-insurance     insurance platform screenshot
  vertical-saas          SaaS onboarding screenshot

Insurance page (/solutions/insurance)
  coverage-question      AgenQ answering a coverage question
  guided-quote           AgenQ guiding a quote
  plan-comparison        plan comparison in the platform

Done
  nobody-signed-up            a user mid-task with the question typed
                              (Product page, opening section)
  nobody-signed-up-insurance  the brighter variant of the same scene
                              (Insurance page, "more complexity" section)

Two near-identical photos, deliberately: same staged CRM, different model and
lighting, so the two pages don't look copy-pasted. Don't dedupe them.
