"use client";

import { useEffect, useRef } from "react";

const fixOrphans = (text: string) => {
  return text.replace(
    / (и|в|на|с|к|у|о|об|от|до|из|за) /g,
    " $1\u00A0"
  );
};

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: "PulseChat",
      subtitle:
        "Главный экран с диалогами и группами, разделёнными по категориям",
      image: "/cases/PulseChat.png",
      mode: "bottom",
    },
    {
      title: "SyncRoom",
      subtitle:
        "Концепт приложения для видеовстреч. Панель позволяет быстро включать камеру и микрофон ",
      image: "/cases/SyncRoom.png",
      mode: "top",
    },
    {
      title: "EchoTalk",
      subtitle:
        "Личный чат с акцентом на голосовые сообщения и встроенный аудиоплеер",
      image: "/cases/EchoTalk.png",
      mode: "bottom",
    },
    {
      title: "Case 4",
      subtitle: "Coming soon",
      image: null,
      mode: "top",
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    const speed = 0.25;

    const loop = () => {
      if (!el) return;

      el.scrollLeft += speed;

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="w-full">
      
      {/* 🔥 ВАЖНО: ТОЛЬКО overflow-x-auto */}
      <div
        ref={scrollRef}
        className="flex gap-[24px] overflow-x-auto scrollbar-hide"
      >

        {items.map((item, i) => (
          <div
            key={item.title + i}
            className="flex flex-col shrink-0 w-[453px] h-[650px]"
          >
            {/* IMAGE */}
            <div className="h-[550px] rounded-[30px] bg-[#EDEDED] overflow-hidden flex">
              {item.image ? (
                item.mode === "top" ? (
                  <div className="w-full h-full flex items-start justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-end justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain"
                    />
                  </div>
                )
              ) : (
                <div className="w-full h-full bg-[#D9D9D9]" />
              )}
            </div>

            {/* TEXT */}
            <div className="mt-[16px] flex flex-col gap-[4px]">
              <h3
                className="text-[20px] leading-[28px] tracking-[0.7px] font-semibold text-black"
                style={{ fontFamily: '"SF Pro Rounded", system-ui, sans-serif' }}
              >
                {item.title}
              </h3>

              <p
                className="text-[18px] leading-[22px] tracking-[0.7px] font-normal text-black/40"
                style={{ fontFamily: '"SF Pro Rounded", system-ui, sans-serif' }}
              >
                {fixOrphans(item.subtitle)}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}