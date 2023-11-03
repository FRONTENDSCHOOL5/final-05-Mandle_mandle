import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { SignUpAtom } from '../../Store/AtomSignupState';
import PostEmailValid from '../../api/PostEmailVaild';
import UserInfoInput from '../../Hooks/UserInfoInput';
import usePasswordConfirm from '../../Hooks/usePasswordConfirm';
import usePasswordToggle from '../../Hooks/usePasswordToggle';
import { ButtonStyle } from '../../components/Common/Button';
import AccountHeader from '../../components/Account/AccountHeader';
import Input from '../../components/Account/Input';
import ButtonImg from '../../assets/img/L-button(clay).svg';
import DisabledButtonImg from '../../assets/img/L-Disabled-button(clay).svg';
import {
  AccountForm,
  TypeWrap,
  Label,
  ButtonImgStyle,
  ErrorMessage,
  ValidMessage,
} from '../../components/Account/AccountStyle';

export default function Signup() {
  const [type, setType] = useState('Student');
  const [confirmPWErrorMessage, setConfirmPwErrorMessage] = useState('');
  const [emailValidMessage, setEmailValidMessage] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const { toggleShowPassword, showPassword } = usePasswordToggle();

  //회원가입 정보를 상태관리 할 setSignup
  const setSignup = useSetRecoilState(SignUpAtom);
  const navigate = useNavigate();

  //커스텀훅
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmedPassword,
    setConfirmedPassword,
    buttonImg,
    handleInputChange,
    emailErrorMessage,
    setEmailErrorMessage,
    pwErrorMessage,
    setPwErrorMessage,
  } = UserInfoInput(ButtonImg, DisabledButtonImg, 'signup');

  const passwordConfirmed = usePasswordConfirm(password, confirmedPassword);

  const handleEmailValid = async () => {
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(email)) {
      setEmailErrorMessage('*올바른 이메일 형식을 입력하세요');
      setEmail('');
    } else {
      const validMessage = await PostEmailValid(email);

      if (validMessage === '사용 가능한 이메일 입니다.') {
        setEmailValidMessage(validMessage);
        setEmailErrorMessage('');
      } else {
        setEmailErrorMessage(validMessage);
        setEmailValidMessage('');
      }
    }
  };

  const handlePasswordValid = () => {
    if (password.length >= 6) {
      setPwErrorMessage('');
      setPasswordValid(true);
    } else {
      setPwErrorMessage('비밀번호는 6자 이상이어야 합니다.');
      setPassword('');
      setPasswordValid(false);
    }
  };

  const handleConfirmedPasswordValid = () => {
    if (confirmedPassword && !passwordConfirmed) {
      setConfirmPwErrorMessage('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPwErrorMessage('');
    }
  };
  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    if (email && password && emailValidMessage && passwordValid) {
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
          borderColor={
            emailValidMessage
              ? 'var(--main-color)'
              : emailErrorMessage
              ? 'var(--error-color)'
              : '#dbdbdb'
          }
        />
        {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        {emailValidMessage && <ValidMessage>{emailValidMessage}</ValidMessage>}
        <Input
          label='비밀번호'
          name='password-initial'
          type='text'
          placeholder='비밀번호를 입력해주세요'
          onChange={handleInputChange}
          onBlur={handlePasswordValid}
          borderColor={pwErrorMessage ? 'var(--error-color)' : '#dbdbdb'}
          showPassword={showPassword}
          passwordValid={passwordValid}
          passwordConfirmed={passwordConfirmed}
          maxLength={30}
        />
        {pwErrorMessage && <ErrorMessage>{pwErrorMessage}</ErrorMessage>}
        <Input
          label='비밀번호 재확인'
          name='password-confirm'
          type='text'
          placeholder='비밀번호를 다시 한번 입력해주세요'
          onChange={handleInputChange}
          onBlur={handleConfirmedPasswordValid}
          borderColor={confirmPWErrorMessage ? 'var(--error-color)' : '#dbdbdb'}
          showPassword={showPassword}
          passwordConfirmed={passwordConfirmed}
          maxLength={30}
        />
        {confirmedPassword && confirmPWErrorMessage && (
          <ErrorMessage>{confirmPWErrorMessage}</ErrorMessage>
        )}
        <ButtonImgStyle
          type='submit'
          onClick={handleSignupSubmit}
          disabled={buttonImg === ButtonImg ? false : true}
        >
          <img src={buttonImg} alt='이메일,비밀번호 등록 버튼' />
        </ButtonImgStyle>
      </AccountForm>
    </>
  );
}
