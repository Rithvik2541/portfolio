import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 60 },
    { name: 'MongoDB', level: 60 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'SCIKIT-Learn', level: 55 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700">{skill.name}</span>
              <span className="text-sm font-medium text-blue-700">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;