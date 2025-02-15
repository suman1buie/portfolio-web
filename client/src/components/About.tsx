import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            With over 5 years of experience in web development, I specialize in building
            scalable applications using modern technologies. My journey in tech started
            with a curiosity about how things work on the internet, which led me to
            pursue a career in software development.
          </p>
          <p>
            I've worked with startups and established companies, helping them bring
            their ideas to life through clean code and intuitive user interfaces.
            When I'm not coding, you can find me contributing to open-source projects
            or writing technical articles on my blog.
          </p>
          <p>
            I believe in continuous learning and staying up-to-date with the latest
            industry trends and best practices. My goal is to create meaningful
            applications that make a positive impact on users' lives.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
