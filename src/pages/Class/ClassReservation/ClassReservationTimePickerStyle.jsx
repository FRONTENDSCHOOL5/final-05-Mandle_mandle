import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export const PickerBox = styled.div`
  width: 330px;
  margin: 0 auto 20px;
  border: 1px solid var(--sub-font-color);
  border-radius: 8px;
  overflow: hidden;
`;

export const Heading = styled.h2`
  display: block;
  font-size: 16px;
  color: var(--font-color);
  padding: 16px 12px;
`;

export const TimeList = styled.ul`
  padding: 16px 15px;
  background-color: var(--background-color);
  li {
    padding: 12px 21px 12px 16px;
    min-height: 60px;
    position: relative;
    background-color: #fff;
    border: 0.5px solid var(--sub-font-color);
    &:not(:last-child) {
      border-bottom: none;
    }
    &.active {
      box-shadow: inset 0 0 10px var(--main-color);
    }
  }
  button {
    width: 300px;
    box-sizing: border-box;
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
