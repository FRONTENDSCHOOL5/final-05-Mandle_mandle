import React from 'react';
import styled from 'styled-components';
import PostContent from './PostContent';
import PostProfile from './PostProfile';
export default function PostList({ post, setPostUpdated }) {
  return (
    <PostLiStyle>
      <PostProfile setPostUpdated={setPostUpdated} post={post} />
      <PostContent post={post} />
    </PostLiStyle>
  );
}
const PostLiStyle = styled.li`
  display: flex;
  flex-direction: column;
  font-size: var(--font-md);
  padding-bottom: 20px;
  gap: 16px;
  margin-top: 20px;
`;
