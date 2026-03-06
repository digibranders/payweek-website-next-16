"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

// ─── Exact Figma Dotted Globe (node 120:805) ─────────────────────────────────
function DotSphere() {
    return (
        <Image
            src="/dotted-globe.svg"
            alt="Dotted globe illustration"
            width={200}
            height={200}
            priority
        />
    );
}

// ─── Principles data ──────────────────────────────────────────────────────────
interface Principle {
    title: string;
    description: string;
    iconGradient: string;
    iconSrc: string;
}

const principles: Principle[] = [
    {
        title: "Move Fast",
        description: "We ship quickly and iterate based on real feedback from our users.",
        iconGradient: "linear-gradient(135deg, rgb(219, 234, 254) 0%, rgb(190, 219, 255) 100%)",
        iconSrc: "/icon-move-fast.svg",
    },
    {
        title: "Stay Simple",
        description: "We believe in clarity and simplicity in everything we build.",
        iconGradient: "linear-gradient(135deg, rgb(220, 252, 231) 0%, rgb(185, 248, 207) 100%)",
        iconSrc: "/icon-stay-simple.svg",
    },
    {
        title: "Think Global",
        description: "Our remote team spans continents, bringing diverse perspectives.",
        iconGradient: "linear-gradient(135deg, rgb(243, 232, 255) 0%, rgb(233, 212, 255) 100%)",
        iconSrc: "/icon-think-global.svg",
    },
];


// ─── Stats data ───────────────────────────────────────────────────────────────
const stats = [
    { value: "12+", label: "Team Members" },
    { value: "8", label: "Countries" },
    { value: "100%", label: "Remote First" },
    { value: "24/7", label: "Support Available" },
];

// Stagger variants
const principleCardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Component ────────────────────────────────────────────────────────────────
const WeCareDeeply = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="bg-white w-full" style={{ borderBottom: '1.18px solid #e5e5e5' }}>
            <div className="max-w-[72rem] mx-auto px-6">

                {/* Globe + Heading + Subtitle */}
                <div className="flex flex-col items-center text-center pt-20 md:pt-24 pb-14">
                    {/* Justification: globe is the focal element — subtle scale entrance draws attention to it */}
                    <motion.div
                        className="flex items-center justify-center mb-10"
                        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <DotSphere />
                    </motion.div>

                    <motion.h2
                        className="font-bold text-[#171717] text-center"
                        style={{ fontSize: "var(--font-size-h2)", lineHeight: "var(--leading-h2)", letterSpacing: "var(--tracking-h2)" }}
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                    >
                        We care deeply about the human link
                    </motion.h2>
                    <motion.p
                        className="font-normal text-[#525252] text-center mx-auto mt-4"
                        style={{ fontSize: "var(--font-size-body)", lineHeight: "var(--leading-body)", maxWidth: "40.4375rem" }}
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    >
                        PayWeek is a fully-remote, small but mighty global team united by speed, action,
                        and a shared passion for transforming financial operations.
                    </motion.p>
                </div>

                {/* 3-column principle cards */}
                {/* Justification: 3 principles in a row — stagger reveals their sequence */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3"
                    style={{ border: '1.18px solid #e5e5e5' }}
                    variants={prefersReducedMotion ? {} : { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {principles.map((p, index) => (
                        <motion.div
                            key={index}
                            variants={prefersReducedMotion ? {} : principleCardVariants}
                            className="flex flex-col items-center text-center"
                            style={{
                                padding: '2rem',
                                ...(index < principles.length - 1
                                    ? { borderRight: '1.18px solid #e5e5e5' }
                                    : {}),
                            }}
                        >
                            <div
                                className="flex items-center justify-center shrink-0"
                                style={{
                                    width: '3rem',
                                    height: '3rem',
                                    borderRadius: '0.625rem',
                                    backgroundImage: p.iconGradient,
                                }}
                            >
                                <Image src={p.iconSrc} alt={p.title} width={28} height={28} />
                            </div>
                            <p
                                className="font-semibold text-[#171717]"
                                style={{ fontSize: 'var(--font-size-h4)', lineHeight: 'var(--leading-h4)', marginTop: '1rem' }}
                            >
                                {p.title}
                            </p>
                            <p
                                className="font-normal text-[#525252]"
                                style={{ fontSize: 'var(--font-size-body)', lineHeight: 'var(--leading-body)', maxWidth: '18.5rem', marginTop: '0.5rem' }}
                            >
                                {p.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats bar */}
                {/* Justification: stats appear as supporting data — opacity reveal is enough */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4"
                    style={{ borderTop: '1.18px solid #e5e5e5', marginTop: '4rem', paddingBottom: '3rem' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center"
                            style={{ gap: '0.25rem', paddingTop: '3rem' }}
                        >
                            <p
                                className="font-normal text-[#171717]"
                                style={{ fontSize: 'var(--font-size-h3)', lineHeight: '2.25rem' }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="font-normal text-[#525252]"
                                style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--leading-base)' }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WeCareDeeply;
