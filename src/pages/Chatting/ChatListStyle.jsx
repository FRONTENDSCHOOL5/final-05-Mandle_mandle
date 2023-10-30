import styled from 'styled-components';

export const ChatListWrap = styled.div`
  width: var(--basic-width);
  height: var(--screen-nav-height);
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background-color: white;
  }
`;

export const ChatListBox = styled.div`
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
