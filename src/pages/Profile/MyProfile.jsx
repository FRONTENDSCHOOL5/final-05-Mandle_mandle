import React, { useEffect, useState } from 'react';
import MiniClassList from '../../components/Common/MiniClassList';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import MoreIcon from '../../assets/img/icon- more-vertical.svg';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import ChatImg from '../../assets/img/icon-chat-mini.svg';
import ShareImg from '../../assets/img/icon-share.svg';
import PostList from '../../components/Common/PostList/PostList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { WrapBtn, Wrap, ProfileSection, TopNavWrap } from './ProfileStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { ProfileData } from "../../api/GetProfile";

export default function Profile() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
  const token = userInfo.token;
  const [profileData, setProfileData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfileData = await ProfileData(userAccountname, token);
      const userClassData = await ClassData(userAccountname, token);
      const userPostData = await PostData(userAccountname, token);
      setPostData(userPostData);
      setProfileData(userProfileData);
      setClassData(userClassData);
    };
    fetchData();
  }, [userAccountname, token]);

  if (!profileData && !classData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <MoreNavigation />
      {/* <TeacherSelfProfile /> */}
      <ProfileSection>
        <Wrap>
          <div className='follow'>
            <Link to='/my_profile/follower'>
              <p>{profileData.followerCount}</p>
              <p className='followNum'>followers</p>
            </Link>
          </div>
          <img src={profileData.image} alt='프로필 이미지' />
          <div className='follow'>
            <Link to='/my_profile/following'>
              <p>{profileData.followingCount}</p>
              <p className='followNum'>followings</p>
            </Link>
          </div>
        </Wrap>
        <p id='NickName'>
          {profileData.username}
          <span></span>
        </p>
        <p id='MandleId'>
          @
          {profileData.accountname.includes('Teacher') ||
          profileData.accountname.includes('Student')
            ? profileData.accountname.substr(7)
            : profileData.accountname}
        </p>
        <p id='Introduce'>{profileData.intro}</p>
        <WrapBtn>
          <Link to='/my_profile/edit_profile'>
            <button className='profileBtn'>프로필 수정</button>
          </Link>
          <button className='profileBtn'>클래스 등록</button>
        </WrapBtn>
      </ProfileSection>
      <MiniClassList classData={classData} />
      <div>
        {PostList.map((post) => (
          <PostList post={post} />
        ))}
      </div>
    </div>
  );
}
function MoreNavigation() {
  return (
    <TopNavWrap>
      <button className='go-back'>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>
      <button className='more-icon'>
        <img src={MoreIcon} alt='더보기 아이콘' />
      </button>
    </TopNavWrap>
  );
}
// function TeacherSelfProfile() {
//   const location = useLocation();
//   return (
//     <ProfileSection>
//       <Wrap>
//         <div className='follow'>
//           <Link to='/my_profile/follower'>
//             <p>2950</p>
//             <p className='followNum'>followers</p>
//           </Link>
//         </div>
//         <img src={BasicProfile} alt='프로필 이미지' />
//         <div className='follow'>
//           <Link to='/my_profile/following'>
//             <p>80</p>
//             <p className='followNum'>followings</p>
//           </Link>
//         </div>
//       </Wrap>
//       <p id='NickName'>
//         {userProfileData.accountname.substr(7)}
//         <span></span>
//       </p>
//       <p id='MandleId'>@ weniv_Atelier</p>
//       <p id='Introduce'>비누 만들기 전문 클래스 입니다~</p>
//       <WrapBtn>
//         <Link to='/my_profile/edit_profile'>
//           <button className='profileBtn'>프로필 수정</button>
//         </Link>
//         <button className='profileBtn'>클래스 등록</button>
//       </WrapBtn>
//     </ProfileSection>
//   );
// }
// function TeacherProfile() {
//   return (
//     <ProfileSection>
//       <Wrap>
//         <div className='follow'>
//           <p>2950</p>
//           <p className='followNum'>followers</p>
//         </div>
//         <img src={BasicProfile} alt='프로필 이미지' />
//         <div className='follow'>
//           <p>198</p>
//           <p className='followNum'>followings</p>
//         </div>
//       </Wrap>
//       <p id='NickName'>
//         위니브 메이드 공방<span></span>
//       </p>
//       <p id='MandleId'>@ weniv_Atelier</p>
//       <p id='Introduce'>비누 만들기 전문 클래스 입니다~</p>
//       <WrapBtn>
//         <button className='ChatBtn'>
//           <img src={ChatImg} alt='채팅 아이콘 이미지' />
//         </button>
//         <button className='FollowBtn'>팔로우하기</button>
//         <button className='ShareBtn'>
//           <img src={ShareImg} alt='공유 아이콘 이미지' />
//         </button>
//       </WrapBtn>
//     </ProfileSection>
//   );
// }
// function StudentSelfProfile() {
//   return (
//     <ProfileSection>
//       <Wrap>
//         <div className='follow'>
//           <p>2950</p>
//           <p className='followNum'>followers</p>
//         </div>
//         <img src={BasicProfile} alt='프로필 이미지' />
//         <div className='follow'>
//           <p>198</p>
//           <p className='followNum'>followings</p>
//         </div>
//       </Wrap>
//       <p id='NickName'>위니브 메이드 공방</p>
//       <p id='MandleId'>@ weniv_Atelier</p>
//       <p id='Introduce'>비누 만들기 전문 클래스 입니다~</p>
//       <WrapBtn>
//         <button className='profileBtn'>프로필 수정</button>
//       </WrapBtn>
//     </ProfileSection>
//   );
// }
// function StudentProfile() {
//   return (
//     <ProfileSection>
//       <Wrap>
//         <div className='follow'>
//           <p>2950</p>
//           <p className='followNum'>followers</p>
//         </div>
//         <img src={BasicProfile} alt='프로필 이미지' />
//         <div className='follow'>
//           <p>198</p>
//           <p className='followNum'>followings</p>
//         </div>
//       </Wrap>
//       <p id='NickName'>위니브 메이드 공방</p>
//       <p id='MandleId'>@ weniv_Atelier</p>
//       <p id='Introduce'>비누 만들기 전문 클래스 입니다~</p>
//       <WrapBtn>
//         <button className='ChatBtn'>
//           <img src={ChatImg} alt='채팅 아이콘 이미지' />
//         </button>
//         <button className='FollowBtn'>팔로우하기</button>
//         <button className='ShareBtn'>
//           <img src={ShareImg} alt='공유 아이콘 이미지' />
//         </button>
//       </WrapBtn>
//     </ProfileSection>
//   );
// }

async function ProfileData(accountname, token) {
  const url = `https://mandarin.api.weniv.co.kr/profile/${accountname}`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.profile;
  } catch (err) {
    console.log(err);
    return null;
  }
}
async function ClassData(accountname, token) {
  const url = `https://mandarin.api.weniv.co.kr/product/${accountname}`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
async function PostData(accountname, token) {
  const url = `https://mandarin.api.weniv.co.kr/post/${accountname}/userpost`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
