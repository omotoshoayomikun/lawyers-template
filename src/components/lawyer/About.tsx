import { ExternalLink } from "lucide-react";
import { lawyerData } from "@/data/lawyerData";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell about-section">
      <SectionHeading number="01" label="About" title="A Professional Perspective on Law" />
      <div className="about-grid">
        <p className="editorial-statement reveal">Law, viewed through experience, research and professional practice.</p>
        <div className="about-detail reveal">
          <p>{lawyerData.bio}</p>
          <div className="education-block"><span>Education</span><strong>{lawyerData.education}</strong></div>
          {lawyerData.socialLinks.linkedin ? <a className="text-link" href={lawyerData.socialLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalLink /></a> : <span className="text-link text-link-disabled">LinkedIn <small>Link to be added</small></span>}
        </div>
      </div>
    </section>
  );
}