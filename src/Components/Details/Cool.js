import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";
import { UserContext } from "../Authcontext";


import "./Col.css";
function Cool() {
  const { user, setUser } = useContext(UserContext);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [marital, setMarital] = useState("");
  const [tongue, setTongue] = useState("");
  const [email, setEmail] = useState("");

  const [alt, setAlt] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/basic-info`,
      {
        user,
        first,
        last,
        dob,
        gender,
        marital,
        tongue,
        email,
        alt,
      },
      { withCredentials: true }
    );
    if (response.data.auth) {
      setUser((prevState) => ({
        ...prevState,
        basic: response.data.userBasic,
      }));
      navigate("/contact", {replace: true});
      setFirst("");
      setLast("");
      setDob("");
      setGender("");
      setMarital("");
      setTongue("");
      setEmail("");
    }
  };
  return (
    <div className="abc">
    <div className="page-wrapper bg-red p-t-180 p-b-100">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-body">
            <h2 className="title">Basic Info</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  value={first}
                  placeholder="First Name"
                  name="name"
                  onChange={(e)=> setFirst(e.target.value)}
                  
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  value={last}
                  placeholder="Last Name"
                  name="name"
                  onChange={(e)=> setLast(e.target.value)}
                />
              </div>

              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <input
                      className="input--style-2 js-datepicker"
                      type="date"
                      value={dob}
                      placeholder="Date of Birth"
                      name="birthday"
                      onChange={(e)=> setDob(e.target.value)}
                    />
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>

          
              </div>



              <div className="row row-space">
                <div className="col-2">
                <div className="input-group1">
                    <select
                    value={gender}
                      name="Gender"
                      id="sex"
                      className="input--style-2 mb-4 browser-default "
                      onChange={(e)=> setGender(e.target.value)}
>
                      {" "}
                      <option >
                         Gender
                        </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="unspesified">Others</option>
                    </select>
                  </div>
                </div>

                {/* <div className="row row-space"> */}
                <div className="col-2">
                <div className="input-group1">
                <select
            
                  id="marital"
                  value={marital}
                  className="input--style-2  browser-default"
                  onChange={(e)=> setMarital(e.target.value)}
                >
                  <option readOnly>
                    Marital Status
                  </option>

                  <option value="1">Married</option>
                  <option value="2">UnMarried</option>

                  <option value="3">Divorced</option>
                  <option value="4">Widower</option>
                  <option value="2">Awaiting divorce</option>
                </select>
              </div>
                </div>
              </div>

              <div className="input-group1">
                <select
                  id="mother tongue"
                  value={tongue} 
                  className="input--style-2  browser-default"
    
                  onChange={(e)=> setTongue(e.target.value)}
                >
                  <option readOnly>
                    Mother Tongue
                  </option>
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

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  value={user.userMob}
                  placeholder="Mobile Number"
                  name="Mb"
                readOnly
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  value={alt}
                  placeholder="Alternative Number"
                  name="Mb"
                  onChange={(e)=> setAlt(e.target.value)}
                />
              </div>
              <div className="p-t-30">
                <div className="button mt-3">
                  <button type="submit" className="btn btn-primary text-center">
                    Save & Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cool;
