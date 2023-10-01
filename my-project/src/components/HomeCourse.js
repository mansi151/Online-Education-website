import React from "react";
import { Link } from "react-router-dom";
const HomeCourse = (props) => {
  return (
    <>
      {" "}
      <img src={props.imgsrc} alt={props.imgsrc} className="card_image" />
      <h2 className="card-title heading">{props.title}</h2>
      <p className="card-text text-secondary paragraph">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <p>{props.price}</p>
      <Link
        to="https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
        target="_blank"
        class="btn btn-outline-success"
      >
        Learn now
      </Link>
    </>
  );
};
export default HomeCourse;
