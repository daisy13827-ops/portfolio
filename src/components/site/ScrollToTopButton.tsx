"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-[40px] right-[40px]
        w-[64px] h-[64px]
        rounded-full bg-black
        flex items-center justify-center
        hover:opacity-80 transition
      "
    >
      <img
        src="/icons/arrow-up.svg"
        alt="Up"
        className="w-full h-full"
      />
    </button>
  );
}