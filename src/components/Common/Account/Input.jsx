import styled from 'styled-components';
import hideEye from '../../../assets/img/eye-hidden.svg';
import showEye from '../../../assets/img/eye-visible.svg';
export default function Input({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  borderColor,
  showPassword,
  toggleShowPassword,
}) {
  return (
    <InputDiv>
      <Label>{label}</Label>
      <InputBox
        name={name}
        type={showPassword ? 'text' : type} // 비밀번호 보기 시 type을 'text'로 변경
        width='322px'
        height='40px'
        padding='15px'
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        borderColor={borderColor}
        value={value}
      />
      {type === 'password' && (
        <EyeIcon onClick={toggleShowPassword}>
          <img src={showPassword ? showEye : hideEye} alt='눈 모양 아이콘' />
        </EyeIcon>
      )}
    </InputDiv>
  );
}

export const InputDiv = styled.div`
  display: flex;
  position: relative;
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

const EyeIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 0%;
  top: 30px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;
