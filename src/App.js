import { Grommet, Box, Text, Heading, Grid, Nav, Image } from "grommet";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import test from "./static/pictures/IMG_1050.JPG";

const theme = {
  global: {
    font: {
      family: '"Teko"',

      face: "/* devanagari */\n@font-face {\n  font-family: 'Teko';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/teko/v15/LYjNdG7kmE0gfaJ9pQlCpVoXVQ.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Teko';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/teko/v15/LYjNdG7kmE0gfa19pQlCpVoXVQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Teko';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/teko/v15/LYjNdG7kmE0gfaN9pQlCpVo.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
  },
};

function App() {
  return (
    <Grommet
      theme={theme}
      // background={{
      //   image:
      //     "url(//upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg)",
      // }}
      full
    >
      <BrowserRouter>
        <Header />
        {/* <Image src={test} fill /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
