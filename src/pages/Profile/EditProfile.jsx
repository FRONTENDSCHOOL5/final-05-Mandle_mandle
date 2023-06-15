import { React, useState } from "react";
import axios from "axios";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import UploadProfile from "../../components/Common/UploadProfile";
import { useLocation, useNavigate } from "react-router-dom";
import ClayButtonImg from "../../assets/img/L-button-clay.svg";
import {
  SignupHeader,
  Heading1,
  SignupDiv,
  SetProfileDiv,
  SetProfileLabel,
  SetProfileInputBox,
  ButtonImg,
  P,
  Wrap,
} from "./EditProfileStyle";
// import { ButtonStyle } from "../../components/Common/Button"; ButtonStyle import하고 사용하지 않아 주석처리합니다

const SetProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");

  const handleSetProfileSubmit = async (event) => {
    event.preventDefault();
    console.log(location.state);
    try {
      const modifiedAccountname = `${location.state.accountname}-${accountname}`;
      const data = {
        ...location.state,
        username: username,
        accountname: modifiedAccountname,
        intro: intro,
        image: "image",
      };
      console.log(data);

      const response = await axios.post(
        "https://api.mandarin.weniv.co.kr/user",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.data.status === 200) {
        console.log("회원가입 성공");
        console.log(response);
        navigate("/home", { state: location.state });
      } else {
        console.log("회원가입 실패");
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupDiv>
      <SignupHeader>
        <button>
          <img src={ArrowImg} alt="" />
        </button>
        <Heading1>프로필 설정</Heading1>
      </SignupHeader>

      <Wrap>
        <P>나중에 언제든지 변경할 수 있습니다.</P>
        <UploadProfile />

        <SetProfileDiv first>
          <SetProfileLabel>사용자 이름</SetProfileLabel>
          <SetProfileInputBox
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="2-10자 이내 여야 합니다"
          />
        </SetProfileDiv>

        <SetProfileDiv>
          <SetProfileLabel>계정 ID</SetProfileLabel>
          <SetProfileInputBox
            value={accountname}
            onChange={(event) => setAccountname(event.target.value)}
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
        </SetProfileDiv>

        <SetProfileDiv>
          <SetProfileLabel>소개</SetProfileLabel>
          <SetProfileInputBox
            value={intro}
            onChange={(event) => setIntro(event.target.value)}
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </SetProfileDiv>

        <ButtonImg type="submit" onClick={handleSetProfileSubmit}>
          <img src={ClayButtonImg} alt="" />
        </ButtonImg>
      </Wrap>
    </SignupDiv>
  );
};

export default SetProfile;
