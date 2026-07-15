"use client";

import React, { useState } from "react";
import { Download, Search, Code, Package, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

const components = [
  {
    name: "Button",
    category: "Basic",
    description: "A versatile button component with various styles and states",
    status: "ready",
    preview: (
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg bg-amber-400 px-4 py-2 text-black transition-colors hover:bg-amber-300">
            Primary
          </button>
          <button className="rounded-lg bg-neutral-800 px-4 py-2 text-white transition-colors hover:bg-neutral-700">
            Secondary
          </button>
          <button className="rounded-lg border border-amber-400 px-4 py-2 text-amber-400 transition-colors hover:bg-amber-400/10">
            Outline
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-white transition-opacity hover:opacity-90">
            Gradient
          </button>
          <button className="cursor-not-allowed rounded-lg bg-neutral-800 px-4 py-2 text-white opacity-50">
            Disabled
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-black">
            <Download className="h-4 w-4" />
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
          <button className="rounded-lg bg-neutral-800 px-4 py-2 text-white">
            Hover me
          </button>
          <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
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
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg bg-neutral-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-lg bg-neutral-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
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
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400">Select an option</label>
          <select className="rounded-lg bg-neutral-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
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
      <div className="flex w-full flex-col gap-4">
        <div className="rounded-lg bg-green-500/20 px-4 py-3 text-green-400">
          Success: Your changes have been saved
        </div>
        <div className="rounded-lg bg-red-500/20 px-4 py-3 text-red-400">
          Error: Something went wrong
        </div>
        <div className="rounded-lg bg-blue-500/20 px-4 py-3 text-blue-400">
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
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-semibold text-black">
            JD
          </div>
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-neutral-900 bg-green-400" />
        </div>
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white">
            <svg
              className="h-6 w-6"
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
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-neutral-900 bg-yellow-400" />
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
      <div className="flex w-full flex-col gap-4">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-neutral-600 accent-amber-400 focus:ring-amber-400"
          />
          <span className="text-sm">Default checkbox</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-neutral-600 accent-amber-400 focus:ring-amber-400"
          />
          <span className="text-sm">Checked checkbox</span>
        </label>
        <label className="flex cursor-not-allowed items-center gap-2 opacity-50">
          <input
            type="checkbox"
            disabled
            className="h-4 w-4 rounded border-neutral-600 accent-amber-400 focus:ring-amber-400"
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
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-12 rounded-lg bg-amber-400"
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
          <button className="rounded-lg bg-neutral-800 px-4 py-2 text-white">
            Click me
          </button>
          <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg bg-neutral-800 p-4 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-neutral-800" />
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
      <div className="flex w-full flex-col gap-4">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="radio-demo"
            className="h-4 w-4 border-neutral-600 accent-amber-400 focus:ring-amber-400"
          />
          <span className="text-sm">Option 1</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="radio-demo"
            defaultChecked
            className="h-4 w-4 border-neutral-600 accent-amber-400 focus:ring-amber-400"
          />
          <span className="text-sm">Option 2</span>
        </label>
        <label className="flex cursor-not-allowed items-center gap-2 opacity-50">
          <input
            type="radio"
            name="radio-demo"
            disabled
            className="h-4 w-4 border-neutral-600 accent-amber-400 focus:ring-amber-400"
          />
          <span className="text-sm">Option 3 (Disabled)</span>
        </label>
      </div>
    ),
  },
];

const categories = [
  { id: "all", name: "All", icon: <Layers className="h-4 w-4" /> },
  { id: "basic", name: "Basic", icon: <Package className="h-4 w-4" /> },
  { id: "form", name: "Form", icon: <Code className="h-4 w-4" /> },
  { id: "feedback", name: "Feedback", icon: <Code className="h-4 w-4" /> },
  { id: "animation", name: "Animation", icon: <Code className="h-4 w-4" /> },
  { id: "overlay", name: "Overlay", icon: <Code className="h-4 w-4" /> },
];

export default function ComponentLab() {
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
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
        <PageHeader
          eyebrow="Lab"
          title="Component lab"
          description="A playground for testing and exploring reusable UI components."
        />

        <div className="mt-10 flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-12 text-white placeholder:text-neutral-500 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-amber-400 text-black"
                    : "border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
          <p className="text-sm text-neutral-500">
            {filteredComponents.length} components found
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          {filteredComponents.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
              onClick={() => setSelectedComponent(component.name)}
            >
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-amber-400">
                  {component.name}
                </h3>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    component.status === "ready"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {component.status}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                {component.category}
              </p>
              <p className="mb-4 mt-2 text-sm text-neutral-400">
                {component.description}
              </p>
              <div className="rounded-xl border border-white/5 bg-black/30 p-6">
                {component.preview}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedComponent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedComponent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl rounded-2xl border border-white/10 bg-neutral-900 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const c = components.find((c) => c.name === selectedComponent);
                if (!c) return null;
                return (
                  <>
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{c.name}</h2>
                        <p className="mt-1 text-sm text-neutral-400">
                          {c.category}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          c.status === "ready"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <p className="mb-6 text-neutral-400">{c.description}</p>
                    <div className="rounded-xl border border-white/5 bg-black/30 p-6">
                      {c.preview}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <SiteFooter />
    </div>
  );
}
