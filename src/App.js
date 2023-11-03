import React, { useState } from 'react';
import './App.css';
import ZipCodeForm from './components/ZipCodeForm';
import LocationInfo from './components/LocationInfo';

function App() {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(location)

  const fetchLocationInfo = async (zipCode) => {
    try {
      const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
      const data = await response.json();
      //console.log(data)
      if (data.country) {
        setLocation(data);
        setIsLoading(false);
      } else {
        alert("Location not found")
      }

    } catch (error) {
      console.error(error);
    }
  };
  function isClicked(value) {
    setIsLoading(value)
  }
  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <ZipCodeForm onZipCodeSubmit={fetchLocationInfo} isClicked={isClicked} />
      {isLoading ? <h3>Loading.... </h3> :
        <LocationInfo location={location} />
      }
    </div>
  );
}

export default App;

