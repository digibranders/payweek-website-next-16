"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Tab config ────────────────────────────────────────────────────────────────
const tabs = [
  { id: "business", label: "Business page", image: "/business.png" },
  { id: "payroll", label: "Payroll", image: "/payroll.png" },
  { id: "accounting", label: "Accounting", image: "/accounting.png" },
];

// ─── Desktop notch geometry (Figma viewBox 1441.08 × 669.16) ─────────────────
// Notch pocket spans x=472.544 → x=969.456 in the viewBox.
// That's 496.912 / 1441.08 = 34.48% of viewport width at any screen size.
const NOTCH_H = 44.5;
const NOTCH_POCKET_PCT = "34.48%";

// Exact Figma SVG path — NOT generated dynamically.
// Using the original Bezier curves ensures pixel-perfect notch at every viewport.
const NOTCH_PATH =
  "M1441.08 669.16V0H969.456C959.48 0 950.157 4.95865 944.581 13.2302L932.419 31.2698C926.843 39.5413 917.52 44.5 907.544 44.5H534.456C524.48 44.5 515.157 39.5413 509.581 31.2698L497.419 13.2302C491.843 4.95865 482.52 0 472.544 0H0V669.16H1441.08Z";

// ─── Component ─────────────────────────────────────────────────────────────────
const Features = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          MOBILE  (< 768px)  —  md:hidden
          - No notch — plain CSS gradient
          - Floating pill tabs on gradient
          - Image with aspect-ratio, rounded top only, no chrome frame
          Matches Figma node 120:1395
         ══════════════════════════════════════════════════════════════ */}
      <section
        className="md:hidden relative w-full overflow-hidden flex flex-col items-center gap-5 pt-5 px-5"
        style={{
          background:
            "linear-gradient(47.33deg, rgb(25, 50, 192) 27.84%, rgb(0, 0, 0) 54.73%, rgb(15, 212, 107) 137.31%)",
        }}
      >
        {/* Mobile tab row */}
        <div className="flex items-center gap-2 w-full justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                height: 34,
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 500,
                border:
                  activeTab === tab.id ? "none" : "1.18px solid #a6a7a7",
                cursor: "pointer",
                transition: "background 0.2s",
                lineHeight: 1,
                background: activeTab === tab.id ? "#0FD46B" : "#4a4c50",
                color: "#ffffff",
                whiteSpace: "nowrap",
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile dashboard image — aspect-ratio, rounded top, no chrome frame */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "879 / 566",
            borderRadius: "10px 10px 0 0",
          }}
        >
          {tabs.map((tab) => (
            <Image
              key={tab.id}
              src={tab.image}
              alt={`${tab.label} dashboard`}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                transition: "opacity 0.5s",
                opacity: activeTab === tab.id ? 1 : 0,
              }}
              priority={tab.id === "business"}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TABLET + DESKTOP  (≥ 768px)  —  hidden md:block
          - Fixed Figma SVG path with preserveAspectRatio="none"
          - Tabs positioned at 34.48% width (matches SVG notch pocket)
          - Chrome frame around dashboard image
          - clamp() for fluid tab sizing across 768–1440px+
         ══════════════════════════════════════════════════════════════ */}
      <section className="hidden md:block relative w-full overflow-hidden">
        {/* Layer A: SVG gradient + notch (exact Figma path) */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1441.08 669.16"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={{ display: "block", position: "absolute", inset: 0 }}
          >
            <defs>
              <linearGradient
                id="features-bg-gradient-desktop"
                x1="1618"
                y1="-344.079"
                x2="-749.5"
                y2="1392.42"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0FD46B" />
                <stop offset="0.338599" stopColor="#000000" />
                <stop offset="0.691852" stopColor="#1932C0" />
              </linearGradient>
            </defs>
            <path d={NOTCH_PATH} fill="url(#features-bg-gradient-desktop)" />
          </svg>
        </div>

        {/* Layer B: Tabs inside the notch pocket
            Container width = 34.48% of viewport — always matches the SVG pocket.
            Font & padding use clamp() for fluid scaling:
              768px  → 11px font, 4px/6px padding  → tabs ≈ 226px in 265px pocket  ✓
              1024px → 10.2px→11px, comfortable     → tabs in 353px pocket           ✓
              1440px → 14px font, 6px/12px padding  → tabs ≈ 330px in 496px pocket  ✓ (Figma spec)
        */}
        <div
          className="absolute top-0 z-20 flex items-center justify-center"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            height: NOTCH_H,
            width: NOTCH_POCKET_PCT,
            gap: "clamp(4px, 0.5vw, 8px)",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "clamp(4px, 0.35vw, 6px) clamp(6px, 0.6vw, 12px)",
                borderRadius: 10,
                fontSize: "clamp(11px, 1vw, 14px)",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                lineHeight: 1.4,
                background: activeTab === tab.id ? "#0FD46B" : "#3d3d3d",
                color: "#ffffff",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Layer C: Dashboard card with chrome frame */}
        <div
          className="relative z-10 flex justify-center px-6 pb-0"
          style={{ paddingTop: NOTCH_H + 44 }}
        >
          <div className="w-full" style={{ maxWidth: 908 }}>
            {/* Outer chrome frame */}
            <div
              style={{
                borderRadius: "20px 20px 0 0",
                border: "1.18px solid rgba(229,229,229,0.4)",
                padding: 13.167,
                paddingBottom: 0,
                background: "transparent",
              }}
            >
              {/* Inner inset */}
              <div
                style={{
                  borderRadius: "16.4px 16.4px 0 0",
                  border: "1.18px solid #d4d4d4",
                  background: "#f2f6ff",
                  overflow: "hidden",
                }}
              >
                {/* Dashboard images — cross-fade on tab switch */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "879 / 566",
                  }}
                >
                  {tabs.map((tab) => (
                    <Image
                      key={tab.id}
                      src={tab.image}
                      alt={`${tab.label} dashboard`}
                      fill
                      sizes="908px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        transition: "opacity 0.5s",
                        opacity: activeTab === tab.id ? 1 : 0,
                      }}
                      priority={tab.id === "business"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
