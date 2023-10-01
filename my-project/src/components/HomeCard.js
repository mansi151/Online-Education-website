import React from "react";
const HomeCard = (props) => {
  return (
    <div>
      {props.img}
      <h2 className="heading">{props.title}</h2>
      <p className="paragraph">{props.desc}</p>
    </div>
  );
};
export default HomeCard;
