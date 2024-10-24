import React from 'react';

const Achievements = () => {
  const achievements = [
    "in 9th grade, achieved 3rd place in class and 51st in district-level math Olympiad. Demonstrated strong problem-solving skills and competitive spirit, showcasing proficiency in mathematics.",
    "Got special appreciation in Krithathon which is 2-day hackathon conducted by Krithomedha in VNRVJIET."
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4 text-3xl">Achievements</h2>
      <ul className="list-disc pl-5 space-y-2 text-2xl">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;