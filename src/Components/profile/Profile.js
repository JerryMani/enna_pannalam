// import React, { useState } from 'react';
// import './profile.css';
// import ProfileView from './ProfileView';

// function MatchesProfiles() {
//   const profiles = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 28,
//       location: "New York",
//       religion: "Christianity",
//       image: "https://randomuser.me/api/portraits/men/1.jpg"
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 24,
//       location: "London",
//       religion: "Islam",
//       image: "https://randomuser.me/api/portraits/women/2.jpg"
//     },
//     {
//       id: 3,
//       name: "David Lee",
//       age: 32,
//       location: "Sydney",
//       religion: "Judaism",
//       image: "https://randomuser.me/api/portraits/men/3.jpg"
//     },
//     {
//       id: 4,
//       name: "Maria Rodriguez",
//       age: 29,
//       location: "Barcelona",
//       religion: "Catholicism",
//       image: "https://randomuser.me/api/portraits/women/4.jpg"
//     },
//     {
//       id: 5,
//       name: "Chris Evans",
//       age: 35,
//       location: "Los Angeles",
//       religion: "Atheism",
//       image: "https://randomuser.me/api/portraits/men/5.jpg"
//     },
//     {
//       id: 6,
//       name: "Emma Watson",
//       age: 30,
//       location: "Paris",
//       religion: "Buddhism",
//       image: "https://randomuser.me/api/portraits/women/6.jpg"
//     }
//   ];

//   const [selectedProfile, setSelectedProfile] = useState(null);

// const handleViewProfile = (profile) => {
// setSelectedProfile(profile);
// }

// const handleHideProfile = () => {
// setSelectedProfile(null);
// }

// return (
// <>
// <div className="matches-container">
// {profiles.map((profile) => (
// <div key={profile.id} className="profile-card">
// <img className="profile-image" src={profile.image} alt={profile.name} />
// <div className="profile-details">
// <div className="profile-name">{profile.name}, {profile.age}</div>
// <div><strong>Location:</strong> {profile.location}</div>
// <div><strong>Religion:</strong> {profile.religion}</div>
// </div>
// <button className="view-profile-button" onClick={() => handleViewProfile(profile)}>View Profile</button>
// </div>
// ))}
// </div>
// {selectedProfile && <ProfileView profile={selectedProfile} onHideProfile={handleHideProfile} />}
// </>
// );
// }

// export default MatchesProfiles;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileView from '../View/View';
import './profile.css';

function MatchesProfiles() {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      location: "New York",
      religion: "Christianity",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 24,
      location: "London",
      religion: "Islam",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      name: "David Lee",
      age: 32,
      location: "Sydney",
      religion: "Judaism",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      age: 29,
      location: "Barcelona",
      religion: "Catholicism",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      name: "Chris Evans",
      age: 35,
      location: "Los Angeles",
      religion: "Atheism",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Emma Watson",
      age: 30,
      location: "Paris",
      religion: "Buddhism",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
  ];

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  }

  const handleHideProfile = () => {
    setSelectedProfile(null);
  }

  return (
    <>
      <div className="matches-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img className="profile-image" src={profile.image} alt={profile.name} />
            <div className="profile-details">
              <div className="profile-name">{profile.name}, {profile.age}</div>
              <div><strong>Location:</strong> {profile.location}</div>
              <div><strong>Religion:</strong> {profile.religion}</div>
            </div>
            <Link to={`/matches/${profile.id}`}className="view-profile-button" onClick={() => handleViewProfile(profile)}>View Profile</Link>
          </div>
        ))}
      </div>
      {selectedProfile && <ProfileView profile={selectedProfile} onHideProfile={handleHideProfile} />}
    </>
  );
}

export default MatchesProfiles;

