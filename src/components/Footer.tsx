import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Information: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Bookmarks", href: "#" },
    { label: "Support", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" }
  ]
};

const Footer = () => {
  return (
    <footer
      className="w-full pt-[65px] px-6 lg:px-[80px]"
      style={{
        backgroundImage: "linear-gradient(99deg, #1932C0 -54.25%, #000 57.42%, #0FD46B 169%)"
      }}
    >
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-[64px]">
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-0">

          {/* Column 1: Brand & Base Links */}
          <div className="flex flex-col w-full lg:w-[378px]">
            <div className="mb-[26px]">
              <Image src="/Logo2.png" alt="PayWeek" width={103} height={38} />
            </div>
            <ul className="flex flex-col space-y-[12px]">
              <li>
                <Link href="#" className="font-normal text-[16px] leading-[24px] text-white hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="font-normal text-[16px] leading-[24px] text-white hover:text-white/80 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="font-normal text-[16px] leading-[24px] text-white hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="font-normal text-[16px] leading-[24px] text-white hover:text-white/80 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="font-normal text-[16px] leading-[24px] text-white hover:text-white/80 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Information Links */}
          <div className="flex flex-col w-full lg:w-[378px] gap-[16px]">
            <h4 className="font-semibold text-[23px] leading-[32.2px] text-white">
              Information
            </h4>
            <ul className="flex flex-col space-y-[12px]">
              {footerLinks.Information.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-normal text-[16px] leading-[24px] text-white hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="flex flex-col w-full lg:w-[378px] gap-[16px]">
            <h4 className="font-semibold text-[23px] leading-[32.2px] text-white">
              Social
            </h4>
            <div className="flex items-center gap-[16px]">
              {/* Facebook */}
              <Link href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Image src="/fb.svg" alt="Facebook" width={20} height={20} className="w-[20px] h-[20px]" />
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-[20px] h-[20px]" />
              </Link>
              {/* X / Twitter */}
              <Link href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="X / Twitter">
                <Image src="/x.svg" alt="X" width={20} height={20} className="w-[20px] h-[20px]" />
              </Link>
              {/* Instagram */}
              <Link href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20} className="w-[20px] h-[20px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full flex justify-center items-center py-[25px] border-t border-[#e5e5e5]">
          <p className="font-normal text-[17px] leading-[27.2px] text-white text-center">
            © 2025 PayWeek, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;