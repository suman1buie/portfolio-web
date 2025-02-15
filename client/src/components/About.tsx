import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cloud, Database, Layout, FileCode, GitBranch } from "lucide-react";
import { SiAmazon } from "react-icons/si";

export default function About() {
  const techStacks = {
    backend: ["Python", "Django", "Flask", "Node.js", "Serverless"],
    frontend: ["React", "TypeScript", "JavaScript", "HTML5/CSS3"],
    database: ["PostgreSQL", "DynamoDB", "MongoDB"],
    cloud: ["AWS", "GCP", "Docker", "CI/CD"],
    systemDesign: ["HLD", "LLD", "Microservices", "API Design", "System Architecture"],
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
            scalable cloud-native applications and designing robust system architectures. I've successfully 
            delivered enterprise-grade solutions across various domains, from high-load microservices 
            to distributed systems and responsive web applications.
          </p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <SiAmazon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-lg">AWS Certified Solutions Architect</h3>
                  <p className="text-muted-foreground">
                    <a 
                      href="https://www.credly.com/badges/0d2ad17d-fbcc-4183-8217-555dd23ef5bf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      View Certificate
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileCode className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">System Design & Architecture</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStacks.systemDesign.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            My expertise spans from designing high-level system architectures (HLD) to implementing 
            detailed component designs (LLD). I excel at architecting cloud-native solutions using 
            AWS and GCP, developing scalable RESTful APIs, and creating responsive front-end 
            applications. With a strong foundation in system design principles, I ensure that 
            applications are not only functional but also maintainable, scalable, and performant.
          </p>
        </div>
      </motion.div>
    </section>
  );
}