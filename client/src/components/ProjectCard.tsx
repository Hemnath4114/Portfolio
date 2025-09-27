import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye, Star, Calendar } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  features?: string[];
  status?: string;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  techStack, 
  githubUrl, 
  liveUrl, 
  image, 
  features = [], 
  status = "Live", 
  index 
}: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
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
      <Card className="h-full hover-elevate group cursor-pointer overflow-hidden" data-testid={`card-project-${index}`}>
        {/* Project Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                <Eye className="w-8 h-8 text-muted-foreground" />
              </div>
            )}
            <div className="absolute top-3 right-3">
              <Badge 
                variant={status === "Live" ? "default" : "secondary"}
                className="text-xs"
              >
                {status}
              </Badge>
            </div>
          </div>
        )}

        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl group-hover:text-primary transition-colors" data-testid={`text-project-title-${index}`}>
              {title}
            </CardTitle>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3 h-3" />
              <span>Featured</span>
            </div>
          </div>
          <CardDescription className="text-base leading-relaxed" data-testid={`text-project-description-${index}`}>
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Features */}
          {features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {features.map((feature, featureIndex) => (
                  <Badge key={featureIndex} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-muted rounded-md font-mono hover:bg-muted/80 transition-colors"
                  data-testid={`text-tech-${index}-${techIndex}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover-elevate flex-1"
              data-testid={`button-github-${index}`}
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            
            {liveUrl && (
              <Button
                variant="default"
                size="sm"
                asChild
                className="hover-elevate flex-1 bg-gradient-to-r from-primary to-accent"
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