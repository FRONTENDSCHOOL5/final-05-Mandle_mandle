import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';

// Header
export const HiddenContext = styled.h1`
  ${GlobalStyle}
`;
// /Header

// Main
export const MainWrap = styled.main`
  background-color: #f2f2f2;
  box-sizing: border-box;
  height: calc(100% - 48px - 60px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  `;

export const MiniSection = styled.section`
  padding: 20px 0 0 16px;
  `

export const ClassSection = styled.section`
  box-sizing: border-box;
  padding: 0 10px 30px;
  margin-top: 30px;
  background-color: #f2f2f2;
  `;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
  color: #000;
`;

export const MiniList = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  `

export const ClassList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
// /Main

