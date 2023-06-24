import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { GoBackNav } from '../../../components/Common/TopNav';
import PostList from '../../../components/Common/PostList/PostList';
import CommentList from '../../../components/Common/Comment/CommentList';
import CommentInput from '../../../components/Common/Comment/CommentInput';
import GetPostDetail from '../../../api/GetPostDetail';
import GetCommentList from '../../../api/GetCommentList';
import { PostDetailWrap, MainWrap, CommentUl } from './PostDetailStyle';
export default function PostDetail() {
  const location = useLocation();
  const postId = location.state;
  const usetInfo = useRecoilValue(UserAtom);
  const token = usetInfo.token;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState('');
  const [commentUpdated, setCommentUpdated] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const postResult = await GetPostDetail(postId, token);
      setPost(postResult);

      const commentResult = await GetCommentList(postId, token);
      setComments(commentResult);
      setCommentUpdated(false);
    };

    fetchData();
  }, [postId, commentUpdated, token]);

  return (
    <PostDetailWrap>
      <GoBackNav />
      <MainWrap>
        {post && <PostList post={post} />}
        <CommentUl>
          {comments &&
            comments.map((comment) => (
              <CommentList
                key={comment.id}
                postId={postId}
                comment={comment}
                setCommentUpdated={setCommentUpdated}
              />
            ))}
        </CommentUl>
      </MainWrap>
      <CommentInput
        postId={postId}
        token={token}
        setComments={setComments}
        setCommentUpdated={setCommentUpdated}
        inputComment={inputComment}
        setInputComment={setInputComment}
      />
    </PostDetailWrap>
  );
}
