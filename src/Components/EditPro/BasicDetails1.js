import React from "react";
import "./Basic.css";
import { Link } from "react-router-dom";
function BasicDetails1() {
  return (
    <div class="container co1">
      <header>Edit Profile</header>
      <form action="#">
        <div class="form first">
          <div class="details personal">
            <span class="title">Personal Details</span>
            <div class="fields">
              <div class="input-field">
                <label>First Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-field">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-field">
                <label>Date of Birth</label>
                <input type="date" placeholder="Enter birth date" required />
              </div>
              <div class="input-field">
                <label>Gender</label>
                <select required>
                  <option disabled selected>
                    Select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div class="input-field">
                <label> Profile for</label>
                <select required>
                  <option disabled selected>
                    Select
                  </option>

                  <option value="1">Myself</option>
                  <option value="3">Daughter</option>
                  <option value="3">Son</option>

                  <option value="2">Brother</option>
                  <option value="3">Sister</option>
                  <option value="3">Relative</option>
                  <option value="3">Friend</option>
                </select>
              </div>
              <div class="input-field">
                <label>Mother Tongue</label>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div class="input-field">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div class="input-field">
                <label>Mobile Number</label>
                <input
                  type="number"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div class="input-field">
                <label>Alternative Number</label>
                <input
                  type="number"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              {/* <div class="input-field">
                        <label>Occupation</label>
                        <input type="text" placeholder="Enter your ccupation" required/>
                    </div> */}
            </div>
          </div>
          <div class="details ID">
            <span class="title">Contact Details</span>
            <div class="fields">
              <div class="input-field">
                <label>Address</label>
                <input type="text" placeholder="Enter Your Address" required />
              </div>
              <div class="input-field">
                <label>City</label>
                <input type="number" placeholder="Enter Your City" required />
              </div>
              <div class="input-field">
                <label>State</label>
                <input type="text" placeholder="Enter Your State" required />
              </div>
              <div class="input-field">
                <label>Country</label>
                <input type="text" placeholder="Enter Your Country" required />
              </div>
            </div>
          </div>
          <div class="details ID">
            <span class="title">Family Details</span>
            <div class="fields">
              <div class="input-field">
                <label>Father Name</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Caste</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Kulam</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Mother Name</label>
                <input type="text" placeholder=" " required />
              </div>

              <div class="input-field">
                <label>Caste</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Kulam</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Parents Mobile Number</label>
                <input
                  type="number"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>
          </div>

          <div class="details ID">
            <span class="title">Religious Information</span>
            <div class="fields">
              <div class="input-field">
                <label>Religious</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Caste</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Kulam</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Raasi</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Star</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Chevvai Dosham</label>
                <input type="text" placeholder=" " required />
              </div>
            </div>
          </div>

          <div class="details ID">
            <span class="title">Habit Details</span>
            <div class="fields">
              <div class="input-field">
                <label>Food Habit</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Smocking Habit</label>
                <input type="text" placeholder=" " required />
              </div>
              <div class="input-field">
                <label>Drinking Habit</label>
                <input type="text" placeholder=" " required />
              </div>
            </div>
            <button type="submit" className="nextBtn">
              <Link className="btnText" to="/home">
                Save Profile
              </Link>
              {/* <span class="btnText">Save</span> */}
              <i class="uil uil-navigator"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BasicDetails1;
