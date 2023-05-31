import React from "react";
import "./viewpro.css";
import img1 from "../images/boy.jpg";

function ViewProfile() {
  return (
    <section className="back">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img src={img1} className="img-fluid" alt="Tamil Matrimony" />
                <h5 class="my-3">Gopi</h5>
                <p class="text-muted mb-1">Full Stack Developer</p>
                <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                {/* <div class="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-primary">
                    Follow
                  </button>
                  <button type="button" class="btn btn-outline-primary ms-1">
                    Message
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">First Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Johnatan</p>
                  </div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Last Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile Number</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(+91) 9215245525</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Alternative Number</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(+91) 9927654321</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">City</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Dindigul</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">State</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Tamilnadu</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Father Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Caste</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Kulam</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mother Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Caste</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Kulam</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Parents Mobile Number</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">+91 9125493542</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Religious</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
               
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Caste</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Raasi</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Star</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Chevvai dhosam</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Food Habit</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Smocking Habit</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Drinking Habit</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
                <hr/>
                
              <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Smocking Habit</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0"> Smith</p>
                  </div>
                </div>
               </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProfile;
