import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  index: number;
}

export function ProjectCard({ title, description, techStack, githubUrl, liveUrl, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full hover-elevate group cursor-pointer" data-testid={`card-project-${index}`}>
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors" data-testid={`text-project-title-${index}`}>
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed" data-testid={`text-project-description-${index}`}>
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, techIndex) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted rounded-md font-mono"
                data-testid={`text-tech-${index}-${techIndex}`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover-elevate"
              data-testid={`button-github-${index}`}
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-elevate"
                data-testid={`button-live-${index}`}
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}