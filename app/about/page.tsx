"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/ui/timeline";

const certifications = [
  {
    name: "Front-End Development",
    issuer: "Mimo",
    date: "Dec 2024",
    url: "https://app.virtualbadge.io/mimo/fhoc9qrt/",
  },
  {
    name: "Back-End Development",
    issuer: "Mimo",
    date: "Dec 2024",
    url: "https://app.virtualbadge.io/mimo/obbu3wyg/",
  },
  {
    name: "Python Development",
    issuer: "Mimo",
    date: "Aug 2025",
    url: "https://app.virtualbadge.io/mimo/i6ey82j0/",
  },
];

export default function About() {
  const timelineData = [
    {
      title: "2025",
      content: [
        {
          title: "Full-Stack Developer & UI/UX Designer",
          description: "Aravalli Designs · Jaipur, India",
          achievements: [
            "Architected and deployed a full-stack B2B e-commerce platform (Ethnics by Aravalli) on Next.js 14, TypeScript, and MongoDB, serving 50+ retail partners with real-time inventory management",
            "Engineered an automated PDF-invoicing system integrated with the Google Sheets API — eliminating 80% of manual paperwork and cutting order processing time by 70% (20+ hours/week)",
            "Optimized performance to a 95% mobile score and 40% faster load times via code splitting, lazy loading, and image optimization",
            "Built and grew Ekohum, a Shopify D2C brand — storefront plus social media marketing (+45% Instagram engagement, +200 followers)",
          ],
          technologies: [
            "Next.js 14",
            "TypeScript",
            "MongoDB",
            "Google Sheets API",
            "Shopify",
            "SEO",
          ],
        },
      ],
    },
    {
      title: "2022–23",
      content: [
        {
          title: "UI/UX Designer",
          description: "TSSS Infotech and Infra · Hyderabad, India",
          achievements: [
            "Designed a real estate website architecture that increased web traffic by 80% and generated 30% more qualified leads",
            "Redesigned interfaces from analytics and A/B testing, lifting user engagement 30% and conversion 25%",
            "Led a mentorship program for 3 junior designers, improving team productivity 40% and cutting ramp-up time 50%",
          ],
          technologies: [
            "UI/UX Design",
            "Figma",
            "A/B Testing",
            "Design Systems",
          ],
        },
      ],
    },
    {
      title: "2020–22",
      content: [
        {
          title: "Graphic Designer",
          description: "TSSS Infotech and Infra · Hyderabad, India",
          achievements: [
            "Delivered high-impact visual designs across client projects while maintaining a consistent brand system, increasing customer engagement 35%",
            "Streamlined design workflows and built reusable component libraries, reducing project delivery time 30%",
          ],
          technologies: [
            "Graphic Design",
            "Brand Identity",
            "Adobe Creative Suite",
          ],
        },
      ],
    },
    {
      title: "2018–21",
      content: [
        {
          title: "B.Sc. in Media Technology",
          description: "ICAT Design and Media College",
          achievements: [
            "1st Prize, Indywood Poster Design Competition",
            "Built a foundation in digital media, design, and technology",
          ],
          technologies: ["Media Technology", "Design", "Motion"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 pt-32 sm:px-8">
        <PageHeader
          eyebrow="About"
          title="About me"
          description="UI/UX & full-stack developer with 4+ years crafting user-centred digital products — scalable web apps and high-impact interfaces in Next.js, React, TypeScript, and Figma. I've shipped B2B e-commerce platforms, real estate portals, and D2C brands with measurable results, from 80% traffic growth to 70% less operational overhead."
        />
        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>

        <section className="mt-8 border-t border-white/10 pb-6 pt-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            Certifications
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Verified credentials
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {certifications.map((c) => (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white">{c.name}</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
                </div>
                <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wide text-amber-400/80">
                  Verify credential
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
