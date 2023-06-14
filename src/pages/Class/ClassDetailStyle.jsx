import styled from "styled-components";
import heartIcon from "../../assets/img/icon-heart.svg";
import shareIcon from "../../assets/img/icon-share.svg";
import { MoreNav } from "../../components/Common/TopNav"
import  MenuBar  from "../../components/Common/MenuBar";
import ClassImg from "../../assets/img/temp/soapT1.png"
import ExplainImg from "../../assets/img/temp/soapT5.png"
import UserIcon from "../../assets/img/basic-profile-img.svg"
import MiniClassList from "../../components/Common/MiniClassList";

// Header 
export function Header() {
  return (
    <>
    <MoreNav />
    <ClassInfo />
    </>
  )
}

export function ClassInfo() {
  return (
    <ClassInfoSection>
      <ClassImage src={ClassImg} alt="비누 수업" />
      <a href="#/class/수제">수제</a>
      <ClassName>수제 비누 만들기 클래스</ClassName>
      <ClassPrice>
        <span className="a11y-hidden">가격</span>26,500원
      </ClassPrice>
      <BtnContainer />
    </ClassInfoSection>
  )
};

export function BtnContainer({like}) {
  return (
    <div>
      <TopBtn>
        <LikeBtn> 
          <span>찜하기</span>
          <span>{like}</span> 
        </LikeBtn>
        <ShareBtn>공유하기</ShareBtn>
      </TopBtn>
      <div>
        <AskBtn>작가문의</AskBtn>
        <ReverseBtn>예약하기</ReverseBtn>
      </div>
    </div>
  )
};

export const ClassInfoSection = styled.section`
  padding: 16px 31px 28px 27px;
  box-sizing: border-box;
  a {
    font-size: 14px;
    color: #767676;
  }
`

export const ClassImage = styled.img`
  width: 330px;
  aspect-ratio: 330 / 215;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`

export const ClassName = styled.h2`
  font-size: 16px;
  margin: 4px 0 11px;
`

export const ClassPrice = styled.strong`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`

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
`

export const LikeBtn = styled.button`
  font-size: 14px;
  color: #767676;
  width: calc(100% / 2);
  padding-left: 16px;
  text-align: center;
  &::before {
    content: "";
    background: url(${heartIcon});
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    left: 24px;
  }

  &::after {
    content: "";
    width: 1px;
    height: 34px;
    display: block;
    background-color: #767676;
    position: absolute;
    top: 0;
    left: 50%;
  }
`
export const ShareBtn = styled.button`
  font-size: 14px;
  color: #767676;
  width: calc(100% / 2);
  padding-left: 16px;
  text-align: center;
  &::before {
  content: "";
  background: url(${shareIcon});
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  right: 107px;
  }
`

export const AskBtn = styled.button`
  width: 102px;
  height: 34px;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  color: #767676;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 44px;
  text-align: right;
`

export const ReverseBtn = styled.button`
  width: 220px;
  float: right;
  height: 34px;
  background-color: #036635;
  border-radius: 44px;
  color: #fff;
  text-align: center;
`
// /Header

// Main
export function Main() {
  return (
  <MainWrap>
    <ClassIntro />
    <ClassLoc />
    <ClassReview />
    <OtherClass />
  </MainWrap>
  )
}

export const MainWrap = styled.main`
  background-color: #f2f2f2;
  padding: 10px 0 60px;
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`

// ClassIntro
export function ClassIntro() {
  return (
    <ClassIntroSection>
      <ClassNav>
        <li>
          <a href="#class-intro">클래스 소개</a>
        </li>
        <li>
          <a href="#class-location">장소</a>
        </li>
        <li>
          <a href="#class-review">후기</a>
        </li>
      </ClassNav>
      <ClassWrap>
      <h3 className="a11y-hidden">클래스 소개</h3>
      <ExplainP>안녕하세요 저희 클래스는 본인의 취향에 맞춰..............</ExplainP>
      <ClassExplainImg src={ExplainImg} alt="비누 만드는 클래스의 모습" />
      </ClassWrap>
    </ClassIntroSection>
  )
}

export const ClassIntroSection = styled.section`
  background-color: #fff;
`

export const ClassNav = styled.ul`
  border-bottom: 1px solid #dbdbdb;
  padding: 14px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
`

export const ClassWrap = styled.div`
  padding: 20px 35px;
  h3 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 26px;
    &::after {
      content: "";
      width: 322px;
      height: 0.1px;
      display: block;
      background-color: #dbdbdb;
      position: absolute;
      top: 43px;
    }
  }
`

export const ExplainP = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`
export const ClassExplainImg = styled.img`
  width: 320px;
  aspect-ratio: 320 / 329;
  object-fit: cover;
`
// /ClassIntro

// ClassLocation

export function ClassLoc() {
  return (
    <ClassLocSection id='class-location'>
      <ClassWrap>
        <h3>장소</h3>
        <LocImg>지도 이미지</LocImg>
        <LocAddress>서울특별시 OO구 OO동 123-12 (2층)</LocAddress>
      </ClassWrap>
    </ClassLocSection>
  )
}

export const ClassLocSection = styled.section`
  background-color: #fff;
  position: relative;
`

export const LocImg = styled.div`
  width: 320px;
  height: 160px;
  background-color: #dbdbdb;
  margin-bottom: 12px;
`

export const LocAddress = styled.address`
  font-size: 14px;
  font-weight: normal;
  color: #767676;
`
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
  )
}

export const ClassReviewSection = styled.section`
    background-color: #fff;
    position: relative;
    `

// UserProfile part
export function UserProfile() {
  return (
    <Profile>
    <UserImg src={UserIcon} alt="유저 아이콘" />
    <UserInfo>
      <UserName>위니브 메이드 공방</UserName>
      <UserUpload>2023년 06월 06일</UserUpload>
    </UserInfo>
  </Profile>
  )
}

export const Profile = styled.div`
  position: relative;
  margin-bottom: 9px;
  `
export const UserImg = styled.img`
  width: 36px;
  aspect-ratio: 36 / 36;
  object-fit: cover;
  margin-right: 9px;
  `

export const UserInfo = styled.div`
  position: absolute;
  top: 50%;
  left: calc(36px + 9px);
  transform: translate(0, -50%);
  `
export const UserName = styled.h4`
  font-size: 14px;
  margin-bottom: 2px;
  `
export const UserUpload = styled.p`
  font-size: 12px;
  color: #767676;
  `
// /UserProfile part

// ReviewPart
export function ReviewContent() {
  return (
    <Review>
      <ReviewImg src={ExplainImg} alt="비누 만드는 클래스의 모습" />
      <ReviewP>
      옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는
      </ReviewP>
    </Review>
  )
}

export const Review = styled.div`
  display: flex;
  `

export const ReviewImg = styled.img`
  width: 80px;
  aspect-ratio: 80 / 80;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
  `

export const ReviewP = styled.p`
  font-size: 14px;
  `
// /ReviewPart
// /Classreview

// Other Class

export function OtherClass() {
  return (
    <OtherClassSection>
      <MiniClassList />
    </OtherClassSection>
  );
}
export const OtherClassSection = styled.section`
  background-color: #fff;
`;

export const OtherClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > :nth-child(1) {
    width: 49%;
  }
`;

// /Other Class
// /Main


// Footer
export function Footer() {
  return <MenuBar />;
}
// /Footer