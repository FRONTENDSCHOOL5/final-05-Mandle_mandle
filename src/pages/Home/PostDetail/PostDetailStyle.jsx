import styled from 'styled-components';
export const PostDetailWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.main`
  width: 100%;
  height: calc(100% - 48px - 60px);
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentList = styled.ul`
  padding-top: 12px;
  width: 100%;
  border-top: 1px solid var(--border-color);
  gap: 12px;
`;
