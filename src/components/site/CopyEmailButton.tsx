"use client";

import { useState } from "react";

export default function CopyEmailButton({
  email,
}: {
  email: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // If clipboard is blocked, fall back to mail client via normal link.
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-white hover:shadow-sm"
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}

