import Link from "next/link";
import Chip from "./Chip";

export default function WorkCard({
  companyId,
  companyName,
  slug,
  title,
  description,
  year,
  tags,
  cover,
}: {
  companyId: string;
  companyName: string;
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  cover: { from: string; to: string };
}) {
  return (
    <Link
      href={`/work/${companyId}/${slug}`}
      className="group block rounded-3xl border border-black/10 bg-white/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span
              className="h-11 w-11 shrink-0 rounded-2xl border border-black/10 bg-gradient-to-br"
              style={{
                backgroundImage: `linear-gradient(135deg, ${cover.from}, ${cover.to})`,
              }}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <div className="text-xs font-medium text-gray-500">
                {companyName}
              </div>
              <h3 className="mt-0.5 text-base font-semibold tracking-[-0.02em]">
                {title}
              </h3>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-gray-500">{year}</span>
            {tags.slice(0, 2).map((t) => (
              <Chip key={t} className="bg-white/70">
                {t}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

