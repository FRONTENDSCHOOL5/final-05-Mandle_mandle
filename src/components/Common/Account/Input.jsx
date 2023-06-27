import styled from 'styled-components';

export default function Input({
  label,
  name,
  type,
  onChange,
  onBlur,
  placeholder,
  borderColor,
}) {
  return (
    <InputDiv>
      <Label>{label}</Label>
      <InputBox
        name={name}
        type={type}
        width='322px'
        height='40px'
        padding='15px'
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        borderColor={borderColor}
      />
    </InputDiv>
  );
}

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const Label = styled.label`
  font-weight: var(--font--bold);
  color: #767676;
  font-size: 12px;
  margin-bottom: 9px;
`;

export const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.borderColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  margin-bottom: 6px;
  &::placeholder {
    color: var(--border-color);
  }
  &:focus {
    border-color: var(--main-color);
  }
`;
