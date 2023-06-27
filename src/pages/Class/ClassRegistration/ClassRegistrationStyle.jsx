import styled from 'styled-components';

export const ClassRegistrationForm = styled.form`
  padding: 0 34px;
  label {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
    margin-top: 30px;
    display: block;
    position: relative;
    p {
      position: absolute;
      top: 30.5px;
      right: 64%;
    }
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
  border-bottom: 1px solid var(--border-color);
  &::placeholder {
    font-size: var(--font-md);
    color: var(--border-color);
  }
`;

export const InputValidationError = styled.p`
  font-size: var(--font-sm);
  color: var(--error-color);
  margin-top: 6px;
`

export const AddBtn = styled.button`
  width: 90px;
  text-align: center;
  font-size: var(--font-md);
  background-color: ${props => props.disabled ? '#B1D4C3' : 'var(--main-color)'};
  color: #fff;
  padding: 7px 32px;
  box-sizing: border-box;
  border-radius: 32px;
  position: absolute;
  top: 8px;
  right: 16px;
`;

