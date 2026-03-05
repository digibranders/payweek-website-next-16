const ContactUs = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-[624px] mx-auto px-6 flex flex-col items-center">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0fdf4] to-[#eff6ff] border border-[#e5e5e5] flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33398 9.33333C5.33398 7.86058 6.52789 6.66667 8.00065 6.66667H24.0007C25.4734 6.66667 26.6673 7.86058 26.6673 9.33333V22.6667C26.6673 24.1394 25.4734 25.3333 24.0007 25.3333H8.00065C6.52789 25.3333 5.33398 24.1394 5.33398 22.6667V9.33333Z" stroke="#0fd46b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M26.6673 9.33333L16.0007 17.3333L5.33398 9.33333" stroke="#0fd46b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-[50.4px] tracking-[-0.42px] text-[#171717] text-center mb-4">
                    Get in Touch
                </h2>

                {/* Subheading */}
                <p className="text-[17px] leading-[27.2px] text-[#737373] text-center mb-12">
                    Have questions about PayWeek? Our team is here<br />
                    to help you find the right solution for your business.
                </p>

                {/* Form Container */}
                <div className="w-full bg-white border border-[#e5e5e5] rounded-[10px] p-[33px]">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[16px] text-[#171717]">
                                Name <span className="text-[#fb2c36]">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full h-[46px] px-4 py-[10px] rounded-[6.8px] border border-[#e5e5e5] focus:ring-1 focus:ring-payweek-green/20 focus:border-payweek-green transition-colors bg-white text-[#171717] placeholder-[#a1a1a1] outline-none"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[16px] text-[#171717]">
                                Email ID <span className="text-[#fb2c36]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-[46px] px-4 py-[10px] rounded-[6.8px] border border-[#e5e5e5] focus:ring-1 focus:ring-payweek-green/20 focus:border-payweek-green transition-colors bg-white text-[#171717] placeholder-[#a1a1a1] outline-none"
                                placeholder="john@company.com"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-[16px] text-[#171717]">
                                Subject <span className="text-[#fb2c36]">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full h-[46px] px-4 py-[10px] rounded-[6.8px] border border-[#e5e5e5] focus:ring-1 focus:ring-payweek-green/20 focus:border-payweek-green transition-colors bg-white text-[#171717] placeholder-[#a1a1a1] outline-none"
                                placeholder="How can we help?"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[16px] text-[#171717]">
                                Message <span className="text-[#fb2c36]">*</span>
                            </label>
                            <textarea
                                id="message"
                                className="w-full h-[166px] p-4 rounded-[6.8px] border border-[#e5e5e5] focus:ring-1 focus:ring-payweek-green/20 focus:border-payweek-green transition-colors bg-white text-[#171717] placeholder-[#a1a1a1] outline-none resize-none"
                                placeholder="Tell us about your company's needs"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mx-auto w-[145px] h-[44px] bg-[#0fd46b] text-white text-[14px] rounded-[6.8px] hover:bg-opacity-90 transition-opacity mt-2 flex items-center justify-center"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
