import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import "@fontsource/cantarell/latin.css";
import "@fontsource/jetbrains-mono/latin.css";

export const metadata: Metadata = {
  title: {
    default: "Kruthik S | Portfolio",
    template: "%s | Kruthik S",
  },
  description: "Portfolio of Kruthik S – Full-stack, Cloud, DevOps, and AI projects.",
  openGraph: {
    title: "Kruthik S | Portfolio",
    description: "Portfolio of Kruthik S – Full-stack, Cloud, DevOps, and AI projects.",
    url: "https://kruth-s.github.io/",
    siteName: "Kruthik S Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/213943793?v=4",
        width: 400,
        height: 400,
        alt: "Kruthik S Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
