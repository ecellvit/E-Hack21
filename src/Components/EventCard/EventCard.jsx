import React from "react";
import "./EventCard.css";

function EventCard(props) {
  return (
    <div className="list-item">
      <div className={`list-text`}>
        <div className="list-text-inner">
          <img src={props.src} alt={props.head} />
          <h1>{props.head}</h1>
          <p>
            Prizes Worth {"\u20B9"}
            {props.prize}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
