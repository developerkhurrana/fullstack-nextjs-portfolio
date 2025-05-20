import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed">
                Innovative Front-End and Back-End Developer with over 3 years of
                experience designing dynamic, user-friendly websites and
                applications. Passionate about creating seamless user
                experiences and implementing efficient solutions. Skilled in
                modern web technologies and best practices, with a strong focus
                on performance and accessibility.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
