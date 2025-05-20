"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { usePathname } from "next/navigation";
import {
  Download,
  FileCode,
  Database,
  Palette,
  PenTool,
  Server,
  BadgeCheck,
  Globe,
  Layers,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const codingProjects = [
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
  "Next.js": <Layers className="text-white w-4 h-4" />,
  "Tailwind CSS": <Palette className="text-sky-400 w-4 h-4" />,
  TypeScript: <BadgeCheck className="text-blue-500 w-4 h-4" />,
  MongoDB: <Database className="text-green-500 w-4 h-4" />,
  "React.js": <Globe className="text-cyan-400 w-4 h-4" />,
  "Node.js": <Server className="text-green-600 w-4 h-4" />,
  Figma: <PenTool className="text-pink-500 w-4 h-4" />,
};

export default function Coding() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto">
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <NavbarLogo />
              <div className="flex gap-6 items-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className={
                      "rounded-full transition-colors font-medium px-4 py-2 border " +
                      (item.link === pathname
                        ? "text-orange-400 border-orange-400 "
                        : "text-neutral-300 border-orange-400/0 hover:text-orange-400 hover:border-orange-400")
                    }
                  >
                    {item.name}
                  </a>
                ))}
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  href="https://drive.google.com/file/d/1qCLUSJ84Kp_oRuaNI51JJy8FD7pO3Unl/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 px-4 flex items-center"
                  aria-label="Download Resume"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Resume
                </HoverBorderGradient>
              </div>
            </NavBody>
            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item) => (
                  <a
                    key={`mobile-link-${item.name}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      "rounded-full relative block px-4 py-2 font-medium border " +
                      (item.link === pathname
                        ? "text-orange-400 border-orange-400 "
                        : "text-neutral-300 dark:text-neutral-300 border-orange-400/0 hover:text-orange-400 hover:border-orange-400")
                    }
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  <HoverBorderGradient
                    containerClassName="rounded-full w-full"
                    as="a"
                    href="https://drive.google.com/file/d/1qCLUSJ84Kp_oRuaNI51JJy8FD7pO3Unl/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white w-full text-center p-2 px-4 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Download Resume"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Resume
                  </HoverBorderGradient>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-24 px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingProjects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-neutral-900 rounded-xl p-6 shadow hover:shadow-lg transition border border-neutral-800"
            >
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 text-xs px-2 py-1 rounded text-orange-400 flex items-center gap-1"
                  >
                    {techIcons[t] || <FileCode className="w-4 h-4" />} {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
