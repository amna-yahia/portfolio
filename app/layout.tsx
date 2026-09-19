import type { Metadata } from "next";
import { Fraunces, Karla, Shrikhand, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
});

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Amna Yahia — Frontend Engineer",
  description:
    "Just a girl who builds any UI you can imagine. Frontend engineer on AI platforms — React, Next.js, TypeScript. Cheetah print over minimalism, always.",
  openGraph: {
    title: "Amna Yahia — Frontend Engineer",
    description: "Just a girl who builds any UI you can imagine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${karla.variable} ${shrikhand.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
