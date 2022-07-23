import React from "react";
import { Box, Heading, Video } from "grommet";
import asicBumper from "../static/videos/ASICBumper_1.mp4";

function projects(props) {
  return (
    <Box
      background={props.darkMode ? { color: "#0f1026" } : { color: "#e1f0f5" }}
      style={{ position: "relative", zIndex: "-10" }}
      fill="horizontal"
      height={{ min: "1080px" }}
      id="projects"
    >
      <Heading
        alignSelf="center"
        size="large"
        level={"1"}
        style={{ transform: "skewY(5deg)" }}
        color={props.darkMode ? "white" : "black"}
      >
        Projects
      </Heading>
      <Box style={{position: "absolute", right:100, transform: "rotate(-20deg)"}}>
      <Box
        round
        border={{ size: "11px" }}
        alignSelf="center"
        style={{ position: "relative" }}
        width={"200px"}
        height="120px"
      >
        <Video
          style={{ position: "absolute", zIndex: "-1" }}
          autoPlay
          mute
          controls={false}
          margin="none"
          loop
        >
          <source src={asicBumper} />
        </Video>
      </Box>
      </Box>
    </Box>
  );
}

export default projects;
