"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Customers First",
    description:
      "Our customers are the heart of our business. We succeed when they succeed, and we are committed to delivering products that not only meet but exceed their expectations.",
    bg: "bg-white",
  },
  {
    number: "02",
    title: "Security by Design",
    description:
      "Being an open-source company, we uphold trust and transparency in every process. We also regularly audit our codebase and infrastructure to ensure it's secure.",
    bg: "bg-[#fafafa]",
  },
  {
    number: "03",
    title: "Act as an Owner",
    description:
      "We empower our team to own projects without the need for redundant meetings or standups. We trust our team to make decisions and take ownership of their work.",
    bg: "bg-white",
  },
  {
    number: "04",
    title: "Don't Stop Shipping",
    description:
      "Complacency is the root of all evil. As a company, you're either growing or you're dying. We ship fast and iterate faster – all without compromising on quality.",
    bg: "bg-[#fafafa]",
  },
];

const valueCardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="w-full">
      {/* Green gradient header */}
      <div className="relative w-full overflow-hidden" style={{ background: "linear-gradient(to bottom, #0fd46b, #ffffff)" }}>
        <motion.div
          className="max-w-7xl mx-auto px-6 flex flex-col items-center pt-24 md:pt-32 pb-12 md:pb-16"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
            style={{ background: "linear-gradient(135deg, #fef3c6 0%, #fde685 100%)" }}
          >
            <svg className="-rotate-90" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4C6.895 4 6 4.895 6 6V28L16 22L26 28V6C26 4.895 25.105 4 24 4H8Z" fill="#f59e0b" />
            </svg>
          </div>
          <h2
            className="font-bold text-center text-[#171717]"
            style={{ fontSize: "var(--font-size-h2)", lineHeight: "var(--leading-h2)", letterSpacing: "var(--tracking-h2)" }}
          >
            Our values
          </h2>
        </motion.div>
      </div>

      {/* 2x2 Values Grid */}
      {/* Justification: 2×2 grid implies sequence — stagger reveals each value's turn */}
      {/*
        Inner border strategy (no outer border):
          Index 0 (top-left):    border-bottom always  +  border-right at md+
          Index 1 (top-right):   border-bottom always
          Index 2 (bottom-left): border-bottom on mobile, border-right at md+ (no bottom)
          Index 3 (bottom-right): no border
      */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={prefersReducedMotion ? {} : { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, index) => {
            const borderClass =
              index === 0 ? "border-b border-[#e5e5e5] md:border-r" :
              index === 1 ? "border-b border-[#e5e5e5]" :
              index === 2 ? "border-b border-[#e5e5e5] md:border-b-0 md:border-r" :
              "";

            return (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? {} : valueCardVariants}
                className={`${value.bg} ${borderClass} flex flex-col`}
              >
                <div className="flex flex-col gap-6 p-10 md:p-16">
                  <p
                    className="font-bold text-[#ff6900]"
                    style={{ fontSize: "var(--font-size-h2)", lineHeight: "var(--leading-h2)", letterSpacing: "var(--tracking-h2)" }}
                  >
                    {value.number}
                  </p>
                  <p
                    className="font-semibold text-[#171717]"
                    style={{ fontSize: "var(--font-size-h3)", lineHeight: "var(--leading-h3)", letterSpacing: "var(--tracking-h3)" }}
                  >
                    {value.title}
                  </p>
                  <p
                    className="font-normal text-[#737373]"
                    style={{ fontSize: "var(--font-size-body)", lineHeight: "var(--leading-body)" }}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;