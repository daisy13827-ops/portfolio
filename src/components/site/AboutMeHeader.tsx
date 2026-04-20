export default function AboutMeHeader() {
  return (
    <section aria-label="About Me" className="w-full">

      {/* TOP ROW */}
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 rounded-[16px] overflow-hidden border border-black/10">
          <img
            src="/avatar.jpg"
            className="h-full w-full object-cover"
            alt="avatar"
          />
        </div>

        <div className="text-[28px] leading-[32px] tracking-[0.3px] text-black flex flex-col font-semibold text-left">
          <span>Евгения</span>
          <span>Игнатова</span>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="mt-[80px] flex flex-col md:flex-row items-start gap-[48px]">

        {/* LEFT TEXT */}
        <div className="flex flex-col text-black max-w-[820px] text-left">
          <p className="text-[42px] leading-[48px] tracking-[-0.2px] font-semibold">
            Продуктовый дизайнер
          </p>
          <p className="text-[42px] leading-[48px] tracking-[-0.2px] font-semibold">
            6 лет опыта в FinTech, Telecom
          </p>
          <p className="text-[42px] leading-[48px] tracking-[-0.2px] font-semibold">
            и внутренних корпоративных продуктах
          </p>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex flex-col gap-[4px] items-start text-left font-semibold">

          <a className="text-[20px] leading-[32px] tracking-[0.7px] text-black hover:opacity-80">
            Telegram
          </a>

          <a className="text-[20px] leading-[32px] tracking-[0.7px] text-black hover:opacity-80">
            LinkedIn
          </a>

          <a className="text-[20px] leading-[32px] tracking-[0.7px] text-black hover:opacity-80">
            Dribbble
          </a>

          <a className="flex items-center gap-[4px] text-[20px] leading-[32px] tracking-[0.7px] text-black hover:opacity-80">
            <span>CV</span>
            <img src="/cv-icon.svg" alt="CV icon" className="w-[24px] h-[24px]" />
          </a>

        </div>

      </div>
    </section>
  );
}