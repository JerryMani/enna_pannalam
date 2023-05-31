import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="foot col-md-4">
            <h3>About Us</h3>
            <p>
              We are a matrimony website dedicated to helping people find their
              life partners. Our mission is to make the process of finding a
              partner easy, safe, and enjoyable.
            </p>
          </div>
          <div className="foot col-md-4">
            <h3>Contact Us</h3>
            <p>
              123 Main St.
              <br />
              New York, NY 10001
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@matrimony.com
            </p>
          </div>
          <div className="foot col-md-4">
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="left text-white col-md-6 text-center">
          <p>© 2023 Matrimony. All Rights Reserved.</p>
        </div>
        <div className="rig text-white col-md-6">
          <p>Designed and Developed By Virtual Technologies </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
