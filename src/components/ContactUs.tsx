"use client";

import { motion, useReducedMotion } from "framer-motion";

const ContactUs = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-[624px] mx-auto px-6 flex flex-col items-center">

                {/* Icon + heading — single reveal */}
                {/* Justification: contact form is a single functional unit — one reveal is appropriate */}
                <motion.div
                    className="flex flex-col items-center w-full"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0fdf4] to-[#eff6ff] border border-[#e5e5e5] flex items-center justify-center mb-6">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33398 9.33333C5.33398 7.86058 6.52789 6.66667 8.00065 6.66667H24.0007C25.4734 6.66667 26.6673 7.86058 26.6673 9.33333V22.6667C26.6673 24.1394 25.4734 25.3333 24.0007 25.3333H8.00065C6.52789 25.3333 5.33398 24.1394 5.33398 22.6667V9.33333Z" stroke="#0fd46b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26.6673 9.33333L16.0007 17.3333L5.33398 9.33333" stroke="#0fd46b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h2
                        className="font-bold text-[#171717] text-center mb-4"
                        style={{
                            fontSize: "var(--font-size-h2)",
                            lineHeight: "var(--leading-h2)",
                            letterSpacing: "var(--tracking-h2)",
                        }}
                    >
                        Get in Touch
                    </h2>

                    {/* Subheading */}
                    <p
                        className="text-[#737373] text-center mb-12"
                        style={{
                            fontSize: "var(--font-size-body)",
                            lineHeight: "var(--leading-body)",
                        }}
                    >
                        Have questions about PayWeek? Our team is here<br />
                        to help you find the right solution for your business.
                    </p>

                    {/* Form Container */}
                    <div className="w-full bg-white border border-[#e5e5e5] rounded-[0.625rem] p-[33px]">
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-[#171717]"
                                    style={{ fontSize: "var(--font-size-base)" }}
                                >
                                    Name <span className="text-[#fb2c36]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 rounded-[0.425rem] border border-[#e5e5e5] focus:outline-none transition-colors bg-white text-[#171717] placeholder-[#a1a1a1]"
                                    style={{ height: "3.125rem", fontSize: "var(--font-size-base)" }}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-[#171717]"
                                    style={{ fontSize: "var(--font-size-base)" }}
                                >
                                    Email ID <span className="text-[#fb2c36]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 rounded-[0.425rem] border border-[#e5e5e5] focus:outline-none transition-colors bg-white text-[#171717] placeholder-[#a1a1a1]"
                                    style={{ height: "3.125rem", fontSize: "var(--font-size-base)" }}
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="subject"
                                    className="text-[#171717]"
                                    style={{ fontSize: "var(--font-size-base)" }}
                                >
                                    Subject <span className="text-[#fb2c36]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 rounded-[0.425rem] border border-[#e5e5e5] focus:outline-none transition-colors bg-white text-[#171717] placeholder-[#a1a1a1]"
                                    style={{ height: "3.125rem", fontSize: "var(--font-size-base)" }}
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="message"
                                    className="text-[#171717]"
                                    style={{ fontSize: "var(--font-size-base)" }}
                                >
                                    Message <span className="text-[#fb2c36]">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-4 rounded-[0.425rem] border border-[#e5e5e5] focus:outline-none transition-colors bg-white text-[#171717] placeholder-[#a1a1a1] resize-none"
                                    style={{ height: "10.375rem", fontSize: "var(--font-size-base)" }}
                                    placeholder="Tell us about your company's needs"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-[#0fd46b] text-white rounded-[0.425rem] flex items-center justify-center mt-2"
                                style={{
                                    height: "3rem",
                                    fontSize: "var(--font-size-base)",
                                    lineHeight: "var(--leading-base)",
                                }}
                                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                                whileHover={prefersReducedMotion ? {} : { opacity: 0.9 }}
                                transition={{ duration: 0.15 }}
                            >
                                Send message
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
