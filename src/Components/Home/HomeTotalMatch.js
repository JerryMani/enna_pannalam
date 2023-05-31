import React from "react";
// import { Link } from "react-router-dom";

const HomeTotalMatch = () => {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      location: "New York",
      religion: "Christianity",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 24,
      location: "London",
      religion: "Islam",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    // {
    //   id: 3,
    //   name: "David Lee",
    //   age: 32,
    //   location: "Sydney",
    //   religion: "Judaism",
    //   image: "https://randomuser.me/api/portraits/men/3.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Maria Rodriguez",
    //   age: 29,
    //   location: "Barcelona",
    //   religion: "Catholicism",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // }
  ];

  return (
    <div className="prof-daily-recom-container">
      <div className="prof-total-matches-heading-cont">
        <div className="prof-total-matches-heading-content">
          <h3 className="prof-daily-recom-heading">Total Matches</h3>
          {/* <p>Members who match your partner preferences</p> */}
       
    
      <ul className='prof-daily-recom-lists'>
            {profiles.map((prof,i) => (
                <li className='prof-daily-recom-item profile-total-matches-item'>
                    <img src={prof.image} alt={`prof${i}`} className='prof-total-matches-img'/>
                    <p className='prof-daily-recom-name'>{prof.name}</p> 
                </li>
            ))}
        </ul>
    </div>
    </div>
    </div>
    /* <Link>See all</Link> */

  );
};

export default HomeTotalMatch;
