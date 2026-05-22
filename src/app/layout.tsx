import type { Metadata } from "next";
import "./globals.css";
import { wedding } from "@/config/wedding";

const { groom, bride, date, venue, ogImage } = wedding;
const title = `${groom.name} ♥ ${bride.name}`;
const description = `${date.year}년 ${date.month}월 ${date.day}일 ${date.dayOfWeek} ${date.hour}시 ${venue.name}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://your-wedding-url.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
