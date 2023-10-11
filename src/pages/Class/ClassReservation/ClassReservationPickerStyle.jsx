import styled from 'styled-components';

export const PickerContainer = styled.div`
  border: 0.5px solid var(--sub-font-color);
  border-radius: 10px;
  position: relative;
  margin-bottom: 30px;
`;

export const TimeTitle = styled.p`
  font-size: var(--font-md);
  color: var(--font-color);
  padding: 16px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleBtn = styled.button``;

export const TimeList = styled.ul`
  display: ${(props) => props.display};
  padding: 16px 15px;
  border-radius: 0 0 10px 10px;
  background-color: var(--background-color);
  li {
    padding: 12px 21px 12px 16px;
    position: relative;
    background-color: #fff;
    border: 0.5px solid var(--sub-font-color);
    &:not(:last-child) {
      border-bottom: none;
    }
    &.active {
      box-shadow: inset 0 0 3px var(--main-color);
    }
    @keyframes dropdown {
      0% {
        transform: translateY(-20%);
      }
      100% {
        transform: translateY(0);
      }
    }
    animation: dropdown 0.4s ease-out;
  }
  h3 {
    margin: 5px 0 3px;
  }
  strong {
    color: var(--main-color);
  }
  p {
    position: absolute;
    top: 21px;
    right: 16px;
    color: var(--sub-font-color);
  }
`;

export const BtnReserve = styled.button`
  width: 100%;
  font-size: var(--font-md);
  background-color: ${(props) => props.bg};
  padding: 14px 0;
  text-align: center;
  color: #fff;
  border-radius: 44px;

  &:disabled {
    cursor: default;
  }
`;
