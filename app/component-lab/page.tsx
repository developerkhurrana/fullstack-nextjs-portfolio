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
import { Download, Search, Code, Package, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const components = [
  {
    name: "Button",
    category: "Basic",
    description: "A versatile button component with various styles and states",
    status: "ready",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-orange-400 text-black rounded-lg hover:bg-orange-500 transition-colors">
            Primary
          </button>
          <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
            Secondary
          </button>
          <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400/10 transition-colors">
            Outline
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity">
            Gradient
          </button>
          <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg opacity-50 cursor-not-allowed">
            Disabled
          </button>
          <button className="px-4 py-2 bg-orange-400 text-black rounded-lg flex items-center gap-2">
            <Download className="w-4 h-4" />
            With Icon
          </button>
        </div>
      </div>
    ),
  },
  {
    name: "Tooltip",
    category: "Feedback",
    description: "Display additional information on hover or focus",
    status: "ready",
    preview: (
      <div className="flex items-center justify-center gap-4">
        <div className="group relative">
          <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg">
            Hover me
          </button>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            This is a tooltip
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "TextField",
    category: "Form",
    description: "Input field with label and validation states",
    status: "ready",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
    ),
  },
  {
    name: "Select",
    category: "Form",
    description:
      "Dropdown selection component with search and multi-select options",
    status: "ready",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400">Select an option</label>
          <select className="px-4 py-2 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option value="">Choose an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
    ),
  },
  {
    name: "Notification",
    category: "Feedback",
    description: "Alert messages for success, error, and information states",
    status: "ready",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <div className="px-4 py-3 bg-green-500/20 text-green-400 rounded-lg">
          Success: Your changes have been saved
        </div>
        <div className="px-4 py-3 bg-red-500/20 text-red-400 rounded-lg">
          Error: Something went wrong
        </div>
        <div className="px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg">
          Info: New features are available
        </div>
      </div>
    ),
  },
  {
    name: "Avatar",
    category: "Basic",
    description: "User avatar with fallback and status indicators",
    status: "ready",
    preview: (
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-black font-semibold">
            JD
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-neutral-900"></div>
        </div>
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 rounded-full border-2 border-neutral-900"></div>
        </div>
      </div>
    ),
  },
  {
    name: "Checkbox",
    category: "Form",
    description: "Toggle selection with custom styling and states",
    status: "ready",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-neutral-600 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm">Default checkbox</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked
            className="w-4 h-4 rounded border-neutral-600 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm">Checked checkbox</span>
        </label>
        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
          <input
            type="checkbox"
            disabled
            className="w-4 h-4 rounded border-neutral-600 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm">Disabled checkbox</span>
        </label>
      </div>
    ),
  },
  {
    name: "Motion",
    category: "Animation",
    description: "Pre-built animations and transitions",
    status: "upcoming",
    preview: (
      <div className="flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 bg-orange-400 rounded-lg"
        />
      </div>
    ),
  },
  {
    name: "Popover",
    category: "Overlay",
    description: "Floating content container with positioning",
    status: "upcoming",
    preview: (
      <div className="flex items-center justify-center">
        <div className="group relative">
          <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg">
            Click me
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-neutral-800 text-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="w-3 h-3 bg-neutral-800 absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
            <p className="text-sm">Popover content goes here</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Radio",
    category: "Form",
    description: "Single selection from a group of options",
    status: "upcoming",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="radio-demo"
            className="w-4 h-4 border-neutral-600 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm">Option 1</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="radio-demo"
            checked
            className="w-4 h-4 border-neutral-600 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm">Option 2</span>
        </label>
        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
          <input
            type="radio"
            name="radio-demo"
            disabled
            className="w-4 h-4 border-neutral-600 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm">Option 3 (Disabled)</span>
        </label>
      </div>
    ),
  },
];

const categories = [
  { id: "all", name: "All", icon: <Layers className="w-4 h-4" /> },
  { id: "basic", name: "Basic", icon: <Package className="w-4 h-4" /> },
  { id: "form", name: "Form", icon: <Code className="w-4 h-4" /> },
  { id: "feedback", name: "Feedback", icon: <Code className="w-4 h-4" /> },
  { id: "animation", name: "Animation", icon: <Code className="w-4 h-4" /> },
  { id: "overlay", name: "Overlay", icon: <Code className="w-4 h-4" /> },
];

export default function ComponentLab() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "Design", link: "/design" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      component.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="#000000"
      gradientBackgroundEnd="#000000"
      firstColor="255, 0, 128"
      secondColor="0, 255, 255"
      thirdColor="255, 255, 0"
      fourthColor="128, 0, 255"
      fifthColor="255, 128, 0"
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

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-16"
          >
            <div className="flex flex-col gap-8">
              {/* Search and Filters */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search components..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-900/50 backdrop-blur-sm text-white rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? "bg-orange-400 text-black"
                          : "bg-neutral-900/50 backdrop-blur-sm text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
                <p className="text-neutral-400 text-sm">
                  {filteredComponents.length} components found
                </p>
              </div>

              {/* Component Grid */}
              <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                {filteredComponents.map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 hover:bg-neutral-800/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedComponent(component.name)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-orange-400 transition-colors">
                        {component.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          component.status === "ready"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {component.status}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-2">
                      {component.category}
                    </p>
                    <p className="text-neutral-400 text-sm mb-4">
                      {component.description}
                    </p>
                    <div className="bg-neutral-800/50 rounded-lg p-6">
                      {component.preview}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedComponent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedComponent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-neutral-900/90 backdrop-blur-sm rounded-lg p-6 max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {
                        components.find((c) => c.name === selectedComponent)
                          ?.name
                      }
                    </h2>
                    <p className="text-neutral-400 text-sm mt-1">
                      {
                        components.find((c) => c.name === selectedComponent)
                          ?.category
                      }
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      components.find((c) => c.name === selectedComponent)
                        ?.status === "ready"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {
                      components.find((c) => c.name === selectedComponent)
                        ?.status
                    }
                  </span>
                </div>
                <p className="text-neutral-400 mb-6">
                  {
                    components.find((c) => c.name === selectedComponent)
                      ?.description
                  }
                </p>
                <div className="bg-neutral-800/50 rounded-lg p-6">
                  {
                    components.find((c) => c.name === selectedComponent)
                      ?.preview
                  }
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </BackgroundGradientAnimation>
  );
}
