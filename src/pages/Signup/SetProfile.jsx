import React from "react";
import styled from "styled-components";
import { ArrowLeftNavigation } from "../../components/Common/TopNav";
import { ButtonStyle } from "../../components/Common/Button";
import UploadProfile from "../../components/Common/UploadProfile";
import ClayImg from "../../assets/img/L-button-clay.svg";

export default function SetProfile() {
  return (
    <SignupDiv>
      <ArrowLeftNavigation />
      <Heading>프로필 설정</Heading>
      <Wrap>
        <P>나중에 언제든지 변경할 수 있습니다.</P>

        <UploadProfile />
      </Wrap>
      <SetProfileDiv>
        <SetProfileLabel>사용자 이름</SetProfileLabel>
        <SetProfileInputBox
          width="322px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="2-10자 이내 여야 합니다"
        />
      </SetProfileDiv>
      <SetProfileDiv>
        <SetProfileLabel>계정 ID</SetProfileLabel>
        <SetProfileInputBox
          width="322px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
      </SetProfileDiv>
      <SetProfileDiv>
        <SetProfileLabel>소개</SetProfileLabel>
        <SetProfileInputBox
          width="322px"
          height="48px"
          padding="15px"
          onChange={() => {}}
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </SetProfileDiv>

      <ButtonImg />
    </SignupDiv>
  );
}

export const SignupDiv = styled.div`
  margin: auto;
  padding: auto;
  max-width: 390px;
`;

export const TypeDiv = styled.div`
  display: flex;
`;
export const SetProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;
export const SetProfileLabel = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 9px;
  font-weight: normal;
  font-size: 12px;
`;
export const SetProfileInputBox = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  // border-radius: 4px;
  &::placeholder {
    color: #dbdbdb;
  }
  &:focus {
    border-color: #036635;
  }
`;

export const ButtonImg = styled.button`
  display: block;
  width: 322px;
  height: 70px;
  margin-top: 17px;
  background: url(${ClayImg}) center / contain no-repeat;
`;

export const Heading = styled.h1`
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translate(-50%);
`;

export const P = styled.p`
  font-size: 12px;
  color: #767676;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Wrap = styled.div`
  width: 322px;
  margin: auto;
  text-align: center;
`;
