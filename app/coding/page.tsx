"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import {
  FileCode,
  Database,
  Palette,
  PenTool,
  Server,
  BadgeCheck,
  Globe,
  Layers,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const codingProjects = [
  {
    title: "LedgerAI",
    description:
      "AI-powered expense, GST, and cash flow tracker for Indian small businesses.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "OpenAI"],
    demo: "https://ledger-ai-kappa.vercel.app/",
    github: "https://github.com/developerkhurrana/LedgerAi",
  },
  {
    title: "LinkedIn Clone",
    description:
      "A full-featured LinkedIn clone with authentication, posts, and real-time updates.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB"],
    demo: "https://linkedin-clone-seven-ivory.vercel.app/",
    github: "https://github.com/developerkhurrana/linkedin-clone/tree/main",
  },
  {
    title: "Travel App",
    description:
      "A responsive travel application for exploring destinations and planning adventures.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://travel-app-iota-eosin.vercel.app/",
    github: "https://github.com/developerkhurrana/travel_app/tree/main",
  },
  {
    title: "Nike Web",
    description: "A responsive web application for Nike products.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://nikeweb-murex.vercel.app/",
    github: "https://github.com/developerkhurrana/nikeweb/tree/main",
  },
  {
    title: "Amazon Deploy",
    description: "A responsive web application for Amazon services.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://amazon-deploy-lovat.vercel.app/",
    github: "https://github.com/developerkhurrana/amazon-deploy/tree/main",
  },
  {
    title: "Netflix Clone",
    description: "A responsive web application for Netflix services.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://netflix-clone-dk.vercel.app/auth",
    github: "https://github.com/developerkhurrana/netflix-clone-dk/tree/main",
  },
  {
    title: "Fun Elon",
    description: "A responsive web application for Fun Elon services.",
    tech: ["React", "Vite", "Tailwind CSS"],
    demo: "https://fun-elon.vercel.app/",
    github: "https://github.com/developerkhurrana/fun-elon/tree/main",
  },
  {
    title: "Fullstack MERN Clone X",
    description: "A full-stack web application built with the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "https://fullstack-mern-clone-x.onrender.com/",
    github:
      "https://github.com/developerkhurrana/fullstack-mern-clone-x/tree/main",
  },
  {
    title: "Fullstack MERN Chat App",
    description: "A full-stack chat application built with the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "https://fullstack-mern-chat-app.onrender.com/",
    github:
      "https://github.com/developerkhurrana/fullstack-mern-chat-app/tree/main",
  },
];

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <Layers className="text-white w-3.5 h-3.5" />,
  "Tailwind CSS": <Palette className="text-sky-400 w-3.5 h-3.5" />,
  TypeScript: <BadgeCheck className="text-blue-500 w-3.5 h-3.5" />,
  MongoDB: <Database className="text-green-500 w-3.5 h-3.5" />,
  NextAuth: <BadgeCheck className="text-green-400 w-3.5 h-3.5" />,
  OpenAI: <FileCode className="text-emerald-400 w-3.5 h-3.5" />,
  "React.js": <Globe className="text-cyan-400 w-3.5 h-3.5" />,
  "Node.js": <Server className="text-green-600 w-3.5 h-3.5" />,
  Figma: <PenTool className="text-pink-500 w-3.5 h-3.5" />,
};

export default function Coding() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <PageHeader
          eyebrow="Engineering"
          title="Code & builds"
          description="Full-stack applications spanning the MERN stack, Next.js, and AI — from production tools to polished clones."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {codingProjects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={70}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {techIcons[t] || <FileCode className="h-3.5 w-3.5" />} {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 hover:text-amber-300"
                  >
                    Live demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
