import React from 'react';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon } from 'lucide-react'; // Alias Home to avoid conflict with page name
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <HomeIcon className="h-24 w-24 text-blue-400 mb-6 animate-bounce" />
      <h1 className="text-6xl font-extrabold mb-4 text-center leading-tight">
        Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">John Doe</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl text-center">
        A passionate Full-stack Developer crafting beautiful and functional web experiences.
      </p>
      <div className="flex space-x-4">
        <Link to="/projects">
          <Button className="px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg">
            View My Work
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="outline" className="px-8 py-4 text-lg border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg">
            Learn More About Me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
