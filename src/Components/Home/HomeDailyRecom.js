import React from 'react'

const HomeDailyRecom = () => {
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
        // {
        //   id: 3,
        //   name: "David Lee",
        //   age: 32,
        //   location: "Sydney",
        //   religion: "Judaism",
        //   image: "https://randomuser.me/api/portraits/men/3.jpg"
        // },
        // {
        //   id: 4,
        //   name: "Maria Rodriguez",
        //   age: 29,
        //   location: "Barcelona",
        //   religion: "Catholicism",
        //   image: "https://randomuser.me/api/portraits/women/4.jpg"
        // },
        // {
        //   id: 5,
        //   name: "Chris Evans",
        //   age: 35,
        //   location: "Los Angeles",
        //   religion: "Atheism",
        //   image: "https://randomuser.me/api/portraits/men/5.jpg"
        // },
        // {
        //   id: 6,
        //   name: "Emma Watson",
        //   age: 30,
        //   location: "Paris",
        //   religion: "Buddhism",
        //   image: "https://randomuser.me/api/portraits/women/6.jpg"
        // },
        // {
        //   id: 7,
        //   name: "Emma Watson",
        //   age: 30,
        //   location: "Paris",
        //   religion: "Buddhism",
        //   image: "https://randomuser.me/api/portraits/women/6.jpg"
        // },
        // {
        //   id: 8,
        //   name: "Chris Evans",
        //   age: 35,
        //   location: "Los Angeles",
        //   religion: "Atheism",
        //   image: "https://randomuser.me/api/portraits/men/5.jpg"
        // },
      ];
      
  return (
    <div className='prof-daily-recom-container'>
        <h3 className='prof-daily-recom-heading'>Your Daily Recommendations</h3>
        <ul className='prof-daily-recom-lists'>
            {profiles.map((prof,i) => (
                <li className='prof-daily-recom-item'>
                    <img src={prof.image} alt={`prof${i}`} className='prof-daily-recom-img'/>
                    <p className='prof-daily-recom-name'>{prof.name}</p> 
                </li>
            ))}
        </ul>
    </div>
  )
}

export default HomeDailyRecom