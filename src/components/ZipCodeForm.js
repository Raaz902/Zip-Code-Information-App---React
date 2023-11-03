import React, { useState } from 'react';

const ZipCodeForm = ({ onZipCodeSubmit, isClicked }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
    setZipCode('');
   isClicked(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Postal Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ZipCodeForm;
