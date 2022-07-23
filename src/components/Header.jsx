import React from "react";
import { Avatar, Box, Button, CheckBox, Nav, ResponsiveContext } from "grommet";
import { Link, useLocation, useNavigate, useMatch } from "react-router-dom";
import me from "../static/pictures/me.jpeg";

function handleClick(navigate) {
  navigate("/About");
  return;
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
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
              navigate("/");
              window.scrollTo({
                top: getOffset(document.getElementById("skills")).top,
                behavior: "smooth",
              });
            }}
          />
        </Box>
        <Box height={"2em"}>
          <Button
            primary
            color={props.darkMode ? "green" : ""}
            label="Projects"
            fill
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: getOffset(document.getElementById("projects")).top,
                behavior: "smooth",
              });
            }}
          />
        </Box>
      </Nav>
    </Box>
  );
}

export default Header;
