import { Mail, MapPin, Phone, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="animate-slide-up animation-delay-200 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="text-foreground">Abu</span>{" "}
          <span className="text-gradient">Bakkar</span>
        </h1>

        {/* Title */}
        <p className="animate-slide-up animation-delay-400 text-xl md:text-2xl text-muted-foreground font-light mb-8">
          <span className="font-mono text-primary">&lt;</span>
          BS Computer Science Student • Aspiring AI & Software Engineer
          <span className="font-mono text-primary">/&gt;</span>
        </p>

        {/* Contact Info */}
        <div className="animate-slide-up animation-delay-600 flex flex-wrap justify-center gap-4 mb-10">
          <a href="mailto:abubakkar735037@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover-lift text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">abubakkar735037@gmail.com</span>
          </a>
          <a href="tel:+923285322360" className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover-lift text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">0328-5322360</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Swabi, Pakistan</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in animation-delay-600 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="#projects">
              View Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
