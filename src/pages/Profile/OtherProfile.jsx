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
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  const location = useLocation();
  const { accountname } = useParams();
  const [profileData, setProfileData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfileData = await fetchDataFromAPI(
          ProfileData,
          accountname,
          token
        );
        const userClassData = await fetchDataFromAPI(
          ClassData,
          accountname,
          token
        );
        const userPostData = await fetchDataFromAPI(
          PostData,
          accountname,
          token
        );
        setProfileData(userProfileData);
        setClassData(userClassData);
        setPostData(userPostData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [accountname, token]);

  const fetchDataFromAPI = async (apiFunction, ...params) => {
    try {
      const data = await apiFunction(...params);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  // console.log(accountname);
  // console.log(profileData);
  // console.log(postData);
  const navigateToFollowers = () => {
    console.log('Navigate to followers');
    console.log(`${accountname}`);
    navigate(`/other_profile/${accountname}/follower`);
  };

  const navigateToFollowing = () => {
    navigate(`/other_profile/${accountname}/following`);
  };
  return (
    <div>
      <MoreNavigation />
      {/* <TeacherSelfProfile /> */}
      <ProfileSection>
        <Wrap>
          <div className='follow'>
            <button onClick={navigateToFollowers}>
              <p>{profileData.followerCount}</p>
              <p className='followNum'>followers</p>
            </button>
          </div>
          <img src={profileData.image} alt='프로필 이미지' />
          <div className='follow'>
            <Link to={`/other_profile/${accountname}/following`}>
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
          {(profileData.accountname &&
            profileData.accountname.includes('Teacher')) ||
          (profileData.accountname &&
            profileData.accountname.includes('Student'))
            ? profileData.accountname.substr(7)
            : profileData.accountname}
        </p>
        <p id='Introduce'>{profileData.intro}</p>
        <WrapBtn>
          <Link to='/chat'>
            <button className='ChatBtn'>
              <img src={ChatImg} alt='채팅 아이콘 이미지' />
            </button>
          </Link>
          <button className='FollowBtn'>팔로우하기</button>
          <button className='ShareBtn'>
            <img src={ShareImg} alt='공유 아이콘 이미지' />
          </button>
        </WrapBtn>
      </ProfileSection>
      <MiniClassList classData={classData} />
      <div>
        {postData.post && postData.post.length > 0 ? (
          postData.post.map((post) => <PostList post={post} key={post.id} />)
        ) : (
          <p>No posts available</p>
        )}
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
