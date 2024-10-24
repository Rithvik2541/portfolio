import React from 'react';
import rithvikImage from '../photos/rithvik_linkedIn_dp.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={rithvikImage} alt="Rithvik" className="rounded-full w-64 h-64 object-cover mb-8" />
      <h1 className="text-4xl font-bold mb-4">Karukuri Rithvik</h1>
      <p className="text-xl text-gray-600 mb-8">Web Developer | MERN Stack Enthusiast</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/rithvik-varma-2541abcd/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          LinkedIn
        </a>
        <a href="https://github.com/Rithvik2541" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;