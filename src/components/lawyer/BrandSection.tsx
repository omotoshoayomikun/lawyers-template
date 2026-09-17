import { BookOpenText, BriefcaseBusiness, ScanText } from "lucide-react";

const cards = [
  { title: "Practice", text: "Areas of legal expertise", icon: BriefcaseBusiness },
  { title: "Perspective", text: "Professional and legal insights", icon: ScanText },
  { title: "Publications", text: "Research and written work", icon: BookOpenText },
];

export function BrandSection() {
  return (
    <section className="section-shell brand-section">
      <div className="brand-intro"><p className="section-label">Beyond the Practice</p><h2>A wider professional profile.</h2><p>A professional profile should do more than list a title. It should provide context — the areas of work, ideas, research and professional interests that shape the person behind the profession.</p></div>
      <div className="brand-cards">{cards.map(({ title, text, icon: Icon }) => <article className="brand-card reveal" key={title}><Icon aria-hidden="true" /><span>{title}</span><p>{text}</p></article>)}</div>
    </section>
  );
}