import React from 'react';
import styled from 'styled-components';
import { GoBackNav } from '../../../components/Common/TopNav';
import PostList from '../../../components/Common/PostList/PostList';
import CommentList from '../../../components/Common/CommentList/CommentList';
import Comment from '../../../components/Common/CommentList/Comment';

export default function PostDetail({ to }) {
  return (
    <PostDetailWrap>
      <GoBackNav title='홈' to={to}></GoBackNav>
      <MainWrap>
        <PostList />
        <CommentUl>
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
        </CommentUl>
      </MainWrap>
      <Comment />
    </PostDetailWrap>
  );
}

const PostDetailWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MainWrap = styled.main`
  width: 100%;
  height: calc(100% - 48px - 60px);
  padding: 0 16px;
  border-bottom: 1px solid var(--border-color);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CommentUl = styled.ul`
  padding: 12px 16px;
  width: 100%;
  border-top: 1px solid var(--border-color);
  gap: 12px;
`;
