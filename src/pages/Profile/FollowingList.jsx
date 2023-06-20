import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import ArrowIcon from "../../assets/img/icon-arrow-left.svg";
import User from "../../components/Common/User";
import {} from "../../pages/Profile/FollowingListStyle";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { followingList } from "../../api/FollowingList";

export default function FollowingList() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };
  const [followingList, setFollowingList] = useState([
    ...followingList,
    followingList,
  ]);
  return (
    <div>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt="" />
      </button>
      <h1>Followings</h1>
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
