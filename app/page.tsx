"use client";

import { Widgets } from "@/components/widgets";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <section className="w-full h-screen flex flex-col justify-center items-center text-center relative">
        <Spotlight />
        <div className="absolute inset-0 w-full h-full z-0">
          <Widgets />
        </div>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 relative z-30 px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Kshitij Khurrana
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide"
          >
            Crafting Digital Experiences Through
          </motion.p>
          <div className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-semibold text-3xl md:text-5xl">
            <FlipWords
              words={[
                "Web Design",
                "UI/UX",
                "Graphic Design",
                "Branding",
                "Wireframes",
                "Prototypes",
                "Design Systems",
                "User Research",
                "Interaction Design",
                "Visual Identity",
                "Responsive Design",
                "Figma",
                "Adobe XD",
                "Photoshop",
                "Illustrator",
                "Front-End",
                "Creative Direction",
              ]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="/projects"
              className="backdrop-blur-md bg-white/10 text-white"
            >
              View Works
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="https://drive.google.com/file/d/1HdpZxsvd9hZuo8WWZRPy8aVYZmeoVfNy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white"
            >
              <Download className="mr-2 h-4 w-4 inline" />
              Download Resume
            </HoverBorderGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-6 mt-12"
          >
            {/* Social buttons removed as requested */}
          </motion.div>
        </motion.div>
      </section>
      {/* Removed all other sections */}
    </main>
  );
}
