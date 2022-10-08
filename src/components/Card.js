import React from "react";
import "./../scss/Card.scss";

const Card = ({ title, desc, image, video }) => {
  return (
    <div className="cityCard">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <img src={image} alt="" />
      <div className="">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
