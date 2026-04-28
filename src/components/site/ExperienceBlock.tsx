import Image from "next/image";

type ExperienceBlockProps = {
  companyName: string;
  dateRange: string;
  logoSrc?: string;
};

export default function ExperienceBlock({
  companyName,
  dateRange,
  logoSrc,
}: ExperienceBlockProps) {
  return (
    <section className="w-full">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-[16px] bg-black/5 flex items-center justify-center">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={companyName}
              width={64}
              height={64}
              className="object-contain"
            />
          )}
        </div>

        <div className="text-left">
          <div className="text-[28px] leading-[36px] font-semibold tracking-[0.7px] text-black">
            {companyName}
          </div>

          <div className="mt-[4px] text-[20px] leading-[28px] font-semibold tracking-[0.7px] text-black/40">
            {dateRange}
          </div>
        </div>
      </div>
    </section>
  );
}