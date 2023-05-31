import React, { useState } from 'react';
import './otp.css';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP:', otp);
    navigate("/Home")
  }

  return (
    <div className='ball'>
    <div className="otp-form-wrapper">
      <div className="otp-form-container">
        <h2>Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            <input type="text" maxLength="1" onChange={handleChange} />
            <input type="text" maxLength="1" onChange={handleChange} />
            <input type="text" maxLength="1" onChange={handleChange} />
            <input type="text" maxLength="1" onChange={handleChange} />
          </div>
          <button className="otp-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default OtpForm;
