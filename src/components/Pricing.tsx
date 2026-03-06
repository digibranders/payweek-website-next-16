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
        paddingBottom: "2rem",
      }}
    >
      <div
        className="mx-auto px-6 md:px-20"
        style={{ maxWidth: "1280px" }}
      >
        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            className="font-bold text-[#171717]"
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="font-normal text-[#525252] mx-auto"
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              maxWidth: "38.6875rem",
              marginTop: "1rem",
            }}
          >
            Choose the plan that fits your business needs. All plans include
            core features with 24/7 support.
          </p>
        </motion.div>

        {/* ── Cards container ────────────────────────────── */}
        <motion.div
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
          style={{ maxWidth: "72rem" }}
          variants={prefersReducedMotion ? {} : cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={prefersReducedMotion ? {} : cardVariants}
              className={`
                flex flex-col bg-white relative rounded-[10px] 
                border-[#e5e5e5] border-[1.18px] border-solid 
                shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]
                md:shadow-none md:rounded-none
                ${idx === 0 ? "md:rounded-l-[10px] md:border-r-0" : ""}
                ${idx === 1 ? "md:border-r-0" : ""}
                ${idx === plans.length - 1 ? "md:rounded-r-[10px]" : ""}
              `}
              style={{
                padding: "2.5rem 2rem",
                gap: "2rem",
              }}
              whileHover={prefersReducedMotion ? {} : { y: -5, zIndex: 20 }}
              transition={{ duration: 0.25 }}
            >
              {/* "Most Popular" badge */}
              {plan.popular && (
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    top: "0px",
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
                    zIndex: 30,
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
                    fontSize: "20px",
                    lineHeight: "28px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {plan.name}
                </p>
                <p
                  className="font-normal text-[#525252]"
                  style={{
                    fontSize: "15px",
                    lineHeight: "22px",
                  }}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline" style={{ gap: "0.5rem", marginTop: "0.5rem" }}>
                  <span
                    className="font-bold text-[#171717]"
                    style={{ fontSize: "16px", lineHeight: "1" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="font-normal text-[#737373]"
                      style={{ fontSize: "14px", lineHeight: "1" }}
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
                    className="flex items-start"
                    style={{ gap: "12px" }}
                  >
                    <Image
                      src="/icon-check.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0 mt-0.5"
                    />
                    <span
                      className="font-normal text-[#525252]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ── CTA button ────────────────────────── */}
              <Link
                href="#"
                className="flex items-center justify-center w-full font-medium transition-colors"
                style={{
                  height: "3.25rem",
                  borderRadius: "0.625rem",
                  fontSize: "14px",
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
          ))}
        </motion.div>

        {/* ── Bottom note ─────────────────────────────── */}
        <p
          className="text-center font-normal text-[#525252]"
          style={{
            fontSize: "15px",
            lineHeight: "24px",
            padding: "4rem 0 2rem",
          }}
        >
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;