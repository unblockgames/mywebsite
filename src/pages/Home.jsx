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
  ResponsiveContext,
  Text,
  TextInput,
  Video,
} from "grommet";
import test from "../static/videos/MVI_1011_2.mp4";
import Skills from "../components/Skills";
import SkillDetails from "../components/SkillDetails";
import Projects from "../components/Projects";

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
  fetch("http://localhost:8332", requestOptions)
    .then((response) => {
      response.json().then((response) => {
        console.log(response);
      });
    })
    .catch((error) => {
      console.log(String(error));
    });
  return;
}

function Home(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [skillDetails, setSkillDetails] = React.useState();
  const size = React.useContext(ResponsiveContext);
  return (
    <Box id="home" overflow="hidden" width={{ max: "1920px" }}>
      <Box
        id="headingText"
        height={"950px"}
        width="large"
        align="center"
        alignSelf="center"
        justify="center"
        margin={"medium"}
        overflow="hidden"
      >
        <Heading
          color={"white"}
          margin={"large"}
          level="1"
          size="large"
          alignSelf="start"
        >
          I'm not a jack of all trades...
        </Heading>
        <Heading
          color={"white"}
          margin={"large"}
          level="1"
          size="large"
          alignSelf="end"
        >
          I'm a master of many.
        </Heading>
      </Box>
      <Box
        id="video"
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
        id="videoOverlay"
        background={{ color: "#363636", opacity: "medium" }}
        style={{ position: "absolute", top: 0, zIndex: -9 }}
        width={{ min: "1910px" }}
        fill
        height={size === "small" ? { min: "1034px" } : { min: "1070px" }}
        overflow="hidden"
      ></Box>
      <Skills
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSkillDetails={setSkillDetails}
        darkMode={props.darkMode}
      />
      {skillDetails ? (
        <SkillDetails
          skill={skillDetails}
          setSkillDetails={setSkillDetails}
          darkMode={props.darkMode}
        />
      ) : (
        ""
      )}
      <Projects darkMode={props.darkMode} />
    </Box>
  );
}

export default Home;
