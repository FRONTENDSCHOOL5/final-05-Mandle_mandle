import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { GoBackProfileNav } from '../../../components/Common/TopNav';
import PostItem from '../../../components/PostDetail/PostItem/PostItem';
import CommentItem from '../../../components/PostDetail/Comment/CommentItem';
import CommentInput from '../../../components/PostDetail/Comment/CommentInput';
import GetPostDetail from '../../../api/GetPostDetail';
import GetCommentList from '../../../api/GetCommentList';
import { PostDetailWrap, MainWrap, CommentList } from './PostDetailStyle';
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
      <GoBackProfileNav />
      <MainWrap>
        {post && <PostItem post={post} />}
        <CommentList>
          {comments &&
            comments.map((comment) => (
              <CommentItem
                key={comment.id}
                postId={postId}
                comment={comment}
                setCommentUpdated={setCommentUpdated}
              />
            ))}
        </CommentList>
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
