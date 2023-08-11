import styled from 'styled-components';
export const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 60px - 48px);

  ul {
    padding: 20px 16px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
`;
