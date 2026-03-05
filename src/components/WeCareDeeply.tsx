import Image from "next/image";

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

// ─── Component ────────────────────────────────────────────────────────────────
const WeCareDeeply = () => {
    return (
        <section className="bg-white w-full" style={{ borderBottom: '1.18px solid #e5e5e5' }}>
            <div className="max-w-[1152px] mx-auto" style={{ padding: '0 24px' }}>

                {/* Globe + Heading + Subtitle */}
                <div className="flex flex-col items-center text-center" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
                    <div className="flex items-center justify-center" style={{ marginBottom: '40px' }}>
                        <DotSphere />
                    </div>

                    <h2
                        className="font-bold text-[#171717] text-center"
                        style={{ fontSize: "42px", lineHeight: "50.4px", letterSpacing: "-0.42px" }}
                    >
                        We care deeply about the human link
                    </h2>
                    <p
                        className="font-normal text-[#525252] text-center mx-auto"

                        style={{ fontSize: "17px", lineHeight: "27.2px", maxWidth: "647px" }}
                    >
                        PayWeek is a fully-remote, small but mighty global team united by speed, action,
                        and a shared passion for transforming financial operations.
                    </p>
                </div>

                {/* 3-column principle cards */}
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: '1.18px solid #e5e5e5' }}>
                    {principles.map((p, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                            style={{
                                padding: '32px',
                                ...(index < principles.length - 1
                                    ? { borderRight: '1.18px solid #e5e5e5' }
                                    : {}),
                            }}
                        >
                            <div
                                className="flex items-center justify-center shrink-0"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '10px',
                                    backgroundImage: p.iconGradient,
                                }}
                            >
                                <Image src={p.iconSrc} alt={p.title} width={28} height={28} />
                            </div>
                            <p
                                className="font-semibold text-[#171717]"
                                style={{ fontSize: '23px', lineHeight: '32.2px', marginTop: '16px' }}
                            >
                                {p.title}
                            </p>
                            <p
                                className="font-normal text-[#525252]"
                                style={{ fontSize: '17px', lineHeight: '27.2px', maxWidth: '296px', marginTop: '8px' }}
                            >
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats bar — no vertical dividers, just top border */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4"
                    style={{ borderTop: '1.18px solid #e5e5e5', marginTop: '64px', paddingBottom: '48px' }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center"
                            style={{ gap: '4px', paddingTop: '48px' }}
                        >
                            <p
                                className="font-normal text-[#171717]"
                                style={{ fontSize: '30px', lineHeight: '36px' }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="font-normal text-[#525252]"
                                style={{ fontSize: '13px', lineHeight: '24px' }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WeCareDeeply;
