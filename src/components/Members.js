import React from 'react';
import TeamData from './team.json';
import TeamCards from './TeamCards';

function Members() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="flex justify-center flex-wrap">        
        {TeamData.map((person, index) => (
          <TeamCards key={index} member={person} />
        ))}
      </div>
    </div>
  );
}

export default Members; 