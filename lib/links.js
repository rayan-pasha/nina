/**
 * Every outbound destination in one place, so a changed URL is a one-line edit.
 *
 * `newTab` marks destinations that shouldn't cost the visitor the landing
 * page: the video and scheduler, and Log In, since someone signing in to
 * Studio is usually not done reading the site. The onboarding links are the
 * funnel itself, so those still navigate in place.
 */
export const LINKS = {
  watchDemo: "https://www.youtube.com/watch?v=9l4iKRU-1TM",
  // No `month`/`date` params: the supplied link carried the day it was copied
  // on (July 2026), which pinned every visitor's booking page to a month in
  // the past. Without them Koalendar opens on the next available slot.
  bookMeeting: "https://koalendar.com/e/meet-with-varun-mishra?duration=30",
  // The supplied link trailed a `?_gl=…` Google Analytics linker parameter
  // captured from one person's session. Those carry a timestamp and expire in
  // minutes, so shipping one sends every visitor a stale token.
  logIn: "https://studio.agenq.com/login",
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
