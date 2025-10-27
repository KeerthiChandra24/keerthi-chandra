import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Product & Strategy",
    skills: ["Product Roadmapping", "User Research", "Requirement Scoping", "GTM Planning", "Feature Prioritization"],
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    title: "Analytics & Tools",
    skills: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Pandas"],
    color: "bg-secondary/10 text-secondary-foreground border-secondary/20"
  },
  {
    title: "Design & Execution",
    skills: ["Figma", "Wireframing", "Interaction Flows", "Workflow Mapping", "Information Architecture"],
    color: "bg-accent/10 text-accent-foreground border-accent/20"
  },
  {
    title: "Core Strengths",
    skills: ["Communication", "Structured Thinking", "User Empathy", "Analytical Decision-Making", "Cross-functional Collaboration"],
    color: "bg-primary/10 text-primary border-primary/20"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md border border-border card-hover"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline"
                    className={`${category.color} px-4 py-2 text-sm font-medium border`}
                  >
                    {skill}
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

export default Skills;
