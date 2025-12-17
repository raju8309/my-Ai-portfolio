const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "C/C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "OpenCV", "TensorFlow", "ONNX", "pandas", "NumPy"],
  },
  {
    title: "AI/ML Tools",
    skills: ["NLP", "TF-IDF", "Logistic Regression", "BERT", "SBERT", "Deep Learning", "Computer Vision", "FER+"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Render", "Vercel", "CI/CD", "REST APIs", "CORS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite3"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card-gradient rounded-2xl border border-border p-6 hover-lift opacity-0 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <h3 className="text-lg font-heading font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
