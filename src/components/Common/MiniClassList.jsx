import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import ClassImg from "../../assets/img/temp/candleT1.png";

function MiniClassList() {
  return (
    <ClassSection>
      <Title>판매중인 상품</Title>
      <ClassList>
        <li>
          <a href="#">
            <Class>
              <ClassImage src={ClassImg} alt="양초 수업" />
              <ClassDescription>생활</ClassDescription>
              <ClassTitle>향초 만들기</ClassTitle>
            </Class>
          </a>
        </li>
        <li>
          <a href="#">
            <Class>
              <ClassImage src={ClassImg} alt="양초 수업" />
              <ClassDescription>생활</ClassDescription>
              <ClassTitle>향초 만들기</ClassTitle>
            </Class>
          </a>
        </li>
        <li>
          <a href="#">
            <Class>
              <ClassImage src={ClassImg} alt="양초 수업" />
              <ClassDescription>생활</ClassDescription>
              <ClassTitle>향초 만들기</ClassTitle>
            </Class>
          </a>
        </li>
      </ClassList>
    </ClassSection>
  );
}
export default MiniClassList;

const ClassSection = styled.section`
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: var(--font-md);
  margin-bottom: 16px;
`;

const Class = styled.article`
  width: 140px;
  height: 136px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
`;

const ClassImage = styled.img`
  width: 140px;
  aspect-ratio: 140 / 90;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const ClassDescription = styled.p`
  font-size: 12px;
  color: var(--sub-font-color);
  margin: 6px 0 7px 4px;
`;

const ClassTitle = styled.h3`
  font-size: var(--font-md);
  font-weight: normal;
  margin-left: 4px;
  color: #000;
`;

const ClassList = styled.ul`
  padding: 0 0 10px 0;
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;
