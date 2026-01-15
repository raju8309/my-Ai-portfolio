import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/data/profile.png";
import { Reveal } from "./Motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <Reveal className="space-y-6">
            <div>
              <p className="text-muted-foreground text-lg font-medium mb-2">Hello,</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
                Raju here! <span className="animate-wave">👋</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a <span className="text-foreground font-medium">AI Engineer</span> with <span className="text-foreground font-medium">2+ years of experience</span>, built through an internship and multiple end-to-end projects.
              I work across <span className="text-foreground font-medium">LLMs / GenAI</span>, <span className="text-foreground font-medium">RAG</span>, <span className="text-foreground font-medium">embeddings</span>, <span className="text-foreground font-medium">fine-tuning</span>, <span className="text-foreground font-medium">classical ML</span>, <span className="text-foreground font-medium">NLP</span>, <span className="text-foreground font-medium">Deep Learning</span>, <span className="text-foreground font-medium">Computer Vision</span>, and <span className="text-foreground font-medium">MLOps</span>—from experimentation to deployment and monitoring.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I completed my Master's in IT at the University of New Hampshire and I'm focused on building production-ready systems.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/raju8309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/raju-kotturi-609674304/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg"
              >
                <Linkedin size={22} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="hero" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1-BfwOb6jkLWPpeTrBcyh59MKfcXLeWLX/view?usp=share_link" target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  Resume
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:rajukotturi175@gmail.com">
                  <Mail size={18} />
                  rajukotturi175@gmail.com
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Right Content - Profile Image */}
          <Reveal className="relative flex justify-center lg:justify-end" delay={0.12}>
            <div className="relative w-full max-w-[520px]">
              <div className="relative h-[460px] md:h-[560px] w-full">
                <img
                  src={profileImage}
                  alt="Raju Kotturi profile"
                  className="absolute inset-0 h-full w-full object-cover object-center scale-[1.06] transition-transform duration-700 ease-out hover:scale-[1.12]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
