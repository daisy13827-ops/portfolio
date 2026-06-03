"use client";

const fixOrphans = (text: string) => {
  return text.replace(
    / (и|в|на|с|к|у|о|об|от|до|из|за) /g,
    " $1\u00A0"
  );
};

const items = [
  {
    title: "PulseChat",
    subtitle:
      "Главный экран с диалогами и группами, разделёнными по категориям",
    image: "/cases/PulseChat.png",
    mode: "bottom" as const,
  },
  {
    title: "SyncRoom",
    subtitle:
      "Концепт приложения для видеовстреч. Панель позволяет быстро включать камеру и микрофон ",
    image: "/cases/SyncRoom.png",
    mode: "top" as const,
  },
  {
    title: "EchoTalk",
    subtitle:
      "Личный чат с акцентом на голосовые сообщения и встроенный аудиоплеер",
    image: "/cases/EchoTalk.png",
    mode: "bottom" as const,
  },
  {
    title: "Case 4",
    subtitle: "Coming soon",
    image: null,
    mode: "top" as const,
  },
];

const loopItems = [...items, ...items];

// ~0.125px/frame @ 60fps для одного полного цикла (ширина одного набора слайдов)
const MARQUEE_DURATION_S = 210;

export default function ProjectsCarousel() {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="flex w-max gap-[24px]"
        style={{
          animation: `marquee ${MARQUEE_DURATION_S}s linear infinite`,
        }}
      >
        {loopItems.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="flex h-[650px] w-[453px] shrink-0 flex-col"
          >
            <div className="flex h-[550px] overflow-hidden rounded-[30px] bg-[#EDEDED]">
              {item.image ? (
                item.mode === "top" ? (
                  <div className="flex h-full w-full items-start justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-end justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain"
                    />
                  </div>
                )
              ) : (
                <div className="h-full w-full bg-[#D9D9D9]" />
              )}
            </div>

            <div className="mt-[16px] flex flex-col gap-[4px]">
              <h3
                className="text-[20px] font-semibold leading-[28px] tracking-[0.7px] text-black"
                style={{
                  fontFamily: '"SF Pro Rounded", system-ui, sans-serif',
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-[18px] font-normal leading-[22px] tracking-[0.7px] text-black/40"
                style={{
                  fontFamily: '"SF Pro Rounded", system-ui, sans-serif',
                }}
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
