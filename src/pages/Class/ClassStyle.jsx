import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import { HomeNav } from "../../components/Common/TopNav";
import MiniClassList from "../../components/Common/MiniClassList";
import ClassPost from "../../components/Common/ClassPost";
import  MenuBar  from "../../components/Common/MenuBar";
// 이건 수정할 필요가 있낭 ㅋㅋㅋ

// Header
export const HiddenContext = styled.h1`
  ${GlobalStyle}
`
export function Header() {
  return (
    <HomeNav>
      <HiddenContext>클래스 피드</HiddenContext>
    </HomeNav>
  )
}
// /Header

// Main
export function Main() {
  return (
    <MainWrap>
    <MiniClassList title= "인기 클래스" />

    <ClassSection>
      <Title>새로운 클래스</Title>
      <ClassList>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost />
        </li>
        <li>
          <ClassPost /> {/* 해당 클래스 클릭시 클래스 상세페이지로 이동 */}
        </li>
        {/* 클래스 등록할 경우 li묶음이 추가되는 형식 */}
      </ClassList>
    </ClassSection>
  </MainWrap>
  )
}

export const MainWrap = styled.main`
  background-color: #f2f2f2;
  padding-top: 10px;
`

export const ClassSection = styled.section`
  padding: 30px 10px 80px 10px;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
  color: #000;
`;

export const ClassList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`
// /Main

// Footer
export function Footer() {
  return (
    <MenuBar />
  )
}
// /Footer