import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import Modal from '../../components/Common/Modal/Modal';
import { MoreNav } from '../../components/Common/TopNav';
import NormalizeImage from '../../components/Common/NormalizeImage';
import profileimg from '../../assets/img/mini-basic-progile-img.svg';
import {
  ChattingWrap,
  ChatContentBox,
  UserImage,
  ChatContent,
  ChatTime,
  ChatInputBox,
  ChatInput,
  SendButton,
} from './ChatRoomStyle';
export default function ChatRoom() {
  const [inputValue, setInputValue] = useState('');
  const [textValue, settextValue] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const userInfo = useRecoilValue(UserAtom);
  const userImage = userInfo.image;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendButton = () => {
    setTimeout(() => {
      const newtextValue = [...textValue];
      inputValue !== '' && newtextValue.push(inputValue);
      settextValue(newtextValue);
      setInputValue('');
    }, 0);
  };

  const handleKeyDown = (e) => {
    e.key === 'Enter' && handleSendButton();
  };

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const navigate = useNavigate();
  const handleChatRoomExit = () => {
    navigate(-1);
  };

  return (
    <>
      <MoreNav onClick={handleModalOpen} />
      {isModalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          onClick={handleChatRoomExit}
          text='채팅방 나가기'
        />
      )}
      <ChattingWrap>
        <ChatContentBox>
          <UserImage src={profileimg} alt='유저 프로필 이미지' />
          <ChatContent bgColor='white' radius='3px 15px 15px 15px'>
            안녕하세요~ 비누 사진이 너무 예뻐 보여서 문의드려요! 디자인 비누
            종류가 다양한가요??
          </ChatContent>
          <ChatTime>12:39</ChatTime>
        </ChatContentBox>
        <ChatContentBox>
          <UserImage src={profileimg} alt='유저 프로필 이미지' />
          <ChatContent bgColor='white' radius='3px 15px 15px 15px'>
            만드는데 얼마나 걸리는지도 궁금해요!
          </ChatContent>
          <ChatTime>12:39</ChatTime>
        </ChatContentBox>

        {textValue.map((value, i) => (
          <ChatContentBox key={`chat-${i}`} marginLeft='auto'>
            <ChatTime
              style={{ paddingRight: '6px' }}
            >{`${hours}:${minutes}`}</ChatTime>
            <ChatContent
              style={{ backgroundColor: 'var(--main-color)', color: 'white' }}
              radius='15px 3px 15px 15px'
            >
              {value}
            </ChatContent>
          </ChatContentBox>
        ))}

        <ChatInputBox>
          <UserImage src={NormalizeImage(userImage)} alt='유저 프로필 이미지' />
          <ChatInput
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='메시지 입력하기...'
          />
          <SendButton onClick={handleSendButton} inputValue={inputValue}>
            전송
          </SendButton>
        </ChatInputBox>
      </ChattingWrap>
    </>
  );
}
