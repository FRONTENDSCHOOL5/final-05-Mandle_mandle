// import React from "react"; // 사용하지 않아 주석처리 합니다
import styled from "styled-components";
import ClayImg from "../../assets/img/L-button-clay.svg";
// import GlobalStyleComponent from "../../styles/GlobalStyles"; 사용하지 않아 주석처리 합니다

export const SignupDiv = styled.div`
  width: 390px;
`;

export const SignupHeader = styled.header`
  text-align: center;
  margin: 29px auto 40px;
  position: relative;
  button {
    position: absolute;
    left: 34px;
  }
`;

export const Heading1 = styled.h1`
  font-size: var(--font-xl);
`;

export const Wrap = styled.div`
  padding: 0 34px;
`;

export const TypeP = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
  margin-bottom: 10px;
`;

export const TypeDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-family: var(--font--Bold);
  font-weight: 400;
  color: #767676;
  font-size: var(--font-sm);
`;

export const ButtonImg = styled.button`
  margin: 16px 0 0 -14px;
  background: url(${ClayImg}) center / contain no-repeat;
`;



