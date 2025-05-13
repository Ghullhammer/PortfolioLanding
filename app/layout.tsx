import type { Metadata } from "next";
import { Geist, Geist_Mono, Martian_Mono, Monomaniac_One, Fira_Code } from "next/font/google";
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

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Lab4-5: Portfolio",
  description: "Programmer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${martianMono.variable} ${monomaniacOne.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
