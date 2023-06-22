import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FollowPostAtom } from '../../../Store/FollowPostAtom';
import { useRecoilValue } from 'recoil';

import PostContent from './PostContent';
import PostProfile from './PostProfile';
export default function PostList({ post }) {
  return (
    <PostLiStyle key={post.id}>
      <PostProfile post={post} />
      <PostContent postId={post.id} post={post} />
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
