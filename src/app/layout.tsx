import { sfRounded } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ignatova Evgenia - Product Designer",
    template: "%s - Ignatova Evgenia",
  },
  description:
    "A minimal, modern product design portfolio featuring case studies by company.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={sfRounded.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}

