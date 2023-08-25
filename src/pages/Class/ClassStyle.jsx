import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';

// Header
export const HiddenContext = styled.h2`
  ${GlobalStyle}
`;
// /Header

// Main
export const MainWrap = styled.main`
  background-color: var(--background-color);
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
  background-color: var(--background-color);
  `;

export const Title = styled.h2`
  font-size: var(--font-md);
  font-weight: var(--font-regular);
  margin-bottom: 16px;
  color: var(--font-color);
`;

export const MiniList = styled.ul`
  display: flex;
  gap: 8px;
  padding-bottom: 10px;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    padding-top: 5px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
  }
  `

export const ClassList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
// /Main

