"use client";

import { useEffect, useState } from "react";

import Container from "@/components/site/Container";
import ExperienceBlock from "@/components/site/ExperienceBlock";
import ProjectsCarousel from "@/components/site/ProjectsCarousel";
import Footer from "@/components/site/Footer";
import AboutMeHeader from "@/components/site/AboutMeHeader";

type CaseCardProps = {
  img: string;
  title: string;
  subtitle: string;
};

function CaseCard({ img, title, subtitle }: CaseCardProps) {
  return (
    <div className="flex flex-col w-full">
      {/* IMAGE */}
      <div className="w-full overflow-hidden rounded-[30px]">
        <img
          src={img}
          className="w-full h-auto block object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="px-[30px]">
        <h3
          className="mt-[16px] text-[20px] leading-[28px] tracking-[0.7px] font-bold text-black"
          style={{
            fontFamily:
              '"SF Pro Rounded", system-ui, -apple-system, Arial, sans-serif',
          }}
        >
          {title}
        </h3>

        <p
          className="mt-[4px] text-[18px] leading-[22px] tracking-[0.7px] font-normal text-black/40"
          style={{
            fontFamily:
              '"SF Pro Rounded", system-ui, -apple-system, Arial, sans-serif',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/** Сетка кейсов — ВСЕГДА стабильная */
function CaseGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
      {children}
    </div>
  );
}

function Spacer({ h }: { h: number }) {
  return <div style={{ height: h }} />;
}

export default function HomePage() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <AboutMeHeader />

      {/* 80 */}
      <Spacer h={80} />
      <ProjectsCarousel />

      {/* ===== SBER ===== */}
      <Spacer h={80} />

      <ExperienceBlock
        companyName="Сбер Инвестиции"
        dateRange="Сентябрь 2023 — Октябрь 2025"
        logoSrc="/cases/sber.png"
      />

      {/* 50 */}
      <Spacer h={50} />

      <CaseGrid>
        <CaseCard
          img="/cases/sber-1.png"
          title="Редизайн Сбер Инвестиции"
          subtitle="Новостная лента и социальные механики (B2C • FinTech)"
        />
        <CaseCard
          img="/cases/sber-2.png"
          title="Редизайн Сбер Инвестиции"
          subtitle="Точка входа в написание поста (B2C • FinTech)"
        />
      </CaseGrid>

      <Spacer h={50} />

      <CaseGrid>
        <CaseCard
          img="/cases/sber-3.png"
          title="Редизайн Сбер Инвестиции"
          subtitle="Редактор поста (B2C • FinTech)"
        />
        <CaseCard
          img="/cases/sber-4.png"
          title="Редизайн Сбер Инвестиции"
          subtitle="Инструмент модерации контента (B2B • FinTech)"
        />
      </CaseGrid>

      {/* ===== 80 ===== */}
      <Spacer h={80} />

      {/* ===== OTKRITIE ===== */}
      <ExperienceBlock
        companyName="Открытие Брокер"
        dateRange="Январь 2021 — Декабрь 2023"
        logoSrc="/cases/opening.png"
      />

      <Spacer h={50} />

      <div className="w-full">
  <CaseCard
    img="/cases/opening-1.png"
    title="ДОС"
    subtitle="Дистанционное открытие счета (B2C • FinTech)"
  />
</div>
      {/* ===== 80 ===== */}
      <Spacer h={80} />

      {/* ===== MTS ===== */}
      <ExperienceBlock
        companyName="MTS"
        dateRange="Июнь 2023 — Август 2023"
        logoSrc="/cases/mts.png"
      />

      <Spacer h={50} />

      <CaseGrid>
        <CaseCard
          img="/cases/mts-1.png"
          title="Цифровые продукты МТС"
          subtitle="Покупка и активация eSIM (B2C • FinTech)"
        />
        <CaseCard
          img="/cases/mts-2.png"
          title="Telegram-бот"
          subtitle="Покупка и регистрация eSIM (B2C • FinTech)"
        />
      </CaseGrid>

      <Spacer h={80} />

      <Footer />

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-[48px] h-[48px] bg-black text-white rounded-[16px]"
        >
          ↑
        </button>
      )}
    </Container>
  );
}
