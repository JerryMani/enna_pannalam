import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import regImg from "../../assets/reg.jpg";
import Login from "../Login/Login";
import { API_BASE_URL } from "../api_config";

import "./register.css";
import RegContent from "./RegContent";
import SS from "../SS/SS";
import CardList from "../Cards/Cards";
import UserContext from "../Authcontext";


const Register = () => {
  const { setUser } = useContext(UserContext);
  const [profile, setProfile] = useState("");
  const [looking, setLooking] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [conform, setConform] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/register`,
      {
        profile,
        looking,
        mobile,
        password,
        conform,
      },
      { withCredentials: true }
    );
    console.log(response.data);
    if (response.data.auth && mobile !== "" && password !== "") {
      setUser({userId: response.data.userId, userMob: response.data.userMob});
      navigate("/basic-info", {replace: true});
      setProfile("");
      setLooking("");
      setMobile("");
      setPassword("");
      setConform("");
    } else {
      setError(response.data.error);
    }
  };
  console.log(profile, looking, mobile, password, conform);
  return (
    <div className="reg-cont">
      <div className="reg-nav">
        <div>
          <Link className="logo-link-img">
            <img src={logo} alt="Tamil Matrimony" className="reg-logo" />
          </Link>
        </div>
        <div className="reg-log-cont">
          <p className="parag">Already have an account?</p>
          <Link className="reg-login">
            <Login />
          </Link>
        </div>
      </div>
      <div className="reg-body-cont">
        <div className="reg-form-cont">
          <h2
            style={{ textAlign: "center", color: "#fff", fontSize: "1.5rem" }}
          >
            A Happy marriage is the union of to good forgivers
          </h2>
          <form className="reg-form-content" onSubmit={handleRegister}>
            <select
              value={profile}
              type="text"
              placeholder="Profile For"
              className="form-controls"
              onChange={(e) => setProfile(e.target.value)}
            >
              <option readonly>Profile for</option>

              <option value="Myself">Myself</option>
              <option value="Daughter">Daughter</option>
              <option value="son">Son</option>

              <option value="Brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="Relative">Relative</option>
              <option value="Friend">Friend</option>
            </select>

            <select
              value={looking}
              type="text"
              placeholder="Looking For"
              className="form-controls"
              onChange={(e) => setLooking(e.target.value)}
            >
              <option readonly>Looking For</option>

              <option value="Bride">Bride</option>
              <option value="Groom">Groom</option>
            </select>

            <input
              value={mobile}
              type="tel"
              placeholder="Mobile (for OTP)"
              className="form-controls"
              onChange={(e) => setMobile(e.target.value)}
            />

            <input
              value={password}
              type="password"
              placeholder="password"
              className="form-controls"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              value={conform}
              type="password"
              placeholder="confirm password"
              className="form-controls"
              onChange={(e) => setConform(e.target.value)}
            />
            <button type="submit" className="btn btn-primary reg-btn">
              Register
            </button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
        <div className="reg-body-form-img-cont">
          <img
            src={regImg}
            alt="Tamil Matrimony"
            className="reg-body-form-img"
          />
        </div>
      </div>
      <RegContent />
      <CardList />
      <SS />
    </div>
  );
};

export default Register;
