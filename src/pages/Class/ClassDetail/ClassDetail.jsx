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
  const [liked, setLiked] = useRecoilState(ClassLikeAtom);
  const navigate = useNavigate();
  
  const handleLike = () => {
    // 찜하기 버튼 토글
    if (!liked.some(item => item.class_id === id)) {
      setLiked(prevLiked => [...prevLiked, { class_id: id }]);
    } else {
      setLiked(prevLiked => prevLiked.filter(item => item.class_id !== id));
    }
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

  // 가격 천단위 콤마를 추가하는 함수
  const addCommas = (value) => {
    return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
  };

  if (!newClass) {
    return null;
  }

  const txtLength = newClass?.author?.username?.length;

  const handleTeacherClick = () => {
    const accountname = newClass.author.accountname;
    navigate(`/other_profile/${accountname}`);
  }

  // 강사 이미지가 없는 경우 기본 프로필 이미지로 대체
  const teacherImage = !newClass.author?.image || newClass.author.image === "https://api.mandarin.weniv.co.kr/"
    ? BasicProfile
    : newClass.author.image;

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
                <img src={teacherImage} alt='강사 프로필' />
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
      <BtnContainer liked={liked} onLike={handleLike} price={newClass.price} img={newClass.itemImage} name={newClass.itemName} id={id} />
    </ClassInfoSection>
  );
}

export function BtnContainer({ likeCount, liked, onLike, price, img, name, id }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setIsClicked(prevState => !prevState);
    onLike();
  };

  const isLiked = liked.some(item => item.class_id === id);

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
        <LikeBtn onClick={handleLikeClick} isClicked={isLiked}>
          <span>찜하기</span>
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
