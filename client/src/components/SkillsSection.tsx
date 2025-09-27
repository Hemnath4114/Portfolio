import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Language" },
  { name: "JavaScript", level: 90, category: "Language" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "PostgreSQL", level: 65, category: "Database" },
  { name: "Tailwind CSS", level: 85, category: "Styling" },
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Styling" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "RESTful APIs", level: 75, category: "Backend" },
  { name: "Vercel", level: 70, category: "Deployment" },
  { name: "Render", level: 65, category: "Deployment" },
  { name: "Figma", level: 60, category: "Design" },
  { name: "Canva", level: 70, category: "Design" },
];

const skillCategories = {
  Frontend: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  Backend: "bg-green-500/20 text-green-600 dark:text-green-400", 
  Language: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  Database: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  Styling: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  Tools: "bg-gray-500/20 text-gray-600 dark:text-gray-400",
  Deployment: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  Design: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            data-testid="text-skills-title"
          >
            Skills & Technologies
          </motion.h2>
          
          {/* Skills Progress Section */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {skills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Categories */}
          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            {Object.entries(
              skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
              }, {} as Record<string, typeof skills>)
            ).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-center mb-4">{category}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className={`text-sm py-2 px-4 hover-elevate cursor-default font-mono transition-all duration-200 ${skillCategories[category as keyof typeof skillCategories]}`}
                        data-testid={`badge-skill-${categoryIndex}-${index}`}
                      >
                        {skill.name}
                        <span className="ml-2 text-xs opacity-70">({skill.level}%)</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}