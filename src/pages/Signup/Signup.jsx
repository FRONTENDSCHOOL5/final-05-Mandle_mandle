import React, { useState } from 'react';
// import axios from "axios";
import { useSetRecoilState } from 'recoil';

import { SignUpAtom } from '../../Store/AtomSignupState';
import { useNavigate } from 'react-router-dom';
import ArrowImg from '../../assets/img/icon-arrow-left.svg';
import GoBackButton from '../../components/Common/GoBackButton';
// import { InputDiv } from '../../components/Common/Input';
import { ButtonStyle } from '../../components/Common/Button';
import PostEmailValid from '../../api/PostEmailVaild';
import UserInfoInput from '../../Hooks/UserInfoInput';
import ButtonImg from '../../assets/img/L-button(clay).svg';
import AccountHeader from '../../components/Common/Account/AccountHeader';
import Input from '../../components/Common/Account/Input';
import DisabledButtonImg from '../../assets/img/L-Disabled-button(clay).svg';
import {
  AccountForm,
  TypeWrap,
  Label,
  ButtonImgStyle,
  ErrorMessage,
} from '../../components/Common/Account/AccountStyle';

export default function Signup() {
  const [type, setType] = useState('Student');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [pwErrorMessage, setPwErrorMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  //회원가입 정보를 상태관리 할 setSignup
  const setSignup = useSetRecoilState(SignUpAtom);
  const navigate = useNavigate();

  //커스텀훅
  const {
    email,
    setEmail,
    password,
    setPassword,
    buttonImg,
    handleInputChange,
  } = UserInfoInput(ButtonImg, DisabledButtonImg);

  const handleEmailValid = async () => {
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(email)) {
      setEmailErrorMessage('*올바른 이메일 형식을 입력하세요');
      setEmail('');
    } else {
      const validMessage = await PostEmailValid(email);
      setEmailErrorMessage(validMessage);
      validMessage === '사용 가능한 이메일 입니다.'
        ? setEmailValid(true)
        : setEmailValid(false);
    }
  };

  const handlePasswordValid = () => {
    if (password.length >= 6) {
      setPwErrorMessage('');
    } else {
      setPwErrorMessage('비밀번호는 6자 이상이어야 합니다.');
      setPassword('');
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    if (email && password && emailValid && passwordValid) {
      setSignup({ email, password, type });
      navigate('/account/set_profile');
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
    <>
      <AccountHeader title='이메일로 회원가입' />
      <AccountForm>
        <TypeWrap width='100%'>
          <Label>회원 분류</Label>
          <div>
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
          </div>
        </TypeWrap>
        <Input
          label='이메일'
          name='email'
          type='email'
          placeholder='이메일을 입력해주세요'
          onChange={handleInputChange}
          onBlur={handleEmailValid}
          borderColor={emailErrorMessage ? 'var(--error-color)' : '#dbdbdb'}
        />
        {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        <Input
          label='비밀번호'
          name='password'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          onChange={handleInputChange}
          onBlur={handlePasswordValid}
          borderColor={pwErrorMessage ? 'var(--error-color)' : '#dbdbdb'}
        />
        {pwErrorMessage && <ErrorMessage>{pwErrorMessage}</ErrorMessage>}

        <ButtonImgStyle type='submit' onClick={handleSignupSubmit}>
          <img src={buttonImg} alt='이메일,비밀번호 등록 버튼' />
        </ButtonImgStyle>
      </AccountForm>
    </>
  );
}
