import React from "react";
import "./PrizeCard.css";
import PB from "../../Assets/prize_bg.png";
import CUP from "../../Assets/cup.png";

function PrizeCard(props) {
  return (
    <div className="card-container">
      <div className="prize-card">
        <img src={PB} alt="Prize" />
        <div className="prize-detail">
          <div className="prize-number">First Prize</div>
          <div>The winner gets an x amount of money</div>
        </div>
      </div>
      <img className="cup" src={CUP} alt="cup-image"/>
    </div>
  );
}

export default PrizeCard;
