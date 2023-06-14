import React from 'react';
import styled from 'styled-components';
import HeartIcon from '../../../assets/img/icon-heart.svg';
import ChatIcon from '../../../assets/img/icon-chat-mini.svg';

export default function PostContent() {
  return (
    <PostContentWrap>
      <p>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
        뛰노는 인생의 힘있다.
      </p>
      <img src='' alt='' />
      <PostIconWrap>
        <button>
          <img src={HeartIcon} alt='' />
          <p>42</p>
        </button>

        <button>
          <img src={ChatIcon} alt='' />
          <p>17</p>
        </button>
      </PostIconWrap>
      <Date>2020년 10월 20일</Date>
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
  button {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Date = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;
