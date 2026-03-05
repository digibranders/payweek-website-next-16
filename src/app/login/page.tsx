import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navigation />
            <main className="flex-1 flex flex-col md:flex-row">
                {/* Left Side - Form Content */}
                <div className="w-full md:w-[720px] flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
                    <div className="max-w-[448px] w-full space-y-10">
                        <div className="space-y-2">
                            <h1 className="text-[56px] font-bold text-[#0c2433] tracking-[-1.12px] leading-[61.6px]">
                                Welcome Back
                            </h1>
                            <div className="opacity-60">
                                <p className="text-black text-[17px] leading-[27.2px] font-normal">
                                    Sign in to access your account
                                </p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-3">
                                <label className="text-[16px] font-normal text-[#0c2433] leading-[24px]">Login as</label>
                                <div className="grid grid-cols-2 gap-[12px] h-[52px]">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 border-2 border-payweek-green bg-[#f2f6ff] rounded-[10px] text-payweek-green font-normal transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-payweek-green">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        </svg>
                                        <span className="text-[16px]">Business</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 border-2 border-[#e5e7eb] bg-white rounded-[10px] text-black font-normal hover:border-neutral-300 transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="text-[16px]">Employee</span>
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[16px] font-normal text-[#0c2433] leading-[24px]">Email</label>
                                    <div className="bg-white border border-[#e5e7eb] rounded-[10px] h-[50px] flex items-center px-4">
                                        <input
                                            type="email"
                                            defaultValue="hello@payweek.co"
                                            className="w-full text-[16px] text-[#0a0a0a80] focus:outline-none placeholder:text-[#0a0a0a80]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[16px] font-normal text-[#0c2433] leading-[24px]">Password</label>
                                    <div className="relative h-[50px] bg-white border border-[#e5e7eb] rounded-[10px] flex items-center px-4 pr-12">
                                        <input
                                            type="password"
                                            defaultValue="••••••••"
                                            className="w-full text-[16px] text-[#0a0a0a80] focus:outline-none"
                                        />
                                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <Link href="#" className="text-[16px] font-normal text-payweek-green hover:underline leading-[24px]">
                                        Forgot password?
                                    </Link>
                                </div>

                                <button className="w-full h-[48px] bg-payweek-green text-white font-normal text-[16px] rounded-[10px] hover:bg-[#0eb85d] transition-all">
                                    Log in
                                </button>

                                <div className="flex items-center justify-center gap-1.5 pt-4">
                                    <span className="text-black text-[16px] opacity-60 leading-[24px]">Don't have an account?</span>
                                    <Link href="/signup" className="text-payweek-green text-[16px] font-normal hover:underline leading-[24px]">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Marketing Content */}
                <div
                    className="hidden md:flex flex-1 flex-col items-center justify-center p-12 lg:p-16 relative overflow-hidden"
                    style={{
                        background: "linear-gradient(39.2522deg, rgb(25, 50, 192) 56.73%, rgb(0, 0, 0) 56.4%, rgb(15, 212, 107) 169.53%)"
                    }}
                >
                    <div className="max-w-[512px] w-full space-y-12 relative z-10">
                        <div className="w-16 h-16 opacity-90">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M32 8V56" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 32H56" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h2 className="text-[42px] font-bold text-white leading-[50.4px] tracking-[-0.42px] max-w-[432px]">
                            Manage Your Business with Confidence
                        </h2>

                        <div className="space-y-8">
                            <p className="text-white/90 text-[17px] leading-[27.2px] max-w-[503px]">
                                Access your business dashboard, manage payroll, view reports, and keep track of all your accounting needs in one place.
                            </p>

                            <div className="flex flex-col gap-[16px]">
                                {[
                                    "Secure and encrypted connection",
                                    "24/7 access to your account",
                                    "Real-time data synchronization"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-[12px] h-[27px]">
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            <Image src="/icon-check.svg" alt="Check" width={24} height={24} className="brightness-0 invert shadow-sm" />
                                        </div>
                                        <span className="text-white opacity-90 text-[17px] leading-[27.2px] whitespace-nowrap">{item}</span>
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
