import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, Code2, Brain, Cloud, 
  BarChart3, GitBranch, Server, Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "text-primary",
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "Git"],
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    color: "text-accent",
    skills: ["Pandas", "NumPy", "Excel", "Data Visualization", "Jupyter Notebooks"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "text-primary",
    skills: ["Scikit-learn", "Basic Neural Networks", "Regression", "Classification"],
  },
  {
    title: "Web Development",
    icon: Workflow,
    color: "text-accent",
    skills: ["React", "Node.js", "REST APIs", "Responsive Design"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-primary",
    skills: ["MySQL", "PostgreSQL", "MongoDB (basics)"],
  },
  {
    title: "Tools & Platforms",
    icon: Cloud,
    color: "text-accent",
    skills: ["VS Code", "GitHub", "Google Colab", "Linux (basics)"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building intelligent, scalable systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary/50 text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;