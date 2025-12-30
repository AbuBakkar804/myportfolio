import { ExternalLink, Github, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ATM Account Simulator",
    description: "A comprehensive ATM system built using Object-Oriented Programming principles. Features include account creation, deposits, withdrawals, and balance inquiries with secure transaction handling.",
    tech: ["C++", "OOP"],
    icon: CreditCard,
    gradient: "from-primary to-accent",
    features: [
      "Account creation & management",
      "Deposit & withdrawal operations",
      "Balance inquiry system",
      "OOP design patterns"
    ]
  },
  {
    title: "Hospital Discharge Summary Generator",
    description: "A Streamlit-based web application that generates professional hospital discharge summaries. Utilizes ReportLab for PDF generation with comprehensive data validation.",
    tech: ["Python", "Streamlit", "ReportLab"],
    icon: FileText,
    gradient: "from-secondary to-primary",
    features: [
      "Interactive web interface",
      "Professional PDF generation",
      "Patient data validation",
      "Hospital record management"
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// featured work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-7 h-7 text-background" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
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
