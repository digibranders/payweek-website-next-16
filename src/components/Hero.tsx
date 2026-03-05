/*
 * Add this to your HTML head:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Segoe+UI+Variable|Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-white px-6 py-32 overflow-hidden border-b border-neutral-100">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-payweek-green/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[672px] mx-auto flex flex-col items-center text-center gap-[78px]">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-[56px] font-bold tracking-[-1.12px] text-[#171717] leading-[61.6px] font-[family-name:var(--font-segoe-ui-variable)]">
            Not Just Balanced. <br />
            Accounted to the Penny.
          </h1>

          <p className="text-[17px] font-normal leading-[27.2px] text-[#525252] max-w-[633px]">
            Precision-driven accounting that goes beyond the books—uncovering insights, ensuring every cent tells the truth.
          </p>
        </div>

        <div className="flex flex-row items-center">
          <button className="px-[19.99px] py-[8.17px] h-[38.34px] min-w-[118.2px] bg-white border border-[#e5e5e5] rounded-[10px] text-[#171717] text-[14px] font-medium leading-[20px] transition-all hover:bg-neutral-50 whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;