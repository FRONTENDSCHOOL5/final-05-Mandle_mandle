import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import ProgressiveImg from '../ProgressiveImg/ProgressiveImg';
import HeartButton from '../HeartButton';
import NormalizeImage from '../NormalizeImage';
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

  const handleClassInfo = () => {
    navigate('/my_profile/my_reservation_list');
  };

  return (
    <PostContentWrap>
      <ReservationtWrap onClick={handleClassInfo}>
        <ClassImage
          src={'https://api.mandarin.weniv.co.kr/1693549473375.jpg'}
          alt='클래스 이미지'
        />
        <TextWrap>
          <ReservationClass>{'예시'}</ReservationClass>
          <ReservationDate> {'2023 9월 1일 수요일'}</ReservationDate>
          <ReservationTime>{'오후 1:00~ 오후 2:30'}</ReservationTime>
        </TextWrap>
      </ReservationtWrap>
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
                  src={NormalizeImage(postImage)}
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

const PostContentWrap = styled.button`
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

//클래스 리스트 스타일링
const ReservationtWrap = styled.div`
  width: 300px;
  height: 72px;
  display: flex;
  margin-bottom: 10px;
  gap: 5px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: white;
`;

const ClassImage = styled.img`
  width: 52px;
  /* height: 52px; */
  margin: 10px;
`;

const TextWrap = styled.div`
  width: 300px;
  display: grid;
  align-content: center;
  gap: 2px;
`;

const ReservationClass = styled.p`
  display: block;
  font-size: var(--font-md);
  margin-bottom: 5px;
`;

const ReservationDate = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;

const ReservationTime = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;
