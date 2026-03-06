"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<"business" | "employee">("business");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen flex flex-col bg-white font-['Arimo',sans-serif]">

            {/* ── Auth header: logo + back link ───────────────────── */}
            <header className="flex items-center justify-between px-[32px] md:px-[48px] h-[64px] bg-white border-b border-[#e5e5e5] shrink-0">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="PayWeek Logo" width={120} height={32} className="h-8 w-auto" priority />
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-[6px] text-[#525252] hover:text-[#171717] transition-colors text-[14px] leading-tight"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to home
                </Link>
            </header>

            <main className="flex-1 flex flex-col md:flex-row">
                {/* Left Side - Form Content */}
                <div className="w-full md:w-[720px] shrink-0 flex items-center justify-center p-[32px] bg-white overflow-y-auto">
                    <div className="w-[448px] space-y-[30px]">
                        <div className="space-y-[8px]">
                            <h1 className="font-bold text-[#0c2433] text-[56px] leading-[61.6px] tracking-[-1.12px]">
                                Welcome Back
                            </h1>
                            <p className="text-black opacity-60 text-[17px] leading-[27.2px] font-normal">
                                Sign in to access your account
                            </p>
                        </div>

                        <div className="space-y-[24px]">
                            {/* Role Toggle */}
                            <div className="flex flex-col gap-[12px]">
                                <label className="block text-[#0c2433] text-[16px] leading-[24px] font-normal">
                                    Login as
                                </label>
                                <div className="grid grid-cols-2 gap-[12px] h-[52px]">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("business")}
                                        className={`flex items-center justify-center gap-[8px] border-2 rounded-[10px] text-[16px] leading-[24px] font-normal transition-all ${
                                            activeTab === "business" 
                                                ? "border-[#0fd46b] bg-[#f2f6ff] text-[#0fd46b]" 
                                                : "border-[#e5e7eb] bg-white text-black hover:border-neutral-300"
                                        }`}
                                    >
                                        <div className="w-[20px] h-[20px] relative">
                                            <Image src="/login-business.svg" alt="Business" fill />
                                        </div>
                                        <span>Business</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("employee")}
                                        className={`flex items-center justify-center gap-[8px] border-2 rounded-[10px] text-[16px] leading-[24px] font-normal transition-all ${
                                            activeTab === "employee" 
                                                ? "border-[#0fd46b] bg-[#f2f6ff] text-[#0fd46b]" 
                                                : "border-[#e5e7eb] bg-white text-black hover:border-neutral-300"
                                        }`}
                                    >
                                        <div className="w-[20px] h-[20px] relative">
                                            <Image src="/login-employee.svg" alt="Employee" fill />
                                        </div>
                                        <span>Employee</span>
                                    </button>
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="pt-[74px] space-y-[8px] relative">
                                <label className="block text-[#0c2433] text-[16px] leading-[24px] font-normal">
                                    Email
                                </label>
                                <div className="bg-white border border-[#e5e7eb] rounded-[10px] flex items-center px-[16px] h-[50px]">
                                    <input
                                        type="email"
                                        placeholder="hello@payweek.co"
                                        className="w-full text-[#0a0a0a80] focus:outline-none placeholder:text-[#0a0a0a80] text-[16px] leading-[normal]"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="pt-[8px] space-y-[8px] relative">
                                <label className="block text-[#0c2433] text-[16px] leading-[24px] font-normal">
                                    Password
                                </label>
                                <div className="relative bg-white border border-[#e5e7eb] rounded-[10px] flex items-center px-[16px] pr-[48px] h-[50px]">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full text-[#0a0a0a80] focus:outline-none text-[16px] leading-[normal] tracking-widest"
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-[16px] top-1/2 -translate-y-1/2 text-neutral-400 w-[20px] h-[20px] flex items-center justify-center overflow-hidden"
                                    >
                                        {showPassword ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                <line x1="1" y1="1" x2="23" y2="23"></line>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="flex justify-start pl-[322px] pt-[16px]">
                                <Link
                                    href="#"
                                    className="text-[#0fd46b] text-[16px] leading-[24px] font-normal hover:underline whitespace-nowrap"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-[24px]">
                                <button className="w-[448px] h-[48px] bg-[#0fd46b] text-white text-[16px] leading-[24px] font-normal rounded-[10px] items-center justify-center hover:bg-[#0eb85d] transition-all">
                                    Log in
                                </button>
                            </div>

                            {/* Sign up Link */}
                            <div className="flex items-center justify-start pt-[24px] pl-[112px]">
                                <div className="flex gap-[0]">
                                    <p className="text-black opacity-60 text-[16px] leading-[24px] font-normal pr-[2px]">
                                        Don&apos;t have an account? 
                                    </p>
                                    <Link
                                        href="/signup"
                                        className="text-[#0fd46b] text-[16px] leading-[24px] font-normal hover:underline whitespace-nowrap"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Marketing Content */}
                <div
                    className="hidden md:flex flex-1 flex-col items-center justify-center p-[64px] relative overflow-hidden h-full min-h-[1080px]"
                    style={{
                        backgroundColor: "#000000",
                        backgroundImage: "radial-gradient(circle at bottom left, #1932C0 -50%, transparent 40%), radial-gradient(circle at top right, #0FD46B -100%, transparent 50%)"
                    }}
                >
                    <div className="w-[512px] h-[412.719px] relative z-10 flex flex-col items-start text-left">
                        {/* Shield icon */}
                        <div className="w-[64px] h-[64px] opacity-90 relative">
                            <Image src="/login-shield-check.svg" alt="Shield" fill />
                        </div>

                        {/* Heading */}
                        <div className="pt-[32px] w-[512px]">
                            <h2 className="font-bold text-white text-[42px] leading-[50.4px] tracking-[-0.42px] max-w-[432px]">
                                Manage Your Business with Confidence
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="pt-[44px] flex flex-col gap-[13px] w-[512px]">
                            <p className="text-white opacity-90 text-[17px] leading-[27.2px] font-normal max-w-[503px]">
                                Access your business dashboard, manage payroll, view reports, and keep track of all your accounting needs in one place.
                            </p>

                            <div className="flex flex-col gap-[16px] pt-[8px]">
                                {[
                                    "Secure and encrypted connection",
                                    "24/7 access to your account",
                                    "Real-time data synchronization"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-[12px] h-[27.188px]">
                                        <div className="w-[24px] h-[24px] shrink-0 relative">
                                            <Image src="/login-check-circle.svg" alt="Check" fill />
                                        </div>
                                        <span className="text-white opacity-90 text-[17px] leading-[27.2px] font-normal whitespace-nowrap">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
