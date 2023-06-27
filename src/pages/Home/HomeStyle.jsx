import styled from 'styled-components';
export const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: var(--font-md);
`;

export const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: calc(100% - 48px - 60px);
  padding: 0 16px;
`;
export const PostUlStyle = styled.ul`
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
