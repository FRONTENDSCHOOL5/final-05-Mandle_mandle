import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalOverlay, ModalWrap } from './ModalStyle';
import ModalAlert from './ModalAlert/ModalAlert';
import { useNavigate } from 'react-router-dom';
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
    setAlertModalOpen(true);
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrap>
        <div></div>
        <ul>
          <li>
            <button onClick={text === '삭제' ? handleAlertModalOpen : onClick}>
              {type ? '삭제' : text}
            </button>
          </li>
          {type && (
            <li>
              <button onClick={type && onClick}>
                {type === 'post'
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
