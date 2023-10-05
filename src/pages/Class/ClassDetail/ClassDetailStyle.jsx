import styled from 'styled-components';
import heartIcon from '../../../assets/img/icon-heart.svg';
import shareIcon from '../../../assets/img/icon-share.svg';
import heartClickedIcon from '../../../assets/img/icon-heart-clicked.svg';
import askIcon from '../../../assets/img/icon-chat-mini.svg'

export const MainWrap = styled.main`
  background-color: var(--background-color);
  height: calc(100% - 48px - 60px);
  overflow-y: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;


export const ClassInfoSection = styled.section`
  padding: 16px 31px 28px 27px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  p {
    font-size: var(--font-md);
    color: var(--sub-font-color);
  }
  `;

export const ClassImage = styled.img`
  width: 100%;
  aspect-ratio: 332 / 220;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  `;

export const ClassName = styled.h2`
  font-size: var(--font-lg);
  margin: 4px 0 11px;
  /* position: relative; */
`;

export const ClassTeacher = styled.a`
  position: relative;
  margin-bottom: 4px;
  float: right;
  padding-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: top;
  }
  h3 {
    &::after {
      content: '';
      width: 5px;
      height: 5px;
      display: inline-block;
      border-top: 1px solid black;
      border-right: 1px solid black;
      transform: rotate(45deg);;
      position: absolute;
      top: 7px;
      left: ${props => `${24 + props.textLength * 6}px`};
    }
  }
`

export const ClassPrice = styled.strong`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: var(--font--bold);
`;

export const TopBtn = styled.div`
  padding: 8px 0;
  height: 35px;
  border-radius: 8px;
  border: 1px solid var(--sub-font-color);
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

export const LikeBtn = styled.button`
  font-size: var(--font-md);
  color: var(--sub-font-color);
  width: calc(100% / 2);
  padding-left: 16px;
  text-align: center;
  &::before {
    content: '';
    background: url(${(props) => props.isClicked ? heartClickedIcon : heartIcon})
      no-repeat;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: ${(props) => (props.isClicked ? '9px' : '7px')};
    left: ${(props) => (props.isClicked ? '32px' : '31px')};
  }

  &::after {
    content: '';
    width: 1px;
    height: 34px;
    display: block;
    background-color: var(--sub-font-color);
    position: absolute;
    top: 0;
    left: 50%;
  }
`;

export const LikeNum = styled.span`
  font-size: var(--font-md);
  margin-left: 5px;
`;

export const ShareBtn = styled.button`
  font-size: var(--font-md);
  color: var(--sub-font-color);
  width: calc(100% / 2);
  padding-left: 16px;
  text-align: center;
  &::before {
    content: '';
    background: url(${shareIcon});
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 7px;
    right: 107px;
  }
`;

export const BottomBtn = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AskBtn = styled.button`
  width: 102px;
  height: 34px;
  border: 1px solid var(--border-color);
  font-size: var(--font-md);
  color: var(--sub-font-color);
  padding: 8px 14px 8px 0;
  box-sizing: border-box;
  border-radius: 44px;
  text-align: right;
  position: relative;
  &::before {
    content: '';
    background: url(${askIcon});
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 7px;
    left: 14px;
    margin-right: 2px;
  }
`;

export const ReverseBtn = styled.button`
  width: 220px;
  float: right;
  height: 34px;
  background-color: var(--main-color);
  border-radius: 44px;
  color: #fff;
  text-align: center;
`;
