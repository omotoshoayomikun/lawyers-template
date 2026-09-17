import { lawyerData, navigation } from "@/data/lawyerData";

export function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div><strong>{lawyerData.name}</strong><span>{lawyerData.profession} • {lawyerData.title}</span></div><nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><div className="footer-social"><span>Social</span>{lawyerData.socialLinks.linkedin ? <a href={lawyerData.socialLinks.linkedin}>LinkedIn</a> : <span>LinkedIn — link to be added</span>}</div></div><div className="footer-bottom"><span>© 2026 {lawyerData.name}. All rights reserved.</span><span>Personal Professional Website Concept</span></div></footer>;
}