import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 border-t border-border bg-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating modern, scalable web applications 
              with beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://github.com/Hemnath4114" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hemnath-marimuthu-in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hemnath04112004@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <motion.div 
          className="pt-8 border-t border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2" data-testid="text-footer">
            © {new Date().getFullYear()} Hemnath. Built with 
            <Heart className="w-4 h-4 text-red-500" />
            using React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}