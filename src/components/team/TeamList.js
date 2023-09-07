// components/Team/TeamList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TeamList = () => {
  // State to store team data
  const [teams, setTeams] = useState([]);

  // Simulated data for demonstration purposes
  const sampleTeams = [
    { id: 1, name: 'Team A' },
    { id: 2, name: 'Team B' },
    { id: 3, name: 'Team C' },
    // Add more team data as needed
  ];

  useEffect(() => {
    // In a real application, you would fetch team data from your backend or storage.
    // For this example, we're using simulated data.
    setTeams(sampleTeams);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Teams</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teams.map((team) => (
          <li key={team.id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
            {/* Add buttons or links to view team details or manage team members */}
          </li>
        ))}
      </ul>
      <Link to="/teamsDetail">
      team detail
      </Link>
    </div>
  );
};

export default TeamList;
