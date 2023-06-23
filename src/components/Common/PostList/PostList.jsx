import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FollowPostAtom } from '../../../Store/FollowPostAtom';
import { useRecoilValue } from 'recoil';

import PostContent from './PostContent';
import PostProfile from './PostProfile';
export default function PostList({ post, setPostUpdated }) {
  if (!post) {
    // post가 undefined인 경우 로딩 상태 등을 처리할 수 있습니다.
    return <div>Loading...</div>;
  }
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
