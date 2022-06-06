import React from "react";
import { Avatar, Box, Nav } from "grommet";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Box justify="between" direction="row">
      <Avatar />
      <Nav direction="row">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </Nav>
    </Box>
  );
}

export default Header;
