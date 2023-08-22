import React, { useEffect, useState } from 'react';
import MiniClassList from '../../components/Common/MiniClassList';
import ChatImg from '../../assets/img/icon-chat-mini.svg';
import ShareImg from '../../assets/img/icon-share.svg';
import PostList from '../../components/Common/PostList/PostList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import HomeLogo from '../../assets/img/home-logo.svg';
import { MoreNav } from '../../components/Common/TopNav';

import {
  MainWrap,
  WrapBtn,
  Wrap,
  ProfileSection,
  ProfilePage,
  PostSection,
  ClassSection,
  ClassListUl,
  Title,
  PostListUl,
  FollowBtn,
} from './ProfileStyle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MenuBar from '../../components/Common/MenuBar';
import PostListBtnOn from '../../assets/img/icon-post-list-on.svg';
import PostListBtnOff from '../../assets/img/icon-post-list-off.svg';
import PostAlbumBtnOn from '../../assets/img/icon-post-album-on.svg';
import PostAlbumBtnOff from '../../assets/img/icon-post-album-off.svg';

export default function Profile() {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  const { accountname } = useParams();
  const [profileData, setProfileData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [postUpdated, setPostUpdated] = useState(false);
  const [isListBtnActive, setListBtnActive] = useState(true);
  const [isImgListBtnActive, setImgListBtnActive] = useState(false);
  const [classUpdated, setClassUpdated] = useState(false);
  const [isfollow, SetIsfollow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfileData = await ProfileData(accountname, token);
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
        SetIsfollow(userProfileData.isfollow);
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
  const handleCopy = () => {
    const apiUrl = window.location.href; // Current URL
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(apiUrl)
        .then(() => {
          alert('주소가 복사되었습니다.');
        })
        .catch((error) => {
          console.error('Failed to copy URL:', error);
        });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      const tempInput = document.createElement('textarea');
      tempInput.value = apiUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('주소가 복사되었습니다.');
    }
  };
  const navigateToFollowers = () => {
    navigate(`/other_profile/${accountname}/follower`, { state: accountname });
  };

  const navigateToFollowing = () => {
    navigate(`/other_profile/${accountname}/following`, { state: accountname });
  };
  if (!profileData && !classData) {
    return <div>Loading...</div>;
  }

  const handleFollowClick = async () => {
    try {
      if (isfollow) {
        const response = await unfollow(accountname, token);
        if (response) {
          SetIsfollow(false);
        } else {
        }
      } else {
        const response = await follow(accountname, token);
        if (response) {
          SetIsfollow(true);
        } else {
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostImgClick = (postId) => {
    navigate(`/post/${postId}`, { state: postId });
  };
  const handleButtonClick = (btnName) => {
    if (btnName === 'listBtn') {
      setListBtnActive(true);
      setImgListBtnActive(false);
    } else if (btnName === 'imgListBtn') {
      setListBtnActive(false);
      setImgListBtnActive(true);
    }
  };
  return (
    <ProfilePage>
      <MoreNav />
      <MainWrap>
        <ProfileSection>
          <Wrap>
            <div className='follow'>
              <button onClick={navigateToFollowers}>
                <p>{profileData.followerCount}</p>
                <p className='followNum'>followers</p>
              </button>
            </div>
            <img src={profileData.image} id='profileImg' alt='프로필 이미지' />
            <div className='follow'>
              <button onClick={navigateToFollowing}>
                <p>{profileData.followingCount}</p>
                <p className='followNum'>followings</p>
              </button>
            </div>
          </Wrap>
          <div id='usernameWrap'>
            <p id='NickName'>{profileData.username}</p>{' '}
            <span
              className={
                profileData.accountname &&
                profileData.accountname.includes('Teacher')
                  ? ''
                  : 'a11y-hidden'
              }
            ></span>
          </div>
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
            <Link to='/chat/chatroom'>
              <button className='ChatBtn'>
                <img src={ChatImg} alt='채팅 아이콘 이미지' />
              </button>
            </Link>
            {/* <FollowBtn
              className={isfollow ? 'following' : ''}
              onClick={handleFollowClick}
            >
              {isfollow ? '취소' : '팔로우'}
            </FollowBtn> */}
            <FollowBtn
              className={isfollow ? 'following' : ''}
              onClick={handleFollowClick}
            >
              {isfollow ? '취소' : '팔로우'}
            </FollowBtn>
            {!isfollow && (
              <span className={isfollow ? 'a11y-hidden' : 'toolTip'}>
                친구 추가하고 소식을 받아보세요~
              </span>
            )}
            <button className='ShareBtn' onClick={handleCopy}>
              <img src={ShareImg} alt='공유 아이콘 이미지' />
            </button>
          </WrapBtn>
        </ProfileSection>
        <ClassSection
          className={
            profileData &&
            profileData.accountname &&
            profileData.accountname.includes('Teacher')
              ? ''
              : 'a11y-hidden'
          }
        >
          <Title>클래스 리스트</Title>
          <ClassListUl>
            {profileData &&
              profileData.accountname &&
              profileData.accountname.includes('Teacher') &&
              classData.product &&
              classData.product.map((classItem, index) => (
                <MiniClassList
                  key={classItem.id}
                  token={token}
                  classItem={classItem}
                  page='profile'
                  setClassUpdated={setClassUpdated}
                />
              ))}
          </ClassListUl>
        </ClassSection>
        <PostSection>
          <div id='PostBtnWrap'>
            <button
              id='ListBtn'
              onClick={() => handleButtonClick('listBtn')}
              className={isListBtnActive ? 'active' : ''}
            >
              <img
                src={isListBtnActive ? PostListBtnOn : PostListBtnOff}
                alt='포스트리스트 버튼'
              />
            </button>
            <button
              id='ImgListBtn'
              onClick={() => handleButtonClick('imgListBtn')}
              className={isImgListBtnActive ? 'active' : ''}
            >
              <img
                src={isImgListBtnActive ? PostAlbumBtnOn : PostAlbumBtnOff}
                alt='포스트 앨범 버튼'
              />
            </button>
            <span></span>
          </div>
          <PostListUl>
            {isListBtnActive && postData && postData.post && (
              <div className={postData.post.length > 0 ? '' : 'posts-none'}>
                {postData.post.length > 0 ? (
                  postData.post.map((post) => (
                    <PostList
                      key={post.id}
                      setPostUpdated={setPostUpdated}
                      post={post}
                    />
                  ))
                ) : (
                  <div className='post-none'>
                    <img src={HomeLogo} alt='포스트가 없습니다' />
                    <p>작성된 게시물이 없습니다</p>
                  </div>
                )}
              </div>
            )}
            {isImgListBtnActive && postData && postData.post && (
              <div
                className={
                  postData.post.length > 0 ? 'image-grid' : 'image-none'
                }
              >
                {postData.post.length > 0 ? (
                  postData.post.map((post) => (
                    <img
                      key={post.id}
                      src={post.image.split(',')[0]}
                      alt='포스트 이미지'
                      onClick={() => handlePostImgClick(post.id)}
                    />
                  ))
                ) : (
                  <div>
                    <img src={HomeLogo} alt='포스트 이미지가 없습니다' />
                    <p>작성된 게시물 이미지가 없습니다</p>
                  </div>
                )}
              </div>
            )}
          </PostListUl>
        </PostSection>
      </MainWrap>
      <MenuBar />
    </ProfilePage>
  );
}

async function ProfileData(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}`;

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
  const url = `https://api.mandarin.weniv.co.kr/product/${accountname}`;

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
  const url = `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;

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
async function follow(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follow`;

  try {
    const res = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    );
    return res.data; // Modify this based on the actual response structure
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function unfollow(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`;

  try {
    const res = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data; // Modify this based on the actual response structure
  } catch (err) {
    console.log(err);
    return null;
  }
}
