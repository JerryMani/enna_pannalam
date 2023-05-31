import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";
import UserContext from "../Authcontext";
import "./Col.css";

function PartnerPreferenceDetails() {  const {user,setUser} = useContext(UserContext)
const [pmarital, setPMarital] = useState("");
const [mtongue, setMtongue] = useState("");
const [peducation, setPeducation] = useState("");
const[employ,setemploy] = useState("");
const [occupa, setOccupa] = useState("");
const [monincome, setMonincome] = useState("");
const [preligion, setPreligion] = useState("");
const [pcaste, setPcaste] = useState("");
const [pkulam, setPkulam] = useState("");
const [pheight, setPheight] = useState("");
const [pweight, setPweight] = useState("");
const [pbodytype, setPbodytype] = useState("");
const [pcomplexion, setPcomplexion] = useState("");
const [pphysical, setPphysical] = useState("");
const navigate = useNavigate();

const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await axios.post(
    `${API_BASE_URL}/api/PartnerPreferenceDetails`,
    {
     user,pmarital,peducation,employ,mtongue,occupa,monincome,preligion,pcaste,pkulam,pheight,pweight,pbodytype,pcomplexion,pphysical,
     
    },
    {withCredentials:true}

  );
  if(response.data.auth) {
    setUser((prevState) => ({
      ...prevState,
      partnerDetails: response.data.partnerDetails,
    }));
  navigate("/Image", {replace: true});
  setPMarital("");
  setPeducation("");
  setemploy("");
  setMtongue("");
  setOccupa("");
  setMonincome("");
  setPreligion("");
  setPcaste("");
  setPkulam("");
  setPheight("");
  setPweight("");
  setPbodytype("");
  setPcomplexion("");
  setPphysical("")
  }
};

  return (
    <div className="abc">
      <div className="page-wrapper bg-red p-t-180 p-b-100">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-body">
              <h2 className="title">Partner Preference Details</h2>
              <form method="POST" onSubmit={handleSubmit}>
              <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group1">
                      <select
                        value={pmarital}
                      id="marital"
                      className="input--style-2  browser-default"
                      onChange={(e)=> setPMarital(e.target.value)}
                      >
                        <option readOnly>
                          Marital Status
                        </option>
                        <option value="1">Married</option>
                        <option value="2">UnMarried</option>
                        <option value="3">Divorced</option>
                        <option value="4">Widow</option>
                        <option value="2">Awaiting divorce</option>{" "}
                      </select>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group1">
                      <select
                      value={mtongue}
                      id="tongue"
                      className="input--style-2  browser-default "
                      onChange={(e)=> setMtongue(e.target.value)}
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
                  </div>
                </div>


                <div className="input-group">
                  <input
                      value={peducation}
                  className="input--style-2"
                  type="text"
                  placeholder="Highest Education"
                  name="name"
                  onChange={(e)=> setPeducation(e.target.value)}
           
                  />
                </div>

                    <div className="input-group1">
                      <select
                         value={employ}
                      id="employ"
                      className="input--style-2  browser-default"
                      onChange={(e)=> setemploy(e.target.value)}  >
                        <option readOnly>
                          Employment Type
                        </option>
                      
                      </select>
                    </div>
                

                 
                    <div className="input-group1">
                      <select
                       value={occupa}
                      id="occupation"
                      className="input--style-2  browser-default "
                      onChange={(e)=> setOccupa(e.target.value)}
                    >
                        <option readOnly>
                          Occupation
                        </option>

                       
                      </select>
                    </div>
                
              

                <div className="input-group">
                  <input
                     value={monincome}
                  className="input--style-2"
                  type="text"
                  placeholder="Monthly Income"
                  name="income"
                  onChange={(e)=> setMonincome(e.target.value)}
            
                  />
                </div>

                <div className="input-group1">
                  <select
                   value={preligion}
                  id="religion"
                  className="input--style-2  browser-default "
                  onChange={(e)=> setPreligion(e.target.value)}
                  >
                    <option readOnly>
                      Religion
                    </option>
                    <option>Hindu </option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                     value={pcaste}
                  id="caste"
                  className="input--style-2  browser-default "
                  onChange={(e)=> setPcaste(e.target.value)}
                   >
                    <option readOnly>
                      Caste
                    </option>
                    <option value="raasi">0</option>
                    <option value="raasi">1</option>
                    <option value="raasi">2</option>
                    <option value="raasi">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                     value={pkulam}
                  id="kulam"
                  className="input--style-2  browser-default "
                  onChange={(e)=> setPkulam(e.target.value)}
               >
                    <option readOnly>
                      Kulam
                    </option>
                    <option value="raasi">0</option>
                    <option value="raasi">1</option>
                    <option value="raasi">2</option>
                    <option value="raasi">3</option>
                  </select>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group1">
                      <select
                        value={pheight}
                      id="height"
                      className="input--style-2  browser-default"
                      onChange={(e)=> setPheight(e.target.value)}
                  >
                        <option readOnly>
                          Height
                        </option>
                        <option value="1">4ft 6in - 137 cms</option>

                        <option value="2">4ft 7in - 140 cms</option>

                        <option value="3">4ft 8in - 142 cms</option>

                        <option value="4">4ft 9in - 145 cms</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group1">
                      <select
                       value={pweight}
                      id="weight"
                      className="input--style-2  browser-default "
                      onChange={(e)=> setPweight(e.target.value)}
                        >
                        <option readOnly>
                          Weight
                        </option>
                        <option value="1">45-50kg</option>
                        <option value="2">50-55kgs</option>
                        <option value="3">55-60kgs</option>
                        <option value="4">60-65kgs</option>{" "}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group1">
                      <select
                         value={pbodytype}
                      id="bodytype"
                      className="input--style-2  browser-default "
                      onChange={(e)=> setPbodytype(e.target.value)}
                     >
                        <option readOnly>
                          Body Type
                        </option>

                        <option value="1">Slim</option>

                        <option value="3">Average</option>

                        <option value="4">Athletic</option>

                        <option value="5">Heavy</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group1">
                      <select
                        value={pcomplexion}
                      id="complexion"
                      className="input--style-2  browser-default "
                      onChange={(e)=> setPcomplexion(e.target.value)}
                      >
                        <option readOnly>
                          Complexion
                        </option>

                        <option value="6">Very Fair</option>

                        <option value="7">Fair</option>

                        <option value="9">Wheatish</option>

                        <option value="10">Wheatish Brown</option>

                        <option value="11">Dark</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="input-group1">
                  <select
                     value={pphysical}
                  id="physical"
                  className="input--style-2  browser-default "
                  onChange={(e)=> setPphysical(e.target.value)}
                >
                    <option readOnly>
                      Physical Status
                    </option>
                    <option value="1">Any</option>

                    <option value="1">Normal</option>

                    <option value="2">Physically Challenged</option>
                  </select>
                </div>

                <div className="p-t-30">
                  <div className="button mt-1">
                    <button
                      type="submit"
                      className="btn btn-primary text-center"
                    >
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

export default PartnerPreferenceDetails;
