import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cloud, Database, Layout, Award } from "lucide-react";
import { SiLeetcode, SiAmazonwebservices } from "react-icons/si";

export default function About() {
  const techStacks = {
    backend: ["Python", "Django", "DRF", "Flask", "C++", "Java", "Go", "Celery", "Redis"],
    frontend: ["React", "React Native", "Redux", "JavaScript", "HTML5/CSS3"],
    database: ["PostgreSQL", "SQLite", "MongoDB"],
    cloud: ["AWS", "GCP", "Docker", "Kubernetes", "Nginx", "SaltStack", "CI/CD", "ArgoCD"],
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Backend Developer with 4.5+ years of experience at T-Systems (Deutsche Telekom) and Consultadd Inc.
            Specialized in Python, Django, Docker, Kubernetes, and cloud automation on AWS &amp; GCP.
            I build scalable backend systems, optimize performance, and automate cloud deployments.
            B.Tech in CSE from Bankura Unnayani Institute of Engineering (9.1 CGPA, Department Topper).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="border-primary/20 hover:border-primary/50 shadow-sm dark:shadow-none transition-all duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <SiAmazonwebservices className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">AWS Certified Solutions Architect</h3>
                    <p className="text-foreground/60 text-sm">Associate (2023 — 2026)</p>
                    <a 
                      href="https://www.credly.com/badges/0d2ad17d-fbcc-4183-8217-555dd23ef5bf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors duration-200 text-foreground/60"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 shadow-sm dark:shadow-none transition-all duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <SiLeetcode className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">622+ LeetCode Problems</h3>
                    <p className="text-foreground/60 text-sm">Rating: 1,650 · Top 17.44% · 265 Easy · 304 Med · 53 Hard</p>
                    <a 
                      href="https://leetcode.com/u/suman_buie/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors duration-200 text-foreground/60"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="shadow-sm dark:shadow-none hover:border-primary/40 transition-all duration-200">
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

            <Card className="shadow-sm dark:shadow-none hover:border-primary/40 transition-all duration-200">
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

            <Card className="shadow-sm dark:shadow-none hover:border-primary/40 transition-all duration-200">
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

            <Card className="shadow-sm dark:shadow-none hover:border-primary/40 transition-all duration-200">
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

          <Card className="mt-6 shadow-sm dark:shadow-none hover:border-primary/40 transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Awards &amp; Achievements</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 text-sm">
                <li>Employee of the Quarter at T-Systems for critical contributions (April 2025)</li>
                <li>Dexter Annual Award 2022 — Top performer at Consultadd Inc</li>
                <li>Employee of the Month — 6 times at Consultadd Inc</li>
                <li>Global Rank 495 in TCS CodeVita 2020</li>
                <li>Global Rank 49 in CodeChef December Challenge 2020 (Div 2)</li>
                <li>Arctic Code Vault Contributor on GitHub</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}