import React from 'react';
import { ModalOverlay, ModalWrap } from './ModalStyle';

export default function CommentModal({ setModalOpen, setAlertModalOpen }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };
  const handleAlertModalOpen = () => {
    setModalOpen(false);
    setAlertModalOpen(true);
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrap>
        <div></div>
        <ul>
          <li>
            <button onClick={handleAlertModalOpen}>삭제</button>
          </li>
        </ul>
      </ModalWrap>
    </ModalOverlay>
  );
}
