import { React, useState, useEffect } from 'react';
import { ClassSection, ClassNav, ClassWrap, CommentP,  ClassExplainImg, LocAddress, Title, MiniList, Profile, UserImg, UserInfo, UserName, Review, ReviewImg } from './ClassDetailMainStyle'
import ExplainImg from '../../../assets/img/temp/soapT5.png';
import location from '../../../assets/img/temp/location.png'
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { ClassPostMini } from '../../../components/Common/ClassPost';
import GetClassData from '../../../api/GetClassData';
import UserIcon from '../../../assets/img/basic-profile-img.svg';

export default function ClassDetailMain() {
  return (
    <>
      <ClassDetailIntro />
      <ClassDetailLocation />
      <ClassDetailReview />
      <ClassDetailOtherClass />
    </>
  )
}

// classintro
export function ClassDetailIntro() {
  return (
    <ClassSection>
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
        <CommentP className='explain'>
          안녕하세요 저희 클래스는 본인의 취향에 맞춰..............
        </CommentP>
        <ClassExplainImg src={ExplainImg} alt='비누 만드는 클래스의 모습' />
      </ClassWrap>
    </ClassSection>
  )
}
// /classintro

// classlocation
export function ClassDetailLocation() {
  return (
    <ClassSection className='location' id='class-location'>
      <ClassWrap>
        <h3>장소</h3>
        <img src={location} alt="지도 위치" />
        <LocAddress>
          서울특별시 관악구 봉천동 911-11 (2층)
        </LocAddress>
      </ClassWrap>
    </ClassSection>
  )
}
// /classlocation


// Classreview
export function ClassDetailReview() {
  return (
    <ClassSection className='review' id='class-review'>
      <ClassWrap>
        <h3>수강후기</h3>
        <UserProfile />
        <ReviewContent />
      </ClassWrap>
    </ClassSection>
  )
}

// UserProfile part
export function UserProfile() {
  return (
    <Profile>
      <UserImg src={UserIcon} alt='유저 아이콘' />
      <UserInfo>
        <UserName>위니브 메이드 공방</UserName>
        <CommentP className='upload-time'>2023년 06월 06일</CommentP>
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
      <CommentP>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
        뛰노는
      </CommentP>
    </Review>
  );
}
// /ReviewPart
// /Classreview


// classothers
export function ClassDetailOtherClass() {
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassData(token, UserInfo.accountname);
        setNewClass(data.product);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  });

  const classList = newClass.filter(classItem => String(classItem.author.accountname).includes('Teacher'));

  return (
    <ClassSection className='others'>
      <Title>다른 클래스</Title>
      <MiniList>
        {classList.map(classItem => (
          <li key={classItem._id}>
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
    </ClassSection>
  );
}
// /classothers