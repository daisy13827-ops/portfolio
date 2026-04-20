"use client";

import { useEffect, useState } from "react";

import Container from "@/components/site/Container";
import SocialLink from "@/components/site/SocialLink";
import ProjectsGrid from "@/components/site/ProjectsGrid";
import ExperienceBlock from "@/components/site/ExperienceBlock";
import ProjectsCarousel from "@/components/site/ProjectsCarousel";
import Footer from "@/components/site/Footer";
import AboutMeHeader from "@/components/site/AboutMeHeader";

export default function HomePage() {
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>

      <AboutMeHeader />
      <ProjectsCarousel />

      {/* SBER */}
      <section className="mt-[80px]">
        <ExperienceBlock
          companyName="Сбер Инвестиции"
          dateRange="Сентябрь 2023 — Октябрь 2025"
        />

        <div className="mt-[32px] grid grid-cols-1 gap-[24px] md:grid-cols-2">

          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[140px] rounded-xl bg-black/5" />
            <h3 className="mt-3 font-semibold">Редизайн Сбер Инвестиции</h3>
            <p className="text-sm text-black/60">
              Новостная лента и социальные механики
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[140px] rounded-xl bg-black/5" />
            <h3 className="mt-3 font-semibold">Редактор поста</h3>
            <p className="text-sm text-black/60">FinTech UX</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[140px] rounded-xl bg-black/5" />
            <h3 className="mt-3 font-semibold">Точка входа</h3>
            <p className="text-sm text-black/60">FinTech UX</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[140px] rounded-xl bg-black/5" />
            <h3 className="mt-3 font-semibold">Модерация контента</h3>
            <p className="text-sm text-black/60">B2B система</p>
          </div>

        </div>
      </section>

      {/* OTKRITIE */}
      <section className="mt-[80px]">
        <ExperienceBlock
          companyName="Открытие Брокер"
          dateRange="Январь 2021 — Декабрь 2023"
        />

        <div className="mt-[32px]">
          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[220px] w-full rounded-xl bg-black/5" />
            <h3 className="mt-4 text-lg font-semibold">ДОС</h3>
            <p className="text-sm text-black/60">
              Дистанционное открытие счета
            </p>
          </div>
        </div>
      </section>

      {/* MTS */}
      <section className="mt-[80px]">
        <ExperienceBlock
          companyName="MTS"
          dateRange="Июнь 2023 — Август 2023"
        />

        <div className="mt-[32px] grid grid-cols-1 gap-[24px] md:grid-cols-2">

          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[140px] rounded-xl bg-black/5" />
            <h3 className="mt-3 font-semibold">eSIM продукт</h3>
            <p className="text-sm text-black/60">B2C продукт</p>
          </div>

          <div className="rounded-2xl border border-black/10 p-4">
            <div className="h-[140px] rounded-xl bg-black/5" />
            <h3 className="mt-3 font-semibold">Telegram-бот</h3>
            <p className="text-sm text-black/60">Регистрация eSIM</p>
          </div>

        </div>
      </section>

      <Footer />

      {/* TOP BUTTON */}
      {showTopButton && (
        <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 flex items-center justify-center w-[48px] h-[48px] p-[8px] bg-black text-white border border-black rounded-[16px]
        transition-all duration-500 ease-out
        ${showTopButton ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95 pointer-events-none"}`}
      >
        ↑
      </button>
      )}

    </Container>
  );
}