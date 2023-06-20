import React, { useState } from 'react';
// import axios from "axios";
import { useSetRecoilState } from 'recoil';

import { SignUpAtom } from '../../Store/AtomSignupState';
import { useNavigate } from 'react-router-dom';
import ArrowImg from '../../assets/img/icon-arrow-left.svg';
import ClayButtonImg from '../../assets/img/L-button(clay).svg';
import ClayDisabledButton from '../../assets/img/L-Next-Disabled-button(clay).svg';
import { InputDiv, Label, InputBox } from '../../components/Common/Input';
import { ButtonStyle } from '../../components/Common/Button';
import PostEmailValid from '../../api/PostEmailVaild';

import {
  TypeDiv,
  SignupDiv,
  TypeP,
  Wrap,
  SignupHeader,
  Heading1,
  ButtonImg,
} from './SignupStyle';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('Student');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [pwErrorMessage, setPwErrorMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [buttonImg, setButtonImg] = useState(ClayDisabledButton);
  //회원가입 정보를 상태관리 할 setSignup
  const setSignup = useSetRecoilState(SignUpAtom);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value.trim());
    } else if (name === 'password') {
      setPassword(value);
      if (value.length >= 6) {
        setPwErrorMessage('');
        setPasswordValid(true);
      } else {
        setPwErrorMessage('비밀번호는 6자 이상이어야 합니다.');
        setPasswordValid(false);
      }
    }
    handleActiveButton();
  };
  const handleActiveButton = () => {
    setButtonImg(
      email !== '' && password !== '' ? ClayButtonImg : ClayDisabledButton,
    );
  };

  const handleEmailvalid = async (e) => {
    const email = e.target.value;
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(email)) {
      setEmailErrorMessage('*올바른 이메일 형식을 입력하세요');
    } else {
      const Msg = await PostEmailValid(email);
      setEmailErrorMessage(Msg);
      Msg === '사용 가능한 이메일 입니다.'
        ? setEmailValid(true)
        : setEmailValid(false);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (buttonImg === ClayDisabledButton) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    if (email && password && emailValid && passwordValid) {
      console.log('Email:', email);
      console.log('Password:', password);
      setSignup({ email, password });
      navigate('/account/set_profile/');
    } else {
      setSignup(false);
    }
  };

  const handleStudentBtnClick = () => {
    setType('Student');
  };

  const handleTeacherBtnClick = () => {
    setType('Teacher');
  };

  return (
    <SignupDiv>
      <SignupHeader>
        <button onClick={goBack}>
          <img src={ArrowImg} alt='' />
        </button>
        <Heading1>이메일로 가입하기</Heading1>
      </SignupHeader>
      <Wrap>
        <TypeP>회원 분류</TypeP>
        <TypeDiv>
          <ButtonStyle
            type='button'
            bg={type === 'Student' ? '#036635' : '#fff'}
            width='154.31px'
            height='30px'
            br='20px'
            border='1.5px solid #036635'
            color={type === 'Student' ? '#fff' : '#036635'}
            onClick={handleStudentBtnClick}
          >
            일반 회원 (수강생)
          </ButtonStyle>
          <ButtonStyle
            type='button'
            bg={type === 'Teacher' ? '#036635' : '#fff'}
            width='154.31px'
            height='30px'
            br='20px'
            border='1.5px solid #036635'
            color={type === 'Teacher' ? '#fff' : '#036635'}
            onClick={handleTeacherBtnClick}
          >
            강사 회원
          </ButtonStyle>
        </TypeDiv>

        <InputDiv>
          <Label>이메일</Label>
          <InputBox
            name='email'
            type='email'
            placeholder='이메일을 입력해주세요'
            onChange={handleInputChange}
            onBlur={handleEmailvalid}
          />
          {emailErrorMessage && <span>{emailErrorMessage}</span>}
        </InputDiv>
        <InputDiv>
          <Label>비밀번호</Label>
          <InputBox
            name='password'
            type='password'
            onChange={handleInputChange}
            placeholder='비밀번호를 입력해주세요'
          />
          {pwErrorMessage && <span>{pwErrorMessage}</span>}
        </InputDiv>
        <ButtonImg type='submit' onClick={handleSignupSubmit}>
          <img src={buttonImg} alt='' />
        </ButtonImg>
      </Wrap>
    </SignupDiv>
  );
}
