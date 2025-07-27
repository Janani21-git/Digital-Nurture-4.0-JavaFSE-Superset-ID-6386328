import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div>
      <h2>Cohort Dashboard</h2>
      <CohortDetails
        name="React Bootcamp"
        status="ongoing"
        startDate="2025-07-01"
        endDate="2025-08-01"
      />
      <CohortDetails
        name="Java Fundamentals"
        status="completed"
        startDate="2025-04-01"
        endDate="2025-06-01"
      />
    </div>
  );
}

export default App;

