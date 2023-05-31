import React, { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Cool from "./Components/Details/Cool";
import Contact from "./Components/Details/Contact";
import PersonalDetails from "./Components/Details/PersonalDetails";
import FamilyDetails from "./Components/Details/FamilyDetails";
import HabitDetails from "./Components/Details/HabitsDetail";
import OtpForm from "./Components/Details/Otp/Otp";
import ReligiousInformation from "./Components/Details/ReligiousInformation";
import PartnerPreferenceDetails from "./Components/Details/PartnerPreferenceDetails";
import Register from "./Components/Register/Register";
import Footer from "./Components/Foote/Footer";
import Home from "./Components/Home/Home";
import Matches from "./Components/Matches/Matches";
import Payment from "./Components/Payment/Payment";
import Header from "./Components/Header/Header";
import ViewProfile from "./Components/Vp/ViewProfile";
import ViewProfile1 from "./Components/Vp/ViewProfile1";
import EditProfile from "./Components/EditPro/EditProfile";
import BasicDetails1 from "./Components/EditPro/BasicDetails1";
import EditPreference from "./Components/EditPro/EditPP";
import Image from "./Components/Details/Image";
import SearchBox from "./Components/Search/Search";
import Mailbox from "./Components/Mailbox/Mailbox";
import HoroscopeBoxes from "./Components/horo/Horo";
import UserContext from "./Components/Authcontext";
// import MatrimonyProfiles from "./Components/Search/sear";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/basic-info" element={<Cool />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PersonalDetails" element={<PersonalDetails />} />
          <Route path="/FamilyDetails" element={<FamilyDetails />} />
          <Route
            path="/ReligiousInformation"
            element={<ReligiousInformation />}
          />
          <Route path="/HabitDetails" element={<HabitDetails />} />
          <Route
            path="/PartnerPreferenceDetails"
            element={<PartnerPreferenceDetails />}
          />
          <Route path="/OtpForm" element={<OtpForm />} />
          <Route path="/" element={<Register />} />
          <Route
            path="/Home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/matches"
            element={
              <>
                <Header /> <Matches />
              </>
            }
          />
          <Route path="/ViewProfile1" element={<ViewProfile1 />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />

          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/Image" element={<Image />} />
          {/* <Route path="/MatrimonyProfiles" element={<MatrimonyProfiles />} /> */}

          <Route
            path="/SearchBox"
            element={
              <>
                <Header />
                <SearchBox />
              </>
            }
          />

          <Route
            path="/MailBox"
            element={
              <>
                <Header />
                <Mailbox />
              </>
            }
          />
          <Route
            path="/BasicDetails1"
            element={
              <>
                
                <Header /> <BasicDetails1 />
              </>
            }
          />

          <Route
            path="/EditPreference"
            element={
              <>
                
                <Header /> <EditPreference />
              </>
            }
          />

          <Route
            path="/horoscope"
            element={
              <>
                
                <Header /> <HoroscopeBoxes />
              </>
            }
          />

          <Route
            path="/payment/paymentoption"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
