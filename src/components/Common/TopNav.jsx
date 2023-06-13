import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/img/icon-search.svg";
import ArrowIcon from "../../assets/img/icon-arrow-left.svg";
import MoreIcon from "../../assets/img/icon- more-vertical.svg";
import { ButtonStyle } from "./Button";

//메인, 클래스 타이틀 nav
const MainNav = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;
`;

//top-basic-nav
const SearchNav = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: flex-end;
`;

//검색하기 뒤로가기 아이콘 nav
const SearchBackNav = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

//top-basic-nav
//더보기, 뒤로가기 아이콘 속성
const MoreBackNav = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;
  /* padding-left: 16px; */
`;

// 뒤로가기 아이콘 속성
const ArrowLeft = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  /* padding-left: 16px; */
`;

// //검색하기 아이콘 속성
// const SearchNav = styled.div`
//   display: flex;
//   width: 390px;
//   height: 48px;
//   background-color: #ffffff;
//   border-bottom: 1px solid #dbdbdb;
//   align-items: center;
//   justify-content: flex-end;
// `;

//tob-upload-nav
//버튼 속성
const BackButtonNav = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;
`;

// const Button = styled.button`
//   width: 90px;
//   height: 32px;
//   margin-right: 16px;
//   border-radius: 32px;
//   text-align: center;
//   color: #ffffff;
//   cursor: pointer;

//   &:disabled {
//     background-color: #b1d4c3;
//     pointer-events: none;
//   }
// `;

//이미지들 공통 속성
const Image = styled.img`
  cursor: pointer;
  padding-left: 16px;

  //이미지 클래스 추가속성
  &.search {
    padding-right: 20px;
  }

  &.arrow-left-icon {
    padding-left: 16px;
  }

  &.more-icon {
    padding-right: 16px;
  }
`;

//인풋 스타일 설정
const Input = styled.input`
  width: 316px;
  height: 32px;
  border-radius: 32px;
  border: none;
  background-color: #f2f2f2;
  padding-left: 16px;
  font-size: 14px;
`;

//메인 타이틀 설정
const NavTitle = styled.span`
  padding-left: 16px;
  cursor: pointer;
`;

function MainNavigation({ title }) {
  return (
    <MainNav>
      <NavTitle>만들만들 {title}</NavTitle>
      <Image className="search" src={SearchIcon} alt="검색하기 아이콘" />
    </MainNav>
  );
}

function SearchNavigation() {
  return (
    <SearchBackNav>
      <Image src={ArrowIcon} alt="뒤로가기 아이콘" />
      <label htmlFor="search-input" />
      <Input id="search-input" type="text" placeholder="계정 검색" />
    </SearchBackNav>
  );
}

function MoreNavigation() {
  return (
    <MoreBackNav>
      <Image src={ArrowIcon} alt="뒤로가기 아이콘" />
      <Image className="more-icon" src={MoreIcon} alt="더보기 아이콘" />
    </MoreBackNav>
  );
}

function ArrowLeftNavigation() {
  return (
    <ArrowLeft>
      <Image src={ArrowIcon} alt="뒤로가기 아이콘" />
    </ArrowLeft>
  );
}

function SearchBar() {
  return (
    <SearchNav>
      <Image className="search" src={SearchIcon} alt="검색하기 아이콘" />
    </SearchNav>
  );
}

function UploadButton() {
  return (
    <BackButtonNav>
      <Image src={ArrowIcon} alt="뒤로가기 아이콘" />
      <ButtonStyle
        type="button"
        bg="#036635"
        width="90px"
        height="32px"
        br="32px"
        color="#ffffff"
        fontsize="14px"
        margin="0 16px 0 0"
      >
        업로드
      </ButtonStyle>
    </BackButtonNav>
  );
}

function DisabledUploadButton() {
  return (
    <BackButtonNav>
      <Image src={ArrowIcon} alt="뒤로가기 아이콘" />
      <ButtonStyle
        type="button"
        bg="#b1d4c3"
        width="90px"
        height="32px"
        br="32px"
        color="#ffffff"
        fontsize="14px"
        margin="0 16px 0 0"
      >
        업로드
      </ButtonStyle>
    </BackButtonNav>
  );
}

function TopNavs({ name }) {
  const [title, setTitle] = useState(name);

  return (
    <>
      <MainNavigation title={title} />
      <SearchNavigation />
      <MainNavigation title={title} />
      <MoreNavigation />
      <ArrowLeftNavigation />
      <SearchBar />
      <UploadButton />
      <DisabledUploadButton />
    </>
  );
}

export default TopNavs;
