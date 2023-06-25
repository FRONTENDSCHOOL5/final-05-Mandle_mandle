import React from 'react'
import ExplainImg from '../../../assets/img/temp/soapT5.png';
import UserIcon from '../../../assets/img/basic-profile-img.svg';
import { ClassWrap, ClassReviewSection, Profile, UserImg, UserInfo, UserName, UserUpload, Review, ReviewImg, ReviewP } from './ClassDetailReviewStyle'


// Classreview

export default function ClassDetailReview() {
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
// /ReviewPart

// /Classreview