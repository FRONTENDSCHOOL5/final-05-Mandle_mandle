import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserAtom, IsLogin } from '../../Store/userInfoAtoms';
import PostLogin from '../../api/PostLogin';
import UserInfoInput from '../../Hooks/UserInfoInput';
import Input from '../../components/Common/Account/Input';
import AccountHeader from '../../components/Common/Account/AccountHeader';
import ButtonImg from '../../assets/img/L-login-button(clay).svg';
import DisabledButtonImg from '../../assets/img/L-login-Disabled-button(clay).svg';
import {
  MoveSignup,
  AccountForm,
  ErrorMessage,
  ButtonImgStyle,
} from '../../components/Common/Account/AccountStyle';
export default function Login() {
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);
  const [isLogin, setIsLogin] = useRecoilState(IsLogin);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [pwErrorMessage, setPwErrorMessage] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    buttonImg,
    handleInputChange,
  } = UserInfoInput(ButtonImg, DisabledButtonImg);

  const handleEmailValid = () => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setEmailErrorMessage('*올바른 이메일 형식을 입력해주세요');
    } else {
      setEmailErrorMessage('');
    }
  };

  const handlePasswordValid = () => {
    if (password.length >= 6) {
      setPwErrorMessage('');
    } else {
      setPwErrorMessage('비밀번호는 6자 이상이어야 합니다.');
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (buttonImg === DisabledButtonImg) {
      return; // 버튼 비활성화일 때 기능 막기
    }
    const loginInfo = await PostLogin(email, password);
    if (!isLogin) {
      //로그인 실패
      if (loginInfo.status === 422) {
        setLoginErrorMessage(loginInfo.message);

        setEmail('');
        setPassword('');
        //성공시
      } else {
        //로그인 성공
        const { accountname, token, refreshToken, image, username, intro } =
          loginInfo.user;
        setUserInfo({
          accountname,
          username,
          token,
          refreshToken,
          image,
          intro,
        });
        setIsLogin(true);
        setLoginErrorMessage('');
        setEmail('');
        setPassword('');
        navigate('/home/');
      }
    }
  };
  return (
    <>
      <AccountHeader title='로그인' />
      <AccountForm onSubmit={handleLoginSubmit}>
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
        {loginErrorMessage && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <ButtonImgStyle type='submit'>
          <img src={buttonImg} alt='로그인하기 버튼' />
        </ButtonImgStyle>
      </AccountForm>
      <MoveSignup to='/account/signup'>이메일로 회원가입</MoveSignup>
    </>
  );
}
