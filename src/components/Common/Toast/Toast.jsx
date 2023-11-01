import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

export const Toast = ({ toastMessage, setToastMessage }) => {
  const [isFadeOut, setIsFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadeOut(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [toastMessage]);

  useEffect(() => {
    if (isFadeOut) {
      const timer = setTimeout(() => {
        setToastMessage('');
        setIsFadeOut(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isFadeOut]);

  return <ToastWrap fadeOut={isFadeOut}>{toastMessage}</ToastWrap>;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ToastWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  min-width: 290px;
  max-width: 340px;
  text-align: center;
  border-radius: 20px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
  line-height: 130%;
  animation: fadeIn 0.5s ease-in-out;
  animation: ${(props) => (props.fadeOut ? fadeOut : fadeIn)} ease-in-out;
  animation-duration: ${(props) => (props.fadeOut ? '1s' : '0.2s')};
  animation-fill-mode: forwards;
`;
