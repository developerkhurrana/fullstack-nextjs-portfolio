"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const facts = [
  { label: "Role", value: "Founder — design, dev & marketing" },
  { label: "Studio", value: "Aravalli Designs" },
  { label: "Platform", value: "Shopify (Liquid)" },
  { label: "Services", value: "Design · Development · SMM" },
];

// Countable, verifiable facts — no invented numbers.
const stats = [
  { value: "2", label: "Brands launched" },
  { value: "4", label: "Live storefronts" },
  { value: "3", label: "Disciplines, one owner" },
];

const sites = [
  { label: "ekohum.com", url: "https://ekohum.com" },
  { label: "ekohum.in", url: "https://ekohum.in" },
  { label: "ethnicsbyaravalli.com", url: "https://ethnicsbyaravalli.com" },
  { label: "aravallidesigns.com", url: "https://aravallidesigns.com" },
];

const stack = [
  "Shopify",
  "Liquid",
  "Meta Ads",
  "Instagram",
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
            Building and growing a family of ethnic-wear e-commerce brands
            end to end — from brand identity and Shopify storefronts to the
            social media marketing that drives them.
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
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>

        <Section eyebrow="Overview" title="One studio, the whole funnel">
          <p>
            Aravalli Designs is my studio for building and growing ethnic-wear
            e-commerce brands. Under it, <strong>Ekohum</strong> and{" "}
            <strong>Ethnics by Aravalli</strong> run as full Shopify storefronts
            across <span className="whitespace-nowrap">.com</span> and{" "}
            <span className="whitespace-nowrap">.in</span> domains — each one
            designed, built, and marketed by the same hands.
          </p>
          <p>
            That end-to-end ownership is the point: the brand system, the
            storefront experience, and the marketing all stay coherent because
            they&apos;re not handed off between a designer, a developer, and an
            agency.
          </p>
        </Section>

        <Section eyebrow="The challenge" title="A fashion brand is more than a store">
          <p>
            Launching an apparel brand online means solving three problems at
            once: a distinct visual identity people trust, a fast and frictionless
            shopping experience, and a dependable stream of qualified traffic.
            Miss any one and the store stalls.
          </p>
          <p>
            The brands needed all three delivered together, and kept consistent
            as the catalog and the audience grew.
          </p>
        </Section>

        <Section eyebrow="What I did" title="Design, build, and grow">
          <ul className="space-y-4">
            {[
              ["Brand & design", "Defined the visual identity and product presentation, then designed storefront layouts and the shopping journey in Figma."],
              ["Shopify development", "Built and customized the Shopify themes in Liquid — product pages, collections, cart, and checkout — tuned for mobile and page speed."],
              ["Social media marketing", "Run ongoing SMM across Instagram and Meta ads: content, campaigns, and creative that send qualified traffic to the stores."],
              ["Operations", "Manage multiple domains (.com/.in) per brand and keep the storefronts and brand system consistent as the catalog expands."],
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

        <Section eyebrow="Results" title="Live, and growing">
          <ul className="space-y-4">
            {[
              "Four live storefronts across two brands, owned and maintained end to end.",
              "A single brand system that stays consistent across design, storefront, and social.",
              "An ongoing marketing pipeline feeding the stores rather than one-off launches.",
            ].map((r) => (
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
