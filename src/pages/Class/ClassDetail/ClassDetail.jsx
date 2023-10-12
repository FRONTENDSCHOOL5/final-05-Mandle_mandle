import { React, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useRecoilValue, useRecoilState } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';

import ClassDetailMain from './ClassDetailMain';
import MenuBar from '../../../components/Common/MenuBar';
import { GoBackNav } from '../../../components/Common/TopNav';
import GetClassDetailInfoData from '../../../api/GetClassDetailInfoData';
import ClassDetailSkeleton from '../../../components/Common/Skeleton/ClassDetailSkeleton';
import NormalizeImage from '../../../components/Common/NormalizeImage';

import shareIcon from '../../../assets/img/icon-share.svg';
import heartIcon from '../../../assets/img/icon-heart.svg';
import askIcon from '../../../assets/img/icon-chat-mini.svg';
import heartClickedIcon from '../../../assets/img/icon-heart-clicked.svg';
import {
  MainWrap,
  ClassInfoSection,
  ClassImage,
  ClassName,
  ClassTeacher,
  ClassPrice,
  TopBtn,
  LikeBtn,
  ShareBtn,
  BottomBtn,
  AskBtn,
  ReverseBtn,
} from './ClassDetailStyle';

export default function ClassDetail() {
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  const params = useParams();
  const id = params.class_id;

  return (
    <>
      <GoBackNav />
      <MainWrap>
        <ClassDetailInfo id={id} token={token} />
        <ClassDetailMain id={id} token={token} />
      </MainWrap>
      <MenuBar />
    </>
  );
}

export function ClassDetailInfo({ id, token }) {
  const [newClass, setNewClass] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassDetailInfoData(id, token);
        setNewClass(data);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchData();
  }, [id, token]);

  // 가격 천단위 콤마를 추가하는 함수
  const addCommas = (value) => {
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
  };

  const txtLength = newClass?.author?.username?.length;

  const handleTeacherClick = () => {
    const accountname = newClass.author.accountname;
    navigate(`/other_profile/${accountname}`);
  };

  return (
    <ClassInfoSection>
      {newClass.length === 0 ? (
        <ClassDetailSkeleton />
      ) : (
        <>
          <ClassImage src={newClass.itemImage} alt='클래스 이미지' />
          <div>
            <ClassTeacher txtLength={txtLength} onClick={handleTeacherClick}>
              <img
                src={NormalizeImage(newClass.author.image)}
                alt='강사 프로필'
              />
              <h3>{newClass.author.username}</h3>
            </ClassTeacher>
            <p>{newClass.link ? newClass.link.split('@')[0] : ''}</p>
            <ClassName>{newClass.itemName}</ClassName>
            <ClassPrice>
              <span className='a11y-hidden'>가격</span>
              {addCommas(newClass.price)}원
            </ClassPrice>
          </div>
        </>
      )}
      <BtnContainer
        price={newClass.price}
        img={newClass.itemImage}
        name={newClass.itemName}
        id={id}
      />
    </ClassInfoSection>
  );
}

export function BtnContainer({ price, img, name, id }) {
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const likedData = {
    class_id: id,
    class_name: name,
    price: price,
    image: img,
  };

  const handleLikeClick = async () => {
    setIsClicked((prevLiked) => !prevLiked);

    const userId = userInfo.id;
    const likedInfo = JSON.parse(localStorage.getItem('likedInfo')) || {};

    if (!likedInfo[userId]) {
      likedInfo[userId] = [];
    }

    if (!likedInfo[userId].some((item) => item.class_id === id)) {
      likedInfo[userId] = [...likedInfo[userId], likedData];
    } else {
      likedInfo[userId] = likedInfo[userId].filter(
        (item) => item.class_id !== id,
      );
    }

    localStorage.setItem('likedInfo', JSON.stringify(likedInfo));
  };

  // 예약 기능
  const handleReservationClick = () => {
    const state = {
      price: price,
      image: img,
      name: name,
      class_id: id,
    };
    navigate('/reservation', { state: state });
    console.log(state);
  };

  return (
    <div>
      <TopBtn>
        <LikeBtn type='button' onClick={handleLikeClick} isClicked={isClicked}>
          <div>
            <img
              src={isClicked ? heartClickedIcon : heartIcon}
              alt='찜하기 버튼'
            />
          </div>
          <span>찜하기</span>
        </LikeBtn>
        <ShareBtn>
          <img src={shareIcon} alt='공유 아이콘' />
          공유하기
        </ShareBtn>
      </TopBtn>
      <BottomBtn>
        <Link to='/chat/chatList'>
          <AskBtn>
            <img src={askIcon} alt='채팅 아이콘' />
            작가문의
          </AskBtn>
        </Link>
        <ReverseBtn onClick={handleReservationClick}>예약하기</ReverseBtn>
      </BottomBtn>
    </div>
  );
}
