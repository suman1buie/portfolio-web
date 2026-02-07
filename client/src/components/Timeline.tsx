import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "T-Systems ICT India Pvt. Ltd. (Deutsche Telekom)",
    period: "Dec 2023 — Present",
    description: "Lead development on Cosmos, a Django & SaltStack-based hybrid cloud SAP solution using K8S and ArgoCD for maintenance-free rollouts.",
    skills: ["Python", "Django", "DRF", "SaltStack", "PostgreSQL", "Celery", "AWS", "GCP", "K8S", "ArgoCD"],
    highlights: [
      "Migrated job queue from QCluster to Celery & Redis, improving performance by 40%",
      "Optimized SaltStack server memory with garbage collection, enabling 30% more concurrent requests",
      "Introduced multithreading in Day-2 features, improving execution speed by 40%",
      "Automated secure SHCC/MCOS server deployments on AWS & GCP using CloudFormation & Shell scripts",
      "Employee of the Quarter for critical contributions (April 2025)"
    ]
  },
  {
    title: "Software Engineer",
    company: "Consultadd Inc",
    period: "Aug 2021 — Dec 2023",
    description: "Built cloud-based productivity platforms and internal tools, improving departmental efficiency via centralized tracking.",
    skills: ["Python", "Django", "DRF", "React", "Redux", "AWS", "Nginx", "Redis", "Celery"],
    highlights: [
      "Developed a React-based bug-tracker library published to npm",
      "Built a cloud-based productivity platform improving departmental efficiency",
      "Designed REST APIs (Django REST Framework) for ATS, Finance, and Bench Sales modules",
      "Deployed on AWS (EC2, S3), integrated Slack/Teams webhooks, set up Celery with Redis",
      "Won Dexter Annual Award 2022 — Top performer; Employee of the Month 6 times"
    ]
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Bankura Unnayani Institute of Engineering",
    period: "2017 — 2021",
    description: "Department Topper with 9.1 CGPA. Built multiple projects in Python, Django, and OpenCV during college.",
    skills: ["C++", "Python", "Java", "Django", "OpenCV", "Data Structures", "Algorithms"],
    highlights: [
      "Topped the CSE department with 9.1 CGPA",
      "Built 'buieSpace' — a collaborative student platform (final year project)",
      "Created Virtual Painting App using OpenCV (7 ⭐ on GitHub)",
      "Global Rank 495 in TCS CodeVita 2020; Rank 49 in CodeChef Dec Challenge 2020 (Div 2)"
    ]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
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

              <Card className="group shadow-sm dark:shadow-none hover:shadow-xl hover:border-primary/40 transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-primary/70">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{experience.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  <div className="flex items-center gap-2 mb-4 text-foreground/70">
                    <Briefcase className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  
                  <p className="mb-4 text-foreground/70">{experience.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-foreground/70">
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
