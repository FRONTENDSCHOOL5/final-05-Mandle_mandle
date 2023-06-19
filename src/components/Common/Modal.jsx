import React, { useState } from 'react';
import styled from 'styled-components';

export default function Modal(props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalWrap>
            <div></div>
            <ul></ul>
          </ModalWrap>
        </ModalOverlay>
      )}
    </>
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
  height: 110px;
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
  }
`;
