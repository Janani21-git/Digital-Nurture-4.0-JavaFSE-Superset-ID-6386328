
import React from 'react';

function App() {
  // Object for one office
  const office = {
    name: 'Regus Workspace',
    rent: 45000,
    address: '1st Floor, Tech Park, Bangalore',
    image: 'https://tse3.mm.bing.net/th/id/OIP.pe59OwO5sCqGITfl8azm8AHaGK?pid=Api&P=0&h=180'
  };

  // List of office spaces
  const offices = [
    {
      name: 'WeWork Residency',
      rent: 65000,
      address: 'MG Road, Bangalore',
    },
    {
      name: '91Springboard',
      rent: 30000,
      address: 'HSR Layout, Bangalore',
    },
    {
      name: 'Awfis',
      rent: 75000,
      address: 'Koramangala, Bangalore',
    }
  ];

  // JSX heading (can also be created using React.createElement)
  const heading = <h1>🏢 Office Space Rental App</h1>;

  // Create element with React.createElement (optional demo)
  const subheading = React.createElement('h2', null, 'Available Office Spaces');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {heading}
      {subheading}

      {/* Office Image */}
      <img
        src={office.image}
        alt="Office"
        style={{ width: '300px', height: '200px', marginBottom: '20px' }}
      />

      {/* Display one office object */}
      <div>
        <h3>{office.name}</h3>
        <p>Address: {office.address}</p>
        <p style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
          Rent: ₹{office.rent}
        </p>
      </div>

      <hr />

      {/* Display office list using map */}
      <h2>More Office Listings:</h2>
      {offices.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '10px',
            maxWidth: '300px'
          }}
        >
          <h3>{item.name}</h3>
          <p>Address: {item.address}</p>
          <p style={{ color: item.rent > 60000 ? 'green' : 'red' }}>
            Rent: ₹{item.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
