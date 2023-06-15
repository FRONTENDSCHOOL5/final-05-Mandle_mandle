import { React, useState } from "react";
import axios from "axios";
import ArrowImg from "../../assets/img/icon-arrow-left.svg";
import UploadProfile from "../../components/Common/UploadProfile";
import { useLocation, useNavigate } from "react-router-dom";
import DisabledButtonImg from "../../assets/img/L-Start-Disabled-button(clay).svg";
import ClayButtonImg from "../../assets/img/L-start-button(clay).svg";
import {
  SignupHeader,
  Heading1,
  SignupDiv,
  ButtonImg,
  SetProfileDiv,
  SetProfileLabel,
  SetProfileInputBox,
  P,
  Wrap,
} from "./SetProfileStyle";
// import { ButtonStyle } from "../../components/Common/Button"; ButtonStyle import하고 사용하지 않아 주석처리합니다

const SetProfile = () => {
  const url = "https://api.mandarin.weniv.co.kr/";
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [buttonImg, setButtonImg] = useState(DisabledButtonImg);
  const [image, setImage] = useState("");

  const handleProfileImageResponse = (fileName) => {
    setImage(fileName);
  };

  //이전 페이지 이동
  const goBack = () => {
    navigate(-1);
  };

  const handleActiveButton = () => {
    if (username !== "" && accountname !== "" && intro !== "") {
      setButtonImg(ClayButtonImg);
    } else {
      setButtonImg(DisabledButtonImg);
    }
  };

  // 입력란 값 변경 시 실행되는 함수x
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // 입력란 값 변경
    if (name === "username") {
      setUsername(value.trim());
    } else if (name === "accountname") {
      setAccountname(value.trim());
    } else if (name === "intro") {
      setIntro(value.trim());
    }

    handleActiveButton();
    // 두 입력란에 값이 모두 존재할 경우 버튼 활성화 함수 실행
  };

  const handleSetProfileSubmit = async (event) => {
    event.preventDefault();
    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    console.log(location.state);
    try {
      const modifiedAccountname = `${location.state.accountname}${accountname}`;
      const data = {
        user: {
          username: username,
          email: location.state.email,
          password: location.state.password,
          accountname: modifiedAccountname,
          intro: intro,
          image: url + image,
        },
      };
      console.log(data);

      const response = await axios.post(url + "user", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.data.message === "회원가입 성공") {
        console.log("회원가입 성공");
        console.log(response);
        navigate("/login", { state: location.state });
      } else {
        //여기에 message 조건들 넣어 유효성검사 해주기
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
        <button onClick={goBack}>
          <img src={ArrowImg} alt="" />
        </button>
        <Heading1>프로필 설정</Heading1>
      </SignupHeader>

      <Wrap>
        <P>나중에 언제든지 변경할 수 있습니다.</P>
        <UploadProfile onResponse={handleProfileImageResponse} />

        <SetProfileDiv first>
          <SetProfileLabel>사용자 이름</SetProfileLabel>
          <SetProfileInputBox
            name="username"
            onChange={handleInputChange}
            placeholder="2-10자 이내 여야 합니다"
          />
        </SetProfileDiv>

        <SetProfileDiv>
          <SetProfileLabel>계정 ID</SetProfileLabel>
          <SetProfileInputBox
            name="accountname"
            onChange={handleInputChange}
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
        </SetProfileDiv>

        <SetProfileDiv>
          <SetProfileLabel>소개</SetProfileLabel>
          <SetProfileInputBox
            name="intro"
            onChange={handleInputChange}
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </SetProfileDiv>

        <ButtonImg type="submit" onClick={handleSetProfileSubmit}>
          <img src={buttonImg} alt="" />
        </ButtonImg>
      </Wrap>
    </SignupDiv>
  );
};

export default SetProfile;
