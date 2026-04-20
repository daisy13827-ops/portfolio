export default function Footer() {
    return (
      <footer className="mt-[120px] border-t border-black/10 pt-[32px] pb-[48px]">
        <div className="flex items-center justify-between">
  
          {/* LEFT */}
          <div className="flex gap-[16px] text-[16px] text-black">
            <a href="#">Telegram</a>
            <a href="#">Max</a>
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
            <a href="#">CV</a>
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