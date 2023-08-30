import React from 'react';
import styled from 'styled-components';

export default function ModalAlert({ setAlertModalOpen, onClick }) {
  const handleCancel = () => {
    setAlertModalOpen(false);
  };

  return (
    <>
      <AlertModalOverlay>
        <AlertModalWrap>
          <p> 삭제할까요?</p>
          <div>
            <button type='button' onClick={handleCancel}>
              취소
            </button>
            <button onClick={onClick} type='button'>
              삭제
            </button>
          </div>
        </AlertModalWrap>
      </AlertModalOverlay>
    </>
  );
}

const AlertModalOverlay = styled.div`
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

const AlertModalWrap = styled.div`
  width: 252px;
  height: 110px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  animation: zoomIn 0.5s ease;

  @keyframes zoomIn {
    0% {
      transform: translate(-50%, -50%) scale(0.7, 0.7);
    }
    60% {
      transform: translate(-50%, -50%) scale(1.05, 1.05);
    }
    100% {
      transform: translate(-50%, -50%) scale(1, 1);
    }
  }

  p {
    font-size: var(--font-lg);
    padding: 24px 0;
    border-bottom: 1px solid var(--border-color);
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
      font-size: var(--font-md);
      flex-grow: 1;
      padding: 16px 0;
      border-radius: 0 0 0px 10px;
      display: flex;
      justify-content: center;
    }

    button + button {
      color: var(--main-color);
      border-left: 1px solid var(--border-color);
      border-radius: 0 0 10px 0px;
    }

    button:hover {
      color: #fff;
      background-color: var(--main-color);
    }
  }
`;
