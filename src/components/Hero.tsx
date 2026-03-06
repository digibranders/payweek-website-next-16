"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const ease: Easing = "easeOut";
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease, delay },
  });

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white px-6 py-20 md:py-28 overflow-hidden border-b border-neutral-100">
      <div className="relative z-10 w-full max-w-[42rem] mx-auto flex flex-col items-center text-center gap-14">
        {/* Heading + subtitle */}
        <div className="flex flex-col items-center text-center gap-4">
          {/* Justification: hero headline is the primary entrance signal — fade-up sets the page tone */}
          <motion.h1
            {...fadeUp(0)}
            style={{
              fontSize: "var(--font-size-h1)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-h1)",
              lineHeight: "var(--leading-h1)",
              color: "#171717",
            }}
          >
            Not Just Balanced. <br />
            Accounted to the Penny.
          </motion.h1>

          {/* Justification: subtitle follows headline in sequence */}
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontSize: "var(--font-size-body)",
              fontWeight: 400,
              lineHeight: "var(--leading-body)",
              color: "#525252",
              maxWidth: "39.5625rem",
            }}
          >
            Precision-driven accounting that goes beyond the books—uncovering insights, ensuring every cent tells the truth.
          </motion.p>
        </div>

        {/* CTA */}
        {/* Justification: CTA completes the entrance sequence, delayed to maintain visual rhythm */}
        <motion.div {...fadeUp(0.2)} className="flex flex-row items-center">
          <button
            className="hover:bg-neutral-50 active:scale-[0.97] transition-all duration-150 whitespace-nowrap cursor-pointer"
            style={{
              padding: "0.511rem 1.25rem",
              height: "2.396rem",
              minWidth: "7.3875rem",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: "var(--radius-card)",
              color: "#171717",
              fontSize: "var(--font-size-sm)",
              fontWeight: 500,
              lineHeight: "var(--leading-sm)",
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
