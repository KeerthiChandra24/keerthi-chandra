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
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
          Get in <span className="text-primary relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's connect! Whether you have a project in mind or just want to chat about product strategy, I'd love to hear from you.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-11"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Message</label>
              <Textarea
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[140px] resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full h-12 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white font-semibold">
              Send Message
            </Button>
          </form>
          
          <div className="space-y-3">
            <a 
              href="tel:+919785661921"
              className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+91-9785661921</p>
              </div>
            </a>
            
            <a 
              href="mailto:keerthisrinayak@gmail.com"
              className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">keerthisrinayak@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="mailto:keerthi22@iitk.ac.in"
              className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email (Academic)</p>
                <p className="text-sm font-medium">keerthi22@iitk.ac.in</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/keerthi-chandra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">keerthi-chandra</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/keerthisrinayak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Github className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">keerthisrinayak</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
