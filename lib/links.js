/**
 * Every outbound destination in one place, so a changed URL is a one-line edit.
 *
 * `newTab` marks side-trips (video, scheduler) that shouldn't cost the visitor
 * the landing page. Studio links are the funnel itself, so they navigate in
 * place.
 */
export const LINKS = {
  watchDemo: "https://www.youtube.com/watch?v=9l4iKRU-1TM",
  bookMeeting:
    "https://koalendar.com/e/meet-with-varun-mishra?month=2026-07&duration=30&date=2026-07-30",
  logIn:
    "https://studio.agenq.com/login?_gl=1*5ue8e6*_ga*MjAxODA5NTExNy4xNzg1MzYzNjA1*_ga_SQLP1X6TT6*czE3ODUzNzYyNzAkbzIkZzAkdDE3ODUzNzYyNzAkajYwJGwwJGgxMDA4OTM0Njc.",
  onboarding: "https://studio.agenq.com/onboarding",

  youtube: "https://www.youtube.com/@AIProductAssistant",
  // Canonical company URL. The supplied link carried `?feedView=all&
  // viewAsMember=true`, which are view-state params from an admin's own
  // session rather than part of the address.
  linkedin: "https://www.linkedin.com/company/agenq/",
  x: "https://x.com/agenQ_AI",
};

/** Spread onto an <a> to open in a new tab safely. */
export const newTab = {
  target: "_blank",
  rel: "noopener noreferrer",
};
