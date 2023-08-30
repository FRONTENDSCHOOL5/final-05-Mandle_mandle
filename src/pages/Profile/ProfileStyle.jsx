import styled from 'styled-components';
import Teacher from '../../assets/img/icon-teacher.svg';
import speechBubble from '../../assets/img/speech-bubble.svg';

const ProfilePage = styled.div`
  width: 100%;
  height: 100%;
`;
const MainWrap = styled.main`
  background-color: var(--background-color);
  width: 100%;
  height: calc(100% - 48px - 60px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 10px auto;
  background: white;
  margin-bottom: 5px;
  #usernameWrap {
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
  }
  #NickName {
    font-size: var(--font-lg);
    position: relative;
  }
  & #NickName + span {
    display: block;
    width: 14px;
    height: 14px;
    background-image: url(${Teacher});
  }
  #MandleId {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
    margin: 6px 0 16px 0;
  }
  #Introduce {
    font-size: var(--font-md);
    color: var(--sub-font-color);
    margin-bottom: 24px;
  }
  #profileImg {
    width: 110px;
    height: 110px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
  }
  .toolTip {
    display: none;
    position: absolute;
    color: #fff;
    padding: 6px;
    z-index: 1;
    top: 260px;
    height: 37px;
    background-image: url(${speechBubble});
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    width: 110px;
    margin: 30px 0 16px 0;
  }
  .follow {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .follow p {
    font-size: 18px;
    color: var(--sub-font-color);
    margin-bottom: 6px;
  }
  .follow .followNum {
    font-size: 8px;
  }
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-bottom: 26px;
  align-items: center;
  .profileEditBtn,
  .profileBtn {
    border: 1px solid var(--border-color);
    border-radius: 30px;
    width: 120px;
    height: 34px;
    text-align: center;
    color: var(--sub-font-color);
    font-size: var(--font-md);
  }
  .ChatBtn,
  .ShareBtn {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    border: 1px solid var(--border-color);
  }
  .FollowBtn {
    border-radius: 30px;
    color: var(--main-color);
    width: 120px;
    height: 34px;
  }
  &:hover .toolTip {
    display: block;
  }
`;
const PostSection = styled.section`
  background: white;
  #PostBtnWrap {
    width: 100%;
    height: 44px;
    border-bottom: 1.5px solid var(--background-color);
    display: flex;
    justify-content: flex-end;
    background: white;
    padding-bottom: 10px;
    gap: 5px;
    padding: 9px 11px;
    button {
      width: 26px;
      height: 26px;
    }
    img {
      width: 100%;
    }
  }

  .image-grid {
    width: 360px;
    margin: 14px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    // padding-bottom: 88px;
  }

  .image-grid img {
    width: 100%;
    height: 110px;
    object-fit: cover;
  }

  .image-none {
    width: 360px;
    margin: 14px auto;
    min-height: 350px;
    div {
      margin: 80px auto;
      text-align: center;
    }
  }
  .post-none {
    margin: 80px auto;
    text-align: center;
    min-height: 350px;
  }
`;
const ClassSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 5px;
`;
const ClassListUl = styled.ul`
  padding: 0 0 10px 0;

  display: flex;
  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    padding-top: 5px;
    background-color: white;

    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid white;
  }
`;
const Title = styled.p`
  font-size: var(--font-md);
  margin-bottom: 16px;
`;

const PostListUl = styled.ul`
  padding: 16px;
  width: 100%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .image-grid > div {
    position: relative;
  }

  .icon-overlay > img {
    position: absolute;
    width: 25px;
    height: 25px;
    object-fit: contain;
    top: 0;
    right: 0;
  }
`;
const FollowBtn = styled.button`
  width: 100px;
  height: 28px;
  color: white;
  border-radius: 28px;
  background-color: var(--main-color);
  text-align: center;

  &.following {
    background-color: white;
    color: var(--sub-font-color);
    border: 1px solid var(--sub-font-color);
  }
`;

export {
  WrapBtn,
  Wrap,
  ProfileSection,
  FollowBtn,
  ProfilePage,
  PostSection,
  ClassSection,
  ClassListUl,
  Title,
  MainWrap,
  PostListUl,
};
