"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BrowserFrame } from "@/components/ui/browser-frame";

const facts = [
  { label: "Role", value: "Full-Stack Developer & UI/UX Designer" },
  { label: "Company", value: "Aravalli Designs" },
  { label: "Build", value: "Custom Next.js + Shopify" },
  { label: "Services", value: "Design · Development · SMM" },
];

// Real figures from the work, no invented numbers.
const stats = [
  { value: "50+", label: "Retail partners served" },
  { value: "70%", label: "Faster order processing" },
  { value: "20+ hrs", label: "Saved every week" },
];

const results = [
  "50+ retail partners onboarded to the B2B platform, with automated order processing and real-time inventory.",
  "80% of manual paperwork eliminated through a Google Sheets → PDF invoicing pipeline.",
  "70% faster order processing, roughly 20+ hours saved every week.",
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
      className="border-t border-[#1b1714]/10 py-12"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b2532e]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 max-w-2xl space-y-4 text-[#56504a]">{children}</div>
    </motion.section>
  );
}

export default function AravalliCaseStudy() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1b1714]">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
        <Link
          href="/coding"
          className="inline-flex items-center gap-1.5 text-sm text-[#6b635a] transition-colors hover:text-[#1b1714]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b2532e]">
            Case study
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Aravalli Designs
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b635a]">
            The ethnic-wear e-commerce company I build for, a custom B2B
            platform (Ethnics by Aravalli) and a Shopify D2C brand (Ekohum),
            which I design, build, and market end to end.
          </p>
        </div>

        {/* Fact strip */}
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[#1b1714]/10 py-8 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs uppercase tracking-wide text-[#857b72]">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-[#1b1714]">
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
              className="rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] p-5"
            >
              <div className="font-mono text-2xl font-semibold tabular-nums tracking-tight text-[#1b1714] sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-[#857b72]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The two products */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div>
            <BrowserFrame
              src="/shots/ethnics.jpg"
              alt="Ethnics by Aravalli wholesale storefront"
              label="ethnicsbyaravalli.com"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <p className="mt-3 text-sm text-[#857b72]">
              Ethnics by Aravalli, the custom B2B platform.
            </p>
          </div>
          <div>
            <BrowserFrame
              src="/shots/ekohum.jpg"
              alt="Ekohum D2C storefront on Shopify"
              label="ekohum.com"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <p className="mt-3 text-sm text-[#857b72]">
              Ekohum, the D2C brand on Shopify.
            </p>
          </div>
        </div>

        <Section eyebrow="Overview" title="One company, two commerce models">
          <p>
            Aravalli Designs is an ethnic-wear e-commerce company. It runs two
            very different products:{" "}
            <strong>Ethnics by Aravalli</strong>, a custom-coded{" "}
            <span className="whitespace-nowrap">B2B</span> wholesale platform for
            retailers, and <strong>Ekohum</strong>, a{" "}
            <span className="whitespace-nowrap">D2C</span> brand on Shopify sold
            directly to shoppers.
          </p>
          <p>
            As the developer and designer behind both, I build every side, the
            brand system, the storefront experience, and the marketing, so they
            stay coherent instead of being handed off between a designer, a
            developer, and an agency.
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
            One person had to deliver both, a bespoke platform for the B2B side
            and a polished, well-marketed Shopify store for the D2C side, and
            keep them both moving.
          </p>
        </Section>

        <Section eyebrow="What I did" title="Design, build, and grow">
          <ul className="space-y-4">
            {[
              ["B2B platform (Ethnics by Aravalli)", "Architected and shipped a full-stack e-commerce platform on Next.js 14, TypeScript, and MongoDB for 50+ retail partners, with automated order processing and real-time inventory."],
              ["Order automation", "Built a Google Sheets → PDF invoicing pipeline that removed 80% of manual paperwork and cut order processing time 70%, about 20+ hours saved a week."],
              ["Shopify D2C (Ekohum)", "Designed and built the Ekohum storefront on Shopify (Liquid), then ran the social media marketing that grew it (+45% engagement, +200 followers)."],
              ["Performance & SEO", "Tuned to a 95% mobile score and 40% faster loads with code splitting, lazy loading, and image optimization, plus structured data for organic search."],
            ].map(([h, b]) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b2532e]/70" />
                <span>
                  <strong className="text-[#1b1714]">{h}.</strong>{" "}
                  <span className="text-[#56504a]">{b}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="How it works" title="UI, API, and database, one system">
          <p>
            Ethnics by Aravalli is one full-stack app, not a front end bolted
            onto someone else&apos;s backend. I built all three layers so they
            fit together:
          </p>
          <div className="space-y-3">
            {[
              [
                "Interface",
                "Next.js + TypeScript",
                "Retailers browse the catalog, build bulk orders, and track status in a responsive React UI I designed and built.",
              ],
              [
                "API",
                "Next.js server routes",
                "Order submission, inventory checks, and invoicing run through server-side endpoints that validate each request and orchestrate the work.",
              ],
              [
                "Database",
                "MongoDB",
                "Products, retailers, orders, and inventory live in MongoDB; the API reads and writes here, keeping stock and order status consistent.",
              ],
            ].map(([layer, tech, body]) => (
              <div
                key={layer}
                className="rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] p-5"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[#1b1714]">
                    {layer}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#b2532e]">
                    {tech}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#56504a]">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p>
            When a retailer places a bulk order, the UI posts it to the API,
            which writes the order to MongoDB, adjusts inventory, and triggers
            the Google Sheets to PDF invoicing pipeline. A manual,
            paperwork-heavy process became one automated flow.
          </p>
        </Section>

        <Section eyebrow="Results" title="The numbers">
          <ul className="space-y-4">
            {results.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b2532e]/70" />
                <span className="text-[#56504a]">{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Stack & services" title="Tools behind the work">
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#1b1714]/10 bg-[#1b1714]/[0.04] px-3 py-1.5 text-sm text-[#56504a]"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Visit the stores */}
        <div className="border-t border-[#1b1714]/10 py-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b2532e]">
            Visit the stores
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] px-5 py-4 transition-colors hover:border-[#1b1714]/25 hover:bg-[#1b1714]/[0.03]"
              >
                <span className="font-medium text-[#1b1714]">{site.label}</span>
                <ArrowUpRight className="h-5 w-5 text-[#857b72] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#b2532e]" />
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
