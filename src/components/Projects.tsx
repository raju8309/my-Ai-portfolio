import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    number: "01",
    title: "PhotoMentorAI",
    description: "A real-time AI photography assistant that analyzes live camera frames using computer vision and deep-learning emotion recognition to provide instant visual and voice-based shooting guidance.",
    tech: ["React", "FastAPI", "Python", "OpenCV", "Deep Learning", "ONNX", "Docker"],
    highlights: [
      "End-to-end AI inference pipelines with ONNX-optimized FER+ model",
      "Low-latency emotion detection and multi-face analysis",
      "MLOps practices with Docker containerization"
    ]
  },
  {
    number: "02",
    title: "SafeLink AI",
    description: "A full-stack AI-powered health assistant enabling real-time symptom analysis, AI chat support, and nearby hospital discovery with intelligent fallback systems.",
    tech: ["React", "FastAPI", "Python", "Groq API", "Ollama", "CI/CD"],
    highlights: [
      "LLM integration with Groq API and Ollama fallback",
      "Rule-based medical logic for risk assessment",
      "Production deployment with CI/CD pipelines"
    ]
  },
  {
    number: "03",
    title: "Fake Job Posting Detector",
    description: "An AI-powered detection system using NLP and machine learning to classify job postings as real or fraudulent with probability-based risk scores.",
    tech: ["Python", "NLP", "TF-IDF", "Logistic Regression", "FastAPI", "Next.js"],
    highlights: [
      "ML models using TF-IDF feature extraction",
      "Scalable FastAPI backend with external API integration",
      "Full-stack deployment on Render and Vercel"
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dotted">
      <div className="container mx-auto px-6">
        <div className="mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            AI-powered solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`grid lg:grid-cols-2 gap-8 items-center opacity-0 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Project Card */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-card-gradient rounded-2xl border border-border p-8 hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-heading font-bold text-primary/30">{project.number}</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-border flex items-center justify-center hover-lift">
                  <div className="text-center">
                    <span className="text-6xl font-heading font-bold text-primary/20">{project.number}</span>
                    <p className="text-muted-foreground text-sm mt-2">{project.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
