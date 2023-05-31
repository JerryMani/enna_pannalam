import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./header.css";

const Header = () => {
  // const [dropDown, setDropDown] = useState(false)

  // return (
  //   <nav className="header-cont">
  //     <div className="header-left-cont">
  //       <img src={logo} alt="Tamil Matrimony" className="company-logo" />
  //       <ul className="header-nav-links-list">
  //         <li className="header-nav-links-item">
  //           <NavLink to="/home" className="header-nav-link">
  //             MY HOME
  //           </NavLink>
  //         </li>
  //         <li className="header-nav-links-item">
  //           <NavLink to="/searchbox" className="header-nav-link">
  //             SEARCH
  //           </NavLink>
  //         </li>
  //         <li className="header-nav-links-item" onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
  //           <NavLink to="/matches" className="header-nav-link">
  //             MATCHES
  //           </NavLink>
  //           {dropDown && (
  //             <ul className="sub-menu">
  //               <li>Daily Recommendations</li>
  //               <li>Total Matches</li>
  //               <li>All Matches</li>

  //           </ul>
  //           )}
  //         </li>
  //         <li className="header-nav-links-item">
  //           <NavLink to="/mailbox" className="header-nav-link">
  //             MAILBOX
  //           </NavLink>
  //         </li>
  //         <li className="header-nav-links-item">
  //           <NavLink to="/payment/paymentoption" className="header-nav-link">
  //             UPGRADE NOW
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="header-profile-cont">
  //       <IoIosNotifications size={30} color="6D778D" />
  //       <div className="header-profile">
  //         <CgProfile size={40} color="6D778D" />
  //         <MdKeyboardDoubleArrowDown size={25} color="6D778D" />
  //       </div>
  //     </div>
  //   </nav>
  // );

  const [clicked, setClicked] = useState(false);

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>
      <ul className={clicked ? "navbar nav-active" : "navbar"}>
        <NavLink to="/home" className="nav-links">
          <li>My Home</li>
        </NavLink>
        <NavLink to="/searchbox" className="nav-links">
          <li>Search</li>
        </NavLink>
        <NavLink to="/matches" className="nav-links">
          <li>Matches</li>
        </NavLink>
        <NavLink to="/mailbox" className="nav-links">
          <li>Mailbox</li>
        </NavLink>
        <NavLink to="/payment/paymentoption" className="nav-links">
          <li>Upgrade Now</li>
        </NavLink>
        <div className="header-profile-cont">
          <IoIosNotifications size={30} color="6D778D" />
          <div className="header-profile">
            <CgProfile size={40} color="6D778D" />
            <MdKeyboardDoubleArrowDown size={25} color="6D778D" />
          </div>
        </div>
      </ul>
      <div className="mobile">
        <button
          type="button"
          className="btn-icons"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
