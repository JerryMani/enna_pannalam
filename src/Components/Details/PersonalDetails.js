import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select"
import { API_BASE_URL } from "../api_config";
import UserContext from "../Authcontext";
import "./Col.css";



const options = [
  { value: 'bsc', label: 'B.Sc.' },
  { value: 'btech', label: 'B.Tech' },
  { value: 'ba', label: 'B.A.' },
  { value: 'bcom', label: 'B.Com.' },
  { value: 'bed', label: 'B.Ed.' },
  { value: 'mba', label: 'MBA' },
  { value: 'mtech', label: 'M.Tech' },
  { value: 'ma', label: 'M.A.' },
  { value: 'mcom', label: 'M.Com.' },
  { value: 'med', label: 'M.Ed.' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: 'auto',
    minHeight: '40px',
    borderRadius: '10px',
    boxShadow: 'none',
    borderColor: '#e4e4e4',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: '9999',
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '200px',
    overflowY: 'scroll',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#e4e4e4',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#333',
    ':hover': {
      backgroundColor: '#e4e4e4',
      color: '#333',
    },
  }),
};





function PersonalDetails() {
  const {user, setUser} = useContext(UserContext)
  const [education, setEducation] = useState("");
  const [emptype,setEmptype] = useState("");
  const [occupation,setOccupation] = useState("");
  const [income,setIncome] = useState("");
  const [height,setHeight] = useState("");
  const [weight, setWeigth] = useState("");
  const [bodytype,setBodytype] = useState("");
  const [complexion,setComplexion] = useState("");
  const [physical,setPhysical] = useState("");
  const navigate = useNavigate();

  // const handleSelectChange = (selected) => {
  //   setEducation(selected);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/PersonalDetails`,
      {
        user,education,emptype,occupation,income,height,weight,bodytype,complexion,physical
      },
      {withCredentials: true}

    );
    if(response.data.auth){
      setUser((prevState) => ({
        ...prevState,
        personalDetails: response.data.personalDetails,
      }));
    navigate("/familydetails" , {replace: true});
    setEducation("");
    setEmptype("");
    setOccupation("");
    setIncome("");
    setHeight("");
    setWeigth("");
    setBodytype("");
    setComplexion("");
    setPhysical("");
    }
  };

  return (
    <div className="abc">
    <div className="page-wrapper bg-red p-t-180 p-b-100 ">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">

        
          <div className="card-body">
            <h2 className="title">Personal Details</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group1">
              <Select
      options={options}
      value={education}
      onChange={(e)=> setEducation(e.target.value)}
      isMulti
      placeholder="Select Education"
      styles={customStyles}
    />
              </div>
              <div className="row row-space">
                 
                    <div className="input-group1">
                      <select
                        value={emptype}
                    className="input--style-2"
                    type="text"
                    placeholder="Employment Type"
                    name="name"
                    onChange={(e)=> setEmptype(e.target.value)}
                     >
                        <option readOnly>
                          Employment Type
                        </option>
                      
                      </select>
                   
                  </div>

                 
                    <div className="input-group1">
                      <select
                       value={occupation}
                    className="input--style-2"
                    type="text"
                    placeholder="Occupation"
                    name="name"
                    onChange={(e)=> setOccupation(e.target.value)}
                >
                        <option readOnly>
                          Occupation
                        </option>

                       
                      </select>
                    </div>
                  </div>
       


              <div className="input-group">
                <input
                  value={income}
                    className="input--style-2"
                    type="text"
                    placeholder="Monthly Income"
                    name="name"
                    onChange={(e)=> setIncome(e.target.value)}
                     />
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group1">
                  <select
                  value={height}
                        id="height"
                        className="input--style-2  browser-default "
                        onChange={(e)=> setHeight(e.target.value)}
                          >
                <option readOnly>
                      Height
                        </option>
                  <option value="1">4ft 6in - 137 cms</option>

                  <option value="2">4ft 7in - 140 cms</option>

                  <option value="3">4ft 8in - 142 cms</option>

                  <option value="4">4ft 9in - 145 cms</option>
                </select></div>
                </div>

                <div className="col-2">
                  <div className="input-group1">
                  <select
                  value={weight}
                        id="weight"
                        className="input--style-2  browser-default "
                        onChange={(e)=> setWeigth(e.target.value)}
                      >
                <option readOnly>
                Weight
                        </option>
                 
                        <option value="1">45-50kg</option>

<option value="2">50-55kgs</option>

<option value="3">55-60kgs</option>

<option value="4">60-65kgs</option> </select>
                
                </div>
                </div>
                </div>

                <div className="row row-space">
                <div className="col-2">

              <div className="input-group1">
              <select
                 value={bodytype}
                        id="bodytype"
                        className="input--style-2  browser-default  "
                        onChange={(e)=> setBodytype(e.target.value)}
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
                  value={complexion}
                        id="complexion"
                        className="input--style-2  browser-default  "
                        onChange={(e)=> setComplexion(e.target.value)}
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
                   value={physical}
                    id="physical"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setPhysical(e.target.value)}
                  >
                <option readOnly>
                Physical Status
                        </option>
                        <option value="0">Any</option>
              
<option value="1">Normal</option>

<option value="2">Physically Challenged</option>
</select>
              </div>
              


              

              <div className="p-t-30">
              <div className="button mt-1">
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

export default PersonalDetails;
