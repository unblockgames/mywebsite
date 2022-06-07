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
} from "grommet";
import skills from "../skills";

function handleCardClick(skill, setSkillDetails) {
  console.log(skill.name);
  setSkillDetails(skill);
  return;
}

function Skills({ searchValue, setSearchValue, setSkillDetails }) {
  return (
    <Box background="background-back" fill="horizontal" height="100em">
      <Heading level={"1"} size="large" alignSelf="center" color={"white"}>
        Skills
      </Heading>
      <Box width={"medium"} alignSelf="center" margin={"medium"}>
        <TextInput
          placeholder="Search for a specific skill"
          onChange={(nextValue) => {
            setSearchValue(nextValue.target.value);
          }}
        />
      </Box>
      <Box margin={"medium"}>
        {skills.filter((skill) =>
          skill.name.toLowerCase().startsWith(searchValue.toLowerCase())
        ).length > 0 ? (
          <Grid columns={"small"} rows="small" gap="xxsmall" pad={"medium"}>
            {skills
              .filter((skill) =>
                skill.name.toLowerCase().startsWith(searchValue.toLowerCase())
              )
              .map((skill, idx) => {
                return (
                  <Box key={idx} fill align="center" pad={"xsmall"}>
                    <Card
                      hoverIndicator={{ color: "green" }}
                      fill
                      onClick={() => handleCardClick(skill, setSkillDetails)}
                      style={{ position: "relative" }}
                      skillName={skill.name}
                    >
                      <CardHeader margin={"xsmall"} justify="center">
                        <Text size="xlarge" textAlign="center">
                          <b>{skill.name}</b>
                        </Text>
                      </CardHeader>
                      <CardBody
                        margin={"small"}
                        justify="center"
                        alignSelf="center"
                      >
                        <Text>{skill.summary}</Text>
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
    </Box>
  );
}

export default Skills;
