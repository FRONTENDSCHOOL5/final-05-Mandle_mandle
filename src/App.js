import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';

const Class = lazy(() => import('../src/pages/Class/Class'));
const ClassDetail = lazy(() =>
  import('../src/pages/Class/ClassDetail/ClassDetail'),
);
const ClassRegistration = lazy(() =>
  import('../src/pages/Class/ClassRegistration/ClassRegistration'),
);
const ClassReservation = lazy(() =>
  import('../src/pages/Class/ClassReservation/ClassReservation'),
);
const Posting = lazy(() => import('../src/pages/Posting/Posting'));
const Profile = lazy(() => import('../src/pages/Profile/MyProfile'));
const OtherProfile = lazy(() => import('../src/pages/Profile/OtherProfile'));
const SetProfile = lazy(() => import('./pages/Signup/SetProfile'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Login = lazy(() => import('../src/pages/Login/Login'));
const Splash = lazy(() => import('../src/pages/Splash/Splash'));
const Intro = lazy(() => import('../src/pages/Intro/Intro'));
const Home = lazy(() => import('../src/pages/Home/Home'));
const Search = lazy(() => import('../src/pages/Home/Search/Search'));
const PostDetail = lazy(() =>
  import('../src/pages/Home/PostDetail/PostDetail'),
);
const NotFound = lazy(() => import('../src/pages/NotFound/NotFound'));
const EditProfile = lazy(() =>
  import('./pages/Profile/EditProfile/EditProfile'),
);
const Follower = lazy(() => import('./pages/Profile/FollowList/FollowerList'));
const Following = lazy(() =>
  import('./pages/Profile/FollowList/FollowingList'),
);
const ChatRoom = lazy(() => import('../src/pages/Chatting/ChatRoom'));
const EditPost = lazy(() => import('./pages/Posting/EditPost'));
const ChatList = lazy(() => import('./pages/Chatting/ChatList'));

function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>로딩중입니다...</div>}>
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
            </Route>
            <Route path='/other_profile/:accountname' element={<Outlet />}>
              <Route path='' element={<OtherProfile />} />
              <Route path='follower' element={<Follower />} />
              <Route path='following' element={<Following />} />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 390px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  overflow: hidden;
  background-color: #fff;
`;

export default App;
