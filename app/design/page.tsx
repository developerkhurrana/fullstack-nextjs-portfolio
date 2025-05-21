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
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const uiExperiments = [
  {
    title: "Design Guidelines",
    description:
      "A comprehensive guide for web design principles and best practices.",
    link: "/design-guidelines",
    icon: "📚",
  },
  {
    title: "UI Experiments",
    description:
      "Interactive UI patterns and interactions that make you think 'what the fuck?'",
    link: "/ui-experiments",
    icon: "✨",
  },
  {
    title: "Component Lab",
    description: "A playground for testing and exploring new UI components.",
    link: "/component-lab",
    icon: "🧪",
  },
  {
    title: "Jot",
    description: "A modern jot app with a clean and minimalist design.",
    link: "/jot",
    icon: "✓",
  },
];

export default function Design() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "Design", link: "/design" },
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

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-32 pb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiExperiments.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-colors"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
