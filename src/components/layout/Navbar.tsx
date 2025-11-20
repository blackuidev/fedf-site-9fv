import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, User, FolderOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wider">
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white hover:text-blue-600">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white hover:text-blue-600">
            <Link to="/about" className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>About</span>
            </Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white hover:text-blue-600">
            <Link to="/projects" className="flex items-center space-x-2">
              <FolderOpen className="h-5 w-5" />
              <span>Projects</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
