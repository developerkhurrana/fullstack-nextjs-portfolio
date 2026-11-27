"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BrowserFrame } from "@/components/ui/browser-frame";

const SHOTS: Record<string, { src: string; label: string }> = {
  "Ethnics by Aravalli": {
    src: "/shots/ethnics.jpg",
    label: "ethnicsbyaravalli.com",
  },
  Ekohum: { src: "/shots/ekohum.jpg", label: "ekohum.com" },
  Sparkframe: { src: "/shots/sparkframe.jpg", label: "sparkframe.in" },
  "Jai Bhairav Baba Tour & Travels": {
    src: "/shots/jbb.jpg",
    label: "jaibhairavbaba.com",
  },
  "TSSS Real Estate Platform": {
    src: "/shots/tsss.jpg",
    label: "tsss-realestate.vercel.app",
  },
  LedgerAI: { src: "/shots/ledger.jpg", label: "ledger-ai-kappa.vercel.app" },
};

const primaryHref = (p: Project) =>
  p.caseStudy || p.demo || p.sites?.[0]?.url || "#";

type Project = {
  title: string;
  kind?: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  caseStudy?: string;
  result?: string;
  sites?: { label: string; url: string }[];
};

const featured: Project[] = [
  {
    title: "Ekohum",
    kind: "Shopify storefront",
    description:
      "Shopify storefront for a women's ethnic-wear brand: theme in Liquid, a 260+ style catalog with collections and filters, product pages built to convert, and on-store SEO.",
    tech: ["Shopify", "Liquid", "SEO"],
    caseStudy: "/work/ekohum",
    result: "260+ styles",
    sites: [
      { label: "ekohum.com", url: "https://ekohum.com" },
      { label: "ekohum.in", url: "https://ekohum.in" },
    ],
  },
  {
    title: "Sparkframe",
    kind: "AI SaaS · my product",
    description:
      "An AI product-photography tool I designed and built solo: upload a product photo and it cuts the background, relights it like a studio shot, and places it in a scene. Next.js and TypeScript front end, an AI image pipeline, and accounts, tiered plans, and billing, all end to end.",
    tech: ["Next.js", "TypeScript", "AI image pipeline", "Auth & billing"],
    caseStudy: "/work/sparkframe",
    result: "Live product",
    sites: [{ label: "sparkframe.in", url: "https://sparkframe.in" }],
  },
  {
    title: "Ethnics by Aravalli",
    kind: "WordPress B2B site",
    description:
      "Website for a Jaipur women's ethnic-wear manufacturer, built on WordPress: a brand and catalog presence, a manufacturing showcase with workshop films and a buyer's guide, on-site SEO, and a wholesale 'Request Catalogue' enquiry flow.",
    tech: ["WordPress", "SEO", "Responsive design"],
    caseStudy: "/work/aravalli",
    result: "B2B website",
    sites: [
      { label: "ethnicsbyaravalli.com", url: "https://ethnicsbyaravalli.com" },
    ],
  },
  {
    title: "Jai Bhairav Baba Tour & Travels",
    kind: "Travel booking site",
    description:
      "Online presence for a Jaipur car-rental and tours business: 60+ programmatic 'Jaipur to X' route pages, a fleet and services catalogue, and a WhatsApp enquiry flow in place of online checkout.",
    tech: ["Next.js", "TypeScript", "Programmatic SEO"],
    demo: "https://jaibhairavbaba.com",
    result: "60+ route pages",
  },
  {
    title: "TSSS Real Estate Platform",
    kind: "Property platform",
    description:
      "Full-stack real estate website with property listings, search, and a lead-generation system. Increased web traffic by 80% and qualified leads by 30%.",
    tech: ["Next.js", "React", "UI/UX", "SEO"],
    demo: "https://tsss-realestate.vercel.app/",
    result: "+80% traffic",
  },
  {
    title: "LedgerAI",
    kind: "AI finance tool",
    description:
      "AI-powered expense, GST, and cash flow tracker for Indian small businesses.",
    tech: ["Next.js", "TypeScript", "MongoDB", "OpenAI"],
    demo: "https://ledger-ai-kappa.vercel.app/",
    github: "https://github.com/developerkhurrana/LedgerAi",
  },
];

const builds: Project[] = [
  {
    title: "LinkedIn Clone",
    description:
      "A full-featured LinkedIn clone with authentication, posts, and real-time updates.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    demo: "https://linkedin-clone-seven-ivory.vercel.app/",
    github: "https://github.com/developerkhurrana/linkedin-clone/tree/main",
  },
  {
    title: "Fullstack MERN Clone X",
    description: "A full-stack social app built with the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "https://fullstack-mern-clone-x.onrender.com/",
    github:
      "https://github.com/developerkhurrana/fullstack-mern-clone-x/tree/main",
  },
  {
    title: "Fullstack MERN Chat App",
    description: "A full-stack realtime chat application on the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "https://fullstack-mern-chat-app.onrender.com/",
    github:
      "https://github.com/developerkhurrana/fullstack-mern-chat-app/tree/main",
  },
  {
    title: "Travel App",
    description:
      "A responsive travel application for exploring destinations and planning trips.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://travel-app-iota-eosin.vercel.app/",
    github: "https://github.com/developerkhurrana/travel_app/tree/main",
  },
  {
    title: "Nike Web",
    description: "A responsive product landing experience for Nike.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://nikeweb-murex.vercel.app/",
    github: "https://github.com/developerkhurrana/nikeweb/tree/main",
  },
  {
    title: "Netflix Clone",
    description: "A responsive streaming UI clone with auth.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://netflix-clone-dk.vercel.app/auth",
    github: "https://github.com/developerkhurrana/netflix-clone-dk/tree/main",
  },
  {
    title: "Amazon Deploy",
    description: "A responsive storefront UI for Amazon services.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://amazon-deploy-lovat.vercel.app/",
    github: "https://github.com/developerkhurrana/amazon-deploy/tree/main",
  },
  {
    title: "Fun Elon",
    description: "A playful interactive single-page build.",
    tech: ["React", "Vite", "Tailwind"],
    demo: "https://fun-elon.vercel.app/",
    github: "https://github.com/developerkhurrana/fun-elon/tree/main",
  },
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Coding() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1b1714]">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <PageHeader
          eyebrow="Engineering"
          title="Code & builds"
          description="Custom e-commerce platforms, Shopify storefronts, and full-stack apps, from live client work to builds that sharpened the craft."
        />

        {/* Featured / client work as editorial rows */}
        <section className="mt-16 border-t border-[#1b1714]/10">
          {featured.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              className="border-b border-[#1b1714]/10 py-9"
            >
              <div className="grid gap-6 sm:grid-cols-[1fr_300px] sm:gap-10">
                <div className="order-2 sm:order-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="font-mono text-xs tabular-nums text-[#9a9087]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl font-normal tracking-tight sm:text-[1.7rem]">
                      {p.title}
                    </h3>
                  {p.kind && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9a9087]">
                      {p.kind}
                    </span>
                  )}
                  {p.result && (
                    <span className="rounded-full bg-[#b2532e]/10 px-2.5 py-0.5 text-xs font-medium text-[#8f3f1f]">
                      {p.result}
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#56504a]">
                  {p.description}
                </p>
                <p className="mt-3 font-mono text-xs text-[#857b72]">
                  {p.tech.join(" · ")}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {p.caseStudy && (
                    <Link
                      href={p.caseStudy}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1b1714] underline decoration-[#1b1714]/25 underline-offset-4 transition-colors hover:decoration-[#1b1714]"
                    >
                      Read case study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {p.sites?.map((site) => (
                    <a
                      key={site.url}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#b2532e] transition-colors hover:text-[#8f3f1f]"
                    >
                      {site.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#b2532e] transition-colors hover:text-[#8f3f1f]"
                    >
                      Live site
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#6b635a] transition-colors hover:text-[#1b1714]"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}
                </div>
                </div>
                {SHOTS[p.title] && (
                  <a
                    href={primaryHref(p)}
                    target={primaryHref(p).startsWith("http") ? "_blank" : undefined}
                    rel={
                      primaryHref(p).startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`View ${p.title}`}
                    className="order-1 self-start transition-transform duration-150 ease-out hover:-translate-y-0.5 sm:order-2"
                  >
                    <BrowserFrame
                      src={SHOTS[p.title].src}
                      alt={`${p.title} screenshot`}
                      label={SHOTS[p.title].label}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </section>

        {/* Builds & experiments, a tighter list */}
        <section className="mt-20">
          <div className="flex items-baseline justify-between border-b border-[#1b1714]/10 pb-4">
            <h2 className="text-2xl font-normal tracking-tight">
              Builds & experiments
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
              Full-stack · UI clones
            </span>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {builds.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fade}
                className="border-b border-[#1b1714]/10 py-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-[#1b1714]">
                    {p.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-3 pt-0.5">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live demo`}
                        className="text-[#9a9087] transition-colors hover:text-[#b2532e]"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} code`}
                        className="text-[#9a9087] transition-colors hover:text-[#1b1714]"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6b635a]">
                  {p.description}
                </p>
                <p className="mt-2 font-mono text-[11px] text-[#9a9087]">
                  {p.tech.join(" · ")}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
