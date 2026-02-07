import { motion } from "framer-motion";

const skills = [
  { name: "Python / Django / DRF", level: 95, color: "bg-yellow-500" },
  { name: "C++ / DSA", level: 92, color: "bg-blue-600" },
  { name: "Docker / Kubernetes", level: 88, color: "bg-cyan-500" },
  { name: "AWS / GCP / CloudFormation", level: 85, color: "bg-orange-500" },
  { name: "React / Redux / JavaScript", level: 85, color: "bg-blue-400" },
  { name: "PostgreSQL / Redis / Celery", level: 82, color: "bg-purple-500" },
  { name: "SaltStack / Nginx / CI/CD", level: 80, color: "bg-green-500" },
  { name: "Go / Java", level: 65, color: "bg-amber-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-foreground/60 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.6, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className={`absolute h-3 rounded-full ${skill.color}`}
                />
                <div className="h-3 w-full bg-muted rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}