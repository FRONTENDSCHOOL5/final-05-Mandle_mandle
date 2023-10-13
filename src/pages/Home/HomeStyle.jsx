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
  gap: 16px;
  width: 100%;
  height: calc(100% - 48px - 60px);
  padding: 16px 16px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const PostUlStyle = styled.ul`
  width: 100%;
`;
