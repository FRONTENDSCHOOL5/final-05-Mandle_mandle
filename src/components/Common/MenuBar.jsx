import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "../../assets/img/icon-home.svg";
import ClassIcon from "../../assets/img/icon-class.svg";
import ChattingIcon from "../../assets/img/icon-chat.svg";
import PostingIcon from "../../assets/img/icon-edit.svg";
import ProfileIcon from "../../assets/img/icon-user.svg";

function MenuBar() {
  return (
    <MenuUl>
      <MenuLi to="/Home" className="HomeBtn">
        <MenuIcon>
          <MenuImg src={HomeIcon} alt="홈 버튼"></MenuImg>
        </MenuIcon>
        <MenuText>홈</MenuText>
      </MenuLi>
      <MenuLi to="/Class" className="ClassBtn">
        <MenuIcon>
          <MenuImg src={ClassIcon} alt="클래스 버튼"></MenuImg>
        </MenuIcon>
        <MenuText>클래스</MenuText>
      </MenuLi>
      <MenuLi to="/Chatting" className="ChattingBtn">
        <MenuIcon>
          <MenuImg src={ChattingIcon} alt="채팅 버튼"></MenuImg>
        </MenuIcon>
        <MenuText>채팅</MenuText>
      </MenuLi>
      <MenuLi to="/Posting" className="PostingBtn">
        <MenuIcon>
          <MenuImg src={PostingIcon} alt="게시물 작성 버튼"></MenuImg>
        </MenuIcon>
        <MenuText>게시물 작성</MenuText>
      </MenuLi>
      <MenuLi to="/Profile" className="ProfileBtn">
        <MenuIcon>
          <MenuImg src={ProfileIcon} alt="프로필 버튼"></MenuImg>
        </MenuIcon>
        <MenuText>프로필</MenuText>
      </MenuLi>
    </MenuUl>
  );
}
export default MenuBar;

export const MenuUl = styled.ul`
  display: flex;
  margin: auto;
  width: 390px;
  height: 60px;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const MenuLi = styled.li`
  width: 78px;
  text-align: center;
`;
export const MenuText = styled.p`
  font-size: 10px;
  padding-top: 7px;
`;
export const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin: auto;
`;
export const MenuImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
//  클릭시 margin-left: -24px;

// import MenuBar from "./components/Common/MenuBar";
// <MenuBar />

// <BrowserRouter>
//   <GlobalStyle />
//   <Switch>
//     <Route path="/Login"></Route>
//     <Route path="/Signup"></Route>
//     <Route path="/Main"><mainPage></mainPage></Route>
//     <Route path="/Main"></Route>
//     <Route path="/Class"></Route>
//     <Route path="/Chatting"></Route>
//     <Route path="/Posting"></Route>
//     <Route path="/Profile"></Route>
//   </Switch>
// </BrowserRouter>
