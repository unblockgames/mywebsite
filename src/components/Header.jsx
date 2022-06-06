import React from "react";
import { Avatar, Box, Button, Nav, ResponsiveContext } from "grommet";
import { Link, useNavigate } from "react-router-dom";
import me from "../static/pictures/me.jpeg";

function handleClick(navigate) {
  console.log("Clicked");
  navigate("/About");
  return;
}

function Header(props) {
  const navigate = useNavigate();
  const size = React.useContext(ResponsiveContext);
  return (
    <Box direction="row" justify="between">
      <Box
        focusIndicator
        onClick={() => {
          handleClick(navigate);
        }}
      >
        <Avatar margin="small" src={me} alignSelf="start" />
      </Box>
      <Nav direction="row" margin={"small"}>
        <Box height={"2em"}>
          <Button
            primary
            label="Home"
            fill
            onClick={() => {
              navigate("/");
            }}
          />
        </Box>
        <Box height={"2em"}>
          <Button
            primary
            label="Skills"
            fill
            onClick={() => {
              if (size === "small")
                window.scrollTo({ top: 1040, behavior: "smooth" });
              else window.scrollTo({ top: 1100, behavior: "smooth" });
            }}
          />
        </Box>
        <Box height={"2em"}>
          <Button
            primary
            label="Softwares"
            fill
            onClick={() => {
              navigate("/Softwares");
            }}
          />
        </Box>
      </Nav>
    </Box>
  );
}

export default Header;
