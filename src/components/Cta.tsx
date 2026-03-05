import Link from "next/link";

const Cta = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-neutral-900">
      {/* Background gradient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[50%] -translate-x-1/2 w-[900px] h-[900px] bg-payweek-green/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Ready to transform <br className="hidden md:block" />
          your payroll?
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
          Join thousands of businesses who trust PayWeek to handle their payroll with precision and ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="px-8 py-4 bg-payweek-green text-white font-semibold rounded-xl hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-payweek-green/20"
          >
            Start Free Trial
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10"
          >
            Talk to Sales
          </Link>
        </div>
        <p className="text-neutral-600 text-sm mt-6">No credit card required · 14-day free trial · Cancel anytime</p>
      </div>
    </section>
  );
};

export default Cta;