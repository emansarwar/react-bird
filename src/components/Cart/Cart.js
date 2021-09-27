import React from "react";
import Details from "../Details/Details";
import "./Cart.css";

const Cart = (props) => {
  let total = 0;
  for (const member of props.cart) {
    total = total + member.salary;
  }
  const invest = total / 15;
  return (
    <div className="mt-5 text-dark">
      <h4>Total added: {props.cart.length}</h4>
      <p>Total Salary: {total}&#2547;</p>
      <p>Invest on Village: {invest.toFixed(2)}&#2547;</p>
      <div>
        {props.cart.map((singlePeople) => (
          <Details singlePeople={singlePeople}></Details>
        ))}
      </div>
    </div>
  );
};

export default Cart;
