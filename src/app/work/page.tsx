import Link from "next/link";
import Container from "@/components/site/Container";
import FadeIn from "@/components/site/FadeIn";
import SectionHeading from "@/components/site/SectionHeading";
import WorkCard from "@/components/site/WorkCard";
import { companies } from "@/lib/portfolio";

export default function WorkIndexPage() {
  return (
    <Container>
      <FadeIn>
        <section className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Work"
            title="Case studies by company"
            description="Browse projects grouped by team. Each case study has its own page with details and outcomes."
          />

          <div className="mt-10 space-y-10">
            {companies.map((company) => (
              <div
                key={company.id}
                className="rounded-3xl border border-black/5 bg-white/50 p-5 sm:p-7"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold tracking-[-0.02em]">
                      {company.name}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {company.description}
                    </p>
                  </div>
                  <Link
                    href={`/work/${company.id}`}
                    className="text-sm font-medium text-gray-900 hover:underline"
                  >
                    View all
                  </Link>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {company.caseStudies.map((cs) => (
                    <WorkCard
                      key={cs.slug}
                      companyId={company.id}
                      companyName={company.name}
                      slug={cs.slug}
                      title={cs.title}
                      description={cs.shortDescription}
                      year={cs.year}
                      tags={cs.tags}
                      cover={cs.cover}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </Container>
  );
}

