import React, { useEffect, useState } from 'react';

const LocationInfo = ({ location }) => {
  const initialData = {
    placeName: '',
    state: '',
    country: ''
  }
  const [area, setArea] = useState(initialData)

  useEffect(() => {
    if (location) {
      setArea({
        placeName: location.places[0]['place name'],
        state: location.places[0].state,
        country: location.country
      })
    }
  }, [location])

  const clearData = () => {
    setArea(initialData);
  }

  return (
    <div>
      <h2>Location Information</h2>
      <p><b>Country Name:</b> {area.country}</p>
      <p><b>State Name:</b> {area.state}</p>
      <p><b>Place Name:</b> {area.placeName}</p>
      <button onClick={clearData}>Clear</button>
    </div>
  );
};

export default LocationInfo;
