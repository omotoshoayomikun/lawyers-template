export type PracticeArea = {
  number: string;
  name: string;
  description: string;
};

export type Publication = {
  number: string;
  title: string;
  category: string;
  featured?: boolean;
};

export const lawyerData = {
  name: "Ekene Maduagwuna",
  title: "Defence Attorney",
  profession: "Lawyer",
  location: "Nigeria",
  affiliation: "MAttorneys",
  education: "University of Lagos",
  portrait: "/images/ekene.png",
  bio: "Ekene Maduagwuna is a Nigerian legal professional and defence attorney affiliated with MAttorneys. His publicly listed areas of legal service span business and corporate law, copyright, mortgage lending, legal consulting, personal injury, estate planning, employment and related areas.",
  practiceAreas: [
    { number: "01", name: "Business Law", description: "Legal considerations affecting commercial activity, operations and business relationships." },
    { number: "02", name: "Corporate Law", description: "The formation, governance and legal responsibilities of companies and their stakeholders." },
    { number: "03", name: "Copyright Law", description: "Protection, ownership and permitted use of original creative and intellectual works." },
    { number: "04", name: "Mortgage Lending", description: "Legal issues surrounding secured property finance, lending terms and obligations." },
    { number: "05", name: "Legal Consulting", description: "Professional legal perspective on decisions, risk, obligations and regulatory questions." },
    { number: "06", name: "Wills Planning", description: "The clear and considered documentation of wishes for assets and estate administration." },
    { number: "07", name: "Personal Injury", description: "Legal questions arising from injury, responsibility, compensation and related claims." },
    { number: "08", name: "Estate Planning", description: "Structuring the management and future transfer of personal and family assets." },
    { number: "09", name: "Labor & Employment", description: "Rights, duties and legal relationships within the workplace and employment context." },
    { number: "10", name: "Trust & Estate Litigation", description: "Disputes involving trusts, estates, inheritance and the administration of assets." },
  ] satisfies PracticeArea[],
  publications: [
    { number: "01", title: "Contributory Pension Scheme in Nigeria; Prospects and Challenges", category: "Legal Research" },
    { number: "02", title: "The Right to Self Determination Revisited", category: "Legal Research" },
    { number: "03", title: "The Conflicting Decisions of the Tax Appeal Tribunal Nigeria", category: "Tax / Legal Research" },
    { number: "04", title: "The Powers of the ECOWAS Court of Justice", category: "International / Regional Law", featured: true },
    { number: "05", title: "The Right of Prisoners of War", category: "Legal Research" },
  ] satisfies Publication[],
  experience: [
    { organisation: "MAttorneys", role: "Legal Professional", location: "Nigeria", placeholder: false },
    { organisation: "Previous Role", role: "Add verified professional experience", location: "Editable placeholder", placeholder: true },
    { organisation: "Professional Milestone", role: "Add verified professional milestone", location: "Editable placeholder", placeholder: true },
  ],
  contact: {
    email: "Professional Email",
    phone: "Phone Number",
    location: "Nigeria",
  },
  socialLinks: {
    linkedin: null as string | null,
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;