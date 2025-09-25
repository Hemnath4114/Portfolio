import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            data-testid="text-about-title"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed text-muted-foreground"
                data-testid="text-about-description"
              >
                I'm a passionate full-stack developer who enjoys building solutions that 
                balance design aesthetics with strong backend performance. My focus is on 
                creating minimal, user-friendly web applications that solve real problems.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                With expertise in Next.js and the MERN stack, I bridge the gap between 
                beautiful user interfaces and robust server-side architecture. I'm 
                continuously learning and exploring modern web technologies to stay at 
                the forefront of development.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                When I'm not coding, you'll find me exploring new frameworks, contributing 
                to open source, or working on side projects that challenge my skills and 
                creativity.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/40">
                  &lt;/&gt;
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}