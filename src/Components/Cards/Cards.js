import React from "react";
import "./card.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img 2.png";
import img3 from "../../assets/img 3.png";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={imgSrc} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      imgSrc: img1,
      title: "Manually Verified Profiles & lakhs of active profiles",
    },
    {
      imgSrc: img2,
      title: "100% Secure & Confidential Profile Creation",
    },
    {
      imgSrc: img3,
      title: "Intelligent Matchmaking Algorithm",
    },
  ];

  return (
    <div className="card-cont">
      <h1>What sets us apart?</h1>
      <ul className="card-list">
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
