import styled from 'styled-components';

import ChatIcon from '../../../assets/img/icon-chat-mini.svg';

export default function CommentButton({ post, onClick, pathname }) {
  return (
    <CommentButtonWrap
      cursor={pathname.startsWith('/post') ? 'default ' : 'pointer'}
    >
      <button onClick={onClick} aria-label={`댓글 버튼 ${post.id}`}>
        <img src={ChatIcon} alt='댓글 버튼' />
        <p>{post.commentCount ? post.commentCount : 0}</p>
      </button>
    </CommentButtonWrap>
  );
}
const CommentButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  button {
    cursor: ${(props) => props.cursor};
    label {
      display: none;
    }
  }
`;
