import React from 'react';
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, MobileIcon } from '@radix-ui/react-icons';

const Contact = () => {
  const contactInfo = [
    { icon: <EnvelopeClosedIcon />, label: 'Email', value: 'rithvikvarma2541@gmail.com', link: 'mailto:rithvikvarma2541@gmail.com' },
    { icon: <MobileIcon />, label: 'Phone', value: '+91 8978874896', link: 'tel:8978874896' },
    { icon: <LinkedInLogoIcon />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/rithvik-varma-2541abcd/', link: 'https://www.linkedin.com/in/rithvik-varma-2541abcd/' },
    { icon: <GitHubLogoIcon />, label: 'GitHub', value: 'https://github.com/Rithvik254', link: 'https://github.com/Rithvik254' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
