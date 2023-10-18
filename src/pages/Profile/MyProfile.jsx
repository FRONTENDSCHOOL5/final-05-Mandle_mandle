import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import Modal from '../../components/Common/Modal/Modal';
import { MoreNav } from '../../components/Common/TopNav';
import PostList from '../../components/Common/PostList/PostList';
import MiniClassList from '../../components/Common/MiniClassList';
import NormalizeImage from '../../components/Common/NormalizeImage';
import ModalAlert from '../../components/Common/Modal/ModalAlert/ModalAlert';
import ProfileSkeleton from '../../components/Common/Skeleton/ProfileSkeleton';
import HomeLogo from '../../assets/img/home-logo.svg';
import ImageMore from '../../assets/img/icon-img-more.svg';
import MenuBar from '../../components/Common/MenuBar';
import Loading from '../Loading/Loading';
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
import PostListBtnOn from '../../assets/img/icon-post-list-on.svg';
import PostListBtnOff from '../../assets/img/icon-post-list-off.svg';
import PostAlbumBtnOn from '../../assets/img/icon-post-album-on.svg';
import PostAlbumBtnOff from '../../assets/img/icon-post-album-off.svg';
import { useRecoilValue } from 'recoil';

export default function Profile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);
  const userAccountname = userInfo.accountname;
  const token = userInfo.token;
  const [postData, setPostData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [postUpdated, setPostUpdated] = useState(false);
  const [classUpdated, setClassUpdated] = useState(false);
  const [isListBtnActive, setListBtnActive] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isImgListBtnActive, setImgListBtnActive] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(null);

  const [introText, setIntroText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState(''); // 'textColor' 상태 변수 정의
  function getTextColorByBackgroundColor(hexColor) {
    const c = hexColor.substring(1); // 색상 앞의 # 제거
    const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff; // red 추출
    const g = (rgb >> 8) & 0xff; // green 추출
    const b = (rgb >> 0) & 0xff; // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    // 색상 선택
    return luma < 127.5 ? 'white' : 'black'; // 글자색이
  }
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

      // '#' 문자 이전의 intro 텍스트 추출하고 'introText' 상태 변수에 설정
      if (userProfileData && userProfileData.intro) {
        const introParts = userProfileData.intro.split('#');
        if (introParts.length > 1) {
          setIntroText(introParts[0]);
          setBackgroundColor(`#${introParts[1]}`);
          const textColor = getTextColorByBackgroundColor(`#${introParts[1]}`);
          setTextColor(textColor); // 여기서 'textColor'의 값을 설정합니다.
        } else {
          setIntroText(userProfileData.intro); // '#'가 없다면 전체 intro를 'introText'로 설정
        }
      }
    };

    fetchData();
  }, [postUpdated, classUpdated]);

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

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleLogout = () => {
    alert('로그아웃 되었습니다. 다음에 또 만나요!');
    setAlertModalOpen(null);
    localStorage.removeItem('recoil-persist');
    navigate('/');
    window.location.reload();
  };
  return (
    <ProfilePage>
      {/* 모달 버튼 */}
      <MoreNav onClick={handleModalOpen} />
      {/* 모달 닫기 버튼 */}
      {isModalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          setAlertModalOpen={setAlertModalOpen}
          type='logout'
          text='로그아웃'
        />
      )}
      {alertModalOpen && (
        <ModalAlert
          setAlertModalOpen={setAlertModalOpen}
          onClick={handleLogout}
          type={alertModalOpen}
        />
      )}
      <MainWrap>
        {/* 로딩 페이지 */}
        {!profileData || !classData || !postData ? (
          <ProfileSkeleton status='my'>{}</ProfileSkeleton>
        ) : (
          // 프로필 페이지

          <div>
            <ProfileSection style={{ backgroundColor }}>
              <Wrap>
                <div className='follow'>
                  <Link to='/my_profile/follower'>
                    <p style={{ color: textColor }}>
                      {profileData.followerCount}
                    </p>
                    <p className='followNum' style={{ color: textColor }}>
                      followers
                    </p>
                  </Link>
                </div>
                <img
                  src={NormalizeImage(profileData.image)}
                  id='profileImg'
                  alt='프로필 이미지'
                />
                <div className='follow'>
                  <Link to='/my_profile/following'>
                    <p style={{ color: textColor }}>
                      {profileData.followingCount}
                    </p>
                    <p className='followNum' style={{ color: textColor }}>
                      followings
                    </p>
                  </Link>
                </div>
              </Wrap>
              <div id='usernameWrap'>
                <p id='NickName' style={{ color: textColor }}>
                  {profileData.username}
                </p>{' '}
                {/* Teacher 아이콘 */}
                <span
                  className={
                    profileData.accountname &&
                    profileData.accountname.includes('Teacher')
                      ? ''
                      : 'a11y-hidden'
                  }
                ></span>
              </div>
              {/* 만들 아이디 예외처리 */}
              <p id='MandleId' style={{ color: textColor }}>
                @
                {(profileData.accountname &&
                  profileData.accountname.includes('Teacher')) ||
                (profileData.accountname &&
                  profileData.accountname.includes('Student'))
                  ? profileData.accountname.substr(7)
                  : profileData.accountname}
              </p>
              <p id='Introduce' style={{ color: textColor }}>
                {introText}
              </p>
              <WrapBtn>
                {/* 프로필 수정버튼 */}
                <button
                  className='profileEditBtn'
                  onClick={() => handleClick(profileData)}
                  style={{ color: textColor, borderColor: textColor }}
                >
                  프로필 수정
                </button>
                {/* 클래스 등록버튼 */}
                <button
                  style={{ color: textColor, borderColor: textColor }}
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
                <button
                  style={{ color: textColor, borderColor: textColor }}
                  className={
                    profileData.accountname &&
                    profileData.accountname.includes('Student')
                      ? 'profileBtn'
                      : 'a11y-hidden'
                  }
                  onClick={() => {
                    if (
                      profileData.accountname &&
                      profileData.accountname.includes('Student')
                    ) {
                      navigate('/my_profile/my_reservation_list');
                    }
                  }}
                >
                  예약한 클래스
                </button>
              </WrapBtn>
            </ProfileSection>
            <ClassSection
              // teacher일때만 보이게 설정
              className={
                profileData.accountname.includes('Teacher') ? '' : 'a11y-hidden'
              }
            >
              <Title>클래스 리스트</Title>
              <ClassListUl>
                {/* 클래스 리스트 데이터 뿌리기 */}
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
                {/* 포스트 리스트 버튼 */}
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
                {/* 포스트 앨범 버튼 */}
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
                  <div className='image-grid'>
                    {postData.post.map((post) => {
                      // 게시물에 이미지가 있는지 확인
                      const hasImage = post.image && post.image.split(',')[0];
                      const handleAlbumBtnClick = () => {
                        navigate(`/post/${post.id}`, { state: post.id });
                      };
                      // 이미지가 있는 게시물만 렌더링
                      if (hasImage) {
                        return (
                          <button key={post.id} onClick={handleAlbumBtnClick}>
                            <img
                              src={post.image.split(',')[0]}
                              alt='포스트 이미지'
                            />
                            {post.image.split(',')[1] && (
                              <div className='icon-overlay'>
                                <img
                                  src={ImageMore}
                                  alt='여러 장 이미지 아이콘'
                                />
                              </div>
                            )}
                          </button>
                        );
                      } else {
                        return null; // 이미지가 없는 게시물은 렌더링하지 않음
                      }
                    })}
                    {postData.post.length === 0 && (
                      <div>
                        <img src={HomeLogo} alt='포스트 이미지가 없습니다' />
                        <p>작성된 게시물 이미지가 없습니다</p>
                      </div>
                    )}
                  </div>
                )}
              </PostListUl>
            </PostSection>
          </div>
        )}
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
