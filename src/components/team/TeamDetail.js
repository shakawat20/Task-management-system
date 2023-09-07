// components/Team/TeamDetail.js

import React, { useState, useEffect } from 'react';

const TeamDetail = ({ match }) => {
  // State to store team data
  const [team, setTeam] = useState(null);

  // Simulated data for demonstration purposes
  const sampleTeams = [
    { id: 1, name: 'Team A', description: 'Team A is a software development team.' },
    { id: 2, name: 'Team B', description: 'Team B handles marketing and promotions.' },
    { id: 3, name: 'Team C', description: 'Team C focuses on customer support.' },
    // Add more team data as needed
  ];

  useEffect(() => {
    // In a real application, you would fetch team data by the team's ID from your backend or storage.
    // For this example, we're using simulated data.
    const teamId = parseInt(match.params.id, 10);
    const selectedTeam = sampleTeams.find((team) => team.id === teamId);
    setTeam(selectedTeam);
  }, [match.params.id]);

  if (!team) {
    return <div className="min-h-screen bg-gray-100 p-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">{team.name}</h2>
      <p className="text-lg text-gray-700">{team.description}</p>
      {/* Add additional team details and functionality as needed */}
    </div>
  );
};

export default TeamDetail;
