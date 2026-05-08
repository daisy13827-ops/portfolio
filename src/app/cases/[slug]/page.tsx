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
/* =========================
    RESULTS
========================= */



function renderSection(section: CaseSection, slug: string) {
  /* =========================
      RESULTS
  ========================= */

  if (section.type === "results") {
    return (
      <section className="mt-[80px]">
  
        {/* TITLE */}
        <div className="flex justify-center py-[16px]">
          <h2
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              fontSize: "42px",
              fontWeight: 600,
              lineHeight: "48px",
              color: "#000",
            }}
          >
            {section.title}
          </h2>
        </div>
  
        {/* 3 COLUMNS */}
        <div className="mt-[16px] grid grid-cols-1 md:grid-cols-3 gap-[40px] text-center">
  
          {section.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
  
              {/* LABEL (фиолетовый) */}
              <div
                style={{
                  fontFamily: "SF Pro Rounded, sans-serif",
                  fontSize: "34px",
                  fontWeight: 600,
                  lineHeight: "38px",
                  letterSpacing: "0.7px",
                  color: "#8948F9",
                  textAlign: "center",
                }}
              >
                {item.label}
              </div>
  
              {/* GAP */}
              <div className="h-[20px]" />
  
              {/* DESCRIPTION (серый 40%) */}
              <div
                style={{
                  fontFamily: "SF Pro Rounded, sans-serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "32px",
                  letterSpacing: "0.7px",
                  color: "rgba(0,0,0,0.4)",
                  textAlign: "center",
                }}
              >
                {item.description}
              </div>
  
            </div>
          ))}
  
        </div>
  
        {/* GAP BEFORE IMAGE */}
        <div className="mt-[60px]" />
  
        {/* IMAGE */}
        <img
          src="/cases/sber-feed-results.png"
          alt="sber-feed-results"
          className="w-full rounded-[30px]"
        />
  
      </section>
    );
  }
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
  /* =========================
    HYPOTHESES
========================= */

if (section.type === "hypotheses") {
  const hypothesisBlock = section.blocks[0];
  const metricsBlock = section.blocks[1];

  return (
    <section className="mt-[80px]">

      {/* TITLE */}
      <div className="flex justify-center py-[16px]">
        <h2
          style={{
            fontFamily: "SF Pro Rounded, sans-serif",
            fontSize: "42px",
            fontWeight: 600,
          }}
        >
          {section.title}
        </h2>
      </div>

      <div className="mt-[16px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">

        {/* LEFT BIG CARD */}
        <div className="bg-[#F5F5F5] rounded-[30px] p-[28px]">

          <div
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              fontSize: "32px",
              fontWeight: 600,
              color: "#8948F9",
            }}
          >
            {hypothesisBlock.title}
          </div>

          <div className="mt-[24px] flex flex-col gap-[24px]">

            {"scenarios" in hypothesisBlock &&
              hypothesisBlock.scenarios.map((s, i) => (
                <div key={i}>

                  <div
                    style={{
                      fontFamily: "SF Pro Rounded, sans-serif",
                      fontSize: "22px",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                  >
                    {s.text}
                  </div>

                  <ul className="mt-[12px] flex flex-col gap-[6px]">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-[10px] items-start">

                        <div className="w-[6px] h-[6px] bg-black rounded-full mt-[10px]" />

                        <div
                          style={{
                            fontFamily: "SF Pro Rounded, sans-serif",
                            fontSize: "22px",
                            fontWeight: 600,
                            lineHeight: "28px",
                          }}
                        >
                          {b}
                        </div>

                      </li>
                    ))}
                  </ul>

                </div>
              ))}

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#F5F5F5] rounded-[30px] p-[28px]">

          <div
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              fontSize: "32px",
              fontWeight: 600,
              color: "#8948F9",
            }}
          >
            {metricsBlock.title}
          </div>

          <div className="mt-[24px] flex flex-col gap-[6px]">

            {"bullets" in metricsBlock &&
              metricsBlock.bullets.map((b, i) => (
                <div key={i} className="flex gap-[10px] items-start">

                  <div className="w-[6px] h-[6px] bg-black rounded-full mt-[10px]" />

                  <div
                    style={{
                      fontFamily: "SF Pro Rounded, sans-serif",
                      fontSize: "22px",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                  >
                    {b}
                  </div>

                </div>
              ))}

          </div>

        </div>

      </div>

    </section>
  );
}
/* =========================
    GALLERY
========================= */

if (section.type === "gallery") {
  return (
    <section className="mt-[60px]">

      <div className="flex flex-col gap-[20px]">
        {section.images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`gallery-${i}`}
            className="w-full rounded-[30px]"
          />
        ))}
      </div>

    </section>
  );
}
/* =========================
    SOLUTION
========================= */

if (section.type === "solution") {
  return (
    <section className="mt-[60px]">

      {/* TITLE */}
      <div className="flex justify-center py-[16px]">
        <h2
          style={{
            fontFamily: "SF Pro Rounded, sans-serif",
            fontSize: "42px",
            fontWeight: 600,
          }}
        >
          {section.title}
        </h2>
      </div>

      {/* GRID */}
      <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-[20px] items-stretch">

        {/* LEFT */}
<div className="flex flex-col gap-[20px] h-full">



{section.leftCards.map((card, i) => {
  const words = card.text.split(" ");
  const firstWord = words.shift();
  const rest = words.join(" ");

  return (
    <div
      key={i}
      className="bg-[#F5F5F5] rounded-[30px] p-[28px] flex-1 flex justify-between gap-[8px]"
    >

      {/* TEXT */}
      <div
        style={{
          fontFamily: "SF Pro Rounded, sans-serif",
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: "36px",
          letterSpacing: "0.7px",
        }}
      >
        <span style={{ color: "#8948F9" }}>
          {firstWord}
        </span>{" "}
        {rest}
      </div>

      {/* NUMBER */}
      <div
        className="self-end"
        style={{
          fontFamily: "SF Pro Rounded, sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "26px",
          letterSpacing: "0.7px",
          color: "rgba(0,0,0,0.3)",
        }}
      >
        {`0${i + 1}`}
      </div>

    </div>
  );
})}

</div>

{/* CENTER IMAGE */}
<img
src={section.image}
alt="solution"
className="w-full h-full object-cover rounded-[30px]"
/>

{/* RIGHT */}
<div className="flex flex-col gap-[20px] h-full">

{section.rightCards.map((card, i) => {
  const words = card.text.split(" ");
  const firstWord = words.shift();
  const rest = words.join(" ");

  return (
    <div
      key={i}
      className="bg-[#F5F5F5] rounded-[30px] p-[28px] flex-1 flex justify-between gap-[8px]"
    >

      {/* TEXT */}
      <div
        style={{
          fontFamily: "SF Pro Rounded, sans-serif",
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "36px",
          letterSpacing: "0.7px",
        }}
      >
        <span style={{ color: "#8948F9" }}>
          {firstWord}
        </span>{" "}
        {rest}
      </div>

      {/* NUMBER */}
      <div
        className="self-end"
        style={{
          fontFamily: "SF Pro Rounded, sans-serif",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "26px",
          letterSpacing: "0.7px",
          color: "rgba(0,0,0,0.3)",
        }}
      >
        {`0${i + 3}`}
      </div>

    </div>
  );
})}

</div>
</div>
    </section>
  );
}
/* =========================
    WHY
========================= */

if (section.type === "why") {
  return (
    <section className="mt-[60px]">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">

        {/* LEFT IMAGE */}
        <img
          src={section.image}
          className="w-full rounded-[30px]"
          alt="why"
        />

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center">

          <div
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              fontSize: "34px",
              fontWeight: 600,
              lineHeight: "38px",
              letterSpacing: "0.7px",
              color: "#8948F9",
            }}
          >
            Почему так?
          </div>

          <div className="h-[12px]" />

          <div
            style={{
              fontFamily: "SF Pro Rounded, sans-serif",
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: "28px",
              letterSpacing: "0.7px",
              color: "#000",
            }}
          >
            Я опиралась на паттерны поведения пользователей в соцсетях:
            <span style={{ color: "#8948F9" }}>
              {" "}скроллинг → быстрый просмотр → вовлечение через взаимодействие
            </span>
            <br /><br />
            Добавление социальных механик делает ленту живой и формирует привычку возвращаться в продукт.
          </div>

        </div>

      </div>

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