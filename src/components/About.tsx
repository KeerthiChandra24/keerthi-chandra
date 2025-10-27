import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm <strong>Keerthi</strong> — a product thinker currently a final year student of Earth Sciences at IIT Kanpur. I work across user research, product strategy, and feature execution.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've driven engagement and retention improvements at <strong>Aerion Medtech</strong> and <strong>Laminar Stream Innovations</strong>, and I also scaled the IITK Product Club as a coordinator, publishing the first edition of <em>Product Management Casebook, IITK</em>, and making product learning accessible to 2000+ students.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work is grounded in understanding user pain points deeply and delivering outcomes that actually move the needle. I'm passionate about building user-first products, exploring GTM strategies, and blending analytical rigor with empathy-driven design.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl shadow-md border border-border">
                <h4 className="font-semibold text-lg mb-1 text-primary">B.S. in Earth Sciences</h4>
                <p className="text-foreground font-medium">IIT Kanpur</p>
                <p className="text-sm text-muted-foreground mt-1">2022 – 2026 (Expected)</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-md border border-border">
                <h4 className="font-semibold text-lg mb-1 text-primary">Class XII</h4>
                <p className="text-foreground">Vijaya Ratna Junior College, Hyderabad</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">96.8% • 2021</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-md border border-border">
                <h4 className="font-semibold text-lg mb-1 text-primary">Class X</h4>
                <p className="text-foreground">Bharatiya Vidya Bhavan's Public School, Hyderabad</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">95.8% • 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
