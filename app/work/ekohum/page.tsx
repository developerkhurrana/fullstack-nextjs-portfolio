"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BrowserFrame } from "@/components/ui/browser-frame";

const facts = [
  { label: "Brand", value: "Ekohum (women's ethnic wear)" },
  { label: "Platform", value: "Shopify (Liquid)" },
  { label: "My focus", value: "Storefront · Catalog · SEO" },
  { label: "Catalog", value: "260+ product styles" },
];

const sites = [
  { label: "ekohum.com", url: "https://ekohum.com" },
  { label: "ekohum.in", url: "https://ekohum.in" },
];

const stack = [
  "Shopify",
  "Liquid",
  "Theme customization",
  "Collections & merchandising",
  "Product catalog",
  "On-store SEO",
  "Figma",
];

const WHATSAPP_SHOPIFY =
  "https://wa.me/917972816234?text=" +
  encodeURIComponent(
    "Hi Kshitij, I saw your Ekohum Shopify case study and I'd like to talk about Shopify help for my brand."
  );

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
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2532e]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-normal tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 max-w-2xl space-y-4 text-[#56504a]">{children}</div>
    </motion.section>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm text-[#857b72]">{children}</p>;
}

export default function EkohumCaseStudy() {
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
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2532e]">
            Shopify case study
          </p>
          <h1 className="mt-3 text-4xl font-normal tracking-tight sm:text-6xl">
            Ekohum
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b635a]">
            Ekohum is a direct-to-consumer apparel brand, women&apos;s ethnic
            wear, with a Shopify storefront at ekohum.com. I work across the
            storefront, product catalog, and SEO: customizing the theme, setting
            up collection and product pages, and keeping a 260+ style catalog
            shoppable.
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

        {/* Hero storefront */}
        <div className="mt-12">
          <BrowserFrame
            src="/shots/ekohum.jpg"
            alt="Ekohum storefront home page on Shopify"
            label="ekohum.com"
            priority
          />
          <Caption>
            The Ekohum storefront home. I build and maintain the Shopify theme,
            navigation, and the seasonal campaign sections (shown here, the
            festive edit).
          </Caption>
        </div>

        <Section eyebrow="Overview" title="What Ekohum is, and my role">
          <p>
            Ekohum sells straight to shoppers, so the storefront is the business:
            it has to present a large, changing catalog clearly, answer the
            questions a shopper would otherwise ask in a store, and hold up on a
            phone, where most fashion browsing happens.
          </p>
          <p>
            My role is on the Shopify side. I customize the theme in Liquid, set
            up and merchandise collections, build out product pages and catalog
            data, and handle on-store SEO so the brand gets found. The sections
            below are the parts of that work I can show on the live site today.
          </p>
        </Section>

        <Section
          eyebrow="Selected work 01"
          title="A catalog shoppers can actually navigate"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> A catalog of
            260+ styles is only useful if a shopper can get to the right thing
            fast. Dumped into one long grid, it just overwhelms.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I structured
            the catalog into shoppable collections, Kurtas, Kurta Sets, Suit
            Sets, Co-ords, Dresses &amp; Tops, Block Printed, plus curated edits
            (New Arrivals, Best Sellers, Exclusive, Clearance), and wired up
            filters (availability, price, category, size), sort, and merchandising
            badges like &quot;New Arrival&quot; and &quot;Bestseller.&quot;
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it mattered.</strong> Clear
            merchandising is how an apparel store turns browsing into add-to-cart.
            It also gives the store team a structure they can re-merchandise each
            season without a developer.
          </p>
        </Section>
        <div>
          <BrowserFrame
            src="/shots/ekohum-collection.jpg"
            alt="Ekohum product listing page with filters, sort, and 260+ styles"
            label="ekohum.com/collections"
          />
          <Caption>
            The products listing: 260+ styles with filters, sort, pricing with
            compare-at and discounts, and merchandising badges. I set up the
            collection structure and how products are organized and surfaced.
          </Caption>
        </div>

        <Section
          eyebrow="Selected work 02"
          title="Product pages that remove buying friction"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> Online, a
            shopper can&apos;t feel the fabric or try the fit, so the product page
            has to do that reassurance for them, or the sale stalls at the size
            question.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> Product pages
            lead with a multi-image gallery and the details that matter for
            apparel, fabric and craft (&quot;Cotton · Aari Embroidery · Handcrafted
            in Jaipur&quot;), a size selector with a size guide and fit guidance,
            delivery and exchange terms, and the payment options Indian shoppers
            expect (UPI, Cards, COD, EMI).
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it mattered.</strong> Taking the
            doubt out of size, fabric, and payment is what gets an apparel order
            over the line.
          </p>
        </Section>
        <div>
          <BrowserFrame
            src="/shots/ekohum-product.jpg"
            alt="Ekohum product page with gallery, size guide, delivery, and payment options"
            label="ekohum.com/products/…"
          />
          <Caption>
            A product page: image gallery, fabric and craft details, size
            selector with a size guide, delivery and exchange info, and payment
            options. I set up product pages and the catalog data behind them.
          </Caption>
        </div>

        <Section
          eyebrow="Selected work 03"
          title="Built mobile-first, where the shoppers are"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> Most D2C
            fashion traffic is on phones. A store that is awkward on mobile loses
            the majority of its shoppers before they ever reach a product.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> The theme is
            built mobile-first, so the campaign, navigation, collections, and
            product pages all stay usable and fast on a small screen.
          </p>
        </Section>
        <div className="flex justify-center">
          <div className="w-[240px] overflow-hidden rounded-[2rem] border border-[#1b1714]/15 bg-white shadow-[0_24px_60px_-28px_rgba(27,23,20,0.4)]">
            <Image
              src="/shots/ekohum-mobile.jpg"
              alt="Ekohum storefront on a mobile phone"
              width={390}
              height={844}
              sizes="240px"
              className="h-auto w-full"
            />
          </div>
        </div>
        <Caption>
          <span className="block text-center">
            The storefront on mobile, where most fashion shoppers browse.
          </span>
        </Caption>

        <Section eyebrow="Also" title="SEO, catalog upkeep, and brand">
          <p>
            Alongside the build, I handle on-store SEO and structured product data
            so collections and products can be found in search, and I keep the
            catalog current as seasons and campaigns change. I also run the
            brand&apos;s Instagram and content, which keeps Ekohum consistent from
            the feed through to the product page.
          </p>
        </Section>

        <Section eyebrow="What it adds up to" title="A store a brand runs on">
          <p>
            The outcome is a live, maintained Shopify storefront the brand runs
            its business on: a structured, filterable catalog of 260+ styles,
            product pages built to answer buying questions, and a store that holds
            up on mobile, kept current as the brand&apos;s collections change.
          </p>
        </Section>

        <Section eyebrow="Stack" title="Tools behind the work">
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

        {/* Visit the store */}
        <div className="border-t border-[#1b1714]/10 py-12">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2532e]">
            Visit the store
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

        {/* Shopify enquiry CTA */}
        <div className="mt-6 rounded-3xl border border-[#1b1714]/12 bg-[#1b1714]/[0.02] p-8 sm:p-10">
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
            Need Shopify help for your brand?
          </h2>
          <p className="mt-3 max-w-xl text-[#56504a]">
            I take apparel and lifestyle brands from a Shopify theme to a
            merchandised, conversion-ready store, storefront, collections, product
            pages, and SEO. Tell me what you&apos;re building.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={WHATSAPP_SHOPIFY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1b1714] px-6 py-3 text-sm font-medium text-[#faf8f4] tactile"
            >
              Start a Shopify project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:thekshitijkhurrana@gmail.com?subject=Shopify%20project%20enquiry"
              className="text-sm text-[#6b635a] underline decoration-[#1b1714]/20 underline-offset-4 transition-colors hover:text-[#1b1714] hover:decoration-[#1b1714]"
            >
              Email me
            </a>
            <Link
              href="/coding"
              className="group inline-flex items-center gap-1.5 text-sm text-[#6b635a] transition-colors hover:text-[#1b1714]"
            >
              See more work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
