import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="text-sm mt-2">Built with passion and Lightswind UI.</p>
      </div>
    </footer>
  );
};

export default Footer;
