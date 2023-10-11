import { React, useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GoBackNav } from '../../../components/Common/TopNav';
import MenuBar from '../../../components/Common/MenuBar';
import BasicProfile from '../../../assets/img/basic-profile-img.svg';
import ClassDetailMain from './ClassDetailMain';
import { MainWrap, ClassInfoSection, ClassImage, ClassName, ClassTeacher, ClassPrice, TopBtn, LikeBtn, LikeNum, ShareBtn, BottomBtn, AskBtn, ReverseBtn } from './ClassDetailStyle';
import GetClassDetailInfoData from '../../../api/GetClassDetailInfoData';
import ClassDetailSkeleton from '../../../components/Common/Skeleton/ClassDetailSkeleton';
import { ClassLikeAtom } from '../../../Store/ClassLikedAtom';
import NormalizeImage from  '../../../components/Common/NormalizeImage'
import PostClassLike from '../../../api/PostClassLike'

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
  const navigate = useNavigate();

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

  // 가격 천단위 콤마를 추가하는 함수
  const addCommas = (value) => {
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
  };

  const txtLength = newClass?.author?.username?.length;

  const handleTeacherClick = () => {
    const accountname = newClass.author.accountname;
    navigate(`/other_profile/${accountname}`);
  }

  return (
    <ClassInfoSection>
      {newClass.length === 0 ?
        (<ClassDetailSkeleton />) : (
          <>
            <ClassImage src={newClass.itemImage} alt='클래스 이미지' />
            <div>
              <ClassTeacher
                txtLength={txtLength}
                onClick={handleTeacherClick}>
                <img src={NormalizeImage(newClass.author.image)} alt='강사 프로필' />
                <h3>
                  {newClass.author.username}
                </h3>
              </ClassTeacher>
              <p>
                {newClass.link ? newClass.link.split('@')[0] : ''}
              </p>
              <ClassName>{newClass.itemName}</ClassName>
              <ClassPrice>
                <span className='a11y-hidden'>가격</span>
                {addCommas(newClass.price)}원
              </ClassPrice>
            </div>
          </>
        )}
      <BtnContainer price={newClass.price} img={newClass.itemImage} name={newClass.itemName} link={newClass.link} id={id} />
    </ClassInfoSection>
  );
}

export function BtnContainer({ price, img, name, link, id }) {
  const [isClicked, setIsClicked] = useState(false);
  const [liked, setLiked] = useRecoilState(ClassLikeAtom);
  const [likeCount, setLikeCount] = useState(0);
  const isLiked = liked.some(item => item.class_id === id);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const navigate = useNavigate();
  
  useEffect(() => {
    setLikeCount(isLiked ? 1 : 0);
  }, [isLiked]);

  const handleLikeClick = async () => {
    setIsClicked(prevState => !prevState);
  
    setLiked(prevLiked => {
      if (!prevLiked.some(item => item.class_id === id)) {
        return [...prevLiked, { class_id: id }];
      } else {
        return prevLiked.filter(item => item.class_id !== id);
      }
    });
  
    // 찜하기 API 호출


    const requestBody = {
      product: {itemName: `${name}@${likeCount}`,
      price: price,
      link: link,
      itemImage: img}
    };
  
    try {
      const response = await PostClassLike(id, token, requestBody );
      console.log(response);
      setLikeCount(prevCount => (isLiked ? prevCount - 1 : prevCount + 1));
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  // 예약 기능
  const handleReservationClick = () => {
    const state = {
      price: price,
      img: img,
      name: name,
      id: id
    }
    navigate('/reservation', { state: state });
    console.log(state);
  };

  return (
    <div>
      <TopBtn>
        <LikeBtn type='submit' onClick={handleLikeClick} isClicked={isLiked}>
          <span>찜하기</span>
          <LikeNum>{likeCount}</LikeNum>
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