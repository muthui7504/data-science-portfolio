import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "data-science" | "software" | "ai-ml";

const projects = [
  /*{
    title: "Movie Recommendation System",
    category: "data-science" as const,
    description: "Built a content-based movie recommender using Python and collaborative filtering techniques for a class project.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    outcome: "Course project - learned data preprocessing and ML basics",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
  },*/
  {
    title: "Personal Portfolio Website",
    category: "software" as const,
    description: "Designed and built this responsive portfolio site to showcase my projects and skills.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    outcome: "Learned modern frontend development practices",
    github: "https://github.com/muthui7504/data-science-portfolio",
    demo: "https://simoportfolio.netlify.app/#experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  /*{
    title: "Sentiment Analysis Notebook",
    category: "ai-ml" as const,
    description: "Jupyter notebook analyzing Twitter sentiment using basic NLP techniques and visualization.",
    tech: ["Python", "NLTK", "Matplotlib"],
    outcome: "Explored text preprocessing and sentiment classification",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    title: "Todo App with Database",
    category: "software" as const,
    description: "Full-stack todo application with user authentication and persistent storage.",
    tech: ["React", "Node.js", "MongoDB"],
    outcome: "Learned full-stack development fundamentals",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    title: "Sales Data Dashboard",
    category: "data-science" as const,
    description: "Interactive dashboard visualizing sample sales data with filtering and charts.",
    tech: ["Python", "Plotly", "Streamlit"],
    outcome: "Practiced data visualization and dashboard creation",
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },*/
];

const categories = [
  { id: "all" as const, label: "All Projects" },
  { id: "data-science" as const, label: "Data Science" },
  { id: "software" as const, label: "Software Engineering" },
  { id: "ai-ml" as const, label: "AI / ML" },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of work that demonstrates problem-solving and technical expertise
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="project-card group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Outcome */}
                <div className="flex items-start gap-2 mb-4 p-3 bg-secondary/50 rounded-lg">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{project.outcome}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;