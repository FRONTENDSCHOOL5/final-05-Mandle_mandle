import { React, useState,useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GoBackNav } from '../../../components/Common/TopNav';
import MenuBar from '../../../components/Common/MenuBar';
import ClassDetailMain from './ClassDetailMain';
import { MainWrap, ClassInfoSection, ClassImage, ClassName, ClassPrice, TopBtn, LikeBtn, LikeNum, ShareBtn, BottomBtn, AskBtn, ReverseBtn } from './ClassDetailStyle';
import GetClassDetailInfoData from '../../../api/GetClassDetailInfoData'

export default function ClassDetail() {
  return (
    <>
      <GoBackNav />
      <MainWrap>
        <ClassDetailInfo />
        <ClassDetailMain />
      </MainWrap>
      <MenuBar />
    </>
  );
}




export function ClassDetailInfo() {
  const [liked, setLiked] = useState(0);
  const handleLike = () => {
    setLiked((prevLiked) => (prevLiked === 0 ? 1 : 0));
  };
  return <ClassInfo liked={liked} onLike={handleLike} />
}

export function ClassInfo({ liked, onLike }) {
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const params = useParams();
  const id = params.class_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassDetailInfoData(id, token);
        setNewClass(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [id, token]);

  // 천단위 콤마를 추가하는 함수
  const addCommas = (value) => {
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  };

  if (!newClass) {
    return null;
  }

  return (
    <ClassInfoSection>
      <ClassImage src={newClass.itemImage} alt='클래스 이미지' />
      <p>{newClass.link}</p>
      <ClassName>{newClass.itemName}</ClassName>
      <ClassPrice>
        <span className='a11y-hidden'>가격</span>
        {addCommas(newClass.price)}원
      </ClassPrice>
      <BtnContainer liked={liked} onLike={onLike} price={newClass.price} />
    </ClassInfoSection>
  );
}

export function BtnContainer({ liked, onLike, price }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleLikeClick = () => {
    setIsClicked((prevState) => !prevState);
    onLike();
  };

  const handleReservationClick = () => {
    const state = {
      price: price
    }
    navigate('/reservation', {state:state})
  }

  return (
    <div>
      <TopBtn>
        <LikeBtn onClick={handleLikeClick} isClicked={isClicked}>
          <span>찜하기</span>
          <LikeNum>{liked}</LikeNum>
        </LikeBtn>
        <ShareBtn>공유하기</ShareBtn>
      </TopBtn>
      <BottomBtn>
        <Link to='/chat/chatList'>
          <AskBtn>작가문의</AskBtn>
        </Link>
          <ReverseBtn onClick={handleReservationClick}>예약하기</ReverseBtn>
      </BottomBtn>
    </div>
  );
}