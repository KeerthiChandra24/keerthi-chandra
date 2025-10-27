import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss product strategy? Feel free to reach out.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[120px] resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <a 
                href="mailto:keerthisrinayak@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">keerthisrinayak@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="mailto:keerthi22@iitk.ac.in"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                  <Mail className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Academic Email</p>
                  <p className="font-medium">keerthi22@iitk.ac.in</p>
                </div>
              </a>
              
              <a 
                href="tel:+919785661921"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9785661921</p>
                </div>
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://linkedin.com/in/keerthi-chandra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/keerthisrinayak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
