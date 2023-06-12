import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import MenuBar from './components/Common/MenuBar';
import Home from './pages/Home/Home';
import Class from './pages/Class/Class';
import Chatting from './pages/Chatting/Chatting';
import Posting from './pages/Posting/Posting';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Router>
        <MenuBar />
        <Routes>
          <Route exact path='/home' component={Home} />
          <Route exact path='/class' component={Class} />
          <Route exact path='/chat' component={Chatting} />
          <Route exact path='/post' component={Posting} />
          <Route exact path='/profile' component={Profile} />
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
