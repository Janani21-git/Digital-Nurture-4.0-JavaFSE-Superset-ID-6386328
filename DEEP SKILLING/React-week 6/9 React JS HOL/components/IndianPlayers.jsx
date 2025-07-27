import React from 'react';

function IndianPlayers() {
  const allPlayers = ['Virat', 'Rohit', 'Rahul', 'Pant', 'Hardik', 'Jadeja'];

  // Destructure odd and even players
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  // Merge feature using spread operator
  const T20players = ['Bumrah', 'Surya', 'Gill'];
  const RanjiTrophy = ['Pujara', 'Rahane'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h2>Combined Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
