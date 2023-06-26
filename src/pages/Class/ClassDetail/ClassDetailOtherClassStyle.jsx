import styled from 'styled-components';

export const MiniSection = styled.section`
  padding: 20px 0 0 16px;
  height: 208px;
  background-color: #fff;
  `

export const Title = styled.h3`
  font-size: var(--font-md);
  font-weight: var(--font-regular);
  margin-bottom: 16px;
  color: #000;
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

