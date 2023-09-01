import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import ProgressiveImg from '../ProgressiveImg/ProgressiveImg';
import HeartButton from '../HeartButton';
import HandleNormalizeImage from '..//HandleNormalizeImage';
import ChatIcon from '../../../assets/img/icon-chat-mini.svg';
import PlaceholderImg from '../../../assets/img/placeholderImg.svg';
export default function PostContent({ post }) {
  const navigate = useNavigate();
  const location = useLocation();
  const postImages = post.image ? post.image.split(',') : '';

  const postDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options); // '2023년 6월 20일' 형식으로 변환
  };

  const handlePostClick = () => {
    navigate(`/post/${post.id}`, { state: post.id });
  };

  return (
    <PostContentWrap>
      <MovePostDetail
        cursor={location.pathname.startsWith('/post') ? 'default ' : 'pointer'}
        onClick={handlePostClick}
      >
        {post.content && <p>{post.content}</p>}
        {postImages[0] === '' ? (
          ''
        ) : (
          <PostImageWrap
            className={postImages.length > 1 ? 'postImgscroll' : ''}
            height={
              postImages.length > 1 || !postImages.length ? '100%' : '228px'
            }
          >
            {postImages &&
              postImages.map((postImage, index) => (
                <ProgressiveImg
                  key={index}
                  src={HandleNormalizeImage(postImage)}
                  width={postImages.length > 1 ? '168px' : '304px'}
                  alt='게시글 이미지'
                  placeholderSrc={PlaceholderImg}
                />
              ))}
          </PostImageWrap>
        )}
      </MovePostDetail>
      <PostIconWrap>
        <HeartButton post={post} />
        <CommentButton
          onClick={handlePostClick}
          cursor={
            location.pathname.startsWith('/post') ? 'default ' : 'pointer'
          }
        >
          <img src={ChatIcon} alt='댓글 버튼' />
          <p>{post.commentCount}</p>
        </CommentButton>
      </PostIconWrap>
      <PostDate>{postDate(post.createdAt)}</PostDate>
    </PostContentWrap>
  );
}

const PostContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: calc(42px + 6px);
`;

const MovePostDetail = styled.button`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: ${(props) => props.cursor};
`;

const PostImageWrap = styled.div`
  width: 304px;
  height: ${(props) => props.height || '100%'};

  img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    aspect-ratio: 304/228;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0px 1px 2px rgba(118, 118, 118, 0.25);
  }
  &.postImgscroll {
    display: flex;
    gap: 8px;
    overflow-x: scroll;
  }

  &.postImgscroll::-webkit-scrollbar {
    padding-top: 5px;
    background-color: white;

    height: 10px;
  }
  &.postImgscroll::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid white;
  }
`;

const PostIconWrap = styled.div`
  width: 85px;
  display: flex;
  justify-content: space-between;

  button,
  a {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const CommentButton = styled.button`
  cursor: ${(props) => props.cursor};
`;

const PostDate = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;
