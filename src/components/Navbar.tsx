
"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900/60 via-indigo-800/60 to-purple-900/60 backdrop-blur-xl border-b border-blue-400/20 shadow-lg">
      <a href="#main-content" className="sr-only focus:not-sr-only skip-to-content">Skip to content</a>
      <nav className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-extrabold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 drop-shadow-lg futuristic-logo">
            <span className="inline-block animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">K</span>ruthik
          </Link>
          <div className="hidden md:flex gap-6 text-base font-medium">
            {[
              { href: "/projects", label: "Projects" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 text-gray-100 dark:text-gray-200 transition-colors duration-200 futuristic-link"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
      <style jsx global>{`
        .futuristic-link {
          position: relative;
          overflow: hidden;
        }
        .futuristic-link:hover span:last-child {
          transform: scaleX(1);
        }
        .futuristic-link span:last-child {
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .futuristic-logo {
          letter-spacing: 0.2em;
          filter: drop-shadow(0 2px 8px #7f9cf5cc);
        }
      `}</style>
    </header>
  );
}
