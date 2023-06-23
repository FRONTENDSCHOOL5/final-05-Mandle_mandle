import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import heartIcon from '../../assets/img/icon-heart.svg';
import shareIcon from '../../assets/img/icon-share.svg';
import heartClickedIcon from '../../assets/img/icon-heart-clicked.svg';
import { GoBackNav } from '../../components/Common/TopNav';
import MenuBar from '../../components/Common/MenuBar';
import ExplainImg from '../../assets/img/temp/soapT5.png';
import UserIcon from '../../assets/img/basic-profile-img.svg';
import { ClassPostMini } from '../../components/Common/ClassPost';
import askIcon from '../../assets/img/icon-chat-mini.svg';
import location from '../../assets/img/temp/location.png'

// Header랑 main도 긴데 이거 파일 나눠야 할까....

// Header

export function Header() {
  return (
    <GoBackNav />
  );
}

// /Header

// Main
export function Main() {
  const [liked, setLiked] = useState(0);
  const handleLike = () => {
    setLiked((prevLiked) => (prevLiked === 0 ? 1 : 0));
  };
  return (
    <MainWrap>
      <ClassInfo liked={liked} onLike={handleLike} />
      <ClassIntro />
      <ClassLoc />
      <ClassReview />
      <OtherClass />
    </MainWrap>
  );
}

export function ClassInfo({ liked, onLike }) {

  const location = useLocation();
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const params = useParams();
  const id = params.class_id;
  console.log(params)
  console.log(id)
  console.log(token)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.mandarin.weniv.co.kr/product/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    
      console.log(response)
      const classes = response.data.product;
      setNewClass(classes.product);
      console.log(classes.id)

      const mainImg = classes.itemImage;
      const title = classes.itemName;
      const tag = classes.link
      const price = classes.price
      
      setClassData({ mainImg, title, tag, price });

    } catch (error) {
      console.log("Error", error)
    }
  };


  const [classData, setClassData] = useState({
  mainImg: '',
  title: '',
  tag: '',
  price: ''
  })

  return (
    <ClassInfoSection>
      <ClassImage src={classData.mainImg} alt='' />
      <p>{classData.tag}</p>
      <ClassName>{classData.title}</ClassName>
      <ClassPrice>
        <span className='a11y-hidden'>가격</span>
        {classData.price.toLocaleString()}원
      </ClassPrice>
      <BtnContainer liked={liked} onLike={onLike} price={classData.price} />
    </ClassInfoSection>
  );
}

export function BtnContainer({ liked, onLike, price }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  console.log(price);

  const handleLikeClick = () => {
    setIsClicked((prevState) => !prevState);
    onLike();
  };

  const handleReservationClick = () => {
    console.log(price)
    const state = {
      price: price
    }
    console.log(state)
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
        <Link to='/chatlist'>
          <AskBtn>작가문의</AskBtn>
        </Link>
          <ReverseBtn onClick={handleReservationClick}>예약하기</ReverseBtn>
      </BottomBtn>
    </div>
  );
}

export const ClassInfoSection = styled.section`
  padding: 16px 31px 28px 27px;
  box-sizing: border-box;
  background-color: #fff;
  p {
    font-size: 14px;
    color: #767676;
  }
`;

export const ClassImage = styled.img`
  width: 330px;
  aspect-ratio: 330 / 215;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ClassName = styled.h2`
  font-size: 16px;
  margin: 4px 0 11px;
`;

export const ClassPrice = styled.strong`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const TopBtn = styled.div`
  padding: 8px 0;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #767676;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

export const LikeBtn = styled.button`
  font-size: 14px;
  color: #767676;
  width: calc(100% / 2);
  padding-left: 16px;
  text-align: center;
  &::before {
    content: '';
    background: url(${(props) => props.isClicked ? heartClickedIcon : heartIcon})
      no-repeat;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: ${(props) => (props.isClicked ? '9px' : '7px')};
    left: ${(props) => (props.isClicked ? '32px' : '31px')};
  }

  &::after {
    content: '';
    width: 1px;
    height: 34px;
    display: block;
    background-color: #767676;
    position: absolute;
    top: 0;
    left: 50%;
  }
`;

export const LikeNum = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const ShareBtn = styled.button`
  font-size: 14px;
  color: #767676;
  width: calc(100% / 2);
  padding-left: 16px;
  text-align: center;
  &::before {
    content: '';
    background: url(${shareIcon});
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 7px;
    right: 107px;
  }
`;

export const BottomBtn = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AskBtn = styled.button`
  width: 102px;
  height: 34px;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  color: #767676;
  padding: 8px 14px 8px 0;
  box-sizing: border-box;
  border-radius: 44px;
  text-align: right;
  position: relative;
  &::before {
    content: '';
    background: url(${askIcon});
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 7px;
    left: 14px;
    margin-right: 2px;
  }
`;

export const ReverseBtn = styled.button`
  width: 220px;
  float: right;
  height: 34px;
  background-color: #036635;
  border-radius: 44px;
  color: #fff;
  text-align: center;
`;

export const MainWrap = styled.main`
  background-color: #f2f2f2;
  padding: 48px 0 60px;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

// ClassIntro
export function ClassIntro() {
  return (
    <ClassIntroSection>
      <ClassNav>
        <li>
          <a href='#class-intro'>클래스 소개</a>
        </li>
        <li>
          <a href='#class-location'>장소</a>
        </li>
        <li>
          <a href='#class-review'>후기</a>
        </li>
      </ClassNav>
      <ClassWrap>
        <h3 className='a11y-hidden'>클래스 소개</h3>
        <ExplainP>
          안녕하세요 저희 클래스는 본인의 취향에 맞춰..............
        </ExplainP>
        <ClassExplainImg src={ExplainImg} alt='비누 만드는 클래스의 모습' />
      </ClassWrap>
    </ClassIntroSection>
  );
}

export const ClassIntroSection = styled.section`
  background-color: #fff;
`;

export const ClassNav = styled.ul`
  border-bottom: 1px solid #dbdbdb;
  padding: 14px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
`;

export const ClassWrap = styled.div`
  padding: 20px 35px;
  h3 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 26px;
    &::after {
      content: '';
      width: 322px;
      height: 0.1px;
      display: block;
      background-color: #dbdbdb;
      position: absolute;
      top: 43px;
    }
  }
`;

export const ExplainP = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;
export const ClassExplainImg = styled.img`
  width: 320px;
  aspect-ratio: 320 / 329;
  object-fit: cover;
`;
// /ClassIntro

// ClassLocation

export function ClassLoc() {
  return (
    <ClassLocSection id='class-location'>
      <ClassWrap>
        <h3>장소</h3>
        <img src={location} alt="" />
        <LocAddress>
          서울특별시 관악구 봉천동 911-11 (2층)
        </LocAddress>
      </ClassWrap>
    </ClassLocSection>
  );
}

export const ClassLocSection = styled.section`
  background-color: #fff;
  position: relative;
  img {
    width: 320px;
    height: 160px;
    object-fit: cover;
    margin-bottom: 12px;
  }
`;

export const LocImg = styled.div`
  width: 320px;
  height: 160px;
  background-color: #dbdbdb;
  margin-bottom: 12px;
`;

export const LocAddress = styled.address`
  font-size: 14px;
  font-weight: normal;
  color: #767676;
`;
// /ClassLocation

// Classreview
export function ClassReview() {
  return (
    <ClassReviewSection id='class-review'>
      <ClassWrap>
        <h3>수강후기</h3>
        <UserProfile />
        <ReviewContent />
      </ClassWrap>
    </ClassReviewSection>
  );
}

export const ClassReviewSection = styled.section`
  background-color: #fff;
  position: relative;
`;

// UserProfile part
export function UserProfile() {
  return (
    <Profile>
      <UserImg src={UserIcon} alt='유저 아이콘' />
      <UserInfo>
        <UserName>위니브 메이드 공방</UserName>
        <UserUpload>2023년 06월 06일</UserUpload>
      </UserInfo>
    </Profile>
  );
}

export const Profile = styled.div`
  position: relative;
  margin-bottom: 9px;
`;
export const UserImg = styled.img`
  width: 36px;
  aspect-ratio: 36 / 36;
  object-fit: cover;
  margin-right: 9px;
`;

export const UserInfo = styled.div`
  position: absolute;
  top: 50%;
  left: calc(36px + 9px);
  transform: translate(0, -50%);
`;
export const UserName = styled.h4`
  font-size: 14px;
  margin-bottom: 2px;
`;
export const UserUpload = styled.p`
  font-size: 12px;
  color: #767676;
`;
// /UserProfile part

// ReviewPart
export function ReviewContent() {
  return (
    <Review>
      <ReviewImg src={ExplainImg} alt='비누 만드는 클래스의 모습' />
      <ReviewP>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
        뛰노는
      </ReviewP>
    </Review>
  );
}

export const Review = styled.div`
  display: flex;
`;

export const ReviewImg = styled.img`
  width: 80px;
  aspect-ratio: 80 / 80;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
`;

export const ReviewP = styled.p`
  font-size: 14px;
`;
// /ReviewPart
// /Classreview

// Other Class

export function OtherClass() {
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  console.log(token)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.mandarin.weniv.co.kr/product/?limit=Number&skip=Number', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    
      const classes = response.data;
      console.log(classes);
      setNewClass(classes.product);

    } catch (error) {
      console.log("Error", error)
    }
  };

  const teacherClasses = newClass.filter(classItem => String(classItem.author.accountname).includes('Teacher'));
  console.log(teacherClasses)
  return (
      <MiniSection>
        <Title>다른 클래스</Title>
        <MiniList>
        {teacherClasses.map((classItem) => (
            <li key={'classItem._id'}>
              <a href={`/class/detail/${classItem._id}`}>
                <ClassPostMini
                  miniImg={classItem.itemImage}
                  miniName={classItem.itemName}
                  miniTag={classItem.link}
                />
              </a>
            </li>
          ))}
        </MiniList>
      </MiniSection>
  );
}
export const MiniSection = styled.section`
  padding: 20px 0 0 16px;
  height: 208px;
  background-color: #fff;
  `

export const Title = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
  color: #000;
`;

export const MiniList = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 100px;

`

// /Other Class
// /Main

// Footer
export function Footer() {
  return <MenuBar />;
}
// /Footer
