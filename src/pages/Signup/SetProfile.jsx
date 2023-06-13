import { React, useState } from "react";
import axios from "axios";
import { ArrowLeftNavigation } from "../../components/Common/TopNav";
// import { ButtonStyle } from "../../components/Common/Button";
import UploadProfile from "../../components/Common/UploadProfile";
import { useLocation, useNavigate } from "react-router-dom";
import ClayButtonImg from "../../assets/img/L-button-clay.svg";
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

const SetProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");
  const handleSetProfileSubmit = async (event) => {
    event.preventDefault();
    console.log(location.state);
    try {
      const data = {
        ...location.state,
        username: username,
        accountname: accountname, // location.state에 값이 이미 들어있어서 안넣어도 될 것 같아요
        intro: intro,
        image: image,
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

      // if (response.data.status === 200) {
      //   console.log("회원가입 성공");
      //   console.log(response);
      //   // navigate("/home", { state });
      // } else {
      //   console.log("회원가입 실패");
      //   console.log(response);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  // const UploadProfile = () => {
  //   const handleImageChange = async (event) => {
  //     const formData = new FormData();
  //     const imageFile = event.target.files[0];
  //     formData.append("image", imageFile);

  //     const res = await fetch(
  //       "https://api.mandarin.weniv.co.kr/image/uploadfile",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );
  //     const json = await res.json();
  //     console.log(json);

  //     setImage("https://api.mandarin.weniv.co.kr/" + json.filename);

  //     console.log("파일바뀜");
  //     console.log(event.target.files);
  //   };

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

      <button type="submit" onClick={handleSetProfileSubmit}>
        <img src={ClayButtonImg} alt="" />
      </button>
    </SignupDiv>
  );
};

export default SetProfile;
