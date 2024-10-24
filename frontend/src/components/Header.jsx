import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-between items-center">
          <li><Link to="/" className="text-2xl font-bold">My Portfolio</Link></li>
          <div className="flex space-x-4">
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/education" className="hover:text-blue-200">Education</Link></li>
            <li><Link to="/skills" className="hover:text-blue-200">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-blue-200">Projects</Link></li>
            <li><Link to="/achievements" className="hover:text-blue-200">Achievements</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;