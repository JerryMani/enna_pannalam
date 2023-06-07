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
                    onChange={(selectedOptions) =>
                      setEducation(selectedOptions)
                    }
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
                      onChange={(e) => setEmptype(e.target.value)}
                    >
                      
                      <option value=""  selected="selected" disabled="disabled">Employment Type</option>
    <option value="Self-employed">Self-employed</option>
    <option value="Out of work">Out of work</option>
    <option value="Homemaker">Homemaker</option>
    <option value="Student">Student</option>
    <option value="Retired">Retired</option>
    <option value="Unable to work">Unable to work</option>
                    </select>
                  </div>

                  <div className="input-group1">
                    <select
                      value={occupation}
                      className="input--style-2"
                      type="text"
                      placeholder="Occupation"
                      name="name"
                      onChange={(e) => setOccupation(e.target.value)}
                    >
                      <option value="" selected="selected" disabled="disabled" >Occupation</option>
                      <optgroup label="Healthcare Practitioners and Technical Occupations:">
      <option value="1">-  Chiropractor</option>
      <option value="2">-  Dentist</option>
      <option value="3">-  Dietitian or Nutritionist</option>
      <option value="4">-  Optometrist</option>
      <option value="5">-  Pharmacist</option>
      <option value="6">-  Physician</option>
      <option value="7">-  Physician Assistant</option>
      <option value="8">-  Podiatrist</option>
      <option value="9">-  Registered Nurse</option>
      <option value="10">-  Therapist</option>
      <option value="11">-  Veterinarian</option>
      <option value="12">-  Health Technologist or Technician</option>
      <option value="13">-  Other Healthcare Practitioners and Technical Occupation</option>
    </optgroup>
    <optgroup label="Healthcare Support Occupations:">
      <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
      <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
      <option value="16">-  Other Healthcare Support Occupation</option>
    </optgroup>
    <optgroup label="Business, Executive, Management, and Financial Occupations:">
      <option value="17">-  Chief Executive</option>
      <option value="18">-  General and Operations Manager</option>
      <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
      <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
      <option value="21">-  Construction Manager</option>
      <option value="22">-  Engineering Manager</option>
      <option value="23">-  Accountant, Auditor</option>
      <option value="24">-  Business Operations or Financial Specialist</option>
      <option value="25">-  Business Owner</option>
      <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
    </optgroup>
    <optgroup label="Architecture and Engineering Occupations:">
      <option value="27">-  Architect, Surveyor, or Cartographer</option>
      <option value="28">-  Engineer</option>
      <option value="29">-  Other Architecture and Engineering Occupation</option>
    </optgroup>
    <optgroup label="Education, Training, and Library Occupations:">
      <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
      <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
      <option value="32">-  Other Teacher or Instructor</option>
      <option value="33">-  Other Education, Training, and Library Occupation</option>
    </optgroup>
    <optgroup label="Other Professional Occupations:">
      <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
      <option value="35">-  Computer Specialist, Mathematical Science</option>
      <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
      <option value="37">-  Lawyer, Judge</option>
      <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
      <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
      <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
      <option value="41">-  Social Scientist and Related Worker</option>
      <option value="42">-  Other Professional Occupation</option>
    </optgroup>
    <optgroup label="Office and Administrative Support Occupations:">
      <option value="43">-  Supervisor of Administrative Support Workers</option>
      <option value="44">-  Financial Clerk</option>
      <option value="45">-  Secretary or Administrative Assistant</option>
      <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
      <option value="47">-  Other Office and Administrative Support Occupation</option>
    </optgroup>
    <optgroup label="Services Occupations:">
      <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
      <option value="49">-  Chef or Head Cook</option>
      <option value="50">-  Cook or Food Preparation Worker</option>
      <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
      <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
      <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
      <option value="54">-  Sales Supervisor, Retail Sales</option>
      <option value="55">-  Retail Sales Worker</option>
      <option value="56">-  Insurance Sales Agent</option>
      <option value="57">-  Sales Representative</option>
      <option value="58">-  Real Estate Sales Agent</option>
      <option value="59">-  Other Services Occupation</option>
    </optgroup>
    <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
      <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
      <option value="61">-  Farming, Fishing, and Forestry</option>
      <option value="62">-  Installation, Maintenance, and Repair</option>
      <option value="63">-  Production Occupations</option>
      <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
    </optgroup>
    <optgroup label="Transportation Occupations:">
      <option value="65">-  Aircraft Pilot or Flight Engineer</option>
      <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
      <option value="67">-  Other Transportation Occupation</option>
    </optgroup>
    <optgroup label="Other Occupations:">
      <option value="68">-  Military</option>
      <option value="69">-  Homemaker</option>
      <option value="70">-  Other Occupation</option>
      <option value="71">-  Don't Know</option>
      <option value="72">-  Not Applicable</option>
    </optgroup>
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
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group1">
                      <select
                        value={height}
                        id="height"
                        className="input--style-2  browser-default "
                        onChange={(e) => setHeight(e.target.value)}
                      >
                        <option value=""  selected="selected" disabled="disabled">Height</option>
                        <option value="1">4ft 6in - 137 cms</option>

                  <option value="4ft 7in - 140 cms">4ft 7in - 140 cms</option>

                  <option value="4ft 8in - 142 cms">4ft 8in - 142 cms</option>

                  <option value="4ft 9in - 145 cms">4ft 9in - 145 cms</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group1">
                      <select
                        value={weight}
                        id="weight"
                        className="input--style-2  browser-default "
                        onChange={(e) => setWeigth(e.target.value)}
                      >
                        <option value=""  selected="selected" disabled="disabled">Weight</option>
                        <option value="45-50kg">45-50kg</option>

<option value="50-55kgs">50-55kgs</option>

<option value="55-60kgs">55-60kgs</option>

<option value="60-65kgs">60-65kgs</option>
                      </select>
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
                        onChange={(e) => setBodytype(e.target.value)}
                      >
                        <option value=""  selected="selected" disabled="disabled">Body Type</option>
                        <option value="Slim">Slim</option>

<option value="Average">Average</option>

<option value="Athletic">Athletic</option>

<option value="Heavy">Heavy</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group1">
                      <select
                        value={complexion}
                        id="complexion"
                        className="input--style-2  browser-default  "
                        onChange={(e) => setComplexion(e.target.value)}
                      >
                        <option value=""  selected="selected" disabled="disabled">Complexion</option>
                        <option value="Very Fair">Very Fair</option>

<option value="Fair">Fair</option>

<option value="Wheatish">Wheatish</option>

<option value="Wheatish Brown">Wheatish Brown</option>

<option value="Dark">Dark</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="input-group1">
                  <select
                    value={physical}
                    id="physical"
                    className="input--style-2  browser-default "
                    onChange={(e) => setPhysical(e.target.value)}
                  >
                    <option value=""  selected="selected" disabled="disabled">Physical Status</option>
                    <option value="Any">Any</option>
              
              <option value="Normal">Normal</option>
              
              <option value="Physically Challenged">Physically Challenged</option>
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

export default PersonalDetails;
