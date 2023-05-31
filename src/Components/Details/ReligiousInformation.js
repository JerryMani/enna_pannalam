import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";
import UserContext from "../Authcontext";
import "./Col.css";

function ReligiousInformation() {
  const {user,setUser} = useContext(UserContext);
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [Kulam, setKulam] = useState("");
  const[star,setStar] = useState("");
  const [raasi, setRaasi] = useState("");
  const [chevvai, setChevvai] = useState("");
  const [naga, setNaga] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/ReligiousInformation`,
      {
        user,religion,caste,Kulam,star,raasi,chevvai,naga,
      },
      {withCredentials: true}
    );
      if(response.data.auth) {
        setUser((prevState) => ({
          ...prevState,
          religiousDetails: response.data.religiousDetails,
        }));
    navigate("/habitdetails" , {replace: true});
    setReligion("")
    setCaste("");
    setKulam("");
    setStar("");
    setRaasi("");
    setChevvai("");
    setNaga("");
      }
  };

  return (
    <div className="abc">
      <div className="page-wrapper bg-red p-t-180 p-b-100">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-body">
              <h2 className="title">Religious Information</h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="input-group1">
                  <select
                     value={religion}
                    id="religion"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setReligion(e.target.value)}
                    >
                    <option readOnly>
                      Religion
                    </option>
                    <option>Hindu </option>
                    
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={caste}
                    id="caste"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setCaste(e.target.value)}
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
                     value={Kulam}
                    id="kulam"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setKulam(e.target.value)}
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

                <div className="input-group1">
                  <select
                    value={star}
                    id="star"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setStar(e.target.value)}
                     >
                    <option readOnly>
                      Star
                    </option>
                    <option value="" class="hide"></option>
                    <option value="male">அஸ்வினி/Aswini</option>
                    <option value="male">பரணி/Bharani</option>
                    <option value="male">கார்த்திகை/Kruthiga</option>
                    <option value="male">ரோகிணி/Rohini</option>
                    <option value="male">மிருகசீரிடம்/Mrigasira</option>
                    <option value="male">திருவாதிரை/Arudra</option>
                    <option value="male">புனர்பூசம்/Punarvasu</option>
                    <option value="male">பூசம்/Pushya</option>
                    <option value="male">ஆயில்யம்/Asilesha</option>
                    <option value="male">மகம்/Makha</option>
                    <option value="male">பூரம்/Poorvaphalguni</option>

                    <option value="male">உத்திரம்/Uthiraphalgunu</option>
                    <option value="male">அஸ்தம்/Hastha</option>
                    <option value="male">சித்திரை/Chitha</option>
                    <option value="male">சுவாதி/Swathi</option>
                    <option value="male">விசாகம்/Visaka</option>
                    <option value="male">அனுஷம்/Anuradha</option>
                    <option value="male">கேட்டை/Jyeshta</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={raasi}
                    id="raai"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setRaasi(e.target.value)}
                    >
                    <option readOnly>
                      Raasi
                    </option>
                    <option value="raasi">Mesham / Mesha (Aries)</option>
                    <option value="raasi">Rishabam / Vrushaba (Taurus)</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                     value={chevvai}
                    id="chevvai"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setChevvai(e.target.value)}
                     >
                    <option readOnly>
                      Chevvai Dosham/Manglik
                    </option>
                    <option value="3">No</option>
                    <option value="4">Yes</option>
                    <option value="5">Don't Know</option>{" "}
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={naga}
                    id="naga"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setNaga(e.target.value)}
                   >
                    <option readOnly>
                     Naga Dosham
                    </option>
                    <option value="3">No</option>
                    <option value="4">Yes</option>
                    <option value="5">Don't Know</option>{" "}
                  </select>
                </div>
                <div className="p-t-30">
                  <div className="button mt-3">
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

export default ReligiousInformation;
