import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Snowmelt Prediction & Dam Alert System",
    organization: "IIT Kanpur",
    description: "Developing a predictive hydrological model leveraging geospatial + climatic data to forecast snowmelt runoff. Using Temperature-Index modeling and ML (Random Forest, LSTM) to support early flood alerts.",
    tags: ["ML", "Python", "Geospatial"],
    color: "border-l-primary"
  },
  {
    title: "Community Mental Health Platform",
    organization: "Aerion Medtech",
    description: "Defined end-to-end product strategy for a moderated emotional support platform. Conducted persona research, mapped engagement loops, prioritized features, and defined retention and trust metrics.",
    tags: ["Product Strategy", "User Research", "KPI Mapping"],
    color: "border-l-secondary"
  },
  {
    title: "Academic Management Optimization",
    organization: "Laminar Stream",
    description: "Redesigned research workflow and onboarding experience to improve platform stickiness. Conducted 200+ user interactions and proposed activation nudges to reduce churn.",
    tags: ["UX Research", "Workflow Design", "Churn Analysis"],
    color: "border-l-accent"
  },
  {
    title: "E-Commerce Sustainability Case Study",
    organization: "The Summer of Product (Finalist)",
    description: "Designed UX intervention to display carbon footprint transparency without harming conversions. Built personas, prioritized features (RICE), and defined sustainability-linked North Star Metric.",
    tags: ["Product Design", "UX", "Sustainability"],
    color: "border-l-primary"
  },
  {
    title: "Skybags Brand Repositioning",
    organization: "Marketing Strategy Project",
    description: "Repositioned Skybags from style-focused to durability-led brand perception. Conducted primary research, SWOT analysis, and crafted campaign messaging with revised GTM channels.",
    tags: ["Marketing", "Brand Strategy", "GTM"],
    color: "border-l-secondary"
  },
  {
    title: "Bank Loan Risk Analysis Dashboard",
    organization: "Personal Project",
    description: "Built an interactive portfolio-risk dashboard analyzing 50k+ loan records. Implemented SQL-based ETL, DAX KPIs, and segmentation visuals to identify high-risk borrower clusters.",
    tags: ["SQL", "Power BI", "Analytics"],
    color: "border-l-accent"
  },
  {
    title: "Customer Segmentation via RFM",
    organization: "Personal Project",
    description: "Performed RFM clustering on large customer datasets to identify behavioral cohorts. Built segment profiles and recommended retention + reactivation strategies.",
    tags: ["Python", "K-Means", "Analytics"],
    color: "border-l-primary"
  },
  {
    title: "Stock Price Forecasting",
    organization: "Personal Project",
    description: "Compared ANN vs Random Forest for next-day stock price prediction using technical indicators. Demonstrated superior performance of ANN in handling non-linear volatility.",
    tags: ["Machine Learning", "ANN", "Finance"],
    color: "border-l-secondary"
  },
  {
    title: "MerlinAI Product Growth Strategy",
    organization: "ProdCamp (Top 8 Finalist)",
    description: "Proposed platform expansion strategy for accessibility. Identified user friction points, defined weekly active integrations as North Star metric, recommended integration roadmap.",
    tags: ["Product Strategy", "Growth", "Metrics"],
    color: "border-l-accent"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of product work spanning strategy, research, and execution.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-card p-6 rounded-2xl shadow-md border-l-4 ${project.color} border-t border-r border-b border-border card-hover animate-fade-in group`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-sm text-primary font-medium mb-3">{project.organization}</p>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary"
                    className="bg-primary/10 text-primary text-xs"
                  >
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

export default Projects;
