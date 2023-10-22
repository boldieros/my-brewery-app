// App.js or your main component

import React from 'react';
import BreweryList from './BreweryList'; // Import your BreweryList component

function App() {
  return (
    <div className="App">
      <h1>Brewery Lookup</h1>
      <BreweryList /> {/* Render the BreweryList component here */}
    </div>
  );
}

export default App;
