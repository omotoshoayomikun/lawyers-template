import Image from "next/image";

import { About } from "@/components/lawyer/About";
import { BrandSection } from "@/components/lawyer/BrandSection";
import { Contact } from "@/components/lawyer/Contact";
import { Experience } from "@/components/lawyer/Experience";
import { Expertise } from "@/components/lawyer/Expertise";
import { Footer } from "@/components/lawyer/Footer";
import { Hero } from "@/components/lawyer/Hero";
import { Navbar } from "@/components/lawyer/Navbar";
import { ProfileStrip } from "@/components/lawyer/ProfileStrip";
import { Publications } from "@/components/lawyer/Publications";
import { RevealObserver } from "@/components/lawyer/RevealObserver";
import { Statement } from "@/components/lawyer/Statement";

export default function Home() {
  return (
    <div className="site-page">
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <ProfileStrip />
        <About />
        <Expertise />
        <Statement />
        <Experience />
        <Publications />
        <BrandSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
