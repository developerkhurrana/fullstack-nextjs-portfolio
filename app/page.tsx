"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BrowserFrame } from "@/components/ui/browser-frame";

const RESUME_URL = "/resume.pdf";

const STATS = [
  { value: "50+", label: "Retail partners served" },
  { value: "5", label: "Live products shipped" },
  { value: "0", label: "Handoffs, I design & build" },
];

const TOOLS = [
  "Shopify",
  "Liquid",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Figma",
  "UI/UX",
  "SEO",
];

const WORK = [
  {
    no: "01",
    name: "Ekohum",
    kind: "Shopify storefront",
    blurb:
      "A women's ethnic-wear brand on Shopify: theme in Liquid, a 260+ style catalog with collections and filters, product pages built to convert, and on-store SEO.",
    stack: "Shopify · Liquid · SEO",
    result: "260+ styles",
    href: "/work/ekohum",
    external: false,
    shot: "/shots/ekohum.jpg",
    shotLabel: "ekohum.com",
  },
  {
    no: "02",
    name: "Sparkframe",
    kind: "AI SaaS · my product",
    blurb:
      "An AI product-photography tool I designed and built solo: upload a product photo and it relights it into a studio-style shot. Next.js front end, an AI image pipeline, accounts, and billing, end to end.",
    stack: "Next.js · TypeScript · AI",
    result: "Live product",
    href: "/work/sparkframe",
    external: false,
    shot: "/shots/sparkframe.jpg",
    shotLabel: "sparkframe.in",
  },
  {
    no: "03",
    name: "Ethnics by Aravalli",
    kind: "WordPress B2B site",
    blurb:
      "A women's ethnic-wear manufacturer's website on WordPress: a brand and catalog presence, a manufacturing showcase, SEO, and a wholesale-enquiry flow that reaches retailers.",
    stack: "WordPress · SEO · Lead capture",
    result: "B2B website",
    href: "/work/aravalli",
    external: false,
    shot: "/shots/ethnics.jpg",
    shotLabel: "ethnicsbyaravalli.com",
  },
  {
    no: "04",
    name: "LedgerAI",
    kind: "Full-stack app · backend",
    blurb:
      "An expense, GST, and cash-flow tracker: authentication, a MongoDB data model, and an OpenAI-assisted workflow behind a Next.js interface.",
    stack: "Next.js · MongoDB · NextAuth · OpenAI",
    result: "Auth · DB · AI",
    href: "https://ledger-ai-kappa.vercel.app/",
    external: true,
    shot: "/shots/ledger.jpg",
    shotLabel: "ledger-ai-kappa.vercel.app",
  },
  {
    no: "05",
    name: "TSSS Real Estate",
    kind: "Frontend · property platform",
    blurb:
      "A clean, fast real-estate front end in Next.js: listings, search and filtering, and enquiry, responsive and deployed.",
    stack: "Next.js · TypeScript · UI/UX",
    result: "Live",
    href: "https://tsss-realestate.vercel.app",
    external: true,
    shot: "/shots/tsss.jpg",
    shotLabel: "tsss-realestate.vercel.app",
  },
];

const APPROACH = [
  {
    label: "Shopify & e-commerce",
    body: "Shopify storefronts for apparel and lifestyle brands: themes in Liquid, collections, product pages, merchandising, and SEO.",
    cta: "Ekohum case study",
    href: "/work/ekohum",
  },
  {
    label: "Full-stack engineering",
    body: "End-to-end web apps in Next.js, TypeScript, and MongoDB: UI, APIs, databases, and auth that fit together.",
    cta: "See the builds",
    href: "/coding",
  },
  {
    label: "UI/UX & graphic design",
    body: "Brand systems, interface design, and visual work in Figma, the design behind the build.",
    cta: "Design & visual work",
    href: "/projects",
  },
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1b1714]">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-28 pb-16 sm:pt-32 sm:pb-24">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fade}
            className="flex items-center gap-2.5 text-sm text-[#6b635a]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1f9d55] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1f9d55]" />
            </span>
            Available for new projects · Jaipur, India
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-8 max-w-4xl text-[12.5vw] font-normal leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-[5.25rem]"
          >
            <span className="italic text-[#b2532e]">Shopify</span> &amp;
            <br />
            Full-Stack
            <br />
            Developer.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#56504a]"
          >
            I build Shopify storefronts for apparel brands, end-to-end web apps
            in Next.js and TypeScript, and the UI/UX and graphic design behind
            them. Based in Jaipur, working with brands and teams anywhere.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Link
              href="/work/ekohum"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1b1714] px-6 py-3 text-sm font-medium text-[#faf8f4] tactile"
            >
              See the Ekohum Shopify case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 text-sm text-[#6b635a] transition-colors hover:text-[#1b1714]"
            >
              All work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Kshitij-Khurrana-Resume.pdf"
              className="group inline-flex items-center gap-2 text-sm text-[#6b635a] underline decoration-[#1b1714]/20 underline-offset-4 transition-colors hover:text-[#1b1714] hover:decoration-[#1b1714]"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
          </motion.div>
        </section>

        {/* Stats + tools */}
        <section className="grid gap-10 border-y border-[#1b1714]/10 py-10 sm:grid-cols-[1.4fr_1fr]">
          <dl className="grid grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-3xl font-medium tabular-nums tracking-tight sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-[#6b635a]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="sm:border-l sm:border-[#1b1714]/10 sm:pl-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
              Toolkit
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-[#56504a]">
              {TOOLS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="scroll-mt-20 py-20 sm:py-28">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-normal tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <Link
              href="/coding"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#857b72] transition-colors hover:text-[#1b1714]"
            >
              All work →
            </Link>
          </div>

          <div className="mt-10 border-t border-[#1b1714]/10">
            {WORK.map((w, i) => {
              const Row = (
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fade}
                  className="group border-b border-[#1b1714]/10 py-8 sm:py-9"
                >
                  <div className="grid gap-5 sm:grid-cols-[1fr_280px] sm:items-center sm:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="font-mono text-xs tabular-nums text-[#9a9087]">
                          {w.no}
                        </span>
                        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-normal tracking-tight sm:text-[1.7rem]">
                          {w.name}
                        </h3>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9a9087]">
                          {w.kind}
                        </span>
                        <span className="rounded-full bg-[#b2532e]/10 px-2.5 py-0.5 text-xs font-medium text-[#8f3f1f]">
                          {w.result}
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#56504a]">
                        {w.blurb}
                      </p>
                      <p className="mt-3 font-mono text-xs text-[#857b72]">
                        {w.stack}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-[#6b635a] transition-colors group-hover:text-[#1b1714]">
                        {w.external ? "Visit site" : "Read case study"}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="order-first sm:order-none">
                      <BrowserFrame
                        src={w.shot}
                        alt={`${w.name} screenshot`}
                        label={w.shotLabel}
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                    </div>
                  </div>
                </motion.div>
              );
              return w.external ? (
                <a
                  key={w.name}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Row}
                </a>
              ) : (
                <Link key={w.name} href={w.href} className="block">
                  {Row}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-[#1b1714]/10 py-20 sm:py-28">
          <div className="grid gap-12 sm:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
                Approach
              </p>
              <p className="mt-5 font-[family-name:var(--font-serif)] text-2xl font-normal leading-snug tracking-tight sm:text-[1.9rem]">
                One person, the whole arc, so the work stays coherent instead of
                lost in handoffs.
              </p>
            </div>
            <dl className="divide-y divide-[#1b1714]/10 border-t border-[#1b1714]/10">
              {APPROACH.map((d) => (
                <div
                  key={d.label}
                  className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-sm uppercase tracking-[0.08em] text-[#b2532e]">
                    {d.label}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-[#56504a]">
                    {d.body}
                    <Link
                      href={d.href}
                      className="group mt-2 flex w-fit items-center gap-1 text-sm font-medium text-[#1b1714] underline decoration-[#1b1714]/20 underline-offset-4 transition-colors hover:decoration-[#1b1714]"
                    >
                      {d.cta}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
