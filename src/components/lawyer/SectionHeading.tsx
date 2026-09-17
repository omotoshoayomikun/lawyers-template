type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ number, label, title, light = false }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className={light ? "section-label section-label-light" : "section-label"}>
        {number} — {label}
      </p>
      <h2 className={light ? "section-title text-primary-foreground" : "section-title"}>{title}</h2>
    </header>
  );
}