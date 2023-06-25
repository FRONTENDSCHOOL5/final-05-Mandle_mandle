import styled from 'styled-components';

export const ClassRegistrationForm = styled.form`
  padding: 30px 34px;
  label {
    font-size: 12px;
    color: #767676;
  }
`;

export const ImgBox = styled.div`
  width: 322px;
  height: 204px;
  border-radius: 10px;
  margin: 18px 0 30px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

`;

export const ImgBtn = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  cursor: pointer;
`;

export const ClassInput = styled.input`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;
  border-bottom: 1px solid #dbdbdb;
  &::placeholder {
    font-size: 14px;
    color: #dbdbdb;
  }
`;

export const AddBtn = styled.button`
  width: 90px;
  text-align: center;
  font-size: 14px;
  background-color: ${props => props.disabled ? '#B1D4C3' : '#036635'};
  color: #fff;
  padding: 7px 32px;
  box-sizing: border-box;
  border-radius: 32px;
  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 2;
`;
