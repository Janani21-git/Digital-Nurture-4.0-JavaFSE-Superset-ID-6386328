import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat Kohli', score: 88 },
    { name: 'Rohit Sharma', score: 94 },
    { name: 'KL Rahul', score: 63 },
    { name: 'Rishabh Pant', score: 76 },
    { name: 'Hardik Pandya', score: 55 },
    { name: 'Ravindra Jadeja', score: 90 },
    { name: 'Jasprit Bumrah', score: 45 },
    { name: 'Shubman Gill', score: 70 },
    { name: 'Surya Kumar', score: 40 },
    { name: 'Mohammed Shami', score: 66 },
    { name: 'Axar Patel', score: 72 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
