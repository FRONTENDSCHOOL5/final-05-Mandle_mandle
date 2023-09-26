import React from 'react';
import styled from 'styled-components';
import IntroImg from '../../assets/img/full-logo(intro).svg';
import LogoImg from '../../assets/img/logo-white.svg';
import EmailIcon from '../../assets/img/icon-email.svg';
import GoogleIcon from '../../assets/img/google-logo.svg';
import KaKaoIcon from '../../assets/img/kakao-logo.svg';
import FaceBookIcon from '../../assets/img/facebook-logo.svg';
import { Link } from 'react-router-dom';
export default function Intro() {
  return (
    <IntroWrap>
      <Header>
        <img src={IntroImg} alt='만들만들 인트로 캐릭터 로고' />
        <h1>
          <img src={LogoImg} alt='만들만들 폰트 로고' />
        </h1>
      </Header>
      <LoginChooseList>
        <ul>
          <li>
            <LoginLink
              to='/account/login/'
              imgsrc={EmailIcon}
              alt='이메일로 로그인하기 버튼'
            >
              이메일로 로그인
            </LoginLink>
          </li>
          <li>
            <LoginLink
              imgsrc={GoogleIcon}
              alt='구글로 로그인하기 버튼'
              style={{ opacity: 0.5, pointerEvents: 'none' }}
            >
              구글 계정으로 로그인
            </LoginLink>
          </li>
          <li>
            <LoginLink
              bc='#F2C94C'
              imgsrc={KaKaoIcon}
              alt='카카오로 로그인하기 버튼'
              style={{ opacity: 0.5, pointerEvents: 'none' }}
            >
              카카오톡 계정으로 로그인
            </LoginLink>
          </li>
          <li>
            <LoginLink
              bc='#2D9CDB'
              imgsrc={FaceBookIcon}
              alt='페이스북으로 로그인하기 버튼'
              style={{ opacity: 0.5, pointerEvents: 'none' }}
            >
              페이스북 계정으로 로그인
            </LoginLink>
          </li>
        </ul>
        <SignUpLink to='/account/signup' alt='회원가입 버튼'>
          회원가입
        </SignUpLink>
      </LoginChooseList>
    </IntroWrap>
  );
}

const IntroWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: var(--main-color);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 144px 0 112px;
  position: absolute;
  left: 50%;
  bottom: 52%;
  transform: translate(-50%, 50%);
  animation: fade-in-logo 0.5s ease-in-out forwards,
    slide-up-logo 0.8s ease-out 0.2s forwards;

  @keyframes slide-up-logo {
    from {
      bottom: 52%;
    }
    to {
      bottom: 65%;
    }
  }

  @keyframes fade-in-logo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LoginChooseList = styled.div`
  padding: 58px 0 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40%;
  width: 390px;
  height: 341px;
  background-color: #ffffff;
  border-radius: 20px 20px 0 0;
  animation: slide-up-list 0.8s ease-out 0.2s forwards;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @keyframes slide-up-list {
    from {
      bottom: -40%;
    }
    to {
      bottom: 0%;
    }
  }
`;

const LoginLink = styled(Link)`
  width: 322px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border: 1.5px solid;
  border-color: ${(props) => props.bc};
  border-radius: 44px;
  color: var(--sub-font-color);
  background: url(${(props) => props.imgsrc}) no-repeat 17px 50%;
`;

const SignUpLink = styled(Link)`
  margin-top: 20px;
  color: var(--sub-font-color);
  font-size: var;
`;
