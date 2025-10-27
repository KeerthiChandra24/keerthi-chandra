import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/20" />
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Keerthi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Product Thinker | Strategy, Research & Execution at the Intersection of Tech and Users
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Final year student at IIT Kanpur, passionate about building user-first products and exploring GTM strategies with analytical rigor and empathy-driven design.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://drive.google.com/drive/folders/1ejjb2mwbv_lE4s2aMXY4nM-0qE7salPx?usp=drive_link', '_blank')}
              >
                View CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get in touch
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src="https://i.postimg.cc/MTt3dRty/professional-picture-square.jpg" 
                alt="Keerthi Chandra"
                className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
