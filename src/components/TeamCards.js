import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function TeamCards({ member }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-64 h-80 m-4 rounded-lg shadow-lg cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="w-full h-full relative overflow-hidden rounded-lg">
        {/* Front of card */}
        <div className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${isFlipped ? '-translate-y-full' : 'translate-y-0'}`}>
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className={`absolute w-full h-full bg-white transition-transform duration-500 ease-in-out ${isFlipped ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-bold mb-4">{member.name}</h3>
            <p className="text-gray-600 mb-6">{member.role}</p>
            
            <div className="flex space-x-4">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href={member.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={24} />
              </a>
              <a 
                href={`mailto:${member.email}`}
                className="text-red-600 hover:text-red-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCards; 