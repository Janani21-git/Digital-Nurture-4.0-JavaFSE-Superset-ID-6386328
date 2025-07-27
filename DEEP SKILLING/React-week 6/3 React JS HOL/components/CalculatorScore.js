import React from 'react';
import '../Components/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, Number } = props;
  const average = Total / Number;

  return (
    <div className="score-container">
      <h2>Student Score Summary</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Score:</strong> {Total}</p>
      <p><strong>Total Subjects:</strong> {Number}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;