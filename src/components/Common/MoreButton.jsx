import React, { useState } from 'react';
import styled from 'styled-components';
import MoreIcon from '../../assets/img/icon- more-vertical.svg';
import PostReportModal from '../Modal/PostReportModal';
import PostModal from '../Modal/PostModal';
export default function MoreButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <MoreIconStyle src={MoreIcon} alt='더보기 아이콘' />
    </button>
  );
}

const MoreIconStyle = styled.img`
  width: 18px;
  height: 20px;
`;
