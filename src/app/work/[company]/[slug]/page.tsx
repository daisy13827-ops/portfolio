import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/site/Container";
import FadeIn from "@/components/site/FadeIn";
import Cover from "@/components/site/Cover";
import WorkCard from "@/components/site/WorkCard";
import { companies, getCaseStudyBySlug } from "@/lib/portfolio";

export function generateMetadata({
  params,
}: {
  params: { company: string; slug: string };
}): Metadata {
  const res = getCaseStudyBySlug(params.company, params.slug);
  if (!res) {
    return { title: "Case study" };
  }

  return {
    title: `${res.caseStudy.title} - ${res.company.name}`,
    description: res.caseStudy.shortDescription,
  };
}

export async function generateStaticParams() {
  return companies.flatMap((company) =>
    company.caseStudies.map((cs) => ({
      company: company.id,
      slug: cs.slug,
    })),
  );
}

export default function CaseStudyPage({
  params,
}: {
  params: { company: string; slug: string };
}) {
  const res = getCaseStudyBySlug(params.company, params.slug);
  if (!res) notFound();

  const { company, caseStudy } = res;
  const moreFrom = company.caseStudies.filter(
    (cs) => cs.slug !== caseStudy.slug,
  );

  return (
    <Container>
      <FadeIn>
        <section className="py-12 sm:py-16">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/work" className="hover:underline">
              Work
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/work/${company.id}`}
              className="hover:underline"
            >
              {company.name}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-900">{caseStudy.title}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Case study
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {caseStudy.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                {caseStudy.shortDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {caseStudy.roles.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-800"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.metrics.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-800"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/work/${company.id}`}
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                >
                  Back to {company.name}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Cover
                from={caseStudy.cover.from}
                to={caseStudy.cover.to}
                className="h-[240px] overflow-hidden p-6 sm:h-[320px]"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="rounded-2xl border border-white/15 bg-black/10 p-3 backdrop-blur">
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                      Year
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-white">
                      {caseStudy.year}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Cover>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delayMs={120}>
        <section className="pb-16 sm:pb-24">
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-black/5 bg-white/60 p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-[-0.02em]">
                  Overview
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {caseStudy.overview}
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {caseStudy.sections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-3xl border border-black/5 bg-white/60 p-6 sm:p-8"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">
                    {section.heading}
                  </h3>

                  {section.variant === "bullets" ? (
                    <ul className="mt-4 space-y-2 text-sm text-gray-600 sm:text-base">
                      {(section.content as string[]).map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {section.content as string}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delayMs={200}>
        <section className="pb-20">
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                More from {company.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Related case studies with additional context and outcomes.
              </p>
            </div>
            <Link
              href={`/work/${company.id}`}
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              View all work
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {moreFrom.map((cs) => (
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
        </section>
      </FadeIn>
    </Container>
  );
}

