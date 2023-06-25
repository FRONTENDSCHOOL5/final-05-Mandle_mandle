import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import HeartIcon from '../../../assets/img/icon-heart.svg';
import HeartedIcon from '../../../assets/img/icon-heart-clicked.svg';
import ChatIcon from '../../../assets/img/icon-chat-mini.svg';
import HeartButton from '../HeartButton';

export default function PostContent({ post }) {
  console.log(post);
  const postDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options); // '2023년 6월 20일' 형식으로 변환
  };
  const postImages = post.image ? post.image.split(',') : '';
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/post/${post.id}`, { state: post.id });
  };
  return (
    <PostContentWrap>
      <MovePostDetail onClick={handlePostClick}>
        {post.content && <p>{post.content}</p>}
        {postImages[0] === '' ? (
          ''
        ) : (
          <PostImageWrap
            className={postImages.length > 1 ? 'postImgscroll' : ''}
          >
            {postImages &&
              postImages.map((postImage, index) => (
                <img
                  key={index}
                  src={postImage}
                  width={postImages.length > 1 ? '168px' : '304px'}
                  height={postImages.length > 1 ? '126px' : '228px'}
                  alt=''
                /> // comment객체가 'comment'라는 이름으로 또 감싸져 있어 안의 요소들로 바로 접근하기 위함
              ))}
          </PostImageWrap>
        )}
      </MovePostDetail>
      <PostIconWrap>
        <HeartButton post={post} />
        <button onClick={handlePostClick}>
          <img src={ChatIcon} alt='댓글 버튼' />
          <p>{post.commentCount}</p>
        </button>
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
`;

const PostImageWrap = styled.div`
  width: 304px;
  height: 100%;

  img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    aspect-ratio: 304/228;
    border-radius: 10px;
    object-fit: cover;
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
  display: flex;
  gap: 18px;
  button,
  a {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const PostDate = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;
