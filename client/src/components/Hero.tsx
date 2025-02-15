import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
              Senior Full Stack Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experienced software engineer specializing in cloud-native applications and full-stack development.
            4+ years of expertise in Python, Node.js, React, and cloud technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="#projects">View Portfolio</a>
            </Button>
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