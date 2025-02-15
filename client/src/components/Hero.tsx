import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative bg-gradient-to-b from-background to-muted/20">
      <div className="text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            John Doe
            <span className="block text-xl md:text-2xl font-normal text-muted-foreground mt-4">
              Senior Full Stack Developer & System Architect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experienced software engineer specializing in cloud-native applications, system architecture, and full-stack development.
            4+ years of expertise in Python, Node.js, React, and system design (HLD/LLD).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="px-8" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="#projects">View Portfolio</a>
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/suman1buie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/suman_buie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/suman-mandal-6113b41b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}