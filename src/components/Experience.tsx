import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// professional journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

          {/* Experience Card */}
          <div className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto md:pr-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-0 top-8 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 md:-ml-px">
              <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
            </div>

            <div className="glass-card rounded-2xl p-8 hover-lift">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Intern – Generative AI / Data Science</h3>
                  <p className="text-primary font-medium">Zoobi Apps and Games Technology</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  June 2025 – August 2025
                </span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                {[
                  "Developed interactive web applications using Streamlit",
                  "Performed data cleaning, visualization, and analysis on real datasets",
                  "Conducted Exploratory Data Analysis (EDA)",
                  "Implemented ML algorithms: Linear Regression, Logistic Regression, Decision Tree, SVM, KNN, Naïve Bayes, Random Forest",
                  "Strengthened problem-solving, analytical, and research skills"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
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

export default Experience;
