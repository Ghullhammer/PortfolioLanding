import type { Metadata } from "next";
import { Geist, Geist_Mono, Martian_Mono, Monomaniac_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const monomaniacOne = Monomaniac_One({
  variable: "--font-monomaniac-one",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Lab4: Portfolio",
  description: "Programmer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${martianMono.variable} ${monomaniacOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
