import React from "react";
import MiniClassList from "../../components/Common/MiniClassList";
import ArrowIcon from "../../assets/img/icon-arrow-left.svg";
import MoreIcon from "../../assets/img/icon- more-vertical.svg";
import BasicProfile from "../../assets/img/basic-profile-img.svg";
import ChatImg from "../../assets/img/icon-chat-mini.svg";
import ShareImg from "../../assets/img/icon-share.svg";
import PostList from "../../components/Common/PostList/PostList";
import {
  WrapBtn,
  Wrap,
  ProfileSection,
  TopNavWrap,
} from "../../pages/Profile/ProfileStyle";

export default function Profile() {
  return (
    <div>
      <MoreNavigation />
      <TeacherSelfProfile />
      <MiniClassList />
      <PostList />
    </div>
  );
}
function MoreNavigation() {
  return (
    <TopNavWrap>
      <button className="go-back">
        <img src={ArrowIcon} alt="뒤로가기 아이콘" />
      </button>
      <button className="more-icon">
        <img src={MoreIcon} alt="더보기 아이콘" />
      </button>
    </TopNavWrap>
  );
}
function TeacherSelfProfile() {
  return (
    <ProfileSection>
      <Wrap>
        <div className="follow">
          <p>2950</p>
          <p className="followNum">followers</p>
        </div>
        <img src={BasicProfile} alt="프로필 이미지" />
        <div className="follow">
          <p>198</p>
          <p className="followNum">followings</p>
        </div>
      </Wrap>
      <p id="NickName">
        위니브 메이드 공방<span></span>
      </p>
      <p id="MandleId">@ weniv_Atelier</p>
      <p id="Introduce">비누 만들기 전문 클래스 입니다~</p>
      <WrapBtn>
        <button className="profileBtn">프로필 수정</button>
        <button className="profileBtn">클래스 등록</button>
      </WrapBtn>
    </ProfileSection>
  );
}
function TeacherProfile() {
  return (
    <ProfileSection>
      <Wrap>
        <div className="follow">
          <p>2950</p>
          <p className="followNum">followers</p>
        </div>
        <img src={BasicProfile} alt="프로필 이미지" />
        <div className="follow">
          <p>198</p>
          <p className="followNum">followings</p>
        </div>
      </Wrap>
      <p id="NickName">
        위니브 메이드 공방<span></span>
      </p>
      <p id="MandleId">@ weniv_Atelier</p>
      <p id="Introduce">비누 만들기 전문 클래스 입니다~</p>
      <WrapBtn>
        <button className="ChatBtn">
          <img src={ChatImg} alt="채팅 아이콘 이미지" />
        </button>
        <button className="FollowBtn">팔로우하기</button>
        <button className="ShareBtn">
          <img src={ShareImg} alt="공유 아이콘 이미지" />
        </button>
      </WrapBtn>
    </ProfileSection>
  );
}
function StudentSelfProfile() {
  return (
    <ProfileSection>
      <Wrap>
        <div className="follow">
          <p>2950</p>
          <p className="followNum">followers</p>
        </div>
        <img src={BasicProfile} alt="프로필 이미지" />
        <div className="follow">
          <p>198</p>
          <p className="followNum">followings</p>
        </div>
      </Wrap>
      <p id="NickName">위니브 메이드 공방</p>
      <p id="MandleId">@ weniv_Atelier</p>
      <p id="Introduce">비누 만들기 전문 클래스 입니다~</p>
      <WrapBtn>
        <button className="profileBtn">프로필 수정</button>
      </WrapBtn>
    </ProfileSection>
  );
}
function StudentProfile() {
  return (
    <ProfileSection>
      <Wrap>
        <div className="follow">
          <p>2950</p>
          <p className="followNum">followers</p>
        </div>
        <img src={BasicProfile} alt="프로필 이미지" />
        <div className="follow">
          <p>198</p>
          <p className="followNum">followings</p>
        </div>
      </Wrap>
      <p id="NickName">위니브 메이드 공방</p>
      <p id="MandleId">@ weniv_Atelier</p>
      <p id="Introduce">비누 만들기 전문 클래스 입니다~</p>
      <WrapBtn>
        <button className="ChatBtn">
          <img src={ChatImg} alt="채팅 아이콘 이미지" />
        </button>
        <button className="FollowBtn">팔로우하기</button>
        <button className="ShareBtn">
          <img src={ShareImg} alt="공유 아이콘 이미지" />
        </button>
      </WrapBtn>
    </ProfileSection>
  );
}
