import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";

export const SignupDiv = styled.div`
  width: 390px;
`;

export const SignupHeader = styled.header`
  text-align: center;
  margin: 29px auto 12px;
  position: relative;
  button {
    position: absolute;
    left: 34px;
  }
`; // 헤더부분 수정하였습니다

export const Heading1 = styled.h1`
  font-size: var(--font-xl);
`;

export const Wrap = styled.form`
  padding: 0 34px;

  #submitBtn {
    display: block;
    width: 90px;
    height: 32px;
    background-color: var(--sub-color);
    color: rgb(255 255 255);
    border-radius: 32px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
  }

  #submitBtn.active {
    background-color: var(--main-color);
  }
`;

export const P = styled.p`
  font-size: var(--font-sm);
  color: #767676;
  text-align: center;
  margin-bottom: 30px;
`;

export const SetProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${(props) => props.first && "margin-top: 30px;"}
`;

export const SetProfileLabel = styled.label`
  font-family: var(--font--Bold);
  font-weight: 400;
  color: #767676;
  font-size: var(--font-sm);
`;

export const SetProfileInputBox = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  width: 322px;
  padding: 8px 0;
  box-sizing: border-box;
  margin: auto;
  &::placeholder {
    color: #dbdbdb;
  }
  &:focus {
    border-color: #036635;
  }
`;
