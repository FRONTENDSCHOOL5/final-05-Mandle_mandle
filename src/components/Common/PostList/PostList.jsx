import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FollowPostAtom } from '../../../Store/FollowPostAtom';
import { useRecoilValue } from 'recoil';

import PostContent from './PostContent';
import PostProfile from './PostProfile';
export default function PostList({ post }) {
  return (
    <PostUlStyle>
      <li key={post.id}>
        <PostProfile author={post.author} />
        <PostContent postId={post.id} post={post} />
      </li>
    </PostUlStyle>
  );
}
const PostUlStyle = styled.ul`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  li {
    display: flex;
    flex-direction: column;
    font-size: var(--font-md);
    padding-bottom: 20px;
    gap: 16px;
    margin-top: 20px;
  }
`;
