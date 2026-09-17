"use client"

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lawyerData } from "@/data/lawyerData";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-copy reveal">
        <p className="eyebrow">Lawyer <span /> Defence Attorney</p>
        <h1>{lawyerData.name}</h1>
        <p className="hero-line">Legal perspective. Strategic advocacy. Professional insight.</p>
        <p className="hero-description">Explore the professional work, legal interests and publications of {lawyerData.name}.</p>
        <div className="hero-actions">
          <Button variant="editorial" size="editorial" className="lg:inline-flex hidden !text-white" asChild><a href="#expertise">Explore My Practice <ArrowDown /></a></Button>
          <Button variant="editorial" size="editorial" className="lg:hidden inline-flex !text-white" asChild><a href="#contact">Contact <ArrowDown /></a></Button>
          <Button variant="editorialOutline" size="editorial" asChild><a href="#publications">View Publications <ArrowUpRight /></a></Button>
        </div>
      </div>
      <div className="portrait-stage reveal reveal-delay" aria-label="Portrait placeholder for Ekene Maduagwuna">
        <span className="portrait-monogram" aria-hidden="true">E</span>
        <div className="portrait-frame">
          {lawyerData.portrait ? (
            <div className="relative w-full h-full">
            <Image src={lawyerData.portrait} className="absolute" fill alt={`Professional portrait of ${lawyerData.name}`} /> 
            </div>
          ): (
            <div className="portrait-placeholder"><span>Professional</span><strong>Portrait</strong><small>Editable image area</small></div>
          )}
        </div>
        <p className="portrait-caption"><span>Portrait study</span><span>EM — 01</span></p>
      </div>
    </section>
  );
}