import React from "react";
import "./EventCard.css";

function EventCard(props) {
  return (
    <div className="list-item">
      <div
        className={`list-text ${
          props.head.indexOf(" ") !== -1
            ? props.head.substr(0, props.head.indexOf(" "))
            : props.head
        }`}
      >
        <div className="list-text-inner">
          <div className="grid">
            <h1>{props.head}</h1>
            <div className="img"></div>
          </div>
          <p>
            <span>{props.content.substr(0, 100)}</span>
            <span className="extra">{props.content.substr(100)}</span>
          </p>
          {props.link === "" ? (
            <button className={`btn-events ${props.reg}`}>
              {props.reg === "start" ? "Coming soon" : "Seats Filled"}
            </button>
          ) : (
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className={`btn-events`}>Register</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
