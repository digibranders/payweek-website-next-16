import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PayWeek Logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-neutral-900 hover:text-payweek-green transition-colors">
            Home
          </Link>
          <Link href="#services" className="text-sm font-medium text-neutral-600 hover:text-payweek-green transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium text-neutral-600 hover:text-payweek-green transition-colors">
            About Us
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-payweek-green transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium text-neutral-600 hover:text-payweek-green transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:inline-flex text-sm font-medium text-neutral-600 hover:text-payweek-green transition-colors mr-2"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-payweek-green hover:bg-[#0eb85d] rounded-full transition-colors shadow-sm"
          >
            Get started
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-neutral-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;