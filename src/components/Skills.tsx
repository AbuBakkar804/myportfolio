import { Code, Database, Brain, Terminal, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Python"],
    color: "from-primary to-primary/60",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Linear Regression", "Logistic Regression", "Decision Tree", "SVM", "KNN", "Naïve Bayes", "Random Forest"],
    color: "from-secondary to-secondary/60",
  },
  {
    title: "Data Science",
    icon: Database,
    skills: ["EDA", "Data Cleaning", "Data Visualization", "Data Analysis"],
    color: "from-primary to-secondary",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Streamlit", "ReportLab"],
    color: "from-secondary to-primary",
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["Object-Oriented Programming", "Problem Solving", "Analytical Thinking"],
    color: "from-primary/80 to-secondary/80",
  },
  {
    title: "Development Tools",
    icon: Terminal,
    skills: ["VS Code", "Dev-C++", "Git"],
    color: "from-secondary/80 to-primary/80",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// skills & expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            What I <span className="text-gradient">Know</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
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
