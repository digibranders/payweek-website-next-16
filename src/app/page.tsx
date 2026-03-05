import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import WhatIsPayweek from "@/components/WhatIsPayweek";
import WeCareDeeply from "@/components/WeCareDeeply";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <WhatIsPayweek />
      <WeCareDeeply />
      <About />
      <Pricing />
      <ContactUs />
      <Footer />
    </main>
  );
}
