import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
// import MenuBar from './components/Common/MenuBar';
import Home from "../src/pages/Home/Home";
import Class from "../src/pages/Class/Class";
import Chatting from "../src/pages/Chatting/Chatting";
import Posting from "../src/pages/Posting/Posting";
import Profile from "../src/pages/Profile/Profile";
function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/home*" element={<Home />} />
          <Route exact path="/class*" element={<Class />} />
          <Route exact path="/chat*" element={<Chatting />} />
          <Route exact path="/post*" element={<Posting />} />
          <Route exact path="/profile*" element={<Profile />} />
        </Routes>
      </Router>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 390px;
  height: 844px;
  position: relative;
`;
export default App;
