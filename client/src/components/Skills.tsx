import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-blue-400" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "Python", level: 75, color: "bg-yellow-500" },
  { name: "SQL", level: 85, color: "bg-purple-500" },
  { name: "AWS", level: 70, color: "bg-orange-500" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground transition-opacity group-hover:opacity-100 opacity-0">
                  {skill.level}%
                </span>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`absolute h-2 rounded-full ${skill.color}`}
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
                <div className="h-2 w-full bg-muted rounded-full" />
              </div>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-2 p-2 bg-popover rounded shadow-lg text-sm"
                >
                  <p className="text-foreground">Experience Level: {skill.level}%</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}