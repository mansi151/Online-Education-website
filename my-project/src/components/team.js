import React from "react";
const TeamCard = (props) => {
  return (
    <>
      <div className="overlay">
        {props.img1}
        {props.img2}
        {props.img3}
        {props.img4}
      </div>
      <img src={props.cover} alt={props.cover} className="card_image" />
      <div className="details">
        <h2>{props.name}</h2>
        <p>{props.work}</p>
      </div>
    </>
  );
};

export default TeamCard;
