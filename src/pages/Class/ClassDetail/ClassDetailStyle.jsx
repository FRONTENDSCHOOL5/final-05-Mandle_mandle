import styled from 'styled-components';
import arrowRightIcon from '../../../assets/img/icon-arrow-right.svg';

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
  gap: 4px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: top;
  }
  h3 {
    &::after {
      content: '';
      width: 16px;
      height: 16px;
      display: inline-block;
      background: url(${arrowRightIcon}) center/cover no-repeat;

      position: absolute;
      top: 50%;
      right: -6px;
      transform: translate(0, -50%);
    }
  }
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  div {
    width: 20px;
    display: flex;
    justify-content: center;
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

export const ShareBtn = styled.button`
  font-size: var(--font-md);
  color: var(--sub-font-color);
  width: calc(100% / 2);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const BottomBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AskBtn = styled.button`
  width: 102px;
  height: 34px;
  border: 1px solid var(--border-color);
  font-size: var(--font-md);
  color: var(--sub-font-color);
  box-sizing: border-box;
  border-radius: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
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
