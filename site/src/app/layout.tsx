import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adhithi C Iyer",
  description:
    "AI/ML engineer, systems builder, and published researcher. Portfolio of Adhithi C Iyer — sensor fusion, applied ML, multi-agent AI systems, and systems programming.",
  keywords: [
    "Adhithi C Iyer",
    "portfolio",
    "AI/ML engineer",
    "systems engineer",
    "researcher",
    "IEEE Access",
    "ICSE",
    "RVCE",
  ],
  openGraph: {
    title: "Adhithi C Iyer",
    description:
      "AI/ML engineer, systems builder, and published researcher. Sensor fusion, applied ML, multi-agent AI systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhithi C Iyer",
    description:
      "AI/ML engineer, systems builder, and published researcher.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
