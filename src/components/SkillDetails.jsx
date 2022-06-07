import { Box, Heading, Layer, Text } from "grommet";
import { Close } from "grommet-icons";
import React from "react";

function SkillDetails({ skill, setSkillDetails }) {
  return (
    <Layer full>
      <Box alignSelf="end" hoverIndicator onClick={() => setSkillDetails()}>
        <Close size="large" />
      </Box>
      <Heading alignSelf="center" level={"1"}>
        {skill.name}
      </Heading>
      <Box alignSelf="center">
        <Text></Text>
      </Box>
    </Layer>
  );
}

export default SkillDetails;
