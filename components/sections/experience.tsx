import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  {
    title: "Web Designer – Team Leader",
    company: "TSSS Infotech and Infra",
    period: "Oct 2020 – Jun 2023",
    responsibilities: [
      "Led a team of 5 developers in creating responsive web applications",
      "Implemented A/B testing strategies to optimize user experience",
      "Conducted UI/UX reviews and provided constructive feedback",
      "Managed project timelines and resource allocation",
      "Collaborated with stakeholders to define project requirements",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((job) => (
              <Card key={job.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <div className="text-muted-foreground">
                    <p className="font-medium">{job.company}</p>
                    <p>{job.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
