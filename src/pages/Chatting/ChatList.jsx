import React from 'react';
import { MoreNav } from '../../components/Common/TopNav';
import { useNavigate } from 'react-router-dom';
import profileimg from '../../assets/img/mini-basic-progile-img.svg';
import MenuBar from '../../components/Common/MenuBar';
import { ChatListWrap, ChatListBox } from './ChatListStyle';
export default function ChatList() {
  const navigate = useNavigate();
  return (
    <>
      <MoreNav />
      <ChatListWrap>
        <ChatListBox
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
        </ChatListBox>
        <ChatListBox
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
        </ChatListBox>
        <ChatListBox
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
        </ChatListBox>
      </ChatListWrap>
      <MenuBar />
    </>
  );
}
