import React from 'react';
import styled from 'styled-components';
import { MoreNav } from '../../components/Common/TopNav';
import { useNavigate } from 'react-router-dom';
import profileimg from '../../assets/img/mini-basic-progile-img.svg';
import MenuBar from '../../components/Common/MenuBar';

export default function ChatList() {
  const navigate = useNavigate();
  return (
    <>
      <MoreNav />
      <ChatListStyle>
        <ChatContainerStyle
          onClick={() => {
            navigate('/chat/chatroom');
          }}
        >
          <img src={profileimg} alt='유저 프로필 이미지' confirm={true} />
          <div className='text'>
            <span>뽀송뽀송</span>
            <div className='chatInfo'>
              <p>안녕하세요 어떤 디자인 비누들이 있나요?</p>
              <div className='date'>2023.06.17</div>
            </div>
          </div>
        </ChatContainerStyle>
        <ChatContainerStyle
          onClick={() => {
            navigate('/chat/chatroom');
          }}
        >
          <img src={profileimg} alt='유저 프로필 이미지' />
          <div className='text'>
            <span>만들러버</span>
            <div className='chatInfo'>
              <p>만드는게 세상에서 제일 재밌어요. 다음주에도 수강할게요</p>
              <div className='date'>2023.06.15</div>
            </div>
          </div>
        </ChatContainerStyle>
        <ChatContainerStyle
          onClick={() => {
            navigate('/chat/chatroom');
          }}
        >
          <img src={profileimg} alt='유저 프로필 이미지' />
          <div className='text'>
            <span>금손이 되고싶어</span>
            <div className='chatInfo'>
              <p>곰돌이 쿠키 디자인이 너무 예뻐요!!</p>

              <div className='date'>2023.06.11</div>
            </div>
          </div>
        </ChatContainerStyle>
      </ChatListStyle>
      <MenuBar />
    </>
  );
}

const ChatListStyle = styled.div`
  width: var(--basic-width);
  height: var(--screen-nav-height);
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background-color: white;
  }
`;

const ChatContainerStyle = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  background-color: white;
  cursor: pointer;

  img {
    width: 42px;
    height: 42px;
    margin: 0 16px;
  }

  .text {
    flex: 1;
  }

  span {
    display: block;
    height: 19px;
    font-weight: bold;
    font-size: var(--font--size-md);
  }

  .chatInfo {
    display: flex;
    justify-content: space-between;
  }

  p {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    font-size: var(--font-md);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 220px;
    color: var(--sub-font-color);
  }

  .date {
    color: var(--border-color);
    font-size: 10px;
    margin-right: 7px;
  }
`;
