import React from 'react';
import styled from 'styled-components';
import MoreIcon from '../../assets/img/icon- more-vertical.svg';

export default function MoreButton({ setModalOpen }) {
  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <button onClick={handleClick}>
      <MoreIconStyle src={MoreIcon} alt='더보기 아이콘' />
    </button>
  );
}

const MoreIconStyle = styled.img`
  width: 18px;
  height: 20px;
`;
