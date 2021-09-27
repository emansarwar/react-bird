import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Member from "../Member/Member";
import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeDB.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  const handleCart = (member) => {
    for (const singlemember of cart) {
      if (singlemember === member) {
        setCart([...cart]);
        return;
      }
    }
    setCart([...cart, member]);
  };
  //   console.log(cart);
  return (
    <Container className="d-flex">
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
      <div className="team-container">
        {team.map((member) => (
          <Member
            key={member.id}
            member={member}
            handleCart={handleCart}
          ></Member>
        ))}
      </div>
    </Container>
  );
};

export default Team;
