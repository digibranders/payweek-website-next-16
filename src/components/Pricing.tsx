import Image from "next/image";
import Link from "next/link";

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

// ─── Component ────────────────────────────────────────────────────────────────
const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full"
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1.18px solid #e5e5e5",
        borderBottom: "1.18px solid #e5e5e5",
        paddingTop: "96px",
        paddingBottom: "0",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px", padding: "0 80px" }}
      >
        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center" style={{ marginBottom: "64px", padding: "0 24px" }}>
          <h2
            className="font-bold text-[#171717]"
            style={{
              fontSize: "42px",
              lineHeight: "50.4px",
              letterSpacing: "-0.42px",
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="font-normal text-[#525252] mx-auto"
            style={{
              fontSize: "17px",
              lineHeight: "27.2px",
              maxWidth: "619px",
              marginTop: "16px",
            }}
          >
            Choose the plan that fits your business needs. All plans include
            core features with 24/7 support.
          </p>
        </div>

        {/* ── Cards container ────────────────────────────── */}
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{
            maxWidth: "1152px",
            border: "1.18px solid #e5e5e5",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)",
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white relative"
              style={{
                padding: "32px",
                gap: "32px",
                ...(idx < plans.length - 1
                  ? { borderRight: "1.18px solid #e5e5e5" }
                  : {}),
              }}
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
                    fontSize: "30px",
                    lineHeight: "39px",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {plan.name}
                </p>
                <p
                  className="font-normal text-[#525252]"
                  style={{
                    fontSize: "17px",
                    lineHeight: "27.2px",
                  }}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline" style={{ gap: "8px" }}>
                  <span
                    className="font-normal text-[#171717]"
                    style={{ fontSize: "16px", lineHeight: "24px" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="font-normal text-[#737373]"
                      style={{ fontSize: "16px", lineHeight: "24px" }}
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
                      style={{ fontSize: "16px", lineHeight: "24px" }}
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
                  height: "50px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  lineHeight: "24px",
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
            </div>
          ))}
        </div>

        {/* ── Bottom note ─────────────────────────────── */}
        <p
          className="text-center font-normal text-[#525252]"
          style={{
            fontSize: "17px",
            lineHeight: "27.2px",
            padding: "64px 0",
          }}
        >
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;