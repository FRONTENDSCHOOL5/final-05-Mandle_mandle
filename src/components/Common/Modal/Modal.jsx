import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalOverlay, ModalWrap } from './ModalStyle';
import ModalAlert from './ModalAlert/ModalAlert';
import { useNavigate } from 'react-router-dom';
export default function Modal({
  setModalOpen,
  setAlertModalOpen,
  onClick,
  type,
}) {
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
          {type && (
            <li>
              <button onClick={onClick}>
                {type === 'post' ? '수정' : '클래스 상세 페이지로 이동'}
              </button>
            </li>
          )}
        </ul>
      </ModalWrap>
    </ModalOverlay>
  );
}
