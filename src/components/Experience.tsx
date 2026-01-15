import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const Experience = () => {
  return (
    <section id="resume" className="py-24 bg-dotted">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </Reveal>

        <Stagger className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <StaggerItem>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Experience</h3>
            </div>

            <div className="bg-card-gradient rounded-2xl border border-border p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-heading font-semibold">AI Intern</h4>
                  <p className="text-primary font-medium">University of New Hampshire</p>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  Aug - Dec 2025
                </span>
              </div>

              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Worked in a 4-member Agile team using GitHub, feature branches, and code reviews
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Processed UNH Graduate Catalog into structured chunks using contextual headers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Enhanced retrieval quality using tier ranking and program-based boosts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Achieved ~95% accuracy using BERTScore, SBERT similarity, and recall@k
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Integrated evaluation dashboards to visualize results and track progress
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Education */}
          <StaggerItem>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/20 rounded-xl">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Education</h3>
            </div>

            <div className="bg-card-gradient rounded-2xl border border-border p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-heading font-semibold">Master of Science</h4>
                  <p className="text-primary font-medium">Information Technology</p>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  Jan 2024 - Jan 2026
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-foreground font-medium">University of New Hampshire</span>
                <span>•</span>
                <span>Manchester, NH</span>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default Experience;
