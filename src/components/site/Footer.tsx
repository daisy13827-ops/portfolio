export default function Footer() {
  return (
    <footer className="mt-[120px] border-t border-black/10 pt-[32px] pb-[48px]">
      <div className="flex items-center justify-between">

        {/* LEFT */}
        <div className="flex gap-[16px] text-[16px] text-black">

          <a
            href="https://t.me/ignatova_jane"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOLBXQUwfl2TN_KVlcw4wFkktxUOdR6qQ6bSBWgtjiK_81s7HrY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Max
          </a>

          <a
            href="https://www.linkedin.com/in/evgeniya-i-553988a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://dribbble.com/EvgeniyaIgnatova"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>

          {/* CV + icon */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px]"
          >
            <span>CV</span>
            <img src="/cv-icon.svg" className="w-[18px] h-[18px]" />
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[8px] text-[16px] text-black">
          <span>2026</span>
          <span>©</span>
          <span>Евгения Игнатова</span>
        </div>

      </div>
    </footer>
  );
}