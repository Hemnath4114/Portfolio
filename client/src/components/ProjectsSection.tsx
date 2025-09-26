import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "ThinkNotes",
    description: "A beginner-friendly full-stack note-taking web app built using the MERN stack. Users can create, edit, and delete notes in a clean UI — no login required. Built to understand how frontend, backend, and deployment come together.",
    techStack: ["MongoDB", "Express", "React", "Node.js","Upstash Redis","Tailwind CSS","Render","React Router","Axios"],
    githubUrl: "https://github.com/Hemnath4114/MERN-ThinkNotes",
    liveUrl: "https://thinknotes-onju.onrender.com/",
  },
  {
    title: "ReactBlog",
    description: "A simple but powerful blogging platform built with React.js. Users can create, edit, and delete blog posts. Developed to explore hooks, routing, and API integration.",
    techStack: ["React", "JavaScript", "CSS", "API Integration","React Router","Axios"],
    githubUrl: "https://github.com/Hemnath4114/React-Blog",
    liveUrl: "https://react-blog-hemnath4114.vercel.app/",
  },
  {
    title: "MoodTunes",
    description: "A front-end-only music UI project built with HTML, CSS, and JS. It categorizes music based on moods (Chill, Energetic, Romantic, etc.) and visually reflects emotional tones.",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX"],
    githubUrl: "https://github.com/Hemnath4114/Mood-Tunes",
    liveUrl: "https://hemnath4114.github.io/Mood-Tunes/",
  },
  {
    title: "Next.js Dashboard",
    description: "A modern full-stack dashboard app built with Next.js 13+, React, and Tailwind CSS. Demonstrates App Router, server/client components, authentication, API routes, and responsive design.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript","Vercel"],
    githubUrl: "https://github.com/Hemnath4114/Next-Dashboard",
    liveUrl: "https://next-dashboard-hemnath4114.vercel.app/",
  },
];

export function ProjectsSection() {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            data-testid="text-projects-title"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}