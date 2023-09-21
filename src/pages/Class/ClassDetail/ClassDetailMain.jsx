import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { ClassSection, ClassNav, ClassWrap, CommentP,  ClassExplainImg, MapBtn, LocAddress, Title, MiniList, Profile, UserImg, UserInfo, UserName, Review, ReviewImg } from './ClassDetailMainStyle'
import ExplainImg from '../../../assets/img/temp/soapT5.png';
import location from '../../../assets/img/temp/location.png'
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { ClassPostMini } from '../../../components/Common/ClassPost';
import GetClassData from '../../../api/GetClassData';
import GetClassDetailInfoData from '../../../api/GetClassDetailInfoData'
import UserIcon from '../../../assets/img/basic-profile-img.svg';

export default function ClassDetailMain({ id, token }) {
  return (
    <>
      <ClassDetailIntro />
      <ClassDetailLocation id={id} token={token} />
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
export function ClassDetailLocation({ id, token }) {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassDetailInfoData(id, token);
        setAddress(data.link);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [id, token]);

  const handleClick = () => {
    if (address) {
      const parts = address.split('@');
      if (parts.length >= 2) {
        const location = parts[1];
        // 이동할 URL을 생성합니다.
        const mapURL = `https://map.kakao.com/?q=${encodeURIComponent(location)}`;
        // 새 탭에서 카카오맵 링크를 엽니다.
        window.open(mapURL, '_blank');
      }
    }
  };

  return (
    <ClassSection className='location' id='class-location'>
      <ClassWrap>
        <h3>장소</h3>
        <MapBtn onClick={handleClick}>지도 바로가기</MapBtn>
        <img src={location} alt="지도 위치" onClick={handleClick} style={{ cursor: 'pointer' }} />
        <LocAddress>
          {address ? address.split('@')[1] : ''}
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
        {classList.map(classItem => {
          const parts = classItem.link.split('@');
          const truncatedLink = parts[0] || '';
          return (
            <li key={classItem._id}>
              <a href={`/final-05-Mandle_mandle/class/detail/${classItem._id}`}>
                <ClassPostMini
                  miniImg={classItem.itemImage}
                  miniName={classItem.itemName}
                  miniTag={truncatedLink}
                />
              </a>
            </li>
          );
        })}
      </MiniList>
    </ClassSection>
  );
}
// /classothers