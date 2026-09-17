"use client"

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lawyerData, navigation } from "@/data/lawyerData";

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={compact ? "site-nav site-nav-compact" : "site-nav"}>
      <a href="#top" className="wordmark" aria-label={`${lawyerData.name}, home`} onClick={() => setOpen(false)}>
        {lawyerData.name}
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        <Button variant="editorial" size="editorial" asChild><a href="#contact">Let&apos;s Connect</a></Button>
      </nav>
      <Button className="mobile-menu-button" variant="iconGhost" size="icon" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <Button variant="editorial" size="editorial" asChild><a href="#contact" onClick={() => setOpen(false)}>Let&apos;s Connect</a></Button>
        </nav>
      )}
    </header>
  );
}