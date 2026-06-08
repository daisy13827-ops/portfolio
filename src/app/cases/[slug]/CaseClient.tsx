"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Footer from "@/components/site/Footer";
import Container from "@/components/site/Container";
import ScrollToTopButton from "@/components/site/ScrollToTopButton";

import { links } from "@/data/links";
import { CaseSection, getCaseNeighbors } from "@/data/cases";

/* =========================
    SOCIAL LINKS
========================= */

function SocialLinks() {
    return (
        <div className="flex flex-col items-start gap-[4px] ml-auto text-[20px] leading-[32px] tracking-[0.7px] font-semibold text-black">
  
        <a
          href={links.telegram}
          target="_blank"
          className="hover:opacity-80 transition"
          style={{
            fontFamily: "SF Pro Rounded, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            letterSpacing: "0.7px",
            color: "#000",
          }}
        >
          Telegram
        </a>
  
        <a
          href={links.linkedin}
          target="_blank"
          className="hover:opacity-80 transition"
          style={{
            fontFamily: "SF Pro Rounded, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            letterSpacing: "0.7px",
            color: "#000",
          }}
        >
          LinkedIn
        </a>
  
        <a
          href={links.dribbble}
          target="_blank"
          className="hover:opacity-80 transition"
          style={{
            fontFamily: "SF Pro Rounded, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            letterSpacing: "0.7px",
            color: "#000",
          }}
        >
          Dribbble
        </a>
  
        <a
          href={links.cv}
          target="_blank"
          className="flex items-center gap-[8px] hover:opacity-80 transition"
          style={{
            fontFamily: "SF Pro Rounded, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            letterSpacing: "0.7px",
            color: "#000",
          }}
        >
          CV
  
          <img
            src="/cv-icon.svg"
            className="w-[24px] h-[24px]"
          />
        </a>
  
      </div>
    );
  }

/* =========================
    RENDER SECTION
========================= */

function renderSection(
  section: CaseSection,
  slug: string,
  accent: string,
  cardBg: string,
) {

  /* =========================
      RESULTS
  ========================= */

  if (section.type === "results") {
    return (
      <section className="mt-[80px]">

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

        <div className="mt-[16px] grid grid-cols-1 md:grid-cols-3 gap-[40px] text-center">

          {section.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              <div
                style={{
                  fontFamily: "SF Pro Rounded, sans-serif",
                  fontSize: "34px",
                  fontWeight: 600,
                  lineHeight: "38px",
                  letterSpacing: "0.7px",
                  color: accent,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {item.label}
              </div>

              <div className="h-[20px]" />

              <div
                style={{
                  fontFamily: "SF Pro Rounded, sans-serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "32px",
                  letterSpacing: "0.7px",
                  color: "rgba(0,0,0,0.4)",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {item.description}
              </div>

            </div>
          ))}

        </div>

        <div className="mt-[60px]" />

        {section.image && (
          <img
            src={section.image}
            alt="results"
            className="w-full rounded-[30px]"
          />
        )}

      </section>
    );
  }

  /* =========================
      PROBLEM
  ========================= */

  if (section.type === "problem") {
    return (
      <section className="mt-[80px]">

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

        <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[20px] items-stretch">

          <div className="flex flex-col gap-[20px]">

            {section.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[30px] px-[28px] pb-[28px] pt-[28px] flex-1 flex flex-col justify-start"
                style={{ backgroundColor: cardBg }}
              >

                <div
                  style={{
                    fontFamily: "SF Pro Rounded, sans-serif",
                    color: accent,
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "38px",
                    letterSpacing: "0.7px",
                  }}
                >
                  {card.title}
                </div>

                <div className="h-[12px]" />

                <div
                  style={{
                    fontFamily: "SF Pro Rounded, sans-serif",
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    letterSpacing: "0.7px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.text}
                </div>

              </div>
            ))}

          </div>

          <div className="h-full">
            <img
              src={section.image}
              alt="problem-1"
              className="w-full h-full object-cover rounded-[30px]"
            />
          </div>

        </div>

        <div className="mt-[60px]" />

        {section.imageFull && (
  <img
    src={section.imageFull}
    className="w-full rounded-[30px]"
    alt="problem-2"
  />
)}

      </section>
    );
  }

  /* =========================
      CONTEXT
  ========================= */

  if (section.type === "context") {
    return (
      <section className="mt-[80px]">

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
                style={{ color: part.highlight ? accent : "#000" }}
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-[60px]" />

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
    return (
      <section className="mt-[80px]">

        <div className="flex justify-center py-[16px]">
        <h2
  className="text-[42px] font-semibold leading-[48px]"
  style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
          >
            {section.title}
          </h2>
        </div>

        <div className="mt-[16px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {section.blocks.map((block, blockIndex) => {
            const showTitle =
              block.title !== "Гипотезы" ||
              slug === "sber-post-editor" ||
              slug === "sber-feed-and-social" ||
              slug === "sber-post-entry-v2";

            return (
              <div
                key={blockIndex}
                className="rounded-[30px] p-[28px]"
                style={{ backgroundColor: cardBg }}
              >
                {showTitle && (
                  <div
                    style={{
                      fontFamily: "SF Pro Rounded, sans-serif",
                      fontSize: "32px",
                      fontWeight: 600,
                      color: accent,
                      letterSpacing: "0.7px",
                    }}
                  >
                    {block.title}
                  </div>
                )}

                <div
                  className={`flex flex-col${showTitle ? " mt-[28px]" : ""}${
                    "scenarios" in block ? " gap-[24px]" : " gap-[12px]"
                  }`}
                >
                  {"scenarios" in block &&
                    block.scenarios.map((s, i) => (
                      <div key={i}>
                        <div
                          style={{
                            fontFamily: "SF Pro Rounded, sans-serif",
                            fontSize: "22px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            letterSpacing: "0.7px",
                          }}
                        >
                          {s.text}
                        </div>

                        {s.bullets.length > 0 && (
                          <ul className="mt-[12px] flex flex-col gap-[6px]">
                            {s.bullets.map((b, idx) => (
                              <li
                                key={idx}
                                className="flex gap-[10px] items-start"
                              >
                                <div className="w-[6px] h-[6px] bg-black rounded-full mt-[10px]" />

                                <div
                                  style={{
                                    fontFamily: "SF Pro Rounded, sans-serif",
                                    fontSize: "22px",
                                    fontWeight: 600,
                                    lineHeight: "28px",
                                    letterSpacing: "0.7px",
                                  }}
                                >
                                  {b}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                  {"bullets" in block &&
                    block.bullets.map((b, i) => (
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
            );
          })}
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

        <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[0.9fr_minmax(420px,1.2fr)_0.9fr] gap-[20px] items-stretch">

          <div className="flex flex-col gap-[20px] h-full">

            {section.leftCards.map((card, i) => {
              const words = card.text.split(" ");
              const firstWord = words.shift();
              const rest = words.join(" ");
              const highlight = card.highlightPrefix ?? firstWord;
              const body = card.highlightPrefix
                ? card.text
                : rest;

              return (
                <div
                  key={i}
                  className="rounded-[30px] p-[20px] flex-1 flex justify-between gap-[8px]"
                  style={{ backgroundColor: cardBg }}
                >

                  <div
                    style={{
                      fontFamily: "SF Pro Rounded, sans-serif",
                      fontSize: "28px",
                      fontWeight: 600,
                      lineHeight: "36px",
                      letterSpacing: "0.7px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <span style={{ color: accent }}>{highlight}</span>{" "}
                    {body}
                  </div>

                  <div className="self-end text-[18px] text-black/30 font-normal">
  {`0${i + 1}`}
</div>

                </div>
              );
            })}

          </div>

          <div className="h-full flex">
  <div className="w-full rounded-[30px] overflow-hidden">
    <img
      src={section.image}
      alt="solution"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          <div className="flex flex-col gap-[20px] h-full">

            {section.rightCards.map((card, i) => {
              const words = card.text.split(" ");
              const firstWord = words.shift();
              const rest = words.join(" ");
              const highlight = card.highlightPrefix ?? firstWord;
              const body = card.highlightPrefix ? card.text : rest;

              return (
                <div
                  key={i}
                  className="rounded-[30px] p-[20px] flex-1 flex justify-between gap-[8px]"
                  style={{ backgroundColor: cardBg }}
                >

                  <div
                    style={{
                      fontFamily: "SF Pro Rounded, sans-serif",
                      fontSize: "28px",
                      fontWeight: 600,
                      lineHeight: "36px",
                      letterSpacing: "0.7px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <span style={{ color: accent }}>{highlight}</span>{" "}
                    {body}
                  </div>

                  <div className="self-end text-[18px] text-black/30 font-normal">
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
          <img
            src={section.image}
            className="w-full rounded-[30px]"
            alt="why"
          />

          <div className="flex flex-col pt-[80px] pr-[96px]">
            <div
              style={{
                fontFamily: "SF Pro Rounded, sans-serif",
                fontSize: "34px",
                fontWeight: 600,
                lineHeight: "38px",
                letterSpacing: "0.7px",
                color: accent,
              }}
            >
              {section.title}
            </div>

            <div className="h-[12px]" />

            <div
              style={{
                fontFamily: "SF Pro Rounded, sans-serif",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "36px",
                letterSpacing: "0.7px",
              }}
            >
              {section.body.map((block, blockIndex) => (
                <div
                  key={blockIndex}
                  className={block.marginTop ? "mt-[24px]" : undefined}
                >
                  {block.segments.map((segment, segmentIndex) => (
                    <span
                      key={segmentIndex}
                      style={{
                        color: segment.highlight ? accent : "#000",
                      }}
                    >
                      {segment.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

/* =========================
    MAIN
========================= */

export default function CaseClient({ currentCase }: any) {
  const router = useRouter();
  const { prev, next } = getCaseNeighbors(currentCase.slug);

  return (
    <Container className="pb-[80px]">

      {/* BACK */}
<button
  onClick={() => router.back()}
  className="mt-[28px] mb-[20px] flex items-center gap-[8px] hover:opacity-70 transition"
>

<img
  src="/icons/arrow-back.svg"
  className="w-[24px] h-[24px] scale-[1.2]"
  alt="back"
/>

  <span
    style={{
      fontFamily: "SF Pro Rounded, sans-serif",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "32px",
      letterSpacing: "0.7px",
      color: "#000",
    }}
  >
    Назад
  </span>

</button>

      {/* HEADER */}
      <section className="mt-[60px] flex justify-between items-start gap-[48px]">

        <div>
        <h1
  className="text-[42px] font-semibold text-black leading-[48px] tracking-[-0.2px]"
  style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
>
  {currentCase.title}
</h1>

<p
  className="text-[28px] font-medium text-black/40 mt-[16px] leading-[36px] tracking-[0.7px]"
  style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
>
  <span>{currentCase.company}</span>

  <span> · </span>

  {currentCase.tags?.map((tag: string, i: number) => (
  <span key={i}>
    {tag}
    {i !== currentCase.tags.length - 1 && <span> · </span>}
  </span>
))}
</p>
        </div>

        <SocialLinks />

      </section>

      {/* HERO */}
      <section className="mt-[60px]">
        <Image
          src={currentCase.heroImage}
          alt=""
          width={1600}
          height={900}
          className="rounded-[30px] w-full h-auto"
          priority
        />
      </section>

      {/* CONTENT */}
      {currentCase.sections.map((section: CaseSection, i: number) => (
        <div key={i}>
          {renderSection(
            section,
            currentCase.slug,
            currentCase.accentColor ?? "#8948F9",
            currentCase.cardBackground ?? "#F5F5F5",
          )}
        </div>
      ))}

      {/* NAVIGATION */}
      <section className="mt-[60px] mb-[60px]">
        <div className="w-full h-[124px] flex items-center justify-between px-[117px]">
          {prev ? (
            <button
              type="button"
              onClick={() => router.push(`/cases/${prev.slug}`)}
              aria-label="Предыдущий кейс"
              className="
                w-[218px]
                h-[78px]
                rounded-[30px]
                bg-[#F5F5F5]
                flex items-center justify-center
                transition-all duration-300
                hover:bg-black
                group
              "
            >
              <img
                src="/icons/arrow-left.svg"
                className="w-[32px] h-[32px] group-hover:hidden"
                alt=""
              />
              <img
                src="/icons/arrow-left-white.svg"
                className="w-[32px] h-[32px] hidden group-hover:block"
                alt=""
              />
            </button>
          ) : (
            <div className="w-[218px] h-[78px]" aria-hidden />
          )}

          <Link
            href="/"
            className="px-[32px] py-[20px] text-center hover:opacity-80 transition"
          >
            <div
              style={{
                fontFamily: "SF Pro Rounded, sans-serif",
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: "48px",
                letterSpacing: "-0.2px",
                color: "#000",
              }}
            >
              Другие проекты
            </div>

            <div
              className="mt-[8px]"
              style={{
                fontFamily: "SF Pro Rounded, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "28px",
                letterSpacing: "0.7px",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Евгении Игнатовой
            </div>
          </Link>

          {next ? (
            <button
              type="button"
              onClick={() => router.push(`/cases/${next.slug}`)}
              aria-label="Следующий кейс"
              className="
                w-[218px]
                h-[78px]
                rounded-[30px]
                bg-[#F5F5F5]
                flex items-center justify-center
                transition-all duration-300
                hover:bg-black
                group
              "
            >
              <img
                src="/icons/arrow-right.svg"
                className="w-[32px] h-[32px] group-hover:hidden"
                alt=""
              />
              <img
                src="/icons/arrow-right-white.svg"
                className="w-[32px] h-[32px] hidden group-hover:block"
                alt=""
              />
            </button>
          ) : (
            <div className="w-[218px] h-[78px]" aria-hidden />
          )}
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />

    </Container>
  );
}