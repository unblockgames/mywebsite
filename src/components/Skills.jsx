import React from "react";
import {
  Box,
  Heading,
  TextInput,
  Grid,
  Card,
  CardBody,
  CardHeader,
  Text,
  Image,
  defaultProps,
  dark,
} from "grommet";
import skills from "../skills";

function handleCardClick(skill, setSkillDetails) {
  setSkillDetails(skill);
  return;
}

function Skills(props) {
  return (
    <Box
      fill="horizontal"
      style={{ position: "relative" }}
      height={{ min: "1080px" }}
      id="skills"
    >
      <Box
        style={{ position: "absolute", zIndex: "-10" }}
        fill
        background={props.darkMode ? "#000000" : "#FFFFFF"}
      ></Box>
      <Heading
        level={"1"}
        size="large"
        alignSelf="center"
        style={{ transform: "skewY(-5deg)" }}
        color={props.darkMode ? "white" : "black"}
      >
        Skills
      </Heading>
      <Box
        width={"30%"}
        height={"2px"}
        background="focus"
        style={{ transform: "skewY(-5deg)" }}
      ></Box>
      <Box
        alignSelf="end"
        width={"30%"}
        height={"2px"}
        background="focus"
        style={{ transform: "skewY(20deg)" }}
      ></Box>
      <Box width={"medium"} alignSelf="center" margin={"medium"}>
        <TextInput
          placeholder="Search for a specific skill"
          onChange={(nextValue) => {
            props.setSearchValue(nextValue.target.value);
          }}
          color="light-3"
        />
      </Box>
      <Box margin={"medium"}>
        {skills.filter((skill) =>
          skill.name.toLowerCase().startsWith(props.searchValue.toLowerCase())
        ).length > 0 ? (
          <Grid columns={"small"} rows="small" gap="xxsmall" pad={"medium"}>
            {skills
              .filter((skill) =>
                skill.name
                  .toLowerCase()
                  .startsWith(props.searchValue.toLowerCase())
              )
              .map((skill, idx) => {
                return (
                  <Box key={idx} fill align="center" pad={"xsmall"}>
                    <Card
                      hoverIndicator={
                        props.darkMode ? { color: "green" } : { color: "brand" }
                      }
                      fill
                      onClick={
                        skill.hasContent
                          ? () => handleCardClick(skill, props.setSkillDetails)
                          : ""
                      }
                      style={
                        props.darkMode
                          ? {
                              position: "relative",
                              boxShadow: "2px 3px 4px rgba(255,255,255,0.30)",
                            }
                          : {
                              position: "relative",
                              boxShadow: "2px 3px 4px rgba(0,0,0,0.30)",
                            }
                      }
                      background={props.darkMode ? "black" : "white"}
                      skillName={skill.name}
                      color={props.darkMode ? "white" : "Black"}
                    >
                      <CardHeader margin={"xsmall"} justify="center">
                        <Text
                          color={props.darkMode ? "white" : "black"}
                          size="xlarge"
                          textAlign="center"
                        >
                          <b>{skill.name}</b>
                        </Text>
                      </CardHeader>
                      <CardBody
                        margin={"small"}
                        justify="center"
                        alignSelf="center"
                      >
                        <Text color={props.darkMode ? "white" : "black"}>
                          {skill.summary}
                        </Text>
                      </CardBody>
                      <Image
                        style={{ position: "absolute", right: "0px" }}
                        width={"30px"}
                        src={skill.icon}
                        margin="xsmall"
                      />
                    </Card>
                  </Box>
                );
              })}
          </Grid>
        ) : (
          <Heading level={"3"} alignSelf="center">
            No skills match your search.
          </Heading>
        )}
      </Box>
      <Box
        alignSelf="end"
        width={"10%"}
        round
        height={"medium"}
        background="focus"
        style={{
          transform: "skewY(30deg)",
          zIndex: "-1",
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      ></Box>
      <Box
        alignSelf="start"
        width={"20%"}
        round
        height={"xxsmall"}
        background="focus"
        style={{
          transform: "skewY(-30deg)",
          zIndex: "-1",
          position: "absolute",
          bottom: "0px",
        }}
      ></Box>
    </Box>
  );
}

export default Skills;
