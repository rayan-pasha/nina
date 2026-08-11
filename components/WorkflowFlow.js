"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Animated version of NINA's workflow, shown under the headline.
 * A NINA badge glides from node to node, lighting each one and filling the
 * connector behind it, on a loop.
 *
 * Stays a single horizontal row at every width — stacking it on mobile made
 * the hero 962px tall and pushed both CTAs below the fold. On very narrow
 * screens the row scrolls inside its own track (never the page) and keeps the
 * active node centred as NINA advances.
 */
const nodes = ["Ask NINA", "Follow highlighted steps", "Done"];

export default function WorkflowFlow() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % nodes.length), 1900);
    return () => clearInterval(t);
  }, []);

  // Keep the lit node in view when the row is too wide to fit.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth) return;

    const node = track.querySelector(`[data-node="${active}"]`);
    if (!node) return;

    const nodeRect = node.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const delta =
      nodeRect.left + nodeRect.width / 2 - (trackRect.left + trackRect.width / 2);

    track.scrollBy({ left: delta, behavior: "smooth" });
  }, [active]);

  return (
    <div className="flex justify-center">
      <div
        ref={trackRef}
        className="max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="mx-auto flex w-max items-center rounded-full border border-line bg-paper/80 px-2 py-1.5 shadow-soft backdrop-blur-sm sm:px-6 sm:py-3.5">
          {nodes.map((label, i) => {
            const on = i === active;
            const done = i < active;

            return (
              <div key={label} data-node={i} className="flex items-center">
                {/* Node */}
                <motion.div
                  animate={{ scale: on ? 1.03 : 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className={`relative flex items-center gap-1 rounded-full px-1.5 py-1.5 transition-colors duration-500 sm:gap-2.5 sm:px-3.5 sm:py-2 ${
                    on ? "bg-brand-soft" : "bg-transparent"
                  }`}
                >
                  <span className="relative grid h-3.5 w-3.5 shrink-0 place-items-center sm:h-6 sm:w-6">
                    {on ? (
                      <motion.span
                        layoutId="nina-badge"
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        className="absolute inset-0 grid place-items-center rounded-full bg-gradient-to-br from-brand-2 to-brand text-[7px] font-semibold text-white shadow-brand sm:text-[10px]"
                      >
                        N
                        <span className="absolute inset-0 animate-pulse-ring rounded-full ring-2 ring-brand-3/70" />
                      </motion.span>
                    ) : (
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 sm:h-2 sm:w-2 ${
                          done ? "bg-brand/45" : "bg-line"
                        }`}
                      />
                    )}
                  </span>

                  <span
                    className={`whitespace-nowrap text-[10px] font-medium transition-colors duration-500 sm:text-[13.5px] ${
                      on ? "text-brand" : done ? "text-slate" : "text-mute"
                    }`}
                  >
                    {label}
                  </span>
                </motion.div>

                {/* Connector */}
                {i < nodes.length - 1 && (
                  <span className="relative mx-0.5 h-px w-2.5 overflow-hidden bg-line sm:mx-2 sm:w-9">
                    <motion.span
                      className="absolute inset-0 bg-brand"
                      initial={false}
                      animate={{ opacity: i < active ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
