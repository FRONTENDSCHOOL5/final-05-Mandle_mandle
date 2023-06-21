import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import User from '../../components/Common/User';
import {} from './FollowListStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { followingList } from '../../api/FollowingList';

export default function FollowingList() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt='' />
      </button>
      <h1>Followers</h1>
      <userList>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
      </userList>
    </div>
  );
}

export const userList = styled.ul``;
