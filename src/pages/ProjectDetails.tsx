import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2, Cpu, ExternalLink, Github, Layers } from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

type ImplementationStep = {
  title: string;
  bullets: string[];
};

const isImplementationStep = (value: unknown): value is ImplementationStep => {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof (value as { title?: unknown }).title === "string" &&
    "bullets" in value &&
    Array.isArray((value as { bullets?: unknown }).bullets)
  );
};

const ProjectDetails = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-[#0d1117] text-white pt-24 min-h-screen">
      <main className="container mx-auto px-6 pb-24">
        <Reveal>
          <div className="py-12 border-b border-white/5 mb-12 flex justify-between items-end">
            <div>
              <h4 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">Project Deep Dives</h4>
              <h1 className="text-4xl md:text-5xl font-bold font-heading">Technical Implementations</h1>
            </div>
          </div>
        </Reveal>

        {projects.map((project) => (
          <Reveal key={project.id}>
            <section id={project.id} className="py-24 border-b border-white/5 last:border-0 scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-14 items-start">
                <div>
                  <h2 className="text-4xl font-bold mb-2 font-heading">{project.title}</h2>
                  <p className="text-emerald-400 font-bold mb-6 uppercase tracking-widest text-sm">{project.subtitle}</p>
                  <p className="text-slate-300 leading-relaxed mb-8">{project.description}</p>

                  <Stagger className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech) => (
                      <StaggerItem
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-medium text-slate-200"
                      >
                        {tech}
                      </StaggerItem>
                    ))}
                  </Stagger>

                  <Stagger className="flex flex-wrap items-center gap-3">
                    <StaggerItem>
                      {project.githubUrl ? (
                        <Button asChild variant="outline">
                          <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Github />
                            GitHub
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" disabled>
                          <Github />
                          GitHub
                        </Button>
                      )}
                    </StaggerItem>

                    <StaggerItem>
                      {project.demoUrl ? (
                        <Button asChild variant="glow">
                          <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button variant="glow" disabled>
                          <ExternalLink />
                          Live Demo
                        </Button>
                      )}
                    </StaggerItem>
                  </Stagger>
                </div>

                <Reveal delay={0.08}>
                  <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/20">
                    <div className="aspect-video">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>

              <Stagger className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
                <StaggerItem className="bg-[#1a1f2e] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Layers className="text-emerald-400" size={24} /> Key Highlights
                  </h3>
                  <ul className="space-y-5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-4 text-slate-300">
                        <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                        <span className="text-sm md:text-base leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>

                <StaggerItem className="bg-[#1a1f2e] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Cpu className="text-emerald-400" size={24} /> Detailed Implementation
                  </h3>

                  {project.implementation.length > 0 && isImplementationStep(project.implementation[0]) ? (
                    <div className="space-y-10">
                      {(project.implementation as ImplementationStep[]).map((implStep, i) => (
                        <div key={i} className="space-y-4">
                          <h4 className="text-lg md:text-xl font-semibold text-white">{implStep.title}</h4>
                          <ul className="space-y-3">
                            {implStep.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex gap-4 text-slate-300">
                                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={18} />
                                <span className="text-sm md:text-base leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-5">
                      {(project.implementation as string[]).map((step, i) => (
                        <li key={i} className="flex gap-4 text-slate-300">
                          <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                          <span className="text-sm md:text-base leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </StaggerItem>
              </Stagger>
            </section>
          </Reveal>
        ))}
      </main>
    </div>
  );
};

export default ProjectDetails;