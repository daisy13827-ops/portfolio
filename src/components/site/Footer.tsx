export default function Footer() {
  return (
    <footer className="p-[20px] pb-[2px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[20px]">

        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-[40px] text-[20px] leading-[32px] tracking-[0.7px] font-semibold text-black">

          <a
            href="https://t.me/ignatova_jane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            Telegram
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOLBXQUwfl2TN_KVlcw4wFkktxUOdR6qQ6bSBWgtjiK_81s7HrY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            Max
          </a>

          <a
            href="https://www.linkedin.com/in/evgeniya-i-553988a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://dribbble.com/EvgeniyaIgnatova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            Dribbble
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] hover:opacity-80 transition"
          >
            CV
            <img src="/cv-icon.svg" className="w-[18px] h-[18px]" />
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[8px] text-[20px] leading-[32px] tracking-[0.7px] font-semibold text-black">
          <span>2026</span>
          <span>©</span>
          <span>Евгения Игнатова</span>
        </div>

      </div>
    </footer>
  );
}