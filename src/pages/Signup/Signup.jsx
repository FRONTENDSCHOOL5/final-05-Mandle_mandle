import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios"; 사용하지 않아 주석처리 합니다
// import styled from "styled-components"; // 사용하지 않아 주석처리 합니다
import ArrowImg from '../../assets/img/icon-arrow-left.svg';
import ClayButtonImg from '../../assets/img/L-button(clay).svg';
// import ClayDisabledButton from "../../assets/img/L-Disabled-button(clay).svg"; // input에 값이 모두 입력되기 전에 사용할 버튼 이미지 입니다
import { InputDiv, Label, InputBox } from '../../components/Common/Input';
import { ButtonStyle } from '../../components/Common/Button';
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

  const navigate = useNavigate();
  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const state = {
      email: email,
      password: password,
      accountname: type,
    };
    console.log(state);
    navigate('/set_profile', { state });
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
        <button>
          <img src={ArrowImg} alt='' />
        </button>
        <Heading1>이메일로 회원가입하기</Heading1>
      </SignupHeader>

      <Wrap>
        <TypeP>회원구분</TypeP>

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
            일반 회원(수강생)
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

        <form onSubmit={handleSignupSubmit}>
          <InputDiv>
            <Label>이메일</Label>
            <InputBox
              onChange={(e) => {
                setEmail(e.target.value.trim());
                // console.log(e.target.value);
              }}
              placeholder='이메일을 입력해주세요'
            />
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value.trim());
                // console.log(e.target.value);
              }}
              type='password'
              placeholder='비밀번호를 입력하세요'
            />
          </InputDiv>
          <ButtonImg type='submit' onClick={handleSignupSubmit}>
            <img src={ClayButtonImg} alt='' />
          </ButtonImg>
        </form>
      </Wrap>
    </SignupDiv>
  );
}
