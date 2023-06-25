import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '../../assets/img/icon-home.svg';
import ClassIcon from '../../assets/img/icon-class.svg';
import ChattingIcon from '../../assets/img/icon-chat.svg';
import PostingIcon from '../../assets/img/icon-edit.svg';
import ProfileIcon from '../../assets/img/icon-user.svg';

function MenuBar() {
  const location = useLocation();

  return (
    <MenuBarWrap>
      <ul>
        <li>
          <LinkWrap
            to='/home'
            active={location.pathname.startsWith('/home').toString()}
          >
            <div>
              <img src={HomeIcon} alt='홈 버튼'></img>
            </div>
            <p>홈</p>
          </LinkWrap>
        </li>
        <li>
          <LinkWrap
            to='/class'
            active={location.pathname.startsWith('/class').toString()}
          >
            <div>
              <img src={ClassIcon} alt='클래스 버튼'></img>
            </div>
            <p>클래스</p>
          </LinkWrap>
        </li>
        <li>
          <LinkWrap
            to='/chat/chatList'
            active={location.pathname.startsWith('/chat').toString()}
          >
            <div>
              <img src={ChattingIcon} alt='채팅 버튼'></img>
            </div>
            <p>채팅</p>
          </LinkWrap>
        </li>
        <li>
          <LinkWrap
            to='/post/upload'
            active={(location.pathname === '/post').toString()}
          >
            <div>
              <img src={PostingIcon} alt='게시물 작성 버튼'></img>
            </div>
            <p>게시물 작성</p>
          </LinkWrap>
        </li>
        <li>
          <LinkWrap
            to='/my_profile'
            active={(location.pathname === '/my_profile').toString()}
          >
            <div>
              <img src={ProfileIcon} alt='프로필 버튼'></img>
            </div>
            <p>프로필</p>
          </LinkWrap>
        </li>
      </ul>
    </MenuBarWrap>
  );
}

export default MenuBar;

const MenuBarWrap = styled.footer`
  border-top: 1px solid var(--border-color);
  width: 100%;
  height: 60px;
  background-color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding-top: 12px;
  ul {
    display: flex;
    justify-content: space-around;

    li {
      width: 50px;
      list-style: none;
    }

    p {
      font-size: 10px;
      padding-top: 7px;
    }
  }
`;

export const LinkWrap = styled(Link)`
  div {
    width: 24px;
    height: 24px;
    overflow: hidden;
    margin: auto;

    img {
      height: 100%;
      object-fit: cover;
      object-position: ${(props) => (props.active === 'true' ? '-24px' : '0')};
    }
  }

  p {
    color: ${(props) => (props.active === 'true' ? '#036635' : '#000')};
  }
`;
