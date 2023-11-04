import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';

import NormalizeImage from '../../Common/NormalizeImage';
import PostComment from '../../../api/PostComment';

export default function CommentInput({
  postId,
  token,
  setComments,
  setCommentUpdated,
  inputComment,
  setInputComment,
}) {
  const userInfo = useRecoilValue(UserAtom);
  const userImage = userInfo.image;

  const handleInputChange = (e) => {
    setInputComment(e.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const response = await PostComment(postId, token, inputComment);
    setComments((prevComments) => [...prevComments, response]);
    setCommentUpdated(true);
    setInputComment('');
  };

  return (
    <CommentWrap>
      <div>
        <img src={NormalizeImage(userImage)} alt='' />
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type='text'
          value={inputComment}
          onChange={handleInputChange}
          placeholder='댓글 입력하기...'
        />
        <ButtonStyle type='submit' inputValue={inputComment}>
          게시
        </ButtonStyle>
      </form>
    </CommentWrap>
  );
}

const CommentWrap = styled.footer`
  width: 100%;
  height: 60px;
  font-size: var(--font-md);
  background-color: #fff;
  border-top: 1px solid var(--border-color);
  padding: 13px 16px 11px;
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 18px;

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;

    input {
      flex-grow: 8;
    }
  }
`;
const ButtonStyle = styled.button`
  font-weight: var(--font--bold);
  color: ${(props) =>
    props.inputValue ? 'var(--main-color)' : 'var(--sub-font-color)'};
`;
