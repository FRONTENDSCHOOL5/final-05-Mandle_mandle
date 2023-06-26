import React from 'react';
import { ModalOverlay, ModalWrap } from './ModalStyle';
export default function ChatModal({ setModalOpen, onClick }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };
  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrap>
        <div></div>
        <ul>
          <li>
            <button onClick={onClick}>채팅방 나가기</button>
          </li>
        </ul>
      </ModalWrap>
    </ModalOverlay>
  );
}
