import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PostContent from './PostContent';
import PostProfile from './PostProfile';
export default function PostList() {
  return (
    <PostListWrap>
      <PostProfile />
      <PostContent />
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

// export default function PostList({ posts }) {
//   return (
//     <PostUlStyle>
//       {posts ? (
//         posts.map((post) => (
//           <li key={post.id}>
//             <PostProfile post={post} />
//             <PostContent author={posts.author} />
//           </li>
//         ))
//       ) : (
//         <h1>게시물이 없습니다.</h1>
//       )}
//     </PostUlStyle>
//   );
// }
// const PostUlStyle = styled.ul`
//   overflow-y: scroll;

//   &::-webkit-scrollbar {
//     display: none;
//   }
//   li {
//     display: flex;
//     flex-direction: column;
//     font-size: var(--font-md);
//     padding-bottom: 20px;
//     gap: 16px;
//     margin-top: 20px;
//   }
// `;
