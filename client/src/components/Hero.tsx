import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative bg-gradient-to-b from-background via-background to-primary/10">
      <div className="text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Suman Mandal
            <span className="block text-xl md:text-2xl font-normal text-primary/80 mt-4">
              Backend Developer | Python, Django, Docker, K8S &amp; AWS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer at T-Systems (Deutsche Telekom) with 4.5+ years of experience building scalable backend systems. Specialized in Python, Django, Docker, Kubernetes &amp; cloud automation on AWS/GCP. AWS Certified Solutions Architect. 622+ LeetCode problems solved.
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
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/suman_buie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/suman-mandal-6113b41b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="text-foreground/50 hover:text-primary transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}