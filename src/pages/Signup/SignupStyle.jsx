import React from "react";
import styled from "styled-components";
import GlobalStyleComponent from "../../styles/GlobalStyles";
import ClayImg from "../../assets/img/L-button-clay.svg";

export const TypeDiv = styled.div`
  display: flex;
  gap: 13px;
  margin: auto;
  justify-content: center;
`;
export const ButtonImg = styled.button`
  display: block;
  width: 350px;
  height: 70px;
  margin: 17px 0 0 -15px;
  background: url(${ClayImg}) center / contain no-repeat;
`;
export const SignupDiv = styled.div`
  margin: auto;
  padding: auto;
  max-width: 390px;
`;

export const TypeP = styled.p`
  font-size: 12px;
  color: var(--sub-font-color);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Wrap = styled.div`
  width: 322px;
  margin: auto;
`;

export const LoginHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 33px 34px 40px;

  button {
    position: absolute;
    left: 34px;
  }
`;
export { TypeDiv, ButtonImg, SignupDiv, TypeP, Wrap, LoginHeader };
