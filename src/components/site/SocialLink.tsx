import type { ReactNode } from "react";

export default function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-gray-900"
    >
      <span
        aria-hidden="true"
        className="flex h-4 w-4 items-center justify-center rounded-md border border-black/10 bg-white/70 text-[10px] text-gray-600"
      >
        {icon ?? label.slice(0, 1)}
      </span>
      <span>{label}</span>
    </a>
  );
}

