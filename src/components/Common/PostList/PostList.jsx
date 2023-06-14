import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PostContent from './PostContent';
import PostProfile from './PostProfile';
export default function PostList() {
  return (
    <PostListWrap>
      <Link to='/profile'>
        <PostProfile />
      </Link>

      <Link to='/home/postdetail'>
        <PostContent />
      </Link>
    </PostListWrap>
  );
}

const PostListWrap = styled.li`
  display: flex;
  flex-direction: column;
  font-size: var(--font-md);
  padding-bottom: 20px;
  gap: 16px;
  margin-top: 20px;
`;
