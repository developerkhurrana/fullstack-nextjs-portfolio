"use client";
import React from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
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
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 pt-32 sm:px-8">
        <PageHeader
          eyebrow="About"
          title="About me"
          description="Results-driven full-stack developer with 3+ years of experience building high-impact web applications. Proficient in React.js, Node.js, and design tools like Figma — adept at solving complex UI/UX challenges, optimizing performance, and streamlining workflows."
        />
        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
