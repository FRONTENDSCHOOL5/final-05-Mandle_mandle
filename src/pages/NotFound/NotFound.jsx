import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonStyle from '../../../components/Common/Button';
import NotFoundLogo from '../../../assets/img/home-logo.svg';
import { NotFoundWrap } from './NotFoundStyle';
export default function PostBlank() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <NotFoundWrap>
      <img src={NotFoundLogo} alt='404 로고' />
      <p>{`페이지를 찾을 수 없습니다. :(`}</p>

      <ButtonStyle
        onClick={handleGoBack}
        width='120px'
        height='44px'
        color='#fff'
        bg='#036635'
        br='44px'
      >
        이전 페이지
      </ButtonStyle>
    </NotFoundWrap>
  );
}
