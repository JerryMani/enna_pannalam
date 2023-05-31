import React, { useState } from 'react';
import './text.css';

function Text() {
  const [dob, setDOB] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');

  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }

  return (
    <div className="text">
      <h1>Enter Your Information</h1>
      <label>Date of Birth:</label>
      <input type="date" value={dob} onChange={handleDOBChange} />

      <label>Time:</label>
      <input type="time" value={time} onChange={handleTimeChange} />

      <label>Place:</label>
      <input type="text" value={place} onChange={handlePlaceChange} />
    </div>
  );
}

export default Text;
