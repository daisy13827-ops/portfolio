import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/site/Container";
import FadeIn from "@/components/site/FadeIn";
import WorkCard from "@/components/site/WorkCard";
import { companies, getCompanyById } from "@/lib/portfolio";

export async function generateStaticParams() {
  return companies.map((c) => ({ company: c.id }));
}

export default function CompanyWorkPage({
  params,
}: {
  params: { company: string };
}) {
  const company = getCompanyById(params.company);
  if (!company) notFound();

  return (
    <Container>
      <FadeIn>
        <section className="py-12 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500">
                Work
              </div>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {company.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                {company.description}
              </p>
            </div>

            <Link
              href="/work"
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              Back to all work
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </section>
      </FadeIn>
    </Container>
  );
}

