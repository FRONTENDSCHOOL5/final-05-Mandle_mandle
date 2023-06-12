import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";

const TopNavWrap = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;

  h1 {
    padding-left: 16px;
  }

  input {
    width: 316px;
    height: 32px;
    border-radius: 32px;
    border: none;
    background-color: #f2f2f2;
    padding-left: 16px;
    font-size: 14px;
  }

  button {
    margin-right: 16px;
  }

  .go-back {
    margin-left: 16px;
  }
`;

const ProfileSection = styled.section`
  width: 390px;
  text-align: center;
  margin: 10px auto;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  .follow {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .follow p {
    font-size: 18px;
    color: var(--sub-font-color);
  }
  .follow .followNum {
    font-size: 8px;
  }
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  button {
    border: 1px solid var(--border-color);
    border-radius: 30px;
    width: 120px;
    height: 34px;
    text-align: center;
  }
`;

export { WrapBtn, Wrap, ProfileSection, TopNavWrap };
