"use client";

import { Widgets } from "@/components/widgets";
// import { Nav } from "@/components/nav"; // Removed Nav import
// import { Footer } from "@/components/footer"; // Removed Footer import
// import { AboutSection } from "@/components/sections/about"; // Removed AboutSection import
// import { SkillsSection } from "@/components/sections/skills"; // Removed SkillsSection import
// import { ProjectsSection } from "@/components/sections/projects"; // Removed ProjectsSection import
// import { ExperienceSection } from "@/components/sections/experience"; // Removed ExperienceSection import
// import { EducationSection } from "@/components/sections/education"; // Removed EducationSection import
// import { ContactSection } from "@/components/sections/contact"; // Removed ContactSection import
import { Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight-new";

const BehanceIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
  >
    <path
      d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
      fill="currentColor"
    />
  </svg>
);

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
