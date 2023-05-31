import React from 'react'
import { Link } from 'react-router-dom'
import "./EditPro.css"
function EditPreference() {


  return (
    <div class="container co1">
    <header>Edit Partner Preference</header>
    <form action="#">
        <div class="form1">
            <div class="details personal">
                <span class="title">Personal Details</span>
                <div class="fields">
                <div class="input-field">
                        <label>Marital Status</label>
                        <select required>
                            <option disabled selected>Select</option>
                                   
<option value="1">Married</option>
<option value="2">UnMarried</option>

<option value="3">Divorced</option>
<option value="4">Widower</option>
<option value="2">Awaiting divorce</option>
<option value="2">Any</option>
                        </select>
                    </div>
                    <div class="input-field">
                        <label>Mother Tongue</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Highest Education</label>
                        <input type="text" placeholder="" required/>
                    </div>
                    <div class="input-field">
                        <label>Employment Type</label>
                        <input type="text" placeholder="" required/>
                    </div>
                    <div class="input-field">
                        <label>Occupation</label>
                        <input type="text" placeholder="" required/>
                    </div>
                    <div class="input-field">
                        <label>Monthly Income</label>
                        <input type="text" placeholder="" required/>
                    </div>
                   
                   
                  
              
                </div>
            </div>
            



            <div class="details ID">
                <span class="title">Religious Information</span>
                <div class="fields">
                <div class="input-field">
                        <label>Religious</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Caste</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Kulam</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Raasi</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Star</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Chevvai Dosham</label>
                        <input type="text" placeholder=" " required/>
                    </div>

                    
                </div>
                
            </div> 

            <div class="details ID">
                <span class="title">Personal Details</span>
                <div class="fields">
                <div class="input-field">
                        <label>Min-Max Age</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                <div class="input-field">
                        <label>Height</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Weight</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Body Type</label>
                        <input type="text" placeholder=" " required/>
                    </div>
                    <div class="input-field">
                        <label>Complexion</label>
                        <input type="text" placeholder="" required/>
                    </div>
                    <div class="input-field">
                        <label>Physical Status</label>
                        <input type="text" placeholder="" required/>
                    </div>

                    
                </div>
                <button class="nextBtn">
                <Link className="btnText" to="/home">Save Profile</Link>
                    <i class="uil uil-navigator"></i>
                </button>
            </div> 
        </div>
     
    </form>
</div>
  )
}

export default EditPreference