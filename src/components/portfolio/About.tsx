import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Lightbulb, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Fast Learner",
    description: "Quickly adapt to new technologies, tools, and frameworks.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Love breaking down complex challenges into practical solutions.",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description: "Write clean, efficient, and well-documented code every time.",
  },
  {
    icon: Zap,
    title: "Collaborator",
    description: "Thrive in team environments, sharing knowledge and ideas openly.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Software Engineer | Data Scientist | ML Enthusiast
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm Simon, a Software Engineer and Data Scientist passionate about building 
              intelligent, user-centered software. I love tackling complex problems 
              with practical solutions and exploring machine learning to make data 
              actionable and impactful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive in fast-paced environments where I can learn continuously, 
              experiment, and contribute to projects that make a real difference. 
              Collaboration, curiosity, and creativity drive everything I do.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy experimenting with new tech, optimizing workflows, 
              and transforming ideas into scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-card px-4 py-2">
                <span className="text-primary font-mono text-sm">2025</span>
                <span className="text-muted-foreground text-sm ml-2">Graduate</span>
              </div>
              <div className="glass-card px-4 py-2">
                <span className="text-primary font-mono text-sm">5+</span>
                <span className="text-muted-foreground text-sm ml-2">Projects</span>
              </div>
              <div className="glass-card px-4 py-2">
                <span className="text-primary font-mono text-sm">Open</span>
                <span className="text-muted-foreground text-sm ml-2">To Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="skill-card"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
