import React, { useState } from 'react';

const TeamManagement = ({ currentUser }) => {
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState([]);
  const [inviteeEmail, setInviteeEmail] = useState('');

  const createTeam = () => {
    // Create a new team and store it in local storage
    const newTeam = {
      id: new Date().getTime(), // Use a unique identifier for simplicity
      name: teamName,
      members: [currentUser.uid],
    };

    const updatedTeams = [...teams, newTeam];
    setTeams(updatedTeams);
    localStorage.setItem('teams', JSON.stringify(updatedTeams));

    // Clear the form fields
    setTeamName('');
  };

  const inviteMember = () => {
    // Find the user with the provided email (in a real app, you'd need an actual user database)
    const invitedUser = {
      uid: 'unique_user_id',
      email: inviteeEmail,
    };

    // Update the team's members list
    const updatedTeam = teams.find((team) => team.name === teamName);
    updatedTeam.members.push(invitedUser.uid);
    const updatedTeams = teams.map((team) =>
      team.name === teamName ? updatedTeam : team
    );
    setTeams(updatedTeams);
    localStorage.setItem('teams', JSON.stringify(updatedTeams));

    // Clear the invitee field
    setInviteeEmail('');
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-4">Team Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={createTeam}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Team
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-4">Invite Members</h3>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Invitee's Email"
          value={inviteeEmail}
          onChange={(e) => setInviteeEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <button
          onClick={inviteMember}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default TeamManagement;
