import { lawyerData } from "@/data/lawyerData";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <SectionHeading number="03" label="Experience" title="Professional Journey" />
      <div className="experience-list">
        {lawyerData.experience.map((item, index) => <article key={item.organisation} className={item.placeholder ? "experience-row placeholder-row reveal" : "experience-row reveal"}><span className="experience-index">0{index + 1}</span><div><h3>{item.organisation}</h3><p>{item.role}</p></div><span className="experience-location">{item.location}</span>{item.placeholder && <span className="editable-tag">Editable</span>}</article>)}
      </div>
      <p className="experience-note">Additional professional experience can be added here.</p>
    </section>
  );
}