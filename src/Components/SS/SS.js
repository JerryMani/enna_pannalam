import React from "react";
import "./SS.css";
import { FaHeart } from "react-icons/fa";

function SS() {
  return (
    <section class="bg-light mt-5" id="tourist">
      {/* <div className="fluid-container">
        <div className="row text-center"> */}
          <div className="col-sm-12 col-md-12 mb-4">
            <div className="line">
              <h3 class="text-center mt-4 text-secondary">
                <hr className="pink-line" />
                Successful
                <FaHeart className="heart-icon" />
                Stories
              </h3>
              <hr className="pink-line1" />
            </div>
          </div>
          <div class="client-rev-list">
            <div class="testimonial mb-5">
              <div class="avatar">
                <img
                  alt="ss1"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
              <h6 class="font-weight-bold blue-text my-3">
                soppanasundari-goundamani
              </h6>
              <p class="font-weight-normal dark-grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
          {/* </div> */}

          {/* <div class="col-md-4"> */}
            <div class="testimonial mb-5">
              <div class="avatar">
                <img
                  alt="ss2"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
              <h6 class="font-weight-bold blue-text my-3">saroja-premji</h6>
              <p class="font-weight-normal dark-grey-text">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
            </div>
          {/* </div> */}
          {/* <div class="col-md-4"> */}
            <div class="testimonial mb-5">
              <div class="avatar">
                <img
                  alt="ss3"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
              <h6 class="font-weight-bold blue-text my-3">sornaka-bijili</h6>
              <p class="font-weight-normal dark-grey-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
            </div>
          </div>  
          {/* </div> */}
        {/* </div>
      </div> */}
    </section>
  );
}

export default SS;
