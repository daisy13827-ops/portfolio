import type { ReactNode } from "react";

type ExperienceBlockProps = {
  companyName: string;
  dateRange: string;
  logoSrc?: string;
  children?: ReactNode;
};

export default function ExperienceBlock({
  companyName,
  dateRange,
  logoSrc,
  children,
}: ExperienceBlockProps) {
  return (
    <section className="w-full flex flex-col items-start">

      {/* HEADER */}
      <div className="flex items-start gap-4 w-full">

        {/* LOGO */}
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[16px] bg-black/5 flex items-center justify-center">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={companyName}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-start text-left">

          <div className="text-[28px] leading-[36px] tracking-[0.7px] font-semibold text-black">
            {companyName}
          </div>

          <div className="mt-[4px] text-[20px] leading-[28px] tracking-[0.7px] text-black/40 font-semibold">
            {dateRange}
          </div>

        </div>
      </div>

      {/* CONTENT */}
      {children ? (
        <div className="mt-[50px] w-full">
          {children}
        </div>
      ) : null}

    </section>
  );
}