"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Work", link: "/projects" },
  { name: "Coding", link: "/coding" },
  { name: "Design", link: "/design" },
  { name: "About", link: "/about" },
];

const RESUME_URL = "/resume.pdf";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[#1b1714]/10 bg-[#faf8f4]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight text-[#1b1714]"
          aria-label="Home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#1b1714]/20 text-[12px] font-semibold transition-colors group-hover:border-[#b2532e]/60">
            KK
          </span>
          <span className="hidden sm:inline">Kshitij Khurrana</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                isActive(item.link)
                  ? "text-[#1b1714]"
                  : "text-[#6b635a] hover:text-[#1b1714]"
              )}
            >
              {isActive(item.link) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-[#1b1714]/[0.06]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-[#1b1714]/25 px-4 py-2 text-sm font-medium text-[#1b1714] tactile transition-colors hover:border-[#1b1714] hover:bg-[#1b1714] hover:text-[#faf8f4]"
          >
            Résumé
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-[#1b1714]/15 text-[#1b1714] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#1b1714]/10 bg-[#faf8f4]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base transition-colors",
                    isActive(item.link)
                      ? "bg-[#1b1714]/[0.06] text-[#1b1714]"
                      : "text-[#56504a] hover:bg-[#1b1714]/[0.04] hover:text-[#1b1714]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1b1714] px-4 py-3 text-base font-medium text-[#faf8f4]"
              >
                Résumé
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
