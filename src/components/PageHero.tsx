export default function PageHero({
  eyebrow, title, children,
}: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="sub">{children}</p>}
      </div>
    </section>
  );
}
