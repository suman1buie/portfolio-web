import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const projects = [
  {
    title: "Leetcode Solutions",
    description: "Active problem solver on LeetCode with focus on Data Structures, Algorithms, and System Design challenges.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    leetcode: "https://leetcode.com/u/suman_buie/",
    github: "https://github.com/suman1buie",
  },
  {
    title: "Open Source Contributions",
    description: "Active contributor to various open source projects, focusing on web development and system architecture.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    demo: "https://github.com/suman1buie",
    github: "https://github.com/suman1buie",
  },
  {
    title: "Backend Optimization",
    description: "Experience in designing and implementing scalable backend solutions using Python, Django, and Node.js",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    github: "https://github.com/suman1buie",
  },
  {
    title: "System Architecture",
    description: "Expertise in designing and implementing high-level (HLD) and low-level (LLD) system architectures",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    github: "https://github.com/suman1buie",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects & Contributions</h2>
        <div className="flex justify-center gap-6 mb-12">
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="https://github.com/suman1buie" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              GitHub Profile
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="https://leetcode.com/u/suman_buie/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="h-5 w-5" />
              LeetCode Profile
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2,
                translateZ: 20
              }}
              className="perspective-1000"
            >
              <Card className="overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl will-change-transform">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform-gpu transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </motion.div>
                <CardHeader>
                  <CardTitle className="relative z-10">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.leetcode && (
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.leetcode} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <Code2 className="h-4 w-4 mr-2" />
                          LeetCode
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}