import React from "react";
import "./Details.css";
const Details = (props) => {
  const { img, name } = props.singlePeople;
  return (
    <div className="d-flex mt-2 selected-member">
      <img className="selected-people-image" src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default Details;
