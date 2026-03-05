

const testimonials = [
  {
    content: "PayWeek has completely transformed how we handle payroll. What used to take us two days now takes two hours. The accuracy is incredible.",
    name: "Sarah Chen",
    role: "CFO at TechStartup Inc.",
    avatar: "SC",
    avatarColor: "bg-blue-500",
  },
  {
    content: "The automated tax compliance feature has saved us from so many headaches. Our accountant actually recommended PayWeek to all his other clients.",
    name: "Marcus Johnson",
    role: "CEO at GrowthCo",
    avatar: "MJ",
    avatarColor: "bg-emerald-500",
  },
  {
    content: "We went from managing payroll across 5 spreadsheets to one elegant dashboard. The employee self-service portal is a game changer for our team.",
    name: "Priya Patel",
    role: "HR Director at GlobalEdge",
    avatar: "PP",
    avatarColor: "bg-purple-500",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Trusted by teams worldwide
          </h2>
          <p className="text-lg text-neutral-600">
            See what our customers are saying about PayWeek.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-8 flex-1">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-neutral-200 pt-16">
          {[
            { value: "10,000+", label: "Companies" },
            { value: "1M+", label: "Employees Paid" },
            { value: "99.9%", label: "Uptime" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-neutral-900 mb-2">{stat.value}</div>
              <div className="text-neutral-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;