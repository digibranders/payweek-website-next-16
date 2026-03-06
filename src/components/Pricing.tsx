"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

// ─── Plan data (matching Figma node 120:1110 exactly) ─────────────────────────
interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$49",
    period: "/month",
    features: [
      "Up to 25 employees",
      "Basic payroll processing",
      "Standard reports",
      "Email support",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses with advanced needs",
    price: "$149",
    period: "/month",
    features: [
      "Up to 100 employees",
      "Advanced payroll features",
      "Custom reports & analytics",
      "Priority support (24/7)",
      "API access",
      "Multi-location support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements",
    price: "Custom",
    period: "",
    features: [
      "Unlimited employees",
      "Enterprise-grade features",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom SLA",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

// Stagger variants for plan cards
const cardContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Component ────────────────────────────────────────────────────────────────
const Pricing = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="w-full"
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1.18px solid #e5e5e5",
        borderBottom: "1.18px solid #e5e5e5",
        paddingTop: "6rem",
        paddingBottom: "0",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px", padding: "0 80px" }}
      >
        {/* ── Header ─────────────────────────────────────── */}
        {/* Justification: section header reveal signals content is arriving */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "4rem", padding: "0 1.5rem" }}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            className="font-bold text-[#171717]"
            style={{
              fontSize: "var(--font-size-h2)",
              lineHeight: "var(--leading-h2)",
              letterSpacing: "var(--tracking-h2)",
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="font-normal text-[#525252] mx-auto"
            style={{
              fontSize: "var(--font-size-body)",
              lineHeight: "var(--leading-body)",
              maxWidth: "38.6875rem",
              marginTop: "1rem",
            }}
          >
            Choose the plan that fits your business needs. All plans include
            core features with 24/7 support.
          </p>
        </motion.div>

        {/* ── Cards container ────────────────────────────── */}
        {/* Justification: 3 plan tiers are sequential choices — stagger reveals comparison */}
        {/*
          overflow:hidden removed so the "Most Popular" badge (positioned above the top border)
          is not clipped. Border-radius is applied directly to the corner cards instead.
          Card 0 (mobile: top corners, desktop: left corners)
          Card 2 (mobile: bottom corners, desktop: right corners)
        */}
        <motion.div
          className="mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{
            maxWidth: "72rem",
            border: "1.18px solid #e5e5e5",
            borderRadius: "0.625rem",
          }}
          variants={prefersReducedMotion ? {} : cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan, idx) => {
            // Round corner cards to match outer container border-radius (no overflow:hidden)
            const cornerRadius =
              idx === 0
                ? "rounded-tl-[0.625rem] rounded-tr-[0.625rem] md:rounded-tr-[0] md:rounded-bl-[0.625rem]"
                : idx === plans.length - 1
                ? "rounded-bl-[0.625rem] rounded-br-[0.625rem] md:rounded-bl-[0] md:rounded-tr-[0.625rem]"
                : "";

            return (
            <motion.div
              key={idx}
              variants={prefersReducedMotion ? {} : cardVariants}
              className={`flex flex-col bg-white relative ${cornerRadius}`}
              style={{
                padding: "2rem",
                gap: "2rem",
                ...(idx < plans.length - 1
                  ? { borderRight: "1.18px solid #e5e5e5" }
                  : {}),
              }}
              // Justification: card hover lift confirms interactivity — highlights the plan being considered
              whileHover={prefersReducedMotion ? {} : { y: -3 }}
              transition={{ duration: 0.25 }}
            >
              {/* "Most Popular" badge */}
              {plan.popular && (
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    top: "-1px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#0fd46b",
                    color: "#fff",
                    fontSize: "13px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    borderRadius: "7px",
                    padding: "5px 30px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* ── Plan header: name, desc, price ────── */}
              <div className="flex flex-col" style={{ gap: "8px" }}>
                <p
                  className="font-semibold text-[#171717]"
                  style={{
                    fontSize: "var(--font-size-h3)",
                    lineHeight: "var(--leading-h3)",
                    letterSpacing: "var(--tracking-h3)",
                  }}
                >
                  {plan.name}
                </p>
                <p
                  className="font-normal text-[#525252]"
                  style={{
                    fontSize: "var(--font-size-body)",
                    lineHeight: "var(--leading-body)",
                  }}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline" style={{ gap: "0.5rem" }}>
                  <span
                    className="font-normal text-[#171717]"
                    style={{ fontSize: "var(--font-size-base)", lineHeight: "var(--leading-base)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="font-normal text-[#737373]"
                      style={{ fontSize: "var(--font-size-base)", lineHeight: "var(--leading-base)" }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* ── Feature list ──────────────────────── */}
              <ul className="flex flex-col flex-1" style={{ gap: "16px" }}>
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center"
                    style={{ gap: "12px" }}
                  >
                    <Image
                      src="/icon-check.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <span
                      className="font-normal text-[#525252]"
                      style={{ fontSize: "var(--font-size-base)", lineHeight: "var(--leading-base)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ── CTA button ────────────────────────── */}
              <Link
                href="#"
                className="flex items-center justify-center w-full font-normal"
                style={{
                  height: "3.125rem",
                  borderRadius: "0.625rem",
                  fontSize: "var(--font-size-base)",
                  lineHeight: "var(--leading-base)",
                  ...(plan.popular
                    ? {
                      backgroundColor: "#0fd46b",
                      color: "#fff",
                    }
                    : {
                      backgroundColor: "#fff",
                      color: "#171717",
                      border: "1.18px solid #e5e5e5",
                    }),
                }}
              >
                {plan.cta}
              </Link>
            </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom note ─────────────────────────────── */}
        <p
          className="text-center font-normal text-[#525252]"
          style={{
            fontSize: "var(--font-size-body)",
            lineHeight: "var(--leading-body)",
            padding: "4rem 0",
          }}
        >
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;