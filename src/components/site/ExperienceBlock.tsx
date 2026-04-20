import type { ReactNode } from "react";

type ExperienceBlockProps = {
  companyName: string;
  dateRange: string;
  logo?: ReactNode;
  children?: ReactNode;
};

export default function ExperienceBlock({
  companyName,
  dateRange,
  logo,
  children,
}: ExperienceBlockProps) {
  return (
    <section className="w-full">
      <div className="rounded-3xl border border-black/5 bg-white/60 p-5 sm:p-7">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 shrink-0 rounded-2xl border border-black/10 bg-black/5">
            <div className="flex h-full w-full items-center justify-center">
              {logo ?? (
                <span className="text-[10px] font-semibold text-gray-700">
                  Logo
                </span>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <div className="truncate text-base font-semibold tracking-[-0.02em] text-gray-900">
              {companyName}
            </div>
            <div className="mt-1 text-sm text-gray-600">{dateRange}</div>
          </div>
        </div>

        {children ? (
          <div className="mt-6">{children}</div>
        ) : null}
      </div>
    </section>
  );
}

