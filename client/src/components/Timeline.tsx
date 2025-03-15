import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "T-systems India Private ltd.",
    period: "Dec, 2023- Present",
    description: "Leading development of cloud-native applications and system architecture design.",
    skills: ["React", "Django", "Python", "Salt", "Postgrase", "GCP", "AWS", "System Design"],
    highlights: [
      "Designed and implemented scalable microservices architecture",
      "Led team of 5 developers in delivering enterprise solutions",
      "Reduced system response time by 40% through optimization"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    period: "2021 - 2023",
    description: "Developed and maintained full-stack web applications using modern technologies.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    highlights: [
      "Implemented responsive web applications with React",
      "Developed RESTful APIs using Node.js",
      "Improved application performance by 30%"
    ]
  },
  {
    title: "Software Engineer",
    company: "StartUp Technologies",
    period: "2019 - 2021",
    description: "Worked on developing and maintaining web applications.",
    skills: ["JavaScript", "Python", "Django", "MySQL"],
    highlights: [
      "Built and maintained customer-facing applications",
      "Implemented automated testing procedures",
      "Reduced bug reports by 45%"
    ]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'right-0 md:-right-3' : 'left-0 md:-left-3'
                } w-6 h-6 bg-background border-2 border-primary rounded-full`}
              />

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  
                  <p className="mb-4 text-muted-foreground">{experience.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
