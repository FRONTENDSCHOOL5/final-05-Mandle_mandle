import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import Class from "../src/pages/Class/Class";
import Chatting from "../src/pages/Chatting/Chatting";
import Posting from "../src/pages/Posting/Posting";
import Profile from "../src/pages/Profile/Profile";
import SetProfile from "./pages/Signup/SetProfile";
import Signup from "./pages/Signup/Signup";
import Login from "../src/pages/Login/Login";
import Loading from "../src/pages/Loading/Loading";
import Intro from "../src/pages/Intro/Intro";
import Home from "../src/pages/Home/Home";
import Search from "../src/pages/Home/Search/Search";
import PostDetail from "../src/pages/Home/PostDetail/PostDetail";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/set_profile" element={<SetProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home/search" element={<Search />} />
          <Route path="/home/post_detail" element={<PostDetail />} />
          <Route path="/home/class" element={<Class />} />
          <Route path="/home/chat" element={<Chatting />} />
          <Route path="/home/posting" element={<Posting />} />
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
