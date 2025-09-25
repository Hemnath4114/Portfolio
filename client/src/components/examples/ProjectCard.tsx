import { ProjectCard } from "../ProjectCard";
import { ThemeProvider } from "../ThemeProvider";

export default function ProjectCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-md">
        <ProjectCard
          title="ThinkNotes"
          description="A beginner-friendly full-stack note-taking web app built using the MERN stack."
          techStack={["MongoDB", "Express", "React", "Node.js"]}
          githubUrl="https://github.com/Hemnath4114/MERN-ThinkNotes"
          index={0}
        />
      </div>
    </ThemeProvider>
  );
}