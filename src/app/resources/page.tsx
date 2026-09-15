import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import { resources, contactInfo } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for companies preparing to enter the federal marketplace.",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Resources"
        title="Resources for federal-contracting-ready companies."
        intro="Practical materials to help you understand and prepare for federal contracting."
      />

      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col justify-between border border-lightgray p-8"
              >
                <div>
                  <h3 className="text-[22px] font-bold text-navy">{resource.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel">
                    {resource.description}
                  </p>
                </div>
                <a
                  href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                    `Resource Request: ${resource.title}`
                  )}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-electric hover:text-navy"
                >
                  {resource.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Looking for something else?"
        buttons={[
          {
            label: "Contact Bridgepoint",
            href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Resource Question")}`,
            primary: true,
          },
        ]}
      />
    </main>
  );
}
