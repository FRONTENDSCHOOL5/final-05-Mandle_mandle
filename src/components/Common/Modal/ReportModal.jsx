import React from 'react';
import { ModalOverlay, ModalWrap } from './ModalStyle';
export default function ReportModal({ setModalOpen, onClick }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };

  //   const handleReportSubmit = async () => {
  //     const response = await PostReportPost(postId, token); // Call the API component
  //     if (response) {
  //       alert(`해당 ${category}이 신고되었습니다.`);
  //     }
  //   };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrap>
        <div></div>
        <ul>
          <li>
            <button onClick={onClick}>신고하기</button>
          </li>
        </ul>
      </ModalWrap>
    </ModalOverlay>
  );
}
