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
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
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
  const [liked, setLiked] = useState(0);
  const handleLike = () => {
    setLiked((prevLiked) => (prevLiked === 0 ? 1 : 0));
  };

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
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
  };

  if (!newClass) {
    return null;
  }

  return (
    <ClassInfoSection>
      <ClassImage src={newClass.itemImage} alt='클래스 이미지' />
      <p>{newClass.link ? newClass.link.split('@')[0] : ''}</p>
      <ClassName>{newClass.itemName}</ClassName>
      <ClassPrice>
        <span className='a11y-hidden'>가격</span>
        {addCommas(newClass.price)}원
      </ClassPrice>
      <BtnContainer liked={liked} onLike={handleLike} price={newClass.price} img={newClass.itemImage} name={newClass.itemName} id={id}/>
    </ClassInfoSection>
  );
}

export function BtnContainer({ liked, onLike, price, img, name, id }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleLikeClick = () => {
    setIsClicked((prevState) => !prevState);
    onLike();
  };

  const handleReservationClick = () => {
    const state = {
      price: price,
      img: img,
      name: name,
      id: id
    }
    navigate('/reservation', {state:state})
    console.log(state);
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
        <ReverseBtn onClick={handleReservationClick}>
          예약하기
        </ReverseBtn>
      </BottomBtn>
    </div>
  );
}