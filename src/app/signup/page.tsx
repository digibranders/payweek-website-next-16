import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navigation />
            <main className="flex-1 flex flex-col md:flex-row">
                {/* Left Side - Form Content */}
                <div className="w-full md:w-[780px] flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
                    <div className="max-w-[448px] w-full space-y-8">
                        <div className="space-y-3">
                            <h1 className="text-[56px] font-bold text-[#171717] tracking-[-1.12px] leading-[61.6px]">
                                Get Started Now
                            </h1>
                            <p className="text-[#525252] text-[17px] leading-[27.2px] font-normal">
                                Sign in to start your journey at Payweek
                            </p>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-3 h-[50px] border border-[#e5e5e5] rounded-[10px] hover:bg-neutral-50 transition-all font-medium">
                                <div className="w-[18px] h-[18px] relative">
                                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                </div>
                                <span className="text-[16px] text-[#171717]">Sign In with Google</span>
                            </button>
                            <button className="w-full flex items-center justify-center gap-3 h-[50px] border border-[#e5e5e5] rounded-[10px] hover:bg-neutral-50 transition-all font-medium">
                                <div className="w-[18px] h-[18px] relative">
                                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                                        <path d="M17.05 20.28c-.96.95-2.04 1.72-3.14 1.72-1.14 0-1.57-.68-3-.68s-2 .65-3.08.65c-1.12 0-2.26-.79-3.32-1.89-2.14-2.19-2.73-6.19-1.07-8.81 1.05-1.63 2.72-2.61 4.54-2.61 1.14 0 2.2.49 3.03.49.77 0 1.96-.54 3.3-.54 1.54 0 2.92.79 3.74 1.94-3.15 1.4-2.63 5.46.46 6.78-.65 1.57-1.4 3-2.06 4.04zM12.03 7.25c-.15-2.23 1.66-4.07 3.66-4.25.26 2.37-1.99 4.39-3.66 4.25z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] text-[#171717]">Sign In with Apple</span>
                            </button>
                        </div>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#e5e5e5]"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-5 bg-white text-[#737373] text-[16px] font-normal leading-[24px]">or continue with</span>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[16px] font-normal text-[#171717] leading-[24px]">Email</label>
                                <input
                                    type="email"
                                    placeholder="hello@payweek.co"
                                    className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[10px] text-[16px] focus:outline-none focus:border-payweek-green transition-all placeholder:text-neutral-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[16px] font-normal text-[#171717] leading-[24px]">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[10px] text-[16px] focus:outline-none focus:border-payweek-green transition-all placeholder:text-neutral-300"
                                    />
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="w-[18px] h-[18px] rounded-sm border-[#e5e5e5] text-payweek-green focus:ring-payweek-green cursor-pointer"
                                    />
                                    <label htmlFor="remember" className="text-[16px] text-[#525252] leading-[24px] cursor-pointer">Remember me</label>
                                </div>
                                <Link href="#" className="text-[16px] text-payweek-green hover:underline leading-[24px]">
                                    Forgot password?
                                </Link>
                            </div>

                            <button className="w-full h-[48px] bg-payweek-green text-white font-medium text-[16px] rounded-[10px] hover:bg-[#0eb85d] transition-all">
                                Get Started
                            </button>

                            <div className="text-center pt-2">
                                <Link href="/login" className="text-[16px] text-[#171717] underline underline-offset-4 decoration-1 font-medium italic">
                                    Business staff login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side - Marketing Content */}
                <div
                    className="hidden md:flex flex-1 flex-col p-12 lg:p-20 relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #092c3c 0%, #173746 50%, #1e4b52 100%)",
                        borderLeft: "1px solid rgba(255,255,255,0.1)"
                    }}
                >
                    <div className="relative z-10 max-w-[620px] pt-12">
                        <div className="mb-6">
                            <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8 40C9 40 5.8 38.6 3.2 35.8C0.6 33 -0.7 29.4 0.3 25L5.6 0H18.4L13.1 25C12.4 28.3 13.3 30.6 15.8 31.9L12.8 40ZM35 40C31.2 40 28 38.6 25.4 35.8C22.8 33 21.5 29.4 22.5 25L27.8 0H40.6L35.3 25C34.6 28.3 35.5 30.6 38 31.9L35 40Z" fill="white" fillOpacity="0.9" />
                            </svg>
                        </div>

                        <h2 className="text-[32px] lg:text-[36px] font-bold text-white leading-[1.3] tracking-tight">
                            Focus on growing your business — PayWeek takes care of your payroll with speed, precision, and complete security, so you can pay your team effortlessly and on time, every time.
                        </h2>
                    </div>

                    {/* Bottom Cropped Image - Matching Screenshot position */}
                    <div className="absolute bottom-[-100px] right-[-100px] left-20 top-[45%] rounded-tl-[32px] overflow-hidden shadow-2xl border-t border-l border-white/20">
                        <div className="relative w-full h-full bg-[#f8f9fc]">
                            <Image
                                src="/accounting.png"
                                alt="Dashboard Preview"
                                fill
                                className="object-top object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
