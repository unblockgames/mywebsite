import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Image,
  Main,
  Text,
  Video,
} from "grommet";
import test from "../static/videos/MVI_1011_2.mp4";
import skills from "../skills";

function handleClick() {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization:
        "Basic Yml0Y29pbnJwYzoxeVkyYTVwTEdVcnphTFgzcFJ6ZlRyZndndXBZcW9ycnZCK2N0blQ3cks0cw==",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "1.0",
      id: "javascriptTest",
      method: "gettxoutsetinfo",
      params: [],
    }),
  };
  fetch("http://localhost:8332", requestOptions).then((response) => {
    response.json().then((response) => {
      console.log(response);
    });
  });
  return;
}

function handleCardClick() {
  return;
}

function Home(props) {
  return (
    <Box overflow="hidden" width={{ max: "1920px" }}>
      <Box
        height={"950px"}
        width="large"
        align="center"
        alignSelf="center"
        justify="center"
        margin={"medium"}
        overflow="hidden"
      >
        <Heading
          margin={"large"}
          color="white"
          level="1"
          size="large"
          alignSelf="start"
        >
          I'm not a jack of all trades...
        </Heading>
        <Heading
          margin={"large"}
          color="white"
          level="1"
          size="large"
          alignSelf="end"
        >
          I'm a master of many.
        </Heading>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: 0,
          zIndex: -10,
        }}
        width={{ min: "1905px" }}
        overflow="hidden"
      >
        <Video autoPlay mute controls={false} margin="none" overflow="hidden">
          <source src={test} />
        </Video>
      </Box>
      <Box
        background={{ color: "dark-1", opacity: "strong" }}
        style={{ position: "absolute", top: 0, zIndex: -9 }}
        width={{ min: "1905px" }}
        height={{ min: "1073px" }}
        overflow="hidden"
      ></Box>
      <Box background="background-back" fill="horizontal" height="100em">
        <Heading level={"1"} size="large" alignSelf="center" color={"white"}>
          Skills
        </Heading>
        <Box>
          <Grid columns="small" rows="small" gap="xxsmall" pad={"medium"}>
            {skills.map((skill, idx) => {
              return (
                <Box key={idx} fill align="center" pad={"xsmall"}>
                  <Card
                    hoverIndicator={{ color: "green" }}
                    fill
                    onClick={() => handleCardClick()}
                  >
                    <CardHeader margin={"xsmall"} justify="center">
                      <Text size="xlarge">
                        <b>{skill.name}</b>
                      </Text>
                      <Image width={"16px"} src={skill.icon} />
                    </CardHeader>
                    <CardBody margin={"small"} justify="center">
                      <Text>{skill.summary}</Text>
                    </CardBody>
                  </Card>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
