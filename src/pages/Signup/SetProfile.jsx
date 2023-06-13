import React from "react";
import { ArrowLeftNavigation } from "../../components/Common/TopNav";
// import { ButtonStyle } from "../../components/Common/Button";
import UploadProfile from "../../components/Common/UploadProfile";

import {
  SignupDiv,
  SetProfileDiv,
  SetProfileLabel,
  SetProfileInputBox,
  ButtonImg,
  Heading,
  P,
  Wrap,
} from "./SetProfileStyle";

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
          onChange={() => {}}
          placeholder="2-10자 이내 여야 합니다"
        />
      </SetProfileDiv>
      <SetProfileDiv>
        <SetProfileLabel>계정 ID</SetProfileLabel>
        <SetProfileInputBox
          onChange={() => {}}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
      </SetProfileDiv>
      <SetProfileDiv>
        <SetProfileLabel>소개</SetProfileLabel>
        <SetProfileInputBox
          onChange={() => {}}
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </SetProfileDiv>

      <ButtonImg />
    </SignupDiv>
  );
}
