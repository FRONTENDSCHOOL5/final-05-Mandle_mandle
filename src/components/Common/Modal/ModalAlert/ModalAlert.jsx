import React from 'react';
import styled from 'styled-components';

export default function ModalAlert({ setAlertModalOpen, onClick, type }) {
  const handleCancel = () => {
    setAlertModalOpen(null);
  };

  return (
    <>
      <AlertModalOverlay>
        <AlertModalWrap>
          <p>
            {type === 'edit'
              ? '저장하지 않은 변경 사항이 있습니다.'
              : type === 'logout'
              ? '정말 로그아웃 하시겠습니까?'
              : type === 'report'
              ? '신고하시겠습니까?'
              : '삭제할까요?'}
          </p>
          {type === 'edit' && <p>정말로 나가시겠습니까?</p>}

          <AlertModalBtnBox>
            <button type='button' onClick={handleCancel}>
              취소
            </button>
            <button onClick={onClick} type='button'>
              {type === 'edit'
                ? '나가기'
                : type === 'logout'
                ? '로그아웃'
                : type === 'report'
                ? '신고하기'
                : '삭제'}
            </button>
          </AlertModalBtnBox>
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
  padding: 24px 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  animation: zoomIn 0.5s ease;

  p {
    font-size: var(--font-lg);
  }

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
`;

const AlertModalBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  border-top: 1px solid var(--border-color);

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
`;
