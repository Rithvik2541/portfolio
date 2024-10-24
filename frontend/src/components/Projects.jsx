import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Attendance Management',
      description: 'A  MERN stack project. Developed a comprehensive MERN stack Attendance Management System with user authentication, role-based access, and email notifications using NodeMailer.',
      github: 'https://github.com/Rithvik2541/Student-attendance-management',
      demo: 'http://studentattendancemanagement.onrender.com/'
    },
    {
      title: 'Blog App',
      description: 'A MERN stack project I built it is as beginner.',
      github: 'https://github.com/Rithvik2541/Blog-App',
      demo: 'http://blog-app-new-two.vercel.app'
    },
    {
      title: 'Career Guidance System',
      description: 'A MERN stack and ML based hackathon project, which gives career guidance advice to various catogeries of students.',
      github: 'https://github.com/Rithvik2541/Career-Guidance-System',
      demo: ''
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;