import styled from 'styled-components';

export const PickerContainer = styled.div`
  border-bottom: 1px solid var(--sub-font-color);
  position: relative;
  &.People {
    padding: 11px 12px;
    label {
      font-size: var(-font-lg);
      line-height: calc(52px - 22px);
    }
  }
`;

export const Heading = styled.h2`
  font-size: var(--font-lg);
  color: var(--font-color);
  padding: 16px 12px;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 18px;
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

export const BtnBox = styled.div`
  width: 93px;
  height: 30px;
  border: 0.5px solid #767676;
  border-radius: 5px;
  position: absolute;
  top: 11px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  button {
    width: calc(93px / 3);
    line-height: 30px;
    text-align: center;
    position: relative;
    &.disabledbtn  {
      background-color: #c4c4c4;
      cursor: default;
    }
    &:nth-child(1)::after,
    &:nth-child(3)::before {
      content: '';
      display: block;
      width: 0.5px;
      height: 29px;
      background-color: var(--sub-font-color);
      position: absolute;
      top: 0;
    }
    &:nth-child(1)::after {
      left: 31px;
    }
    &:nth-child(3)::before {
      right: 31px;
    }
  }
  input {
    width: calc(93px / 3);
    line-height: 30px;
    position: absolute;
    left: 42px;
  }
`;

export const BtnReserve = styled.button`
  width: 100%;
  font-size: var(--font-md);
  background-color: var(--main-color);
  padding: 14px 0;
  text-align: center;
  color: #fff;
  border-radius: 44px;
  position: absolute;
  top: 70px;
  left: 0;
`;
