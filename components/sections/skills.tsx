import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const skillsData = {
  frontend: [
    { name: "HTML5", description: "Semantic markup and modern web standards" },
    {
      name: "CSS3",
      description: "Advanced styling, animations, and responsive design",
    },
    {
      name: "JavaScript",
      description: "ES6+, modern JavaScript features and patterns",
    },
    {
      name: "React",
      description: "Component-based architecture and state management",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
    },
    { name: "jQuery", description: "DOM manipulation and AJAX requests" },
  ],
  backend: [
    { name: "Node.js", description: "Server-side JavaScript runtime" },
    {
      name: "Express.js",
      description: "Web application framework for Node.js",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for scalable applications",
    },
    {
      name: "RESTful APIs",
      description: "Design and implementation of RESTful services",
    },
  ],
  uiux: [
    { name: "Figma", description: "UI/UX design and prototyping" },
    { name: "Photoshop", description: "Image editing and manipulation" },
    { name: "Illustrator", description: "Vector graphics and illustration" },
    { name: "Canva", description: "Quick design solutions and templates" },
  ],
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX Tools</TabsTrigger>
            </TabsList>

            {Object.entries(skillsData).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <Card key={skill.name}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">
                          {skill.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {skill.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
