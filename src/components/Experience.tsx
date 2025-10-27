import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Undergraduate Research Project",
    organization: "IIT Kanpur",
    period: "Apr 2025 – Present",
    description: "Developing predictive hydrological models for snowmelt-driven flood management using climatic datasets and ML-based forecasting pipelines.",
    tags: ["Hydrological Modeling", "Machine Learning", "Python"]
  },
  {
    title: "Founder's Office & Strategy Intern",
    organization: "Aerion Medtech",
    period: "Jun 2025 – Aug 2025",
    description: "Led product strategy for a community-based mental health platform. Conducted user interviews, competitor benchmarking, feature prioritization, and KPI mapping, earning a Letter of Recommendation.",
    tags: ["Product Strategy", "User Research", "Benchmarking"]
  },
  {
    title: "Product Strategy Intern",
    organization: "Laminar Stream Innovations",
    period: "Jul 2024 – Oct 2024",
    description: "Improved product adoption and user experience for an institutional academic management platform through user interviews, workflow mapping, persona building, and feature requirement documentation.",
    tags: ["UX Research", "Workflow Mapping", "Requirements"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.organization}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
