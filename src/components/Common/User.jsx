import styled from "styled-components";
import BasicProfile from "../../assets/img/basic-profile-img.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <UserWrap>
      <Link to="/other_profile">
        <img src={BasicProfile} alt="" />
      </Link>
      <div>
        <p>위니브 메이드 공방</p>
        <p>비누 만들기 전문 클래스 입니다~</p>
      </div>
      <button>팔로우</button>
    </UserWrap>
  );
}

const UserWrap = styled.a`
  display: block;
  width: 358px;
  height: 50px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  align-items: center;
  gap: 14px;

  img {
    width: 50px;
    object-fit: contain;
    border-radius: 5px 5px 0 0;
  }

  p {
    color: var(--sub-font-color);
    font-size: var(--font-sm);
    margin-bottom: 8px;
  }
  p + p {
    font-size: var(--font-md);
    color: var(--font-color);
  }

  button {
    width: 56px;
    height: 28px;
    color: white;
    margin-left: 30px;
    border-radius: 28px;
    background-color: var(--main-color);
    text-align: center;
  }

  .following {
    background-color: white;
    color: var(--main-color);
  }
`;
