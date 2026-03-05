"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Tab config ────────────────────────────────────────────────────────────────
const tabs = [
  { id: "business", label: "Business page", image: "/business.png" },
  { id: "payroll", label: "Payroll", image: "/payroll.png" },
  { id: "accounting", label: "Accounting", image: "/accounting.png" },
];

// ─── Notch geometry from Figma (viewBox 0 0 1441.08 669.16) ──────────────────
//   The exact path from the Figma SVG asset (Rectangle 34624904):
//   Notch cutout carved at top: x=472.544 → 969.456, depth=44.5px
//   Left edge at 0, right edge at 1441.08 (fills full width)
//
//   For the tab pocket region:
//     Centre of notch: (472.544 + 969.456) / 2 = 721 px
//     Width of pocket: 969.456 − 472.544 = 496.912 px
//     Height (depth):  44.5 px
//
const NOTCH_H = 44.5; // px — must match the SVG depth exactly

// The tab-strip sits inside the notch pocket.
// We track its true width from the Figma coordinates.
const NOTCH_POCKET_W = 969.456 - 472.544; // ≈ 496.912 px

// ─── Component ─────────────────────────────────────────────────────────────────
const Features = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    /**
     * LAYER STACK (bottom → top in z-order)
     *
     *  A  Full-width background SVG (gradient + notch shape) — covers entire section
     *  B  Tab buttons — absolutely centred at top, inside the notch pocket
     *  C  Dashboard card — positioned below the notch, centred
     */
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: `${NOTCH_H + 580}px` }}
    >
      {/* ── Layer A: Figma gradient background with notch cutout ── */}
      {/*
        The SVG viewBox is 1441.08 × 669.16.
        We render it as a full-width absolutely-positioned image using
        preserveAspectRatio="none" so it scales correctly with the section.
        The notch hole is carved out of the top, revealing white background
        beneath it — this is where the tab buttons sit.
      */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ top: 0 }}
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
              id="features-bg-gradient"
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
          {/* Exact path from Figma — fills the rectangle leaving a notch cutout at top centre */}
          <path
            d="M1441.08 669.16V0H969.456C959.48 0 950.157 4.95865 944.581 13.2302L932.419 31.2698C926.843 39.5413 917.52 44.5 907.544 44.5H534.456C524.48 44.5 515.157 39.5413 509.581 31.2698L497.419 13.2302C491.843 4.95865 482.52 0 472.544 0H0V669.16H1441.08Z"
            fill="url(#features-bg-gradient)"
          />
        </svg>
      </div>

      {/* ── Layer B: Tab strip — sits inside the notch pocket at page top ── */}
      {/*
        The notch pocket centre in the 1441.08px-wide canvas is at x=721px.
        We use left:50% + translateX(-50%) to always keep tabs centred.
        The height of the strip equals NOTCH_H so tabs are flush with the
        point where the gradient background begins.
      */}
      <div
        className="absolute top-0 z-20 flex items-center justify-center gap-2"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          height: NOTCH_H,
          width: NOTCH_POCKET_W,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "6px 20px",
              borderRadius: 10,
              fontSize: 14,
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

      {/* ── Layer C: Dashboard card ── */}
      <div
        className="relative z-10 flex justify-center px-4 pb-0"
        style={{ paddingTop: NOTCH_H + 44 }}
      >
        <div style={{ width: "100%", maxWidth: 908 }}>
          {/* Outer chrome frame — matches Figma Container 120:315 */}
          <div
            style={{
              borderRadius: "20px 20px 0 0",
              border: "1.18px solid rgba(229,229,229,0.4)",
              padding: 13.167,
              paddingBottom: 0,
              background: "transparent",
            }}
          >
            {/* Inner inset — matches Figma Container 120:316 */}
            <div
              style={{
                borderRadius: "16.4px 16.4px 0 0",
                border: "1.18px solid #d4d4d4",
                background: "#f2f6ff",
                overflow: "hidden",
              }}
            >
              {/* Cross-fading dashboard screenshots */}
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
  );
};

export default Features;