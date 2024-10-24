import React from 'react';

const Education = () => {
  const educationData = [
    {
      examination : "Graduation",
      majors: "Information technology",
      institute: "VNR Vignana Jyothi Institute of technology",
      year: "2022 - present",
      cgp: "85%"
    },
    {
      examination : "Intermediate",
      majors: "MPC",
      institute: "Sri Chaitanya Junior College",
      year: "2020 - 2022",
      cgp: "96%"
    },
    {
      examination : "Matriculation",
      majors: "High School",
      institute: "Carmel Convent High School",
      year: "2020",
      cgp: "8.99"
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Examination</th>
            <th className="p-2 text-left">Majors</th>
            <th className="p-2 text-left">Institution</th>
            <th className="p-2 text-left">Year</th>
            <th className="p-2 text-left">CGP</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((edu, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="p-2">{edu.examination}</td>
              <td className="p-2">{edu.majors}</td>
              <td className="p-2">{edu.institute}</td>
              <td className="p-2">{edu.year}</td>
              <td className="p-2">{edu.cgp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;