import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'Frontend', percentage: 100 },
  { name: 'Backend', percentage: 80 },
  { name: 'UI Design', percentage: 70 },
  { name: 'Database & Tools', percentage: 70 }
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimated(true);
  }, []);

  return (
    <section id="skills" className="p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      {skills.map(skill => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700">{skill.name}</span>
            <span className="text-sm font-medium text-blue-700">{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
              style={{ width: animated ? `${skill.percentage}%` : '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
