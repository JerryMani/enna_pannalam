import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeProf = () => {
  return (
    <div className="homeprof-cont">
      <div className="homeprof-profile-cont">
        <div className="homeprof-profile-top">
          <div className="homeprof-profile">
            <CgProfile size={70} />
            <div className="homeprof-username">
              <p>Good Afternoon!</p>
              <h1>Jerry</h1>
            </div>
          </div>
          <div className="homeprof-profile-progress">
            {/* <p>Profile Completeness 50%</p> */}
            <Link className="complete-profile-link">
              Complete Your Profile
              <span>
                <IoIosArrowForward size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className="homeprof-profile-bottom">
          <p className="homeprof-profile-bottom-desc">
            As a free member, you are unable to chat matches you like!
          </p>
          <Link to="/payment/paymentoption" className="upgrade-link">
            Upgrade to start chatting
          </Link>
        </div>
      </div>
      <div className="homeprof-settings">
        <ul className="homeprof-setting-list">
          <li className="homeprof-setting-item">
            <Link className="mod" to="/EditProfile">Edit Profile</Link>
          </li>
          <li className="homeprof-setting-item">
            <Link className="mod" to="/EditPreference">Edit Preferences</Link>
          </li>
        </ul>
        <ul className="homeprof-setting-list">
          <li className="homeprof-setting-item">Verify Your Profile</li>
          <li className="homeprof-setting-item">
            <Link className="mod" to="/horoscope">Horoscope</Link>
          </li>
        </ul>
        <ul className="homeprof-setting-list">
          <li className="homeprof-setting-item">
            <Link className="mod" to="/Mailbox">Your Conversations</Link>
          </li>
        </ul>
        <ul className="homeprof-setting-list">
          <li className="homeprof-setting-item">Help & Services</li>
          <li className="homeprof-setting-item">Success Stories</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeProf;
