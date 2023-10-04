import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowImg from '../../../assets/img/icon-arrow-left.svg';
import UploadProfile from '../../../components/Common/UploadProfile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PostIdValid from '../../../api/PostIdValid';
import PutProfileUpdate from '../../../api/PutProfileUpdate';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue, useRecoilState } from 'recoil';

import {
  SignupHeader,
  Heading1,
  SignupDiv,
  SetProfileDiv,
  SetProfileLabel,
  SetProfileInputBox,
  P,
  Wrap,
} from './EditProfileStyle';

const EditProfile = () => {
  //기존 가입한 유저 정보 가져오기
  const location = useLocation();
  const data = location.state.profileData;
  const userInfo = useRecoilValue(UserAtom);
  const userValue = useRecoilState(UserAtom);
  const token = userInfo.token;
  const navigate = useNavigate();
  //유저 정보 상태관리

  const [username, setUsername] = useState(data.username);
  const accountType =
    data.accountname.substr(0, 7) === 'Student' ||
    data.accountname.substr(0, 7) === 'Teacher'
      ? data.accountname.substr(0, 7)
      : '';
  const [accountname, setAccountname] = useState(
    accountType ? data.accountname.substr(7) : data.accountname
  );
  const intro = data.intro;
  const colorMatch = intro.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
  const [backgroundColor, setBackgroundColor] = useState(
    colorMatch ? colorMatch[0] : ''
  );
  const [introText, setIntroText] = useState(
    intro.replace(backgroundColor, '')
  );

  const [button, setButton] = useState(false);
  const [image, setImage] = useState(`${data.image}`);

  //유저 아이디 유효성검사

  const [accountValid, setAccountValid] = useState(true);
  const [accountAlertMsg, setAccountAlertMsg] = useState('');
  //유저 이름 유효성검사
  const [usernameValid, setUsernameValid] = useState(true);
  const [usernameAlertMsg, setUsernameAlertMsg] = useState('');

  const handleProfileImageResponse = (fileName) => {
    setImage(fileName);
  };

  //이전 페이지 이동
  const goBack = () => {
    navigate(-1);
  };

  // 입력란 값 변경 시 실행되는 함수x
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // 입력란 값 변경
    if (name === 'username') {
      setUsername(value.trim());
    } else if (name === 'accountname') {
      setAccountname(value.trim());
    } else if (name === 'intro') {
      setIntroText(value.trim());
    }

    handleActiveButton();
    // 두 입력란에 값이 모두 존재할 경우 버튼 활성화 함수 실행
  };

  ////유저 이름 유효성 검사
  const handleUsernameValid = () => {
    if (username.length >= 2 && username.length <= 10) {
      setUsernameAlertMsg('');
      setUsernameValid(true);
    } else {
      setUsernameAlertMsg('유저 이름은 2자 이상~10자 이내여야 합니다.');
      setUsernameValid(false);
    }
    // setUsername(value);
  };

  //아이디 유효성 검사
  const handleAccountNameValid = async () => {
    const pattern = /^[A-Za-z0-9_.]+$/;
    if (pattern.test(accountname)) {
      const validMessage = await PostIdValid(accountname);
      setAccountAlertMsg(validMessage);
      validMessage === '사용 가능한 계정ID 입니다.'
        ? setAccountValid(true)
        : setAccountValid(false);
    } else {
      setAccountAlertMsg('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setAccountValid(false);
    }
  };

  const handleActiveButton = () => {
    if (username !== '' && accountname !== '' && intro !== '') {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  // console.log(intro, colorMatch);
  console.log(intro);
  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);

    handleActiveButton();
  };
  // console.log(colorMatch[0]);
  const handleSetProfileSubmit = async () => {
    const updatedUserValue = {
      ...userValue,
      username: username,
      accountname: accountType + accountname,
      intro: introText + backgroundColor,
      image: image,
    };

    const response = await PutProfileUpdate(updatedUserValue, token);
    if (response) {
      console.log('프로필 수정 성공');
      console.log(response);
      navigate(`/my_profile`);
    }
  };

  const handleCheckValid = async (event) => {
    event.preventDefault();
    if (button === false) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    if (username && accountname && usernameValid) {
      handleSetProfileSubmit();
    }
  };
  console.log(intro, colorMatch, introText);
  return (
    <SignupDiv>
      <SignupHeader>
        <button onClick={goBack}>
          <img src={ArrowImg} alt='' />
        </button>
        <Heading1>프로필 수정</Heading1>
      </SignupHeader>

      <Wrap>
        <P>변경사항 입력 후 저장 버튼을 눌러주세요.</P>
        <UploadProfile onResponse={handleProfileImageResponse} image={image} />

        <SetProfileDiv first>
          <SetProfileLabel>사용자 이름</SetProfileLabel>
          <SetProfileInputBox
            name='username'
            onChange={handleInputChange}
            placeholder='2-10자 이내 여야 합니다'
            value={username}
            onBlur={handleUsernameValid}
          />
        </SetProfileDiv>
        {usernameAlertMsg && <ErrorMessage>{usernameAlertMsg}</ErrorMessage>}
        <SetProfileDiv>
          <SetProfileLabel>계정 ID</SetProfileLabel>
          <SetProfileInputBox
            name='accountname'
            onChange={handleInputChange}
            onBlur={handleAccountNameValid}
            value={accountname}
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          />
        </SetProfileDiv>
        {accountAlertMsg && <ErrorMessage>{accountAlertMsg}</ErrorMessage>}
        <SetProfileDiv>
          <SetProfileLabel>소개</SetProfileLabel>
          <SetProfileInputBox
            name='intro'
            onChange={handleInputChange}
            value={intro}
            placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          />
        </SetProfileDiv>

        <button
          id='submitBtn'
          className={`${button ? 'active' : ''}`}
          type='submit'
          onClick={handleCheckValid}
        >
          저장
        </button>
      </Wrap>
    </SignupDiv>
  );
};

export default EditProfile;

const ErrorMessage = styled.div`
  padding-left: 34px;
  align-self: stretch;
  color: var(--error-color);
  font-size: var(--font-sm);
`;
