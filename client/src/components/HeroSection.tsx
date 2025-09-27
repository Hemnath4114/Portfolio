import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download, Code, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full Stack Web Developer",
    "React Specialist", 
    "Node.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadResume = () => {
    // Create a simple resume download
    const resumeContent = `
HEMNATH - FULL STACK WEB DEVELOPER
=====================================

Email: hemnath04112004@gmail.com
LinkedIn: https://www.linkedin.com/in/hemnath-marimuthu-in/
GitHub: https://github.com/Hemnath4114

PROFESSIONAL SUMMARY
===================
Passionate full-stack developer specializing in Next.js and MERN stack. 
Expertise in building visually beautiful and performance-driven web solutions.

TECHNICAL SKILLS
===============
• Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express.js, MongoDB, PostgreSQL
• Tools: Git, GitHub, Vercel, Render, Figma, Canva
• Languages: JavaScript, TypeScript, Python (Basic)

PROJECTS
========
1. ThinkNotes - Full-stack note-taking app (MERN Stack)
2. ReactBlog - Blogging platform with React.js
3. MoodTunes - Music UI categorization app
4. Next.js Dashboard - Modern dashboard application

EDUCATION & CERTIFICATIONS
==========================
• Continuous learning in modern web technologies
• Active contributor to open source projects
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Hemnath_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl md:text-5xl font-bold text-primary">
                  H
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="text-name"
          >
            HEMNATH
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-testid="text-role"
          >
            <span className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="font-mono">
                {displayedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            data-testid="text-tagline"
          >
            I love building solutions that are <span className="text-primary font-semibold">visually beautiful</span> and <span className="text-primary font-semibold">performance-driven</span>.
          </motion.p>

          <motion.div 
            className="mb-12 p-4 bg-muted/30 rounded-lg border border-primary/20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Currently Working On</span>
            </div>
            <p className="text-sm">
              Building an <span className="text-primary font-semibold">AI-powered project management tool</span> with React, TypeScript, and machine learning integration.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[160px] hover-elevate bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              data-testid="button-view-projects"
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="min-w-[160px] hover-elevate border-primary/20 hover:border-primary/40"
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={downloadResume}
              className="min-w-[160px] hover-elevate border-accent/20 hover:border-accent/40"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}