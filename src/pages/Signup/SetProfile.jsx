import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { SignUpAtom } from '../../Store/AtomSignupState';
import ArrowImg from '../../assets/img/icon-arrow-left.svg';
import UploadProfile from '../../components/Common/UploadProfile';
import { useNavigate } from 'react-router-dom';
import DisabledButtonImg from '../../assets/img/L-Start-Disabled-button(clay).svg';
import ClayButtonImg from '../../assets/img/L-start-button(clay).svg';
import PostIdValid from '../../api/PostIdValid';
import PostSignUp from '../../api/PostSignup';
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
} from './SetProfileStyle';

const SetProfile = () => {
  const url = 'https://api.mandarin.weniv.co.kr/';

  const navigate = useNavigate();
  //회원가입한 유저 정보 상태관리
  const [userInfo, setUserInfo] = useRecoilState(SignUpAtom);
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [buttonImg, setButtonImg] = useState(DisabledButtonImg);
  const [image, setImage] = useState('');

  const [accountValid, setAccountValid] = useState(true);
  const [idAlertMsg, setIdAlertMsg] = useState('');
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
      setIntro(value.trim());
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
  const handleIdValid = async () => {
    const pattern = /^[A-Za-z0-9_.]+$/;
    if (pattern.test(accountname)) {
      const validMessage = await PostIdValid(accountname);
      setIdAlertMsg(validMessage);
      validMessage === '사용 가능한 계정ID 입니다.'
        ? setAccountValid(true)
        : setAccountValid(false);
    } else {
      setIdAlertMsg('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setAccountValid(false);
    }
  };

  const handleActiveButton = () => {
    if (username !== '' && accountname !== '' && intro !== '') {
      setButtonImg(ClayButtonImg);
    } else {
      setButtonImg(DisabledButtonImg);
    }
  };

  const handleSetProfileSubmit = async (event) => {
    event.preventDefault();
    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    if (username && accountname && usernameValid && accountValid) {
      const updatedAccountname = `${userInfo.type}${accountname}`;
      setUserInfo((prevValue) => {
        return {
          ...prevValue,
          username: username,
          accountname: updatedAccountname,
          intro: intro,
          image: url + image,
        };
      });
      navigate('/account/login');
    }
  };

  useEffect(() => {
    if (username && accountname && usernameValid && accountValid) {
      PostSignUp(userInfo);
    }
  }, [userInfo]);

  return (
    <SignupDiv>
      <SignupHeader>
        <button onClick={goBack}>
          <img src={ArrowImg} alt='뒤로가기 아이콘' />
        </button>
        <Heading1>프로필 설정</Heading1>
      </SignupHeader>

      <Wrap>
        <P>나중에 언제든지 변경할 수 있습니다.</P>
        <UploadProfile onResponse={handleProfileImageResponse} />

        <SetProfileDiv first>
          <SetProfileLabel>사용자 이름</SetProfileLabel>
          <SetProfileInputBox
            name='username'
            onChange={handleInputChange}
            placeholder='2-10자 이내 여야 합니다'
            onBlur={handleUsernameValid}
          />
        </SetProfileDiv>
        {usernameAlertMsg && <ErrorMessage>{usernameAlertMsg}</ErrorMessage>}
        <SetProfileDiv>
          <SetProfileLabel>계정 ID</SetProfileLabel>
          <SetProfileInputBox
            name='accountname'
            onChange={handleInputChange}
            onBlur={handleIdValid}
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          />
        </SetProfileDiv>
        {idAlertMsg && <ErrorMessage>{idAlertMsg}</ErrorMessage>}
        <SetProfileDiv>
          <SetProfileLabel>소개</SetProfileLabel>
          <SetProfileInputBox
            name='intro'
            onChange={handleInputChange}
            placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          />
        </SetProfileDiv>

        <ButtonImg type='submit' onClick={handleSetProfileSubmit}>
          <img src={buttonImg} alt='프로필 설정 완료 버튼' />
        </ButtonImg>
      </Wrap>
    </SignupDiv>
  );
};

export default SetProfile;

const ErrorMessage = styled.div`
  padding-left: 34px;
  align-self: stretch;
  color: var(--error-color);
  font-size: var(--font-sm);
`;
