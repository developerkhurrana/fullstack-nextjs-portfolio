"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BrowserFrame } from "@/components/ui/browser-frame";

const facts = [
  { label: "Product", value: "AI product photography" },
  { label: "My role", value: "Solo, design + full build" },
  { label: "Stack", value: "Next.js · TypeScript" },
  { label: "Status", value: "Live (early)" },
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "AI image pipeline",
  "Auth",
  "Subscription billing",
  "UI/UX · Figma",
];

const WHATSAPP_SITE =
  "https://wa.me/917972816234?text=" +
  encodeURIComponent(
    "Hi Kshitij, I saw Sparkframe and I'd like to talk about building a product or web app."
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

export default function SparkframeCaseStudy() {
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
            AI SaaS case study
          </p>
          <h1 className="mt-3 text-4xl font-normal tracking-tight sm:text-6xl">
            Sparkframe
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b635a]">
            Sparkframe is an AI product-photography tool I designed, built, and
            ship as a live product, solo. You upload a product photo; it cuts the
            background, relights it like a studio shot, and places it into a
            scene, across categories like jewellery, fashion, food, beauty, and
            packaging. I built the whole thing end to end: the product and
            interface, the Next.js front end, the backend and AI image pipeline,
            and the accounts and billing behind it.
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
            src="/shots/sparkframe.jpg"
            alt="Sparkframe home page: an AI product-photography studio"
            label="sparkframe.in"
            priority
          />
          <Caption>
            The landing page and product. I designed and built the whole thing,
            from the brand and interface to the studio where shots are generated.
          </Caption>
        </div>

        <Section eyebrow="Overview" title="What it is, and my role">
          <p>
            Good product photography is slow and expensive: a studio, lighting,
            a photographer, and a shoot for every new product. Small brands
            can&apos;t keep doing that for a catalog that changes every week.
            Sparkframe is my answer to that, a tool that turns a plain product
            photo into a clean, studio-style shot in a few steps.
          </p>
          <p>
            I built it on my own, start to finish: the product idea and UX, the
            visual design in Figma, the Next.js and TypeScript front end, the
            backend and the AI image pipeline that does the actual work, and the
            accounts, plans, and billing that make it a real product rather than
            a demo. It&apos;s live and early, I&apos;m building out the user base
            now, so this case study is about what I designed and built, not about
            traction numbers.
          </p>
        </Section>

        <Section
          eyebrow="Selected work 01"
          title="From a phone photo to a studio shot"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> A seller
            has a product and a phone, not a studio. The photo has a messy
            background, flat lighting, and no sense of place, nothing you&apos;d
            put on a store page or an ad.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I built the
            core flow: upload a photo, and the pipeline cuts the background,
            relights the product like a studio shot, and drops it into a chosen
            scene. A product-preservation step keeps the real materials, colours,
            and proportions intact, so the output still looks like the actual
            product, not a re-imagined one.
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it matters.</strong> It turns
            a task that needed a shoot into something a brand can do themselves,
            in minutes, for every product in the catalog.
          </p>
        </Section>
        <div>
          <BrowserFrame
            src="/shots/sparkframe-features.jpg"
            alt="Sparkframe: how the AI studio turns a product photo into a scene"
            label="sparkframe.in"
          />
          <Caption>
            The studio: pick a category, drop a photo, and get back shots placed
            in a scene. I designed the flow and built the pipeline behind it.
          </Caption>
        </div>

        <Section
          eyebrow="Selected work 02"
          title="Built for a catalog, not a single photo"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> One nice
            shot is a toy. A real brand has dozens or hundreds of products and
            needs them all done consistently, without re-doing the work each
            time.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I built the
            product around volume: a library of preset scenes to keep a catalog
            visually consistent, category presets for jewellery, fashion, food,
            beauty, furniture, and packaging, and a bulk flow that takes a whole
            folder of product photos at once instead of one upload at a time.
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it matters.</strong> It fits
            how brands actually work, a full product line with one coherent
            look, not a one-off image.
          </p>
        </Section>

        <Section
          eyebrow="Selected work 03"
          title="A real product, not a demo"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> A model that
            makes nice images isn&apos;t a business. To be a product it needs
            accounts, limits, and a way to pay, all the plumbing people never see
            but always feel when it&apos;s missing.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I built the
            full SaaS layer myself: sign-up and authentication, tiered monthly
            plans with a free trial, usage limits per plan, and the billing to
            back them. The frontend, the backend, and the AI pipeline are all
            mine, wired together into one running product.
          </p>
          <p>
            <strong className="text-[#1b1714]">Why it matters.</strong> It&apos;s
            the part that proves this is end-to-end work: design through
            engineering through the business mechanics, shipped and live.
          </p>
        </Section>
        <Section
          eyebrow="Selected work 04"
          title="Clean on a phone, where sellers actually work"
        >
          <p>
            <strong className="text-[#1b1714]">The problem.</strong> A lot of
            small-brand owners run everything from their phone. If the tool only
            works on a desktop, it doesn&apos;t fit their day.
          </p>
          <p>
            <strong className="text-[#1b1714]">What I did.</strong> I designed
            and built the whole experience to be fully responsive, so the landing
            page and the studio read and work cleanly on mobile, not just on a
            laptop.
          </p>
        </Section>
        <div className="flex justify-center">
          <div className="w-[240px] overflow-hidden rounded-[2rem] border border-[#1b1714]/15 bg-white shadow-[0_24px_60px_-28px_rgba(27,23,20,0.4)]">
            <Image
              src="/shots/sparkframe-mobile.jpg"
              alt="Sparkframe on a mobile phone"
              width={390}
              height={844}
              sizes="240px"
              className="h-auto w-full"
            />
          </div>
        </div>
        <Caption>
          <span className="block text-center">
            Sparkframe on mobile, where many sellers run their brand.
          </span>
        </Caption>

        <Section eyebrow="What it adds up to" title="A product I built end to end">
          <p>
            Sparkframe is a live, solo-built AI SaaS: the idea, the design, the
            front end, the backend, the AI image pipeline, and the accounts and
            billing, all mine. It&apos;s the clearest proof of what I do, taking
            something from a blank page to a running product that people can sign
            up for and use, without a handoff anywhere in the middle.
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
            Visit the product
          </p>
          <div className="mt-6">
            <a
              href="https://sparkframe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] px-5 py-4 transition-colors hover:border-[#1b1714]/25 hover:bg-[#1b1714]/[0.03]"
            >
              <span className="font-medium text-[#1b1714]">sparkframe.in</span>
              <ArrowUpRight className="h-5 w-5 text-[#857b72] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#b2532e]" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-3xl border border-[#1b1714]/12 bg-[#1b1714]/[0.02] p-8 sm:p-10">
          <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
            Want a product or web app built?
          </h2>
          <p className="mt-3 max-w-xl text-[#56504a]">
            I take products from idea to live: design, frontend, backend, and the
            AI and billing in between, without the usual handoffs. If you have
            something to build, tell me about it.
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
              href="mailto:thekshitijkhurrana@gmail.com?subject=Project%20enquiry"
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
