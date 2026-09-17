import { ArrowUpRight } from "lucide-react";
import { lawyerData } from "@/data/lawyerData";
import { SectionHeading } from "./SectionHeading";

export function Expertise() {
  return (
    <section id="expertise" className="section-shell expertise-section">
      <SectionHeading number="02" label="Areas of Expertise" title="Legal Areas of Practice" />
      <div className="expertise-grid">{lawyerData.practiceAreas.map((area) => <article className="expertise-card reveal" key={area.number}><div><span>{area.number}</span><ArrowUpRight aria-hidden="true" /></div><h3>{area.name}</h3><p>{area.description}</p></article>)}</div>
    </section>
  );
}