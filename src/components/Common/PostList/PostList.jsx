import React from 'react';
import styled from 'styled-components';

import PostContent from './PostContent';
import PostProfile from './PostProfile';

export default function PostList({ post, setPostUpdated }) {
  return (
    <PostLiStyle
      $bgColor={post.author.accountname.substr(0, 7) === 'Teacher' && '#FFFFF3'}
    >
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
  margin-top: 10px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 20px 0 0 0;
`;
