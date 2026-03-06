"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
    {
        title: "Cloud-Based Platform",
        description: "Access your financial data anywhere, anytime with our secure cloud infrastructure.",
        iconGradient: "linear-gradient(135deg, rgb(203, 251, 241) 0%, rgb(150, 247, 228) 100%)",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Info/circle icon */}
                <circle cx="14" cy="14" r="11.665" fill="rgb(15,212,107)" fillOpacity="0.5" />
                <circle cx="14" cy="14" r="6.999" fill="none" stroke="rgb(15,212,107)" strokeWidth="2.333" />
                <rect x="13.416" y="10.499" width="1.167" height="2.333" fill="rgb(15,212,107)" />
                <rect x="13.416" y="13.999" width="1.167" height="3.5" fill="rgb(15,212,107)" />
            </svg>
        ),
    },
    {
        title: "Intelligence Engine",
        description: "From first transaction to strategic planning with automated insights and analytics.",
        iconGradient: "linear-gradient(135deg, rgb(243, 232, 255) 0%, rgb(233, 212, 255) 100%)",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Document lines icon */}
                <rect x="2.333" y="0" width="17.498" height="20.996" rx="2.333" fill="rgb(152,16,250)" fillOpacity="0.5" />
                <rect x="0" y="4.665" width="9.331" height="2.333" fill="rgb(152,16,250)" />
                <rect x="0" y="9.33" width="9.331" height="2.333" fill="rgb(152,16,250)" />
                <rect x="0" y="13.995" width="5.832" height="2.333" fill="rgb(152,16,250)" />
                <circle cx="17.498" cy="19.829" r="3.499" fill="rgb(152,16,250)" fillOpacity="0.5" />
                <line x1="20.301" y1="22.626" x2="23.333" y2="25.666" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Global Compliance",
        description: "Stay compliant across all jurisdictions with automated tax filing and reporting.",
        iconGradient: "linear-gradient(135deg, rgb(219, 234, 254) 0%, rgb(190, 219, 255) 100%)",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pin/location icon */}
                <circle cx="14" cy="14" r="11.665" fill="rgb(21,93,252)" fillOpacity="0.5" />
                <path d="M14 2.333C9.396 2.333 5.691 6.037 5.691 10.642C5.691 17.282 14 27.333 14 27.333C14 27.333 22.309 17.282 22.309 10.642C22.309 6.037 18.604 2.333 14 2.333ZM14 13.997C12.292 13.997 10.906 12.611 10.906 10.903C10.906 9.195 12.292 7.809 14 7.809C15.708 7.809 17.094 9.195 17.094 10.903C17.094 12.611 15.708 13.997 14 13.997Z" fill="rgb(21,93,252)" />
            </svg>
        ),
    },
];

// Stagger variants for feature cards
const featureCardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const WhatIsPayweek = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            className="w-full py-20 md:py-24 px-6 border-b-[1.18px] border-[#e5e5e5]"
            style={{
                backgroundImage:
                    "linear-gradient(54.95deg, #1932C0 0%, #000000 50%, #0FD46B 100%)",
            }}
        >
            <div className="max-w-[72rem] mx-auto">
                {/* Heading */}
                {/* Justification: dark bg heading uses opacity only — y translate on dark is less readable */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <h2
                        className="font-bold text-white text-center"
                        style={{ fontSize: "var(--font-size-h2)", lineHeight: "var(--leading-h2)", letterSpacing: "var(--tracking-h2)" }}
                    >
                        What is PayWeek?
                    </h2>
                    <p
                        className="font-normal text-white text-center mx-auto mt-4"
                        style={{ fontSize: "var(--font-size-body)", lineHeight: "var(--leading-body)", maxWidth: "41.1875rem" }}
                    >
                        PayWeek is a modern, cloud-based accounting and payroll platform powering payroll
                        processing, financial reporting, and tax compliance for 10,000+ businesses globally.
                    </p>
                </motion.div>

                {/* 3-column feature grid */}
                {/* Justification: 3 features are sequential — stagger reveals their relationship */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 border-[1.18px] border-[#e5e5e5] mb-10 overflow-hidden"
                    variants={prefersReducedMotion ? {} : { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={prefersReducedMotion ? {} : featureCardVariants}
                            className={`flex flex-col gap-6 p-8 ${index < features.length - 1 ? "border-b-[1.18px] md:border-b-0 md:border-r-[1.18px] border-[#e5e5e5]" : ""
                                }`}
                        >
                            <div
                                className="w-12 h-12 rounded-[0.625rem] flex items-center justify-center shrink-0"
                                style={{ backgroundImage: feature.iconGradient }}
                            >
                                {feature.icon}
                            </div>
                            <p
                                className="font-semibold text-white"
                                style={{ fontSize: "var(--font-size-h4)", lineHeight: "var(--leading-h4)" }}
                            >
                                {feature.title}
                            </p>
                            <p
                                className="font-normal text-white"
                                style={{ fontSize: "var(--font-size-body)", lineHeight: "var(--leading-body)" }}
                            >
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Our Mission card */}
                <motion.div
                    className="border-[1.18px] border-[#e5e5e5] px-8 md:px-16 py-12 flex flex-col items-center text-center mx-auto"
                    style={{ maxWidth: "56rem" }}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div
                        className="w-16 h-16 rounded-[1.025rem] flex items-center justify-center mb-8"
                        style={{ backgroundImage: "linear-gradient(135deg, rgb(208, 250, 229) 0%, rgb(164, 244, 207) 100%)" }}
                    >
                        <svg width="36" height="36" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.499 0L13.499 10.499L23.998 10.499L10.499 26.998L10.499 16.499L0 16.499L13.499 0Z"
                                fill="rgb(15,212,107)"
                            />
                        </svg>
                    </div>
                    <h3
                        className="font-semibold text-white text-center mb-6"
                        style={{ fontSize: "var(--font-size-h3)", lineHeight: "var(--leading-h3)", letterSpacing: "var(--tracking-h3)" }}
                    >
                        Our Mission
                    </h3>
                    <p
                        className="font-normal text-white text-center"
                        style={{ fontSize: "var(--font-size-body)", lineHeight: "var(--leading-body)", maxWidth: "47.8125rem" }}
                    >
                        We&apos;re revolutionizing financial management for modern businesses. Financial
                        operations should empower you, not hold you back. We&apos;re reimagining accounting
                        software from a simple number cruncher to a full intelligence engine that provides
                        insights and automation at every step.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatIsPayweek;
