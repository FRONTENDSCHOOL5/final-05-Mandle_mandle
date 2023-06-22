import React, { useState } from 'react';

import styled from 'styled-components';
import { MoreNav } from '../../components/Common/TopNav';
import profileimg from '../../assets/img/mini-basic-progile-img.svg';
export default function ChatRoom() {
  const [inputValue, setInputValue] = useState('');
  const [textValue, settextValue] = useState([]);

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

  return (
    <>
      <MoreNav />
      <ChattingLayout>
        <ChatContentLayout>
          <UserImage src={profileimg} />
          <ChatContent bgColor='white' radius='3px 15px 15px 15px'>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </ChatContent>
          <ChatTime>12:39</ChatTime>
        </ChatContentLayout>
        <ChatContentLayout>
          <UserImage src={profileimg} />
          <ChatContent bgColor='white' radius='3px 15px 15px 15px'>
            안녕하세요. 수강하고 싶어요!
          </ChatContent>
          <ChatTime>12:39</ChatTime>
        </ChatContentLayout>

        {textValue.map((value, i) => (
          <ChatContentLayout key={`chat-${i}`} marginLeft='auto'>
            <ChatTime>{`${hours}:${minutes}`}</ChatTime>
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

const ChattingLayout = styled.div`
  /* width: 390px; */
  height: 750px;
  /* margin: 0 auto; */

  box-sizing: border-box;
  padding: 48px 0 73px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #f2f2f2;
  padding-left: 16px;
  padding-right: 16px;
`;

const ChatContentLayout = styled.div`
  display: flex;
  margin-bottom: 10px;

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

  position: absolute;
  right: 0px;
  left: 0;
  bottom: 0px;
  background-color: white;
  border-right: 1px solid var(--border-color);
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
