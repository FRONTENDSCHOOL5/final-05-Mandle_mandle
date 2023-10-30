import React from 'react';

import { ModalOverlay, ModalWrap } from './ModalStyle';

export default function Modal({
  onClick,
  setModalOpen,
  setAlertModalOpen,
  text,
  type,
}) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };
  const handleAlertModalOpen = () => {
    setModalOpen(false);
    setAlertModalOpen(type);
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrap>
        <div></div>
        <ul>
          <li>
            <button onClick={handleAlertModalOpen}>{text}</button>
          </li>
          {(type === 'delete' || type === 'class') && (
            <li>
              <button onClick={type && onClick}>
                {type === 'delete'
                  ? '수정'
                  : type === 'class'
                  ? '클래스 상세 페이지로 이동'
                  : null}
              </button>
            </li>
          )}
        </ul>
      </ModalWrap>
    </ModalOverlay>
  );
}
