import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import MenuBar from '../../../components/Common/MenuBar';
import { SearchNav } from '../../../components/Common/TopNav';

export default function Search() {
  return (
    <>
      <SearchNav></SearchNav>
      <MainWrap></MainWrap>
      <MenuBar />
      cc
    </>
  );
}
const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px - 48px);

  p {
    padding: 10px 0 20px;
    color: var(--sub-font-color);
  }
`;
