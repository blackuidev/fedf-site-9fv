import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FolderOpen as FolderOpenIcon, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, due dates, and user collaboration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    link: "#",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A real-time chat application using WebSockets, supporting private and group messaging with user presence.",
    tech: ["React", "Socket.io", "Express", "Redis"],
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-120px)] bg-gray-900 text-white">
      <div className="flex flex-col items-center text-center mb-12">
        <FolderOpenIcon className="h-20 w-20 text-blue-400 mb-4" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Here are some of the projects I've worked on, demonstrating my skills in full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-800 border-gray-700 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-400">{project.title}</CardTitle>
              <CardDescription className="text-gray-400">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
