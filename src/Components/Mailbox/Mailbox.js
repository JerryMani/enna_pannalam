// import React, { useState } from "react";
// import "./mailbox.css";

// const Mailbox = () => {
//   const [activeTab, setActiveTab] = useState("accepting");
//   const [mailType, setMailType] = useState("accepted");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "accepting") {
//       setMailType("accepted");
//     } else if (tab === "pending") {
//       setMailType("pending");
//     } else if (tab === "declined") {
//       setMailType("declined");
//     } else {
//       setMailType("sent");
//     }
//   };

//   return (
//     <div className="mailbox-container">
//       <div className="sidenav">
//         <button
//           className={activeTab === "accepting" ? "active" : ""}
//           onClick={() => handleTabClick("accepting")}
//         >
//           Inbox
//         </button>
//         {activeTab === "accepting" && (
//           <div className="inbox-options">
//             <button
//               className={mailType === "accepted" ? "active" : ""}
//               onClick={() => setMailType("accepted")}
//             >
//               Accepted
//             </button>
//             <button
//               className={mailType === "pending" ? "active" : ""}
//               onClick={() => setMailType("pending")}
//             >
//               Pending
//             </button>
//             <button
//               className={mailType === "declined" ? "active" : ""}
//               onClick={() => setMailType("declined")}
//             >
//               Declined
//             </button>
//           </div>
//         )}
//         <button
//           className={activeTab === "sent" ? "active" : ""}
//           onClick={() => handleTabClick("sent")}
//         >
//           Sent
//         </button>
//         <button
//           className={activeTab === "chats" ? "active" : ""}
//           onClick={() => handleTabClick("chats")}
//         >
//           My Chats
//         </button>
//         <button
//           className={activeTab === "members" ? "active" : ""}
//           onClick={() => handleTabClick("members")}
//         >
//           Online Members
//         </button>
//       </div>
//       <div className="main">
//         {activeTab === "accepting" && (
//           <div className="mails">
//             {mailType === "accepted" && (
//               <>
//                 <div className="mail">
//                   <div className="from">John Doe</div>
//                   <div className="subject">Profile Acceptance</div>
//                   <div className="date">April 1, 2023</div>
//                 </div>
//                 <div className="mail">
//                   <div className="from">Jane Smith</div>
//                   <div className="subject">Profile Acceptance</div>
//                   <div className="date">March 30, 2023</div>
//                 </div>
//               </>
//             )}
//             {mailType === "pending" && (
//               <>
//                 <div className="mail">
//                   <div className="from">John Doe</div>
//                   <div className="subject">Profile Request</div>
//                   <div className="date">April 1, 2023</div>
//                 </div>
//                 <div className="mail">
//                   <div className="from">Jane Smith</div>
//                   <div className="subject">Profile Request</div>
//                   <div className="date">March 30,, 2023</div>
// </div>
// </>
// )}
// {mailType === "declined" && (
// <>
// <div className="mail">
// <div className="from">John Doe</div>
// <div className="subject">Profile Declined</div>
// <div className="date">April 1, 2023</div>
// </div>
// <div className="mail">
// <div className="from">Jane Smith</div>
// <div className="subject">Profile Declined</div>
// <div className="date">March 30, 2023</div>
// </div>
// </>
// )}
// </div>
// )}
// {activeTab === "sent" && (
// <div className="mails">
// <div className="mail">
// <div className="to">John Doe</div>
// <div className="subject">Profile Acceptance</div>
// <div className="date">April 1, 2023</div>
// </div>
// <div className="mail">
// <div className="to">Jane Smith</div>
// <div className="subject">Profile Acceptance</div>
// <div className="date">March 30, 2023</div>
// </div>
// </div>
// )}
// {activeTab === "chats" && (
// <div className="chats">
// <div className="chat">John Doe</div>
// <div className="chat">Jane Smith</div>
// </div>
// )}
// {activeTab === "members" && (
// <div className="members">
// <div className="member">John Doe</div>
// <div className="member">Jane Smith</div>
// <div className="member">Bob Johnson</div>
// <div className="member">Sara Lee</div>
// </div>
// )}
// </div>
// </div>
// );
// };

// export default Mailbox;

import { useState } from "react";
import "./mailbox.css";

const Mailbox = () => {
  const [inbox, setInbox] = useState(false)
  const [activeTab, setActiveTab] = useState("accepting");
  const [mailType, setMailType] = useState("accepted");
  const [profiles, setProfiles] = useState([
    {
      name: "John Doe",
      online: true,
    },
    {
      name: "Jane Smith",
      online: false,
    },
    {
      name: "Bob Johnson",
      online: true,
    },
    {
      name: "Sara Lee",
      online: false,
    },
  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "accepting") {
      setMailType("accepted");
    } else if (tab === "pending") {
      setMailType("pending");
    } else if (tab === "declined") {
      setMailType("declined");
    } else {
      setMailType("sent");
    }
  };

  const handleProfileClick = (index) => {
    setSelectedProfile(index);
  };

  const handleProfileClose = () => {
    setSelectedProfile(null);
  };

  const handleInbox = () => {
    setInbox(!inbox)
    handleTabClick("accepting")
  }

  return (
    <div className="mailbox-container">
      <div className="sidenav">
        <button
          className={activeTab === "accepting" ? "active" : ""}
          onClick={handleInbox}
        >
          Inbox
        </button>
        {inbox && 
        activeTab === "accepting" && (
          <div className="inbox-options">
            <button
              className={mailType === "accepted" ? "active" : ""}
              onClick={() => setMailType("accepted")}
            >
              Accepted
            </button>
            <button
              className={mailType === "pending" ? "active" : ""}
              onClick={() => setMailType("pending")}
            >
              Pending
            </button>
            <button
              className={mailType === "declined" ? "active" : ""}
              onClick={() => setMailType("declined")}
            >
              Declined
            </button>
          </div>
        )}
        <button
          className={activeTab === "sent" ? "active" : ""}
          onClick={() => handleTabClick("sent")}
        >
          Sent
        </button>
        <button
          className={activeTab === "chats" ? "active" : ""}
          onClick={() => handleTabClick("chats")}
        >
          My Chats
        </button>
        <button
          className={activeTab === "members" ? "active" : ""}
          onClick={() => handleTabClick("members")}
        >
          Online Members
        </button>
      </div>
      <div className="main">
        {activeTab === "accepting" && (
          <div className="mails">
            {mailType === "accepted" && (
              <>
                <div className="mail">
                  <div className="from">John Doe</div>
                  <div className="subject">Profile Acceptance</div>
                  <div className="date">April 1, 2023</div>
                </div>
                <div className="mail">
                  <div className="from">Jane Smith</div>
                  <div className="subject">Profile Acceptance</div>
                  <div className="date">March 30, 2023</div>
                </div>
              </>
            )}
            {mailType === "pending" && (
              <>
                <div className="mail">
                  <div className="from">Bob Johnson</div>
                  <div className="subject">Profile Pending</div>
                  <div className="date">April 2, 2023</div>
                </div>
              </>
            )}
            {mailType === "declined" && (
              <>
                <div className="mail">
                  <div className="from">Sara Lee</div>
                  <div className="subject">Profile Rejected</div>
                  <div className="date">March 28, 2023</div>
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === "sent" && (
          <div className="mails">
            <div className="mail">
              <div className="to">Jane Smith</div>
              <div className="subject">Regarding our Meeting</div>
              <div className="date">April 3, 2023</div>
            </div>
          </div>
        )}
        {activeTab === "chats" && (
          <div className="chat-list">
            <div className="chat">
              <div className="profile-pic"></div>
              <div className="chat-info">
                <div className="name">John Doe</div>
                <div className="last-message">Hey, how are you?</div>
              </div>
              <div className="timestamp">12:34 PM</div>
            </div>
            <div className="chat">
              <div className="profile-pic"></div>
              <div className="chat-info">
                <div className="name">Jane Smith</div>
                <div className="last-message">Can we meet tomorrow?</div>
              </div>
              <div className="timestamp">9:15 AM</div>
            </div>
          </div>
        )}
        {activeTab === "members" && (
          <div className="member-list">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className={
                  selectedProfile === index ? "member active" : "member"
                }
                onClick={() => handleProfileClick(index)}
              >
                <div className="profile-pic"></div>
                <div className="name">{profile.name}</div>
                <div className={profile.online ? "online" : "offline"}></div>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedProfile !== null && (
        <div className="profile-modal">
          <div className="modal-content">
            <div className="profile-header">
              <div className="profile-pic"></div>
              <div className="name">{profiles[selectedProfile].name}</div>
              <div
                className={
                  profiles[selectedProfile].online ? "online" : "offline"
                }
              ></div>
            </div>
            <div className="profile-details">
              <div className="detail">
                <div className="label">Username:</div>
                <div className="value">{profiles[selectedProfile].name}</div>
              </div>
              <div className="detail">
                <div className="label">Email:</div>
                <div className="value">
                  {profiles[selectedProfile].name}@example.com
                </div>
              </div>
              <div className="detail">
                <div className="label">Phone:</div>
                <div className="value">+1 123-456-7890</div>
              </div>
            </div>
            <div className="close-button" onClick={handleProfileClose}>
              X
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Mailbox;
