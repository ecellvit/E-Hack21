import React from "react";
import { Link } from "react-scroll";

function Menu() {
  return (
    <>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="events">Events</Link>
      <Link to="speakers">Speakers</Link>
      <Link to="sponsors">Sponsors</Link>
    </>
  );
}

export default Menu;
