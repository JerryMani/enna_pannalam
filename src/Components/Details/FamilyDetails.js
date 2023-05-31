import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";
import UserContext from "../Authcontext";
import "./Col.css";

function FamilyDetails() {
  const { user, setUser } = useContext(UserContext);
  const [father, setFather] = useState("");
  const [fcaste, setFcaste] = useState("");
  const [fkulam, setFkulam] = useState("");
  const [mother, setMother] = useState("");
  const [mcaste, setMcaste] = useState("");
  const [mkulam, setMkulam] = useState("");
  const [fstatus, setFstatus] = useState("");
  const [ftype, setFtype] = useState("");
  const [fvalues, setFvalues] = useState("");
  const [sisters, setSisters] = useState("");
  const [brothers, setBrothers] = useState("");
  const [msisters, setMsisters] = useState("");
  const [mbrothers, setMbrothers] = useState("");
  const [parentsno, setParentsno] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/FamilyDetails`,
      {
        user,
        father,
        fcaste,
        fkulam,
        mother,
        mcaste,
        mkulam,
        fstatus,
        ftype,
        fvalues,
        sisters,
        brothers,
        msisters,
        mbrothers,
        parentsno,
      },
      { withCredentials: true }
    );
    if (response.data.auth) {
      setUser((prevState) => ({
        ...prevState,
        familyDetails: response.data.userFamilyDetails,
      }));
      navigate("/Religiousinformation");
      setFather("");
      setFcaste("");
      setFkulam("");
      setMother("");
      setMcaste("");
      setMkulam("");
      setFstatus("");
      setFtype("");
      setFvalues("");
      setSisters("");
      setBrothers("");
      setMsisters("");
      setMbrothers("");
      setParentsno("");
    }
  };
  return (
    <div className="abc">
      <div className="page-wrapper bg-red p-t-180 p-b-100">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-body">
              <h2 className="title">Family Details</h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={father}
                        className="input--style-2"
                        type="text"
                        placeholder="Father's Name"
                        name="name"
                        onChange={(e) => setFather(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={mother}
                        className="input--style-2"
                        type="text"
                        placeholder="Mothers's Name"
                        name="name"
                        onChange={(e) => setMother(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={fcaste}
                        className="input--style-2"
                        type="text"
                        placeholder="Caste"
                        name="name"
                        onChange={(e) => setFcaste(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={mcaste}
                        className="input--style-2"
                        type="text"
                        placeholder="Caste"
                        name="name"
                        onChange={(e) => setMcaste(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={fkulam}
                        className="input--style-2"
                        type="text"
                        placeholder="Kulam"
                        name="name"
                        onChange={(e) => setFkulam(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={mkulam}
                        className="input--style-2"
                        type="text"
                        placeholder="kulam"
                        name="name"
                        onChange={(e) => setMkulam(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group1">
                  <select
                    value={fstatus}
                    id="family"
                    className="input--style-2 "
                    onChange={(e) => setFstatus(e.target.value)}
                  >
                    <option readOnly>Family Status</option>

                    <option value="4">Middle Class</option>
                    <option value="4">Upper Middle Class</option>
                    <option value="4">Rich</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={ftype}
                    id="ftype"
                    className="input--style-2 "
                    onChange={(e) => setFtype(e.target.value)}
                  >
                    <option readOnly>Family Type</option>
                    <option value="raasi">Joint Family</option>
                    <option value="raasi">Nuclear Family</option>
                    <option value="raasi">Others</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={fvalues}
                    id="fvalues"
                    className="input--style-2 "
                    onChange={(e) => setFvalues(e.target.value)}
                  >
                    <option readOnly>Family Values</option>
                    <option value="raasi">Orthodox</option>
                    <option value="raasi">Traditional</option>
                    <option value="raasi">Moderate</option>
                    <option value="raasi">Liberal</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={sisters}
                    id="nsisters"
                    className="input--style-2 "
                    onChange={(e) => setSisters(e.target.value)}
                  >
                    <option readOnly>Number of Sisters</option>
                    <option value="raasi">0</option>
                    <option value="raasi">1</option>
                    <option value="raasi">2</option>
                    <option value="raasi">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={brothers}
                    id="nbrothers"
                    className="input--style-2 "
                    onChange={(e) => setBrothers(e.target.value)}
                  >
                    <option readOnly>Number of Brothers</option>
                    <option value="raasi">0</option>
                    <option value="raasi">1</option>
                    <option value="raasi">2</option>
                    <option value="raasi">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={msisters}
                    id="msister"
                    className="input--style-2 "
                    onChange={(e) => setMsisters(e.target.value)}
                  >
                    <option readOnly>Married Sisters</option>
                    <option value="raasi">0</option>
                    <option value="raasi">1</option>
                    <option value="raasi">2</option>
                    <option value="raasi">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={mbrothers}
                    id="mbrothers"
                    className="input--style-2 "
                    onChange={(e) => setMbrothers(e.target.value)}
                  >
                    <option readOnly>Married Brothers</option>
                    <option value="raasi">0</option>
                    <option value="raasi">1</option>
                    <option value="raasi">2</option>
                    <option value="raasi">3</option>
                  </select>
                </div>

                <div className="input-group">
                  <input
                    value={parentsno}
                    className="input--style-2"
                    type="text"
                    placeholder="Parents Mobile Number"
                    name="name"
                    onChange={(e) => setParentsno(e.target.value)}
                  />
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

export default FamilyDetails;
