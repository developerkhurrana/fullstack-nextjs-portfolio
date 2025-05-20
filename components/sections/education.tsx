import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Media Technology",
    institution: "ICAT Design and Media College",
    year: "Dec 2020",
  },
];

const certifications = [
  {
    title: "Certified Back-End Developer",
    issuer: "Virtual Badge",
    link: "https://www.virtualbadge.io/certificate-validator?credential=f1ac96bf-114a-420f-8b9c-a06ce73ef51e",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Education & Certifications
          </h2>

          {/* Education */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.degree}>
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="text-muted-foreground">
                      <p className="font-medium">{edu.institution}</p>
                      <p>{edu.year}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.title}>
                  <CardHeader>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <div className="text-muted-foreground">
                      <p className="font-medium">{cert.issuer}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
