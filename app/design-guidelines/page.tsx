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

export default function DesignGuidelines() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "Design", link: "/design" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-black text-white">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Web Design Guidelines
          </h1>
          <p className="text-lg text-neutral-400 mb-12">
            A collection of principles and best practices for creating beautiful
            and functional web interfaces.
          </p>

          <div className="space-y-16">
            {/* Typography Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Typography</h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Font Selection</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                    <li>
                      Choose fonts that are legible and appropriate for your
                      brand
                    </li>
                    <li>Limit to 2-3 font families for consistency</li>
                    <li>
                      Use system fonts when possible for better performance
                    </li>
                    <li>
                      Ensure proper font fallbacks for cross-platform
                      compatibility
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Color Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Color</h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Color Palette</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                    <li>
                      Use a consistent color scheme throughout the interface
                    </li>
                    <li>Ensure sufficient contrast for accessibility</li>
                    <li>
                      Limit the number of colors to maintain visual harmony
                    </li>
                    <li>Consider color psychology in your choices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Layout Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Layout</h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Grid Systems</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                    <li>Use a consistent grid system for alignment</li>
                    <li>Maintain proper spacing and hierarchy</li>
                    <li>Design for different screen sizes</li>
                    <li>Keep layouts clean and organized</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Accessibility Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Accessibility</h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Inclusive Design</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                    <li>Follow WCAG 2.1 guidelines</li>
                    <li>Ensure proper color contrast ratios</li>
                    <li>Provide alternative text for images</li>
                    <li>Design for keyboard navigation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
