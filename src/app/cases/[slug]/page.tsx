import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/site/Container";
import Footer from "@/components/site/Footer";
import { links } from "@/data/links";
import {
  cases,
  getCaseBySlug,
  getCaseNeighbors,
  type CaseSection,
} from "@/data/cases";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

function SocialLinks() {
  return (
    <div className="flex flex-col gap-[4px] font-semibold ml-auto text-right">
      <a href={links.telegram} target="_blank" className="text-[20px]">
        Telegram
      </a>

      <a href={links.linkedin} target="_blank" className="text-[20px]">
        LinkedIn
      </a>

      <a href={links.dribbble} target="_blank" className="text-[20px]">
        Dribbble
      </a>

      <a
        href={links.cv}
        target="_blank"
        className="text-[20px] flex justify-end gap-2"
      >
        CV
        <img src="/cv-icon.svg" className="w-[24px] h-[24px]" />
      </a>
    </div>
  );
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full overflow-hidden rounded-[30px]">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
}

function renderSection(section: CaseSection, slug: string) {

  /* =========================
      PROBLEM
  ========================= */

  if (section.type === "problem") {
    return (
      <section className="mt-[80px]">

        {/* TITLE */}
        <div className="flex justify-center py-[16px]">
          <h2
            className="text-[42px] font-semibold leading-[48px]"
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              letterSpacing: "0.2px",
              color: "#000",
            }}
          >
            {section.title}
          </h2>
        </div>

        {/* TWO COLUMNS */}
        <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[20px] items-stretch">

          {/* LEFT */}
          <div className="flex flex-col gap-[20px]">

            {section.cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#F5F5F5] rounded-[30px] p-[28px] flex-1 flex flex-col justify-center"
              >

                {/* CARD TITLE */}
                <div
                  style={{
                    fontFamily: "SF Pro Rounded, sans-serif",
                    color: "#8948F9",
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "38px",
                    letterSpacing: "0.7px",
                  }}
                >
                  {card.title}
                </div>

                <div className="h-[12px]" />

                {/* CARD TEXT */}
                <div
                  style={{
                    fontFamily: "SF Pro Rounded, sans-serif",
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    letterSpacing: "0.7px",
                  }}
                >
                  {card.text}
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="h-full">

            <img
              src={section.image}
              alt="problem-1"
              className="w-full h-full object-cover rounded-[30px]"
            />

          </div>

        </div>

        {/* GAP */}
        <div className="mt-[60px]" />

        {/* FULL WIDTH IMAGE */}
        <img
          src={section.imageFull}
          className="w-full rounded-[30px]"
          alt="problem-2"
        />

      </section>
    );
  }

  /* =========================
      CONTEXT
  ========================= */

  if (section.type === "context") {
    return (
      <section className="mt-[80px]">

        {/* TITLE */}
        <div className="flex justify-center py-[16px]">
          <h2
            className="text-[42px] font-semibold leading-[48px]"
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              letterSpacing: "-0.2px",
              color: "#000",
            }}
          >
            {section.title}
          </h2>
        </div>

        {/* SUBTITLE */}
        <div className="flex justify-center">
          <p
            className="text-[34px] font-bold leading-[38px] text-center max-w-[900px]"
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              letterSpacing: "0.7px",
            }}
          >
            {section.subtitle.map((part, i) => (
              <span
                key={i}
                style={{
                  color: part.highlight ? "#8948F9" : "#000",
                }}
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>

        {/* GAP */}
        <div className="mt-[60px]" />

        {/* IMAGE */}
        <img
          src={section.image}
          className="w-full rounded-[30px]"
          alt="context"
        />

      </section>
    );
  }

  return null;
}

export default function CasePage({ params }: { params: { slug: string } }) {

  const currentCase = getCaseBySlug(params.slug);

  if (!currentCase) return notFound();

  return (
    <Container>

      {/* HEADER */}
      <section className="mt-[60px] flex justify-between items-start gap-[48px]">

        <div>

          <h1
            className="text-[42px] font-semibold text-black leading-[48px] tracking-[-0.2px]"
            style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
          >
            {currentCase.title}
          </h1>

          {/* TAGS */}
          <p
            className="text-[28px] font-medium text-black/40 mt-[8px] leading-[36px] tracking-[0.7px] flex flex-wrap items-center gap-x-[8px]"
            style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
          >

            <span>{currentCase.company}</span>

            <span>·</span>

            <span>{currentCase.tags[0]}</span>

            <span>,</span>

            <span>{currentCase.tags[1]}</span>

            <span>·</span>

            <span>{currentCase.tags[2]}</span>

            <span>·</span>

            <span>{currentCase.tags[3]}</span>

            <span>·</span>

            <span>{currentCase.tags[4]}</span>

          </p>

        </div>

        <SocialLinks />

      </section>

      {/* HERO */}
      <section className="mt-[60px]">

        <Image
          src={currentCase.heroImage}
          alt={currentCase.title}
          width={1600}
          height={900}
          className="rounded-[30px] w-full h-auto"
          priority
        />

      </section>

      {/* CONTENT */}
      {currentCase.sections.map((section, i) => (
        <div key={i}>
          {renderSection(section, currentCase.slug)}
        </div>
      ))}

      <Footer />

    </Container>
  );
}