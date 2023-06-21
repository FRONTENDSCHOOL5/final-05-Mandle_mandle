import styled from 'styled-components';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import PostReportPost from '../../../api/PostReportPost';
export default function PostReportModal({ data, setModalOpen, category }) {
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  const postId = data.id;
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };

  const handleReportSubmit = async () => {
    const response = await PostReportPost(postId, token); // Call the API component
    if (response) {
      alert(`해당 ${category}이 신고되었습니다.`);
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrap>
        <div></div>
        <ul>
          <li>
            <button onClick={handleReportSubmit}>신고하기</button>
          </li>
        </ul>
      </ModalWrap>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 9999; /* 모달의 z-index 값을 설정 */
`;

const ModalWrap = styled.div`
  width: 100%;
  padding-bottom: 6px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 10px 10px 0 0;
  background-color: #fff;

  p {
    font-size: var(--font-lg);
    padding: 24px 0;
    border-bottom: 1px solid var(--border-color);
  }
  div {
    width: 100%;
    position: relative;
    padding: 16px 0;
  }

  div::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 4px;
    background: #dbdbdb;
    border-radius: 5px;
  }

  ul {
    width: 100%;
  }
  li {
    width: 100%;
    height: 46px;
    padding-left: 26px;
    display: flex;
    align-items: center;
  }
`;
