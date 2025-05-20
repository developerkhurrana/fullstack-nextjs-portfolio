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
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const navItems = [
    { name: "Works", link: "/projects" },
    { name: "Coding", link: "/coding" },
    { name: "About", link: "/about" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const timelineData = [
    {
      title: "2023",
      content: [
        {
          title: "Web Designer - Team Leader",
          description: "TSSS Infotech and Infra",
          achievements: [
            "Led a team of 3 designers to deliver 10+ client projects, achieving a 95% on-time delivery rate",
            "Designed and developed an Employee Portal, streamlining internal processes and improving usability",
            "Conducted onboarding and training sessions for new recruits, improving team productivity by 25%",
            "Optimized project workflows to ensure high-quality, functional designs aligned with client requirements",
          ],
          technologies: [
            "UI/UX Design",
            "Team Leadership",
            "Project Management",
            "Training & Development",
          ],
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Professional Certifications",
          description: "Virtual Badge",
          achievements: [
            "Certified Back-End Developer - REST APIs, Node.js, MongoDB",
            "Certified Front-End Developer - React.js, JavaScript, UI/UX",
            "Certified Full-Stack Developer - MERN Stack, Database Management, RESTful APIs",
          ],
          technologies: [
            "MERN Stack",
            "REST APIs",
            "Database Management",
            "UI/UX Design",
          ],
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "B.Sc. in Media Technology",
          description: "ICAT Design and Media College",
          achievements: [
            "Completed degree with focus on media technology and design",
            "Developed strong foundation in digital media and technology",
          ],
          technologies: [
            "Media Technology",
            "Digital Design",
            "Technology Integration",
          ],
        },
      ],
    },
  ];

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
      <div className="pt-24 max-w-7xl mx-auto px-4">
        {/* About Me Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg text-neutral-300">
            Results-driven Full-Stack Developer with 3+ years of experience
            building high-impact web applications. Proficient in React.js,
            Node.js, and UI/UX design tools like Figma. Adept at solving complex
            UI/UX challenges, optimizing application performance, and
            streamlining project workflows.
          </p>
        </section>
        {/* Timeline Section */}
        <Timeline data={timelineData} />
      </div>
    </main>
  );
}
