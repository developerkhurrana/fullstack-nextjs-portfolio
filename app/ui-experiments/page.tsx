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
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/experiments/magnetic-button";
import { ParallaxCards } from "@/components/ui/experiments/parallax-cards";
import { TextScramble } from "@/components/ui/experiments/text-scramble";
import { CursorTrail } from "@/components/ui/experiments/cursor-trail";
import { CardFlip } from "@/components/ui/experiments/card-flip";
import { GradientBorder } from "@/components/ui/experiments/gradient-border";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const experiments = [
  {
    title: "Magnetic Button",
    description: "A button that follows your cursor with magnetic attraction",
    preview: <MagneticButton />,
  },
  {
    title: "Parallax Cards",
    description: "Cards that respond to mouse movement with depth",
    preview: <ParallaxCards />,
  },
  {
    title: "Text Scramble",
    description: "Text that scrambles and unscrambles on hover",
    preview: (
      <div className="h-16 flex items-center justify-center">
        <TextScramble />
      </div>
    ),
  },
  {
    title: "Cursor Trail",
    description: "Interactive cursor trail with particle effects",
    preview: <CursorTrail />,
  },
  {
    title: "3D Card Flip",
    description: "Cards that flip in 3D space on interaction",
    preview: <CardFlip />,
  },
  {
    title: "Gradient Border",
    description: "Animated gradient borders that follow mouse movement",
    preview: <GradientBorder />,
  },
];

export default function UIExperiments() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "Design", link: "/design" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(
    null
  );

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="#0f051d"
      gradientBackgroundEnd="#1a1a2e"
    >
      <main className="min-h-screen bg-transparent relative overflow-hidden">
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

        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-16"
          >
            <div className="flex flex-col gap-8">
              {experiments.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-neutral-900 rounded-lg p-8 flex flex-col gap-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div>{exp.preview}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedExperiment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedExperiment(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-neutral-900 rounded-lg p-6 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4">
                  {
                    experiments.find((e) => e.title === selectedExperiment)
                      ?.title
                  }
                </h2>
                <p className="text-neutral-400 mb-6">
                  {
                    experiments.find((e) => e.title === selectedExperiment)
                      ?.description
                  }
                </p>
                <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-500">
                    Component Preview Coming Soon
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </BackgroundGradientAnimation>
  );
}
