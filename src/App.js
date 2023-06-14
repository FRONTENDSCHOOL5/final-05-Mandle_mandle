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
// import Class from "../src/pages/Class/Class";
// import Chatting from "../src/pages/Chatting/Chatting";
// import Posting from "../src/pages/Posting/Posting";
// import Profile from "../src/pages/Profile/Profile";

function App() {
  return (
    <Wrap>
      <GlobalStyle />

      <Router>
        <Routes>
          {/* <Route path="/home" element={<Home to="/home/search" />} /> */}
          {/* <Route path="/home/search" element={<Search />} /> */}
          {/* <Route path="/home/postdetail" element={<PostDetail />} /> */}
          {/* <Route exact path="/class*" element={<Class />} /> */}
          {/* <Route exact path="/chat*" element={<Chatting />} /> */}
          {/* <Route exact path="/posting" element={<Posting />} /> */}
          {/* <Route exact path="/profile*" element={<Profile />} /> */}
          <Route exact path="/signup/*" element={<Signup />} />
          <Route exact path="/set_profile/*" element={<SetProfile />} />

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
