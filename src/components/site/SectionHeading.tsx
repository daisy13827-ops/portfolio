export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

