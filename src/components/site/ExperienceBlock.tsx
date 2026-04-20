import type { ReactNode } from "react";

type ExperienceBlockProps = {
  companyName: string;
  dateRange: string;
  logoSrc?: string; // 👈 теперь это КАРТИНКА
  children?: ReactNode;
};

export default function ExperienceBlock({
  companyName,
  dateRange,
  logoSrc,
  children,
}: ExperienceBlockProps) {
  return (
    <section className="w-full">
      <div className="rounded-3xl bg-white p-6 sm:p-8">

        {/* HEADER */}
        <div className="flex items-center gap-4">

          {/* LOGO IMAGE */}
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-black/5 flex items-center justify-center">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={companyName}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          {/* TEXT */}
          <div className="min-w-0 text-left">

            <div
              className="text-[28px] leading-[36px] tracking-[0.7px] font-semibold text-black"
              style={{
                fontFamily:
                  '"SF Pro Rounded", system-ui, -apple-system, Arial, sans-serif',
              }}
            >
              {companyName}
            </div>

            <div
              className="mt-1 text-[20px] leading-[28px] tracking-[0.7px] text-black/40 font-semibold"
              style={{
                fontFamily:
                  '"SF Pro Rounded", system-ui, -apple-system, Arial, sans-serif',
              }}
            >
              {dateRange}
            </div>

          </div>
        </div>

        {/* CONTENT */}
        {children ? <div className="mt-[50px]">{children}</div> : null}

      </div>
    </section>
  );
}