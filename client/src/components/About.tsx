import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cloud, Database, Layout } from "lucide-react";

export default function About() {
  const techStacks = {
    backend: ["Python", "Django", "Flask", "Node.js", "Serverless"],
    frontend: ["React", "TypeScript", "JavaScript", "HTML5/CSS3"],
    database: ["PostgreSQL", "DynamoDB", "MongoDB"],
    cloud: ["AWS", "GCP", "Docker", "CI/CD"],
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seasoned Full Stack Developer with 4 years of industry experience, specializing in building
            scalable cloud-native applications. I've successfully delivered enterprise-grade solutions
            across various domains, from high-load microservices to responsive web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStacks.backend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layout className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStacks.frontend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Database Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStacks.database.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Cloud className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStacks.cloud.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            My experience includes architecting and implementing cloud-native solutions using AWS and GCP,
            developing RESTful APIs with Python (Django/Flask) and Node.js, and creating responsive
            front-end applications using React and TypeScript. I'm passionate about writing clean,
            maintainable code and implementing CI/CD pipelines for automated testing and deployment.
          </p>
        </div>
      </motion.div>
    </section>
  );
}