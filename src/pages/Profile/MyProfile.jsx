import React, { useEffect, useState } from 'react';
import MiniClassList from '../../components/Common/MiniClassList';
import { MoreNav } from '../../components/Common/TopNav';
import PostList from '../../components/Common/PostList/PostList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import styled from 'styled-components';
import MenuBar from '../../components/Common/MenuBar';

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
} from './ProfileStyle';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import PostListBtnOn from '../../assets/img/icon-post-list-on.svg';
import PostListBtnOff from '../../assets/img/icon-post-list-off.svg';
import PostAlbumBtnOn from '../../assets/img/icon-post-album-on.svg';
import PostAlbumBtnOff from '../../assets/img/icon-post-album-off.svg';

export default function Profile() {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
  const token = userInfo.token;
  const [profileData, setProfileData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [postUpdated, setPostUpdated] = useState(false);
  const [isListBtnActive, setListBtnActive] = useState(true);
  const [isImgListBtnActive, setImgListBtnActive] = useState(false);
  const [classUpdated, setClassUpdated] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const userProfileData = await ProfileData(userAccountname, token);
      const userClassData = await ClassData(userAccountname, token);
      const userPostData = await PostData(userAccountname, token);
      setPostData(userPostData);
      setProfileData(userProfileData);
      setClassData(userClassData);
      setPostUpdated(false);
      setClassUpdated(false);
    };
    fetchData();
  }, [userAccountname, postUpdated, classUpdated, token]);

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
            <button
              className='profileEditBtn'
              onClick={() => handleClick(profileData)}
            >
              프로필 수정
            </button>
            <button
              className={
                profileData.accountname &&
                profileData.accountname.includes('Teacher')
                  ? 'profileBtn'
                  : 'a11y-hidden'
              }
              onClick={() => {
                if (
                  profileData.accountname &&
                  profileData.accountname.includes('Teacher')
                ) {
                  navigate('/registration');
                }
              }}
            >
              클래스 등록
            </button>
          </WrapBtn>
        </ProfileSection>
        <ClassSection>
          <Title>클래스 리스트</Title>
          <ClassListUl>
            {profileData.accountname.includes('Teacher') &&
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
          </div>
          <PostListUl>
            {isListBtnActive &&
              postData &&
              postData.post &&
              postData.post.map((post) => (
                <PostList
                  key={post.id}
                  setPostUpdated={setPostUpdated}
                  post={post}
                />
              ))}

            {isImgListBtnActive && postData && postData.post && (
              <div className='image-grid'>
                {postData.post.map((post) => (
                  <img
                    key={post.id}
                    src={post.image.split(',')[0]}
                    alt='포스트 이미지'
                  />
                ))}
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
    console.error(err);
  }
  return null;
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
