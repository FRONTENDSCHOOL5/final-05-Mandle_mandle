import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';

export default function GoBackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack}>
      <img src={ArrowIcon} alt='뒤로가기 아이콘' />
    </button>
  );
}
