import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import useImageCompression from '../../../Hooks/useImageCompression';
import HeartButton from '../HeartButton';
import HandleNormalizeImage from '..//HandleNormalizeImage';
import ChatIcon from '../../../assets/img/icon-chat-mini.svg';
export default function PostContent({ post }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [compressedImage, setCompressedImage] = useState(null);
  const [isOptimized, setIsOptimized] = useState(false);
  const { compressImage } = useImageCompression();
  const postImages = post.image ? post.image.split(',') : '';

  useEffect(() => {
    if (isOptimized) {
      return; // 이미 최적화 되있을 시, 더 이상 작업하지 않고 실행 종료
    }

    const optimizePostImages = async () => {
      const optimizedImages = [];
      // postImages 배열에 포함된 각 이미지에 대해 작업을 수행
      for (const postImage of postImages) {
        try {
          const compressedImageUrl = await compressImage(
            HandleNormalizeImage(postImage)
          );

          // 압축된 이미지 URL이 유효한 경우 (압축 성공한 경우)
          if (compressedImageUrl) {
            // 최적화된 이미지 배열에 압축된 이미지 URL을 추가
            optimizedImages.push(compressedImageUrl);
            console.log('압축된 포스트 이미지 URL:', compressedImageUrl);
          }
        } catch (error) {
          console.error('이미지 압축 오류:', error);
        }
      }

      if (optimizedImages.length > 0) {
        setCompressedImage(optimizedImages); // 압축된 이미지 배열을 상태에 설정
        setIsOptimized(true); // 최적화 상태를 true로 설정
      }
    };

    optimizePostImages();
  }, []);

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
          >
            {postImages &&
              postImages.map((postImage, index) => (
                <img
                  key={index}
                  src={HandleNormalizeImage(postImage)}
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
  height: 100%;

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
