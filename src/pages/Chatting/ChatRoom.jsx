import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MoreNav } from '../../components/Common/TopNav';
import profileimg from '../../assets/img/mini-basic-progile-img.svg';
import Modal from '../../components/Common/Modal/Modal';
export default function ChatRoom() {
  const [inputValue, setInputValue] = useState('');
  const [textValue, settextValue] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
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
      <ChattingLayout>
        <ChatContentLayout>
          <UserImage src={profileimg} alt='유저 프로필 이미지' />
          <ChatContent bgColor='white' radius='3px 15px 15px 15px'>
            안녕하세요~ 비누 사진이 너무 예뻐 보여서 문의드려요! 디자인 비누
            종류가 다양한가요??
          </ChatContent>
          <ChatTime>12:39</ChatTime>
        </ChatContentLayout>
        <ChatContentLayout>
          <UserImage src={profileimg} alt='유저 프로필 이미지' />
          <ChatContent bgColor='white' radius='3px 15px 15px 15px'>
            만드는데 얼마나 걸리는지도 궁금해요!
          </ChatContent>
          <ChatTime>12:39</ChatTime>
        </ChatContentLayout>

        {textValue.map((value, i) => (
          <ChatContentLayout key={`chat-${i}`} marginLeft='auto'>
            <ChatTime
              style={{ paddingRight: '6px' }}
            >{`${hours}:${minutes}`}</ChatTime>
            <ChatContent
              style={{ backgroundColor: 'var(--main-color)', color: 'white' }}
              radius='15px 3px 15px 15px'
            >
              {value}
            </ChatContent>
          </ChatContentLayout>
        ))}

        <ChatInputDiv>
          <UserImage src={profileimg} alt='유저 프로필 이미지' />
          <ChatInput
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='메시지 입력하기...'
          />
          <SendButton onClick={handleSendButton} inputValue={inputValue}>
            전송
          </SendButton>
        </ChatInputDiv>
      </ChattingLayout>
    </>
  );
}

const ChattingLayout = styled.main`
  height: calc(100% - 40px);
  box-sizing: border-box;
  padding: 48px 0 73px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #f2f2f2;
  padding-left: 16px;
  padding-right: 16px;
`;

const ChatContentLayout = styled.section`
  display: flex;
  margin-bottom: 10px;
  background-color: #f2f2f2;
  margin-left: ${(props) => props.marginLeft};
`;
const UserImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const ChatContent = styled.p`
  max-width: 240px;
  border: 1px solid var(--border-color);
  padding: 12px;
  box-sizing: border-box;
  background-color: #ffffff;
  color: ${(props) => props.color};
  font-size: var(--font-md);

  line-height: 18px;
  border-radius: ${(props) => props.radius};
  word-break: break-word;
`;

const ChatTime = styled.span`
  font-size: 10px;
  color: var(--dark-gray);
  margin-top: auto;
  padding-left: 6px;
`;

const ChatInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 60px;
  box-sizing: border-box;
  margin: auto;
  padding: 0 16px;

  position: fixed;
  right: 0px;
  left: 0;
  bottom: 0px;
  background-color: white;
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  border-top: 0.5px solid var(--border-color);
`;

const ChatInput = styled.input`
  border: none;
  padding-left: 6px;
  font-size: 14px;
  flex-grow: 1;
  &::placeholder {
    color: var(--sub-font-color);
  }
`;

const SendButton = styled.button`
  width: 33px;
  height: 33px;
  color: ${(props) =>
    props.inputValue ? 'var(--main-color)' : 'var(--border-color)'};
`;
