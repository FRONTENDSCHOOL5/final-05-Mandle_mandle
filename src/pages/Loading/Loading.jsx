import React, { useState, useEffect } from 'react';
import LoadingImg from '../../assets/img/full-logo(loading).svg';
import LoadedImg from '../../assets/img/full-logo(loaded).svg';
import LogoImg from '../../assets/img/logo.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const introTimer = setTimeout(() => {
        navigate('/intro');
      }, 2000);

      return () => clearTimeout(introTimer);
    }
  }, [isLoading, navigate]);

  return (
    <LoadingWrap>
      {isLoading ? (
        <img src={LoadingImg} alt='Loading' />
      ) : (
        <img src={LoadedImg} alt='Loaded' />
      )}
      <h1>
        <img src={LogoImg} alt='' />
      </h1>
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Loading;
