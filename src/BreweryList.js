// BreweryList.js

import React, { useState, useEffect } from 'react';
import './App.css'; // Example CSS import

function BreweryList() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchBreweries();
  }, []);

  async function fetchBreweries() {
    try {
      const response = await fetch('https://api.openbrewerydb.org/breweries');
      const data = await response.json();
      setBreweries(data);
      setLoading(false); // Data has been loaded
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // An error occurred
    }
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {breweries.map((brewery) => (
            <li key={brewery.id}>{brewery.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BreweryList;
