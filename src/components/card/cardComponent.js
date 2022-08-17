import React from "react";

import "./cardComponent.css";
import Star from "../../assets/star.png";
import KatieZaferes from "../../assets/katie-zaferes.png";
import WeddingPhoto from "../../assets/wedding-photography.png";
import MontainBike from "../../assets/mountain-biking.png";

const contentCard = [
  {
    imageName: KatieZaferes,
    imageAlt: "KatieZaferes",
    ratingDescription: "5.0",
    ratingDescriptionTwo: "(6)·USA",
    about: "Life lessons with Katie Zaferes",
    price: "From $136",
  },
  {
    imageName: WeddingPhoto,
    imageAlt: "WeddingPhoto",
    ratingDescription: "5.0",
    ratingDescriptionTwo: "(30)·USA",
    about: "Learn wedding photography",
    price: "From $125",
  },
  {
    imageName: MontainBike,
    imageAlt: "MontainBike",
    ratingDescription: "4.8",
    ratingDescriptionTwo: "(2)·USA",
    about: "Group Mountain Biking",
    price: "From $50",
  },
];

function Card() {
  return (
    <div className="card">
      {contentCard.map((item) => (
        <div className="card-content">
          <div className="card-image">
            <img src={item.imageName} alt={item.imageAlt} />
          </div>
          <div className="rating">
            <img src={Star} alt="star" />
            <span className="rating-description">
              {item.ratingDescription}{" "}
              <p className="rating-description-2">
                {item.ratingDescriptionTwo}
              </p>
            </span>
          </div>
          <div className="about">{item.about}</div>
          <div className="price">
            <strong>{item.price}</strong> / person
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
