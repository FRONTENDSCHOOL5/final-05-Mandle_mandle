import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import User from '../../components/Common/User';
import {} from '../../pages/Profile/FollowListStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
