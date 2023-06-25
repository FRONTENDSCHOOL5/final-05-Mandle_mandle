import styled from 'styled-components';

export const MainWrap = styled.main`
  background-color: #f2f2f2;
  height: calc(100% - 48px - 60px);
  overflow-y: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;