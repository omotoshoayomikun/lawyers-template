import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lawyerData } from "@/data/lawyerData";
import { SectionHeading } from "./SectionHeading";

export function Publications() {
  const featured = lawyerData.publications.find((publication) => publication.featured);
  const remaining = lawyerData.publications.filter((publication) => !publication.featured);
  return (
    <section id="publications" className="publications-section">
      <div className="section-shell">
        <SectionHeading number="04" label="Publications" title="Research, Commentary & Legal Thought" light />
        <p className="publications-intro">A selection of published work and areas of legal inquiry.</p>
        {featured && <article className="featured-publication reveal"><div className="feature-mark"><BookOpen aria-hidden="true" /><span>Featured publication</span></div><div><p>{featured.category}</p><h3>{featured.title}</h3><Button variant="editorialLight" size="editorial" type="button">Explore Publications <ArrowRight /></Button></div><span className="feature-number">{featured.number}</span></article>}
        <div className="publication-list">{remaining.map((publication) => <article className="publication-row reveal" key={publication.number}><span>Publication {publication.number}</span><div><p>{publication.category}</p><h3>{publication.title}</h3></div><Button variant="iconGhost" size="icon" type="button" aria-label={`Read ${publication.title}, link to be added`} title="Publication link to be added"><ArrowRight /></Button></article>)}</div>
      </div>
    </section>
  );
}