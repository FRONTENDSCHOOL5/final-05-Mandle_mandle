import styled from "styled-components";
import ClayImg from "../../assets/img/L-button-clay.svg";

export const SignupDiv = styled.div`
  margin: auto;
  width: 390px;
`;

export const SetProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;
export const SetProfileLabel = styled.label`
  font-family: var(--font--Bold);
  margin: 0 0 9px 35px;
  font-weight: normal;
  font-size: 12px;
  color: #767676;
`;
export const SetProfileInputBox = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  width: 320px;
  height: 48px;
  padding: 15px;
  box-sizing: border-box;
  margin: auto;
  &::placeholder {
    color: #dbdbdb;
  }
  &:focus {
    border-color: #036635;
  }
`;

export const ButtonImg = styled.button`
  display: block;
  width: 350px;
  height: 70px;
  margin: 17px 0 0 20px;
  background: url(${ClayImg}) center / contain no-repeat;
`;

export const Heading = styled.h1`
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translate(-50%);
`;

export const P = styled.p`
  font-size: 12px;
  color: #767676;
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const Wrap = styled.div`
  text-align: center;
`;
