"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const facts = [
  { label: "Role", value: "Founder — design, dev & marketing" },
  { label: "Studio", value: "Aravalli Designs" },
  { label: "Build", value: "Custom Next.js + Shopify" },
  { label: "Services", value: "Design · Development · SMM" },
];

// Real figures from the work — no invented numbers.
const stats = [
  { value: "50+", label: "Retail partners served" },
  { value: "70%", label: "Faster order processing" },
  { value: "20+ hrs", label: "Saved every week" },
];

const results = [
  "50+ retail partners onboarded to the B2B platform, with automated order processing and real-time inventory.",
  "80% of manual paperwork eliminated through a Google Sheets → PDF invoicing pipeline.",
  "70% faster order processing — roughly 20+ hours saved every week.",
  "95% mobile responsiveness and 40% faster load times via code splitting, lazy loading, and image optimization.",
  "Ekohum grew +45% Instagram engagement and +200 followers through data-driven social marketing.",
  "SEO and structured data improved organic search rankings and user acquisition.",
];

const sites = [
  { label: "ethnicsbyaravalli.com", url: "https://ethnicsbyaravalli.com" },
  { label: "ekohum.com", url: "https://ekohum.com" },
  { label: "ekohum.in", url: "https://ekohum.in" },
  { label: "aravallidesigns.com", url: "https://aravallidesigns.com" },
];

const stack = [
  "Next.js 14",
  "TypeScript",
  "MongoDB",
  "Google Sheets API",
  "Shopify",
  "Liquid",
  "Meta Ads",
  "SEO",
  "Figma",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/10 py-12"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 max-w-2xl space-y-4 text-neutral-300">{children}</div>
    </motion.section>
  );
}

export default function AravalliCaseStudy() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
        <Link
          href="/coding"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            Case study
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Aravalli Designs
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
            My studio for ethnic-wear e-commerce — a custom-built B2B platform
            (Ethnics by Aravalli) and a Shopify D2C brand (Ekohum), each designed,
            built, and marketed end to end.
          </p>
        </div>

        {/* Fact strip */}
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/10 py-8 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-white">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>

        <Section eyebrow="Overview" title="One studio, two commerce models">
          <p>
            Aravalli Designs is my studio for building and growing ethnic-wear
            e-commerce. It runs two very different products:{" "}
            <strong>Ethnics by Aravalli</strong>, a custom-coded{" "}
            <span className="whitespace-nowrap">B2B</span> wholesale platform for
            retailers, and <strong>Ekohum</strong>, a{" "}
            <span className="whitespace-nowrap">D2C</span> brand on Shopify sold
            directly to shoppers.
          </p>
          <p>
            Both are designed, built, and marketed by the same hands — so the
            brand system, the storefront experience, and the marketing stay
            coherent instead of being handed off between a designer, a developer,
            and an agency.
          </p>
        </Section>

        <Section
          eyebrow="The challenge"
          title="Two audiences, two very different builds"
        >
          <p>
            Retailers and end-shoppers need opposite things. Wholesale buyers
            need bulk ordering, inventory visibility, and paperwork that
            doesn&apos;t eat the day. Retail shoppers need a fast, trustworthy
            storefront and a reason to come back.
          </p>
          <p>
            One person had to deliver both — a bespoke platform for the B2B side
            and a polished, well-marketed Shopify store for the D2C side — and
            keep them both moving.
          </p>
        </Section>

        <Section eyebrow="What I did" title="Design, build, and grow">
          <ul className="space-y-4">
            {[
              ["B2B platform (Ethnics by Aravalli)", "Architected and shipped a full-stack e-commerce platform on Next.js 14, TypeScript, and MongoDB for 50+ retail partners, with automated order processing and real-time inventory."],
              ["Order automation", "Built a Google Sheets → PDF invoicing pipeline that removed 80% of manual paperwork and cut order processing time 70% — about 20+ hours saved a week."],
              ["Shopify D2C (Ekohum)", "Designed and built the Ekohum storefront on Shopify (Liquid), then ran the social media marketing that grew it (+45% engagement, +200 followers)."],
              ["Performance & SEO", "Tuned to a 95% mobile score and 40% faster loads with code splitting, lazy loading, and image optimization, plus structured data for organic search."],
            ].map(([h, b]) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" />
                <span>
                  <strong className="text-white">{h}.</strong>{" "}
                  <span className="text-neutral-300">{b}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Results" title="The numbers">
          <ul className="space-y-4">
            {results.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" />
                <span className="text-neutral-300">{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Stack & services" title="Tools behind the work">
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Visit the stores */}
        <div className="border-t border-white/10 py-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            Visit the stores
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                <span className="font-medium text-white">{site.label}</span>
                <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-400" />
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
