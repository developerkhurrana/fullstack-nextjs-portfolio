"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BrowserFrame } from "@/components/ui/browser-frame";

const facts = [
  { label: "Business", value: "Ethnic-wear manufacturer (B2B)" },
  { label: "Platform", value: "WordPress" },
  { label: "My focus", value: "Site build · Content · SEO" },
  { label: "Audience", value: "Shops, boutiques, retailers" },
];

const stack = [
  "WordPress",
  "Responsive design",
  "On-site SEO",
  "Content pages",
  "Lead capture (enquiry + WhatsApp)",
  "Figma",
];

const WHATSAPP_SITE =
  "https://wa.me/917972816234?text=" +
  encodeURIComponent(
    "Hi Kshitij, I saw your Ethnics by Aravalli case study and I'd like to talk about a website for my business."
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

export default function EthnicsCaseStudy() {
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
            WordPress B2B case study
          </p>
          <h1 className="mt-3 text-4xl font-normal tracking-tight sm:text-6xl">
            Ethnics by Aravalli
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b635a]">
            Ethnics by Aravalli is a women&apos;s ethnic-wear manufacturer in
            Jaipur that supplies shops, boutiques, and retailers in bulk. I built
            its website on WordPress: a brand and catalog presence, a
            manufacturing showcase, and a wholesale-enquiry flow that turns search
            traffic into catalogue requests.
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

        {/* Hero */}
        <div className="mt-12">
          <BrowserFrame
            src="/shots/ethnics.jpg"
            alt="Ethnics by Aravalli home page on WordPress"
            label="ethnicsbyaravalli.com"
            priority
          />
          <Caption>
            The home page. I built the WordPress site, the brand presentation,
            navigation, and the &quot;Request Catalogue&quot; call to action.
          </Caption>
        </div>

        <Section eyebrow="Overview" title="What it is, and my role">
          <p>
            This is a wholesale business, not a store. Ethnics by Aravalli sells
            in bulk to retailers, so the website&apos;s job is to present the
            manufacturer credibly, show what it can make, and make it easy for a
            shop or boutique to start a conversation, not to take card payments.
          </p>
          <p>
            I built the site on WordPress: the pages, the brand presentation, the
            manufacturing content, and the enquiry flow, and I handle the on-site
            SEO so retailers searching for a Jaipur manufacturer actually find it.
          </p>
        </Section>

        <Section
          eyebrow="Selected work 01"
          title="A manufacturing showcase that earns trust"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> A retailer
            choosing a bulk supplier is taking a risk on quality and reliability.
            A plain catalog doesn&apos;t answer that; they want to see that the
            manufacturer actually makes the goods.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I built a
            Manufacturing page that walks through the process, sampling, pattern
            grading, cutting, stitching, QC, and packing, with workshop films and
            a practical buyer&apos;s guide (&quot;what to discuss with your garment
            manufacturer&quot;).
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it mattered.</strong> It turns
            the site from a brochure into proof of capability, and the buyer&apos;s
            guide doubles as SEO content that brings in retailers researching
            manufacturers.
          </p>
        </Section>
        <div>
          <BrowserFrame
            src="/shots/ethnics-manufacturing.jpg"
            alt="Ethnics by Aravalli manufacturing page with process, workshop films, and a buyer's guide"
            label="ethnicsbyaravalli.com/manufacturing"
          />
          <Caption>
            The Manufacturing page: process, workshop films, and a buyer&apos;s
            guide. I built the page and wrote it to inform wholesale buyers and to
            rank in search.
          </Caption>
        </div>

        <Section
          eyebrow="Selected work 02"
          title="An enquiry flow built for how wholesale actually works"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> Wholesale
            orders are negotiated, not checked out. A &quot;buy now&quot; button is
            the wrong tool; the real conversion is getting the retailer into a
            conversation.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I made
            &quot;Request Catalogue&quot; and WhatsApp the primary calls to action
            across the site, so a retailer can go from landing on the page to
            talking to the business in one tap, with no checkout to abandon.
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it mattered.</strong> It matches
            how this business sells, and it means the site&apos;s job is simple and
            measurable: turn a visitor into a catalogue request.
          </p>
        </Section>

        <Section
          eyebrow="Selected work 03"
          title="Found by the right retailers, on any device"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> A manufacturer
            site only works if the retailers searching for one can find it, and
            many of them are browsing on a phone.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I built the
            pages around what buyers search for, &quot;women&apos;s ethnic wear
            manufacturer in Jaipur,&quot; bulk kurtas and suit sets, and kept the
            site fully responsive so it reads cleanly on mobile.
          </p>
        </Section>
        <div className="flex justify-center">
          <div className="w-[240px] overflow-hidden rounded-[2rem] border border-[#1b1714]/15 bg-white shadow-[0_24px_60px_-28px_rgba(27,23,20,0.4)]">
            <Image
              src="/shots/ethnics-mobile.jpg"
              alt="Ethnics by Aravalli home page on a mobile phone"
              width={390}
              height={844}
              sizes="240px"
              className="h-auto w-full"
            />
          </div>
        </div>
        <Caption>
          <span className="block text-center">
            The site on mobile, where many retailers first find it.
          </span>
        </Caption>

        <Section eyebrow="What it adds up to" title="A site that brings in buyers">
          <p>
            The outcome is a live, maintained WordPress site that presents the
            manufacturer, proves its capability through the workshop and process
            content, and gives retailers a clear, low-friction way to request a
            catalogue, built for how a wholesale business actually wins
            customers.
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

        {/* Visit */}
        <div className="border-t border-[#1b1714]/10 py-12">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#b2532e]">
            Visit the site
          </p>
          <div className="mt-6">
            <a
              href="https://ethnicsbyaravalli.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] px-5 py-4 transition-colors hover:border-[#1b1714]/25 hover:bg-[#1b1714]/[0.03]"
            >
              <span className="font-medium text-[#1b1714]">
                ethnicsbyaravalli.com
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#857b72] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#b2532e]" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-3xl border border-[#1b1714]/12 bg-[#1b1714]/[0.02] p-8 sm:p-10">
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
            Need a website for your business?
          </h2>
          <p className="mt-3 max-w-xl text-[#56504a]">
            Whether it&apos;s a brand or B2B site on WordPress, a Shopify store, or
            a custom build, I design and build sites that are easy to run and
            bring in enquiries. Tell me what you need.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={WHATSAPP_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1b1714] px-6 py-3 text-sm font-medium text-[#faf8f4] tactile"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:thekshitijkhurrana@gmail.com?subject=Website%20enquiry"
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
