import type { ReactNode } from "react";

export default function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

