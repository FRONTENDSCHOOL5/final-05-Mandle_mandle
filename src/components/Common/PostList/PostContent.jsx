import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import HeartButton from '../HeartButton';
import CommentButton from '../CommentButton';
import NormalizeImage from '../NormalizeImage';
import ProgressiveImg from '../ProgressiveImg/ProgressiveImg';

import PlaceholderImg from '../../../assets/img/placeholderImg.svg';
import ArrowIcon from '../../../assets/img/icon-arrow-right.svg';

export default function PostContent({ post }) {
  const navigate = useNavigate();
  const location = useLocation();
  const postImages = post.image ? post.image.split(',') : '';
  const postInfo = post.content;
  const postDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options); // '2023년 6월 20일' 형식으로 변환
  };
  let parsedData;
  try {
    parsedData = JSON.parse(postInfo);
  } catch (error) {
    // 클래스데이터가 없는경우 or  JSON 파싱에 실패한 경우, 그냥 postInfo를 사용
    parsedData = { inputValue: postInfo }; // 일반 inputValue만 전달
  }

  const handlePostClick = () => {
    navigate(`/post/${post.id}`, { state: post.id });
  };

  const handleClassInfo = () => {
    navigate(`/class/detail/${parsedData.selectId}`);
  };

  return (
    <PostContentWrap>
      <MovePostDetail
        cursor={location.pathname.startsWith('/post') ? 'default ' : 'pointer'}
        onClick={handlePostClick}
      >
        {parsedData.inputValue && <p>{parsedData.inputValue}</p>}

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
      {parsedData.classIdentify && (
        <ClassLinkBtn onClick={handleClassInfo}>
          <img src={parsedData.classImg} alt='클래스 이미지' />
          <div>
            <p>{parsedData.classIdentify}</p>
            {post.author.accountname.startsWith('Teacher') ? (
              <>
                <ReservationDate> {parsedData.classTag}</ReservationDate>
                <ReservationTime>{parsedData.classPrice}</ReservationTime>
              </>
            ) : (
              <>
                <ReservationDate> {parsedData.selectDate}</ReservationDate>
                <ReservationTime>{parsedData.selectTime}</ReservationTime>
              </>
            )}
          </div>
        </ClassLinkBtn>
      )}

      <PostIconWrap>
        <BtnWrap>
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
        </BtnWrap>
        <PostDate>{postDate(post.createdAt)}</PostDate>
      </PostIconWrap>
    </PostContentWrap>
  );
}

const PostContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: calc(42px + 6px);
`;

const MovePostDetail = styled.button`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: ${(props) => props.cursor};
  line-height: 110%;
  word-break: keep-all;
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
    background-color: none;

    height: 10px;
  }
  &.postImgscroll::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
  }
`;

const PostIconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  button,
  a {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86px;
`;

const PostDate = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;

const ClassLinkBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 304px;
  height: 68px;
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid var(--border-color);
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(118, 118, 118, 0.15);
  overflow: hidden;
  margin-bottom: 6px;
  img {
    width: 68px;
    height: 100%;
    object-fit: cover;
    margin-right: 10px;
  }

  div p:first-child {
    width: 200px;
    font-size: var(--font-md);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  &::after {
    content: url(${ArrowIcon});
    font-size: 20px;
    position: absolute;
    color: var(--sub-font-color);
    right: 16px;
  }
`;

const ReservationDate = styled.p`
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;

const ReservationTime = styled.p`
  margin-top: 2px;
  font-size: var(--font-sm);
  color: var(--sub-font-color);
`;
