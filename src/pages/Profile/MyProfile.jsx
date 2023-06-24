import React, { useEffect, useState } from 'react';
import MiniClassList from '../../components/Common/MiniClassList';
import { MoreNav } from '../../components/Common/TopNav';
import PostList from '../../components/Common/PostList/PostList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { WrapBtn, Wrap, ProfileSection } from './ProfileStyle';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
  const token = userInfo.token;
  const [profileData, setProfileData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [postUpdated, setPostUpdated] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const userProfileData = await ProfileData(userAccountname, token);
      const userClassData = await ClassData(userAccountname, token);
      const userPostData = await PostData(userAccountname, token);
      setPostData(userPostData);
      setProfileData(userProfileData);
      setClassData(userClassData);
      setPostUpdated(false);
    };
    fetchData();
  }, [userAccountname, postUpdated, token]);

  if (!profileData && !classData) {
    return <div>Loading...</div>;
  }
  //프로필 수정페이지 이동
  function handleClick(profileData) {
    navigate(`edit/${profileData.accountname}`, {
      state: {
        profileData: profileData,
      },
    });
  }
  return (
    <div>
      <MoreNav />
      <ProfileSection>
        <Wrap>
          <div className='follow'>
            <Link to='/my_profile/follower'>
              <p>{profileData.followerCount}</p>
              <p className='followNum'>followers</p>
            </Link>
          </div>
          <img src={profileData.image} id='profileImg' alt='프로필 이미지' />
          <div className='follow'>
            <Link to='/my_profile/following'>
              <p>{profileData.followingCount}</p>
              <p className='followNum'>followings</p>
            </Link>
          </div>
        </Wrap>
        <div id='usernameWrap'>
          <p id='NickName'>{profileData.username}</p>{' '}
          <span
            className={
              profileData.accountname.includes('Teacher') ? '' : 'a11y-hidden'
            }
          ></span>
        </div>
        <p id='MandleId'>
          @
          {profileData.accountname.includes('Teacher') ||
          profileData.accountname.includes('Student')
            ? profileData.accountname.substr(7)
            : profileData.accountname}
        </p>
        <p id='Introduce'>{profileData.intro}</p>
        <WrapBtn>
          <button
            className='profileBtn'
            onClick={() => handleClick(profileData)}
          >
            프로필 수정
          </button>
          <Link to='/registration'>
            <button
              className={
                profileData.accountname.includes('Teacher')
                  ? 'profileBtn'
                  : 'a11y-hidden'
              }
            >
              클래스 등록
            </button>
          </Link>
        </WrapBtn>
      </ProfileSection>
      {profileData.accountname.includes('Teacher') && (
        <MiniClassList classData={classData} />
      )}
      <div>
        {postData.post.map((post) => (
          <PostList setPostUpdated={setPostUpdated} post={post} />
        ))}
      </div>
    </div>
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
