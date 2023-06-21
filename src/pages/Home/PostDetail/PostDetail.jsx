import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoBackNav } from '../../../components/Common/TopNav';
import PostList from '../../../components/Common/PostList/PostList';
import CommentList from '../../../components/Common/CommentList/CommentList';
import Comment from '../../../components/Common/CommentList/Comment';
import GetPostDetail from '../../../api/GetPostDetail';
import GetCommentList from '../../../api/GetCommentList';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useLocation } from 'react-router-dom';
export default function PostDetail() {
  const location = useLocation();
  const postId = location.state;
  const usetInfo = useRecoilValue(UserAtom);
  const token = usetInfo.token;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResult = await GetPostDetail(postId, token);
        setPost(postResult);

        const commentResult = await GetCommentList(postId, token);
        setComments(commentResult);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [postId, token]);

  console.log(post, postId, token, comments);

  return (
    <PostDetailWrap>
      <GoBackNav />
      <MainWrap>
        {post && <PostList post={post} />}
        <CommentUl>
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
