import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import HeartIcon from '../../../assets/img/icon-heart.svg';
import HeartedIcon from '../../../assets/img/icon-heart-clicked.svg';
import ChatIcon from '../../../assets/img/icon-chat-mini.svg';

export default function PostContent({ post }) {
  const [isHearted, setIsHearted] = useState(post.hearted);
  const [heartCount, setHeartCount] = useState(post.heartCount);

  const postDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options); // '2023년 6월 20일' 형식으로 변환
  };

  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/post/${post.id}`, { state: post.id });
  };
  return (
    <PostContentWrap>
      <button onClick={handlePostClick}>
        <p>{post.content}</p>
        <img src={`https://api.mandarin.weniv.co.kr/${post.image}`} alt='' />
      </button>
      <PostIconWrap>
        <button>
          <img src={post.hearted ? HeartedIcon : HeartIcon} alt='좋아요 버튼' />
          <p>{post.heartCount}</p>
        </button>

        <button onClick={handlePostClick}>
          <img src={ChatIcon} alt='댓글 버튼' />
          <p>{post.commentCount}</p>
        </button>
      </PostIconWrap>
      <PostDate>
        {postDate(
          post.createdAt !== post.updatedAt ? post.updatedAt : post.createdAt,
        )}
      </PostDate>
    </PostContentWrap>
  );
}

const PostContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: calc(42px + 6px);

  p + img {
    width: 100%;
    height: 100%;
    aspect-ratio: 304/228;
    border-radius: 10px;
    object-fit: cover;
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
