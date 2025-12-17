import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-dotted flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 opacity-0 animate-fade-in-up">
            <div>
              <p className="text-muted-foreground text-lg font-medium mb-2">Hello,</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
                Raju here! <span className="animate-wave">👋</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a 🤖 <span className="text-foreground font-medium">AI/ML Engineer</span> & Full-Stack Developer pursuing my Master's in IT at UNH. Specializing in building intelligent systems using Deep Learning, Computer Vision, and NLP.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              All things AI: <span className="text-primary">Deep Learning</span>. <span className="text-primary">Computer Vision</span>. <span className="text-primary">NLP</span>.
              <br />
              Yep, I do them all.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Let's build intelligent solutions that are not just functional but also inspiring. Systems that learn, adapt, and make a difference.
            </p>

            <p className="text-foreground font-medium">Keep Learning! 🚀</p>

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
                href="https://linkedin.com/in/raju-kotturi"
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
                <a href="#resume">
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
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end opacity-0 animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/40 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/40 rounded-br-3xl" />
              
              {/* Profile image placeholder */}
              <div className="w-72 h-96 md:w-80 md:h-[420px] rounded-2xl bg-card-gradient border border-border overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-primary">RK</span>
                    </div>
                    <p className="text-muted-foreground text-sm">AI/ML Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
