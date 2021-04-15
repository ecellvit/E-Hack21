import React from "react";
import { Link } from "react-scroll";

function Menu() {
  return (
    <>
      <Link to="home">Home</Link>
      <Link to="about">About E-Hack</Link>
      {/* <Link to="events">Tracks</Link>
      <Link to="speakers">Speakers</Link> */}
      <Link to="sponsors">Sponsors</Link>
    </>
  );
}

export default Menu;
