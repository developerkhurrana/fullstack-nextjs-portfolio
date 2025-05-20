import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VPN Super",
    description:
      "A modern VPN service platform with user authentication and subscription management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://qa.vpnsuperunlimited.com/en",
    github: "https://github.com/yourusername/vpn-super",
  },
  {
    title: "Nike Clone",
    description:
      "A responsive e-commerce website clone of Nike's official store.",
    tech: ["React", "Tailwind CSS", "Redux"],
    demo: "https://khurrananike.netlify.app/",
    github: "https://github.com/yourusername/nike-clone",
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive MERN stack application for managing hospital operations.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "https://github.com/yourusername/hospital-management",
  },
  {
    title: "Petlove",
    description: "A pet care and adoption platform with modern UI/UX design.",
    tech: ["Figma", "React", "Node.js"],
    demo: "#",
    github: "https://github.com/yourusername/petlove",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
