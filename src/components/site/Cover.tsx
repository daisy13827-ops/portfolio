import type { ReactNode } from "react";

export default function Cover({
  from,
  to,
  className = "",
  children,
}: {
  from: string;
  to: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-black/10 bg-gradient-to-br",
        className,
      ].join(" ")}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {children}
    </div>
  );
}

