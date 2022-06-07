import React from "react";
import { Avatar, Box, Button, CheckBox, Nav, ResponsiveContext } from "grommet";
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
      <Box direction="row">
        <Box
          focusIndicator
          onClick={() => {
            handleClick(navigate);
          }}
        >
          <Avatar margin="small" src={me} alignSelf="start" />
        </Box>
        <Box alignSelf="center">
          <CheckBox
            toggle
            onChange={() => props.setDarkMode(!props.darkMode)}
          />
        </Box>
      </Box>
      <Nav direction="row" margin={"small"}>
        <Box height={"2em"}>
          <Button
            primary
            color={props.darkMode ? "green" : ""}
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
            color={props.darkMode ? "green" : ""}
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
            color={props.darkMode ? "green" : ""}
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
