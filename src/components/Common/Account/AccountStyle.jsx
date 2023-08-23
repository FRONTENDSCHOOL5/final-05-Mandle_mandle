import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AccountForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 34px;
  font-size: var(--font-mds);
`;

export const TypeWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  div {
    display: flex;
    justify-content: space-between;
    height: 30px;
  }
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-weight: var(--font--bold);
  color: var(--sub-font-color);
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonImgStyle = styled.button`
  margin: 16px 0 8px;
`;

export const ErrorMessage = styled.div`
  align-self: stretch;
  color: ${(props) => props.color || 'var(--error-color)'};
  font-size: var(--font-sm);
`;
export const MoveSignup = styled(Link)`
  display: block;
  color: var(--sub-font-color);
  font-size: var(--font-sm);
  text-align: center;
`;
