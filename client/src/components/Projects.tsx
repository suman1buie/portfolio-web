import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const projects = [
  {
    title: "Virtual Painting App",
    description: "A virtual painting application built using OpenCV and Python3 — draw in the air using hand gestures tracked by your webcam. ⭐ 7 stars",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    github: "https://github.com/suman1buie/Virtual-painting-app",
  },
  {
    title: "piKbazar",
    description: "A fullstack e-commerce web application built on the Django framework with SQLite database for product listings and management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    github: "https://github.com/suman1buie/piKbazar",
  },
  {
    title: "Smart Attendance System",
    description: "An intelligent attendance management system built with Python, leveraging computer vision for automated face recognition.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    github: "https://github.com/suman1buie/smart_attendence_system",
  },
  {
    title: "buieSpace",
    description: "Final year college project — a collaborative web platform for students and teams to connect and share resources.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    github: "https://github.com/suman1buie/buieSpace",
  },
  {
    title: "E-Commerce Site",
    description: "A full-featured e-commerce website built with Django, featuring product catalog, cart system, and order management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    github: "https://github.com/suman1buie/e-com",
  },
  {
    title: "LeetCode Journey",
    description: "622+ problems solved on LeetCode in C++ & Python. Contest rating 1,650 (Top 17.44%). Strong in DP, Backtracking, and Graph algorithms.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    leetcode: "https://leetcode.com/u/suman_buie/",
    github: "https://github.com/suman1buie",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
            >
              <Card className="overflow-hidden shadow-sm dark:shadow-none transform-gpu transition-all duration-200 hover:shadow-xl hover:border-primary/40 will-change-transform">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <CardHeader className="-mt-12 relative z-10">
                  <CardTitle className="text-white drop-shadow-md">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
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