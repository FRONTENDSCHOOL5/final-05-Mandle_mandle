import styled from 'styled-components';

export const PickerContainer = styled.div`
  border-bottom: 1px solid var(--sub-font-color);
  position: relative;
`;

export const TimeTitle = styled.p`
  font-size: var(--font-md);
  color: var(--font-color);
  padding: 20px 12px;
  `;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
`;

export const TimeList = styled.ul`
  padding: 16px 15px;
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
      box-shadow: inset 0 0 2px var(--main-color);
    }
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
  width: 90%;
  font-size: var(--font-md);
  background-color: var(--main-color);
  padding: 14px 0;
  text-align: center;
  color: #fff;
  border-radius: 44px;
  margin: 20px;
`;
