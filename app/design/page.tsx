"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Sparkles,
  FlaskConical,
  PenLine,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

const uiExperiments = [
  {
    title: "Design Guidelines",
    description:
      "A comprehensive guide for web design principles and best practices.",
    link: "/design-guidelines",
    icon: BookOpen,
  },
  {
    title: "UI Experiments",
    description:
      "Interactive UI patterns and micro-interactions that push the browser.",
    link: "/ui-experiments",
    icon: Sparkles,
  },
  {
    title: "Component Lab",
    description: "A playground for testing and exploring new UI components.",
    link: "/component-lab",
    icon: FlaskConical,
  },
  {
    title: "Jot",
    description: "A modern jotting app with a clean and minimalist design.",
    link: "/jot",
    icon: PenLine,
  },
];

export default function Design() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1b1714]">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <PageHeader
          eyebrow="Design"
          title="Design & experiments"
          description="Guidelines, interaction studies, and small tools I build to explore interface ideas."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {uiExperiments.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link
                href={project.link}
                className="group flex h-full flex-col rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] p-7 transition-colors hover:border-[#1b1714]/25 hover:bg-[#1b1714]/[0.03]"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#1b1714]/12 text-[#b2532e]">
                    <project.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#9a9087] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#b2532e]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1b1714]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b635a]">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
