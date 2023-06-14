import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import SetProfile from "./pages/Signup/SetProfile";
import Signup from "./pages/Signup/Signup";
import styled from "styled-components";
// import MenuBar from "./components/Common/MenuBar";
// import Home from "../src/pages/Home/Home";
// import Search from "../src/pages/Home/Search/Search";
// import PostDetail from "../src/pages/Home/PostDetail/PostDetail";
import Class from "../src/pages/Class/Class";
import Chatting from "../src/pages/Chatting/Chatting";
import Posting from "../src/pages/Posting/Posting";
import Profile from "../src/pages/Profile/Profile";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import Loading from "../src/pages/Loading/Loading";
import Intro from "../src/pages/Intro/Intro";

function App() {
  return (
    <Wrap>
      <GlobalStyle />
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/home" element={<Home to="/home/search" />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/home/search" element={<Search />} />
          <Route path="/home/postdetail" element={<PostDetail />} />
          {/* <Route path="/home" element={<Home to="/home/search" />} />
          <Route path="/home/search" element={<Search />} /> */}
          {/* <Route path="/home/postdetail" element={<PostDetail />} /> */}
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
