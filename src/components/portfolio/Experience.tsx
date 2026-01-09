import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "Chuka University",
    period: "2021 - 2025",
    description:
      "Studied programming, data structures, algorithms, and completed coursework in machine learning, AI, and software development.",
    highlights: ["Python", "Machine Learning", "Data Structures", "Projects"],
  },
  {
    type: "education",
    title: "Continuous Online Learning",
    company: "Coursera, Udemy, YouTube, AI Platforms",
    period: "2022 - Present",
    description:
      "Actively exploring AI, machine learning, Python, web development, and software engineering through online courses, tutorials, and AI platforms.",
    highlights: ["Self-motivated", "AI/ML", "Continuous Learning", "Hands-on Projects"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Continuous Learning</h2>
          <p className="section-subtitle mx-auto">
            My journey of learning, skill-building, and exploring AI and software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.title}-${exp.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative pl-12 md:pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 border-accent bg-accent/20" />

                  {/* Content */}
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-accent" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm text-primary mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Optional final note about ongoing learning */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + experiences.length * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 border-primary bg-primary/20" />
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-2">Always Learning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Continuously exploring AI platforms, tutorials, and hands-on projects to grow skills in machine learning, software development, and modern technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
