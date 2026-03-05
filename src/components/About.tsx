const values = [
  {
    number: "01",
    title: "Customers First",
    description:
      "Our customers are the heart of our business. We succeed when they succeed, and we are committed to delivering products that not only meet but exceed their expectations.",
    bg: "bg-white",
    border: "",
  },
  {
    number: "02",
    title: "Security by Design",
    description:
      "Being an open-source company, we uphold trust and transparency in every process. We also regularly audit our codebase and infrastructure to ensure it's secure.",
    bg: "bg-[#fafafa]",
    border: "",
  },
  {
    number: "03",
    title: "Act as an Owner",
    description:
      "We empower our team to own projects without the need for redundant meetings or standups. We trust our team to make decisions and take ownership of their work.",
    bg: "bg-white",
    border: "",
  },
  {
    number: "04",
    title: "Don't Stop Shipping",
    description:
      "Complacency is the root of all evil. As a company, you're either growing or you're dying. We ship fast and iterate faster – all without compromising on quality.",
    bg: "bg-[#fafafa]",
    border: "",
  },
];

const About = () => {
  return (
    <section id="about" className="w-full">
      {/* Green gradient header */}
      <div className="relative w-full overflow-hidden" style={{ background: "linear-gradient(to bottom, #0fd46b, #ffffff)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center pt-32 pb-16">
          {/* Yellow icon box */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
            style={{ background: "linear-gradient(135deg, #fef3c6 0%, #fde685 100%)" }}
          >
            {/* Bookmark / tag icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 4C6.895 4 6 4.895 6 6V28L16 22L26 28V6C26 4.895 25.105 4 24 4H8Z"
                fill="#f59e0b"
              />
            </svg>
          </div>

          <h2
            className="font-bold text-center text-[#171717]"
            style={{ fontSize: "42px", lineHeight: "50.4px", letterSpacing: "-0.42px" }}
          >
            Our values
          </h2>
        </div>
      </div>

      {/* 2x2 Values Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.bg} ${value.border} flex flex-col gap-6`}
              style={{ padding: "64px" }}
            >
              {/* Number */}
              <p
                className="font-bold text-[#ff6900]"
                style={{ fontSize: "42px", lineHeight: "50.4px", letterSpacing: "-0.42px" }}
              >
                {value.number}
              </p>

              {/* Title */}
              <p
                className="font-semibold text-[#171717]"
                style={{ fontSize: "30px", lineHeight: "39px", letterSpacing: "-0.3px" }}
              >
                {value.title}
              </p>

              {/* Description */}
              <p
                className="font-normal text-[#737373]"
                style={{ fontSize: "17px", lineHeight: "27.2px" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;