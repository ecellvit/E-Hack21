import React from "react";
import { StyledMenu } from "./Menu.styled";
import Menu from "../Menu/Menu";

const Sidebar = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Menu/>
    </StyledMenu>
  );
};

export default Sidebar;
