import React from "react";
import { Box, Button, Heading, Text, Video } from "grommet";
import test from "../static/videos/MVI_1011_2.mp4";

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

function Home(props) {
  return (
    <Box color="blue">
      <Box height={"small"}></Box>
      <Box alignSelf="center">
        <Heading color="white" level="1" size="large" alignSelf="start">
          I'm not a jack of all trades...
        </Heading>
        <Heading color="white" level="1" size="large" alignSelf="end">
          I'm a master of many.
        </Heading>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: 0,
          zIndex: -10,
        }}
        width={{ min: "1920px" }}
        overflow="hidden"
      >
        <Video autoPlay mute controls={false} margin="none">
          <source src={test} />
        </Video>
      </Box>
      <Box
        background={{ color: "dark-1", opacity: "strong" }}
        fill
        style={{ position: "absolute", top: 0, zIndex: -9 }}
      ></Box>
      <Box background="blue" fill="horizontal" height="100em"></Box>
    </Box>
  );
}

export default Home;
