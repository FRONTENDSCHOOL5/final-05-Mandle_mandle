import React, { useState } from 'react';
import styled from 'styled-components';

export default function Modal(props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <ModalOverlay>
          <ModalWrap>
            <p>{props.text} 삭제할까요?</p>
            <div>
              <button type='button' onClick={handleCancel}>
                취소
              </button>
              <button type='button'>삭제</button>
            </div>
          </ModalWrap>
        </ModalOverlay>
      )}
    </>
  );
}

const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  width: 252px;
  height: 110px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;

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
