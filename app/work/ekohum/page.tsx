"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const facts = [
  { label: "Role", value: "Full-Stack Developer & UI/UX Designer" },
  { label: "Company", value: "Aravalli Designs" },
  { label: "Platform", value: "Shopify (Liquid)" },
  { label: "Services", value: "Storefront · SMM · SEO" },
];

const stats = [
  { value: "+45%", label: "Instagram engagement" },
  { value: "+200", label: "New followers" },
  { value: "2", label: "Storefronts (.com / .in)" },
];

const results = [
  "Grew Instagram engagement +45% and gained 200+ new followers through a consistent, data-driven content cadence.",
  "Launched and maintain the storefront across .com and .in domains with one coherent brand system.",
  "Ran Meta ad campaigns that send qualified traffic to the store rather than relying on one-off launches.",
  "Improved organic discovery with on-store SEO and structured product data.",
];

const sites = [
  { label: "ekohum.com", url: "https://ekohum.com" },
  { label: "ekohum.in", url: "https://ekohum.in" },
];

const stack = ["Shopify", "Liquid", "Meta Ads", "Instagram", "SEO", "Figma"];

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

export default function EkohumCaseStudy() {
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
            Ekohum
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
            A D2C ethnic-wear brand on Shopify (under Aravalli Designs) that I
            design, build, and grow — storefront and brand on one side, social
            media marketing on the other.
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

        <Section eyebrow="Overview" title="Design and growth, together">
          <p>
            Ekohum is a direct-to-consumer ethnic-wear brand built on Shopify.
            Unlike the wholesale side of the business, it sells straight to
            shoppers — so success depends as much on how the brand shows up on
            social as on how the storefront converts.
          </p>
          <p>
            I own both sides: the Shopify storefront and brand system, and the
            marketing that drives people to it. Because it&apos;s the same person
            end to end, the look on Instagram matches the look on the product
            page.
          </p>
        </Section>

        <Section eyebrow="The challenge" title="Standing out in a crowded feed">
          <p>
            Fashion D2C is noisy. A new brand needs a distinct visual identity, a
            store people trust enough to check out on, and a steady stream of
            traffic that doesn&apos;t depend on a single viral moment.
          </p>
          <p>
            Ekohum needed all three built and kept running — not a launch, but a
            growing channel.
          </p>
        </Section>

        <Section eyebrow="What I did" title="Storefront, brand, and marketing">
          <ul className="space-y-4">
            {[
              ["Storefront", "Designed and built the Ekohum store on Shopify (Liquid) — product pages, collections, and checkout — tuned for mobile and speed."],
              ["Brand & content", "Shaped the visual identity and product presentation, then carried it into a consistent social content system."],
              ["Social media marketing", "Ran organic Instagram plus Meta ad campaigns, growing engagement 45% and followers by 200+."],
              ["SEO", "Added structured product data and on-store SEO to improve organic discovery and acquisition."],
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

        <Section eyebrow="Results" title="A growing channel">
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

        {/* Visit */}
        <div className="border-t border-white/10 py-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            Visit the store
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
