import styled from 'styled-components';

export const PeopleBox = styled.div`
  width: 330px;
  height: 52px;
  margin: 0 auto;
  border: 0.5px solid #767676;
  border-radius: 8px;
  padding: 11px 12px;
  position: relative;

  label {
    font-size: 16px;
    line-height: calc(52px - 22px);
  }
`;

export const BtnBox = styled.div`
  width: 93px;
  height: 30px;
  border: 0.5px solid #767676;
  border-radius: 5px;
  position: absolute;
  top: 11px;
  right: 12px;
  display: flex;
  justify-content: space-between;

  button {
    width: calc(93px / 3);
    line-height: 30px;
    text-align: center;
    position: relative;
    &:nth-child(1)::after {
      content: '';
      display: block;
      width: 0.5px;
      height: 29px;
      background-color: #767676;
      position: absolute;
      top: 0;
      left: 31px;
    }
    &:nth-child(3)::before {
      content: '';
      display: block;
      width: 0.5px;
      height: 29px;
      background-color: #767676;
      position: absolute;
      top: 0;
      right: 31px;
    }
  }

  input {
    width: calc(93px / 3);
    line-height: 30px;
    position: absolute;
    left: 42px;
  }
`;

export const BtnReserve = styled.button`
  width: 330px;
  font-size: 14px;
  background-color: #036635;
  padding: 13px 0;
  text-align: center;
  color: #fff;
  border-radius: 44px;
  position: absolute;
  top: 71px;
  left: 0;
`;
