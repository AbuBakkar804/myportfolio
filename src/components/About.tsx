import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// about me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-medium">Computer Science student</span> at UET Mardan, 
              with a strong focus on <span className="text-primary font-medium">Artificial Intelligence</span> and 
              <span className="text-primary font-medium"> Machine Learning</span>. I love building innovative solutions 
              that leverage the power of data and intelligent algorithms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my internship at Zoobi Apps and Games Technology, I gained hands-on experience in 
              Generative AI and Data Science, working on real-world projects that strengthened my analytical 
              and problem-solving skills.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Quick Learner", "Team Player", "Analytical Thinker"].map((trait) => (
                <span key={trait} className="px-4 py-2 rounded-full glass-card text-sm font-mono text-primary">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Education Card */}
          <div className="glass-card rounded-2xl p-8 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">Academic Background</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/30">
                <h4 className="font-semibold text-lg">BS in Computer Science</h4>
                <p className="text-primary font-medium">University of Engineering & Technology (UET), Mardan</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    2024 – 2028 (Expected)
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    CGPA: 2.62
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <h4 className="font-semibold mb-4">Languages</h4>
              <div className="space-y-3">
                {[
                  { name: "English", level: 80 },
                  { name: "Urdu", level: 95 },
                  { name: "Pashto", level: 100 },
                ].map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span className="text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
