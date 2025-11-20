import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User as UserIcon } from 'lucide-react'; // Alias User to avoid conflict with page name

const About: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "Git", "AWS", "Docker", "CI/CD"
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-120px)] bg-gray-900 text-white">
      <div className="flex flex-col items-center text-center mb-12">
        <UserIcon className="h-20 w-20 text-purple-400 mb-4" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          I'm John Doe, a passionate full-stack developer with 5+ years of experience in building scalable and user-friendly web applications. I love bringing ideas to life through clean code and innovative solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Avatar className="h-64 w-64 border-4 border-purple-500 shadow-xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@johndoe" /> {/* Placeholder image */}
            <AvatarFallback className="text-6xl font-bold bg-purple-600 text-white">JD</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">My Journey</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            My journey into web development began with a fascination for how websites work and a desire to create impactful digital experiences. Starting with front-end technologies like HTML, CSS, and JavaScript, I quickly expanded my expertise to include modern frameworks like React and backend development with Node.js and various databases. I thrive in environments where I can continuously learn and apply new technologies to solve real-world problems.
          </p>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-md bg-blue-700 hover:bg-blue-600 text-white">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
