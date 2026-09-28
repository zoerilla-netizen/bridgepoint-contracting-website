import Link from "next/link";

export default function CtaBand({ title = "Evaluating Bridgepoint for a requirement?" }: { title?: string }) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <div className="btn-row">
          <Link href="/request-capabilities" className="btn btn-primary">Request Capabilities</Link>
          <Link href="/contact" className="btn btn-outline-dark">Contact Bridgepoint</Link>
        </div>
      </div>
    </section>
  );
}
