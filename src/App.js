import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import Class from '../src/pages/Class/Class';
import ClassDetail from '../src/pages/Class/ClassDetail/ClassDetail';
import ClassRegistration from '../src/pages/Class/ClassRegistration/ClassRegistration';
import ClassReservation from '../src/pages/Class/ClassReservation/ClassReservation';
import Chatting from '../src/pages/Chatting/Chatting';
import Posting from '../src/pages/Posting/Posting';
import Profile from '../src/pages/Profile/MyProfile';
import OtherProfile from '../src/pages/Profile/OtherProfile';
import SetProfile from './pages/Signup/SetProfile';
import Signup from './pages/Signup/Signup';
import Login from '../src/pages/Login/Login';
import Loading from '../src/pages/Loading/Loading';
import Intro from '../src/pages/Intro/Intro';
import Home from '../src/pages/Home/Home';
import Search from '../src/pages/Home/Search/Search';
import PostDetail from '../src/pages/Home/PostDetail/PostDetail';
import NotFound from '../src/pages/NotFound/NotFound';
import EditProfile from './pages/Profile/EditProfile/EditProfile';
import Follower from './pages/Profile/FollowList/FollowerList';
import Following from './pages/Profile/FollowList/FollowingList';
import ChatRoom from '../src/pages/Chatting/ChatRoom';
import ChatModal from './pages/Chatting/ChatModal';
import EditPost from './pages/Posting/EditPost';
import ChatList from './pages/Chatting/ChatList';
function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Loading />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/account' element={<Outlet />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='set_profile' element={<SetProfile />} />
          </Route>
          <Route path='/home' element={<Outlet />}>
            <Route path='' element={<Home />} />
            <Route path='search' element={<Search />} />
          </Route>
          <Route path='/class' element={<Outlet />}>
            <Route path='' element={<Class />} />
            <Route path='detail/:class_id' element={<ClassDetail />} />
          </Route>
          <Route path='registration' element={<ClassRegistration />} />
          <Route path='reservation' element={<ClassReservation />} />

          <Route path='/post' element={<Outlet />}>
            <Route path=':post_id' element={<PostDetail />} />
            {/* post수정 경로 수정 */}
            <Route path=':post_id/edit' element={<EditPost />} />
            <Route path='upload' element={<Posting />} />
          </Route>
          <Route path='/chat' element={<Outlet />}>
            <Route path='' element={<Chatting />} />
            {/* 라우트 추가 부분 */}
            <Route path='chatlist' element={<ChatList />} />
            <Route path='chatroom' element={<ChatRoom />} />
            <Route path='chatmodal' element={<ChatModal />} />
          </Route>

          <Route path='/my_profile/' element={<Outlet />}>
            <Route path='' element={<Profile />} />
            <Route path='follower' element={<Follower />} />
            <Route path='following' element={<Following />} />
            <Route path='edit/:accountname' element={<EditProfile />} />
          </Route>
          <Route path='/other_profile/:accountname' element={<OtherProfile />}>
            <Route path='' element={<OtherProfile />} />
            <Route path='follower' element={<Follower />} />
            <Route path='following' element={<Following />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 390px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  border: 1px solid var(--border-color);
`;

export default App;
