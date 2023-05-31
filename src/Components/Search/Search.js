import React, { useState } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
import "./search.css";
import {API_BASE_URL} from "../api_config";

function SearchBox() {
  const [age, setAge] = useState("");
  const [martialstatus, setMaritalStatus] = useState("");
  const [physicalstatus, setPhysicalStatus] = useState("");
  const [mothertongue, setMotherTongue] = useState("");
  const [religion, setReligion] = useState("");
  const [kulam, setKulam] = useState("");
  const [dosham, setDosham] = useState("");
  const [star, sets] = useState("");
  const [education, setEducation] = useState("");
  const [employedin, setEmployedIn] = useState("");
  const [occupation, setOccupation] = useState("");
  const [annualincome, setAnnualIncome] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [smokinghabit, setSmokingHabit] = useState("");
  const [drinkinghabit, setDrinkingHabit] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_BASE_URL}/api/Search`,{Test: "test",});
    if(response.data.message){
      console.log(response.data.message);
    }
    else{
      console.log("error:"+response.data.error);
    }
  }
    
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await axios.post(
  //     `${API_BASE_URL}/api/Search`,
  //     {
  //       age,martialstatus,physicalstatus,mothertongue,religion,kulam,dosham,star,education,employedin,occupation,annualincome,country,city,smokinghabit,drinkinghabit
  //     },
  //     {withCredentials: true}

  //   );
  //   // console.log(age,martialstatus,physicalstatus,mothertongue,religion,kulam,dosham,star,education,employedin,occupation,annualincome,country,city,smokinghabit,drinkinghabit);
  // }
  
  return (
    <div className="man">
      <div className="search-box w-100">
        <div className="search-criteria">
          <div className="search-group">
            <label htmlFor="age">Age</label>
            <div className="search-dropdown">
              <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
                <option value="">Min-Max age</option>
                <option value="18-25">18-25</option>
                <option value="25-30">25-30</option>
                <option value="30-35">30-35</option>
                <option value="35-40">35-40</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="martitalstatus">Marital Status</label>
            <div className="search-dropdown">
              <select id="martitalstatus" value={martialstatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                <option value="Married">Married</option>
                <option value="UnMarried">UnMarried</option>
                <option value="Divorced">Divorced</option>
                <option value="Widow">Widow</option>
                <option value="Awaiting divorce">Awaiting divorce</option>{" "}
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="physicalstatus">Physical Status</label>
            <div className="search-dropdown">
              <select id="physicalstatus" value={physicalstatus} onChange={(e) => setPhysicalStatus(e.target.value)} >
                <option value="">Select status</option>
                <option value="normal">Normal</option>
                <option value="physically challenged">
                  Physically Challenged
                </option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="mothertongue">Mother Tongue</label>
            <div className="search-dropdown">
              <select id="mothertongue" value={mothertongue} onChange={(e) => setMotherTongue(e.target.value)}>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Kannada">Kannada</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Bengali">Bengali</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Urdu">Urdu</option>
                <option value="Sanskrit">Sanskrit</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="search-criteria">
          <div className="search-group">
            <label htmlFor="religion">Religion</label>
            <div className="search-dropdown">
              <select id="religion" value={religion} onChange={(e) => setReligion(e.target.value)}>
                <option value="">Select religion</option>
                <option value="hindu">Hindu</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="kulam">Kulam</label>
            <div className="search-dropdown">
              <select id="kulam" value={kulam} onChange={(e) => setKulam(e.target.value)}>
                <option value="">Select kulam</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label>Dosham</label>
            <div className="search-dropdown">
              <select value={dosham} onChange={(e) => setDosham(e.target.value)}>
                <option value="">Select dosham</option>
                <option value="none">None</option>
                <option value="chevvai">Chevvai dosham</option>
                <option value="naga">Naga Dosham</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="star">Star</label>
            <div className="search-dropdown">
              <select id="star" value={star} onChange={(e) => sets(e.target.value)}>
                <option value="">Select star</option>
                <option value="அஸ்வினி/Aswini">அஸ்வினி/Aswini</option>
                <option value="பரணி/Bharani">பரணி/Bharani</option>
                <option value="கார்த்திகை/Kruthiga">கார்த்திகை/Kruthiga</option>
                <option value="ரோகிணி/Rohini">ரோகிணி/Rohini</option>
                <option value="மிருகசீரிடம்/Mrigasira">
                  மிருகசீரிடம்/Mrigasira
                </option>
                <option value="திருவாதிரை/Arudra">திருவாதிரை/Arudra</option>
                <option value="புனர்பூசம்/Punarvasu">
                  புனர்பூசம்/Punarvasu
                </option>
                <option value="பூசம்/Pushya">பூசம்/Pushya</option>
                <option value="ஆயில்யம்/Asilesha">ஆயில்யம்/Asilesha</option>
                <option value="மகம்/Makha">மகம்/Makha</option>
                <option value="பூரம்/Poorvaphalguni">
                  பூரம்/Poorvaphalguni
                </option>

                <option value="உத்திரம்/Uthiraphalgunu">
                  உத்திரம்/Uthiraphalgunu
                </option>
                <option value="அஸ்தம்/Hastha">அஸ்தம்/Hastha</option>
                <option value="சித்திரை/Chitha">சித்திரை/Chitha</option>
                <option value="சுவாதி/Swathi">சுவாதி/Swathi</option>
                <option value="விசாகம்/Visaka">விசாகம்/Visaka</option>
                <option value="அனுஷம்/Anuradha">அனுஷம்/Anuradha</option>
                <option value="கேட்டை/Jyeshta">கேட்டை/Jyeshta</option>
              </select>
            </div>
          </div>
        </div>
        <div className="search-criteria">
          <div className="search-group">
            <label htmlFor="education">Education</label>
            <div className="search-dropdown">
              <select id="education" value={education} onChange={(e) => setEducation(e.target.value)}>
                <option value="">Select education</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="employedin">Employed In</label>
            <div className="search-dropdown">
              <select id="employedin" value={employedin} onChange={(e) => setEmployedIn(e.target.value)}>
                <option value="">Select employment status</option>
                <option value="private">Private</option>
                <option value="government">Government</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="occupation">Occupation</label>
            <div className="search-dropdown">
              <select id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                <option value="">Select occupation</option>
                <option value="doctor">Doctor</option>
                <option value="engineer">Engineer</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="annualincome">Annual Income</label>
            <div className="search-dropdown">
              <select id="annualincome" value={annualincome} onChange={(e) => setAnnualIncome(e.target.value)}>
                <option value="">Select income</option>
                <option value="1000000">Less than 10 Lakhs</option>
                <option value="2000000">10-20 Lakhs</option>
                {/* ... more options */}
              </select>
            </div>
          </div>
        </div>
        <div className="search-criteria">
          <div className="search-group">
            <label htmlFor="country">Country</label>
            <div className="search-dropdown">
              <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                {/* ... more options */}
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="city">City</label>
            <div className="search-dropdown">
              <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select city</option>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                {/* ... more options */}
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="smoking">Smoking Habit</label>
            <div className="search-dropdown">
              <select value={smokinghabit} onChange={(e) => setSmokingHabit(e.target.value)}>
                <option value="">Select smoking habit</option>
                <option value="no">No</option>
                <option value="occasionally">Occasionally</option>
                <option value="regularly">Regularly</option>
              </select>
            </div>
          </div>
          <div className="search-group">
            <label htmlFor="drinking">Drinking Habit</label>
            <div className="search-dropdown">
              <select  id="drinking" value={drinkinghabit} onChange={(e) => setDrinkingHabit(e.target.value)}>
                <option value="">Select drinking habit</option>
                <option value="no">No</option>
                <option value="occasionally">Occasionally</option>
                <option value="regularly">Regularly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="search-btn-container mt-3 pb-4">
        {/* <Link className="btnText btn-primary" to="/home">
          Search
        </Link> */}

        <button type="submit" className="search-btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
