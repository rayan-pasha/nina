"use client";

import { useEffect } from "react";

// Scroll pe .reveal elements ko .visible class deta hai (sirf /use-cases/ezlynx page ke andar)
export default function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".ezlynx-page .reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    // fallback: agar observer fire na ho to 900ms baad sab dikha do
    const t = setTimeout(
      () => els.forEach((el) => el.classList.add("visible")),
      900,
    );
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return null;
}
