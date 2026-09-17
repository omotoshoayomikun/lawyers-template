import { lawyerData } from "@/data/lawyerData";

export function ProfileStrip() {
  const details = [
    ["Legal professional", lawyerData.title],
    ["Professional base", lawyerData.location],
    ["Affiliation", lawyerData.affiliation],
    ["Education", lawyerData.education],
  ];
  return <section className="profile-strip" aria-label="Professional profile summary">{details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>;
}