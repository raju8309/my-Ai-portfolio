import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              AI-powered solutions built with cutting-edge technologies
            </p>
          </Reveal>

          <div className="relative">
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <StaggerItem
                  key={project.id}
                  className={`group cursor-pointer rounded-2xl border border-white/10 bg-[#121826] p-5 md:p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/project-details#${project.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") navigate(`/project-details#${project.id}`);
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-primary/80">
                          Project #{String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="mt-1 text-lg md:text-xl font-heading font-bold transition-colors duration-300 group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="hidden md:flex items-center gap-2">
                        {project.githubUrl ? (
                          <Button
                            asChild
                            variant="outline"
                            size="icon"
                            aria-label="GitHub"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                              <Github />
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="icon" aria-label="GitHub" disabled onClick={(e) => e.stopPropagation()}>
                            <Github />
                          </Button>
                        )}
                        {project.demoUrl ? (
                          <Button
                            asChild
                            variant="outline"
                            size="icon"
                            aria-label="Live demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a href={project.demoUrl} target="_blank" rel="noreferrer">
                              <ExternalLink />
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="icon" aria-label="Live demo" disabled onClick={(e) => e.stopPropagation()}>
                            <ExternalLink />
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/20">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200 transition-colors duration-300 group-hover:border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div className="text-xs text-muted-foreground">Click card for details</div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="hero"
                          size="sm"
                          className="transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/project-details#${project.id}`);
                          }}
                        >
                          View Details
                          <ExternalLink />
                        </Button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
