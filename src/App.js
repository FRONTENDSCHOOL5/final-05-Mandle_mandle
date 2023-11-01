import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import Class from './pages/Class/Class';
import ClassDetail from './pages/Class/ClassDetail/ClassDetail';
import ClassRegistration from './pages/Class/ClassRegistration/ClassRegistration';
import ClassReservation from './pages/Class/ClassReservation/ClassReservation';
import Posting from './pages/Posting/Posting';
import Profile from './pages/Profile/MyProfile';
import OtherProfile from './pages/Profile/OtherProfile';
import SetProfile from './pages/Signup/SetProfile';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Splash from './pages/Splash/Splash';
import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';
import Search from './pages/Home/Search/Search';
import PostDetail from './pages/Home/PostDetail/PostDetail';
import NotFound from './pages/NotFound/NotFound';
import EditProfile from './pages/Profile/EditProfile/EditProfile';
import Follower from './pages/Profile/FollowList/FollowerList';
import Following from './pages/Profile/FollowList/FollowingList';
import ChatRoom from './pages/Chatting/ChatRoom';
import EditPost from './pages/Posting/EditPost';
import ChatList from './pages/Chatting/ChatList';
import MyReservationList from './pages/Profile/MyReservationList/MyReservationList';

function App() {
  return (
    <Wrap>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Splash />} />
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
          <Route path=':post_id/edit' element={<EditPost />} />
          <Route path='upload' element={<Posting />} />
        </Route>
        <Route path='/chat' element={<Outlet />}>
          <Route path='chatlist' element={<ChatList />} />
          <Route path='chatroom' element={<ChatRoom />} />
        </Route>
        <Route path='/my_profile' element={<Outlet />}>
          <Route path='' element={<Profile />} />
          <Route path='follower' element={<Follower />} />
          <Route path='following' element={<Following />} />
          <Route path='edit/:accountname' element={<EditProfile />} />
          <Route path='my_reservation_list' element={<MyReservationList />} />
        </Route>
        <Route path='/other_profile/:accountname' element={<Outlet />}>
          <Route path='' element={<OtherProfile />} />
          <Route path='follower' element={<Follower />} />
          <Route path='following' element={<Following />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 390px;
  height: 100vh;
  position: relative;
  margin: 0 auto;

  overflow: hidden;
  background-color: #fff;
`;

export default App;
