import styled from 'styled-components';

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
  border-radius: 50%;
  object-fit: cover;
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

const ChatInputBox = styled.div`
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

export {
  ChattingLayout,
  ChatContentLayout,
  UserImage,
  ChatContent,
  ChatTime,
  ChatInputBox,
  ChatInput,
  SendButton,
};
