import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Search, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "AI-Driven Development",
    description: "Integrate AI tools like ChatGPT and Claude into software workflows to accelerate development and solve complex problems.",
  },
  {
    icon: MessageSquare,
    title: "Prompt Engineering",
    description: "Write precise prompts to guide AI models, improving code generation, testing, and prototyping.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Critically evaluate AI-generated code and content for accuracy, efficiency, and maintainability.",
  },
  {
    icon: Brain,
    title: "ML Fundamentals",
    description: "Hands-on experience with machine learning concepts, neural networks, and practical applications in software projects.",
  },
];

const interests = [
  { value: "Curious", label: "About AI/ML" },
  { value: "Innovating", label: "With Projects" },
  { value: "Learning", label: "Continuously" },
];

const AIExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Brain size={16} />
            AI & ML Enthusiast
          </div>
          <h2 className="section-title">AI in Software Development</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Leveraging AI and machine learning to build smarter, faster, and more efficient software solutions.
          </p>
        </motion.div>

        {/* Interests - Bigger cards with proper text wrapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {interests.map((item) => (
            <div
              key={item.label}
              className="glass-card p-8 text-center rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-3 break-words whitespace-normal">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground break-words whitespace-normal">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <capability.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looking Forward Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 glass-card p-8 max-w-3xl mx-auto hover:shadow-xl transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-4">What I’m Looking For</h3>
          <p className="text-muted-foreground leading-relaxed">
            I’m looking for a place where I can grow as a software engineer while working on products that meaningfully use AI and machine learning. I want to learn from experienced engineers, apply data-driven thinking in real projects, and contribute to building reliable, scalable software that solves real-world problems. I value mentorship, collaboration, and continuous improvement, and I’m motivated by environments that challenge me to become better every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIExperience;
