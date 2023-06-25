import styled from 'styled-components';

export const ClassWrap = styled.div`
  padding: 20px 35px;
  h3 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 26px;
    &::after {
      content: '';
      width: 322px;
      height: 0.1px;
      display: block;
      background-color: #dbdbdb;
      position: absolute;
      top: 43px;
    }
  }
`;

export const ClassLocSection = styled.section`
  background-color: #fff;
  position: relative;
  img {
    width: 320px;
    height: 160px;
    object-fit: cover;
    margin-bottom: 12px;
  }
`;

export const LocAddress = styled.address`
  font-size: 14px;
  font-weight: normal;
  color: #767676;
`;