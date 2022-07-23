import { Box, Heading, Layer, Text } from "grommet";
import { Close } from "grommet-icons";
import React from "react";

function SkillDetails(props) {
  return (
    <Layer background={props.darkMode ? "#323232" : ""}>
      <Box alignSelf="center" width={"xlarge"} height={"large"}>
        <Box
          alignSelf="end"
          hoverIndicator
          onClick={() => props.setSkillDetails()}
        >
          <Close size="large" />
        </Box>
        <Heading alignSelf="center" level={"1"}>
          {props.skill.name}
        </Heading>
        <Box alignSelf="center">
          <Text></Text>
        </Box>
      </Box>
    </Layer>
  );
}

export default SkillDetails;
