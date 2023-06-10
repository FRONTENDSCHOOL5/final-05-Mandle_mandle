import React from "react";
import styled from "styled-components";
import { ArrowLeftNavigation } from "../../components/Common/TopNav";
import { ButtonStyle } from "../../components/Common/Button";
import UploadProfile from "../../components/Common/UploadProfile"


export default function SetProfile() {
  return (
    <div>
      <ArrowLeftNavigation />
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>

    <UploadProfile />
    <SetProfileDiv>
        <SetProfileLabel>사용자 이름</SetProfileLabel>
        <SetProfileInputBox
          width="432px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="2-10자 이내 여야 합니다"
        />
      </SetProfileDiv>
      <SetProfileDiv>
        <SetProfileLabel>계정 ID</SetProfileLabel>
        <SetProfileInputBox
          width="432px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
      </SetProfileDiv>
      <SetProfileDiv>
        <SetProfileLabel>소개</SetProfileLabel>
        <SetProfileInputBox
          width="432px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </SetProfileDiv>

      <ButtonStyle
        type="button"
        bg="black"
        width="432px"
        height="56px"
        br="4px"
      >
        만들만들 시작하기
      </ButtonStyle>
    </div>
  );
}

export const TypeDiv = styled.div`
display:flex;
`
export const SetProfileDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 28px;
`
export const SetProfileLabel = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 9px;
  font-weight: 700;
`;
export const SetProfileInputBox = styled.input`
border: none;
border-bottom: 1px solid #dbdbdb;
width: ${ props => props.width};
height: ${ props => props.height};
padding: 15px;
box-sizing: border-box;
border-radius: 4px;
&::placeholder {
  color: #dbdbdb;
}
&:focus {
  border-color: black;
}
`;