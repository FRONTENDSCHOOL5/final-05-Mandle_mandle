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

export const ClassIntroSection = styled.section`
  background-color: #fff;
`;

export const ClassNav = styled.ul`
  border-bottom: 1px solid #dbdbdb;
  padding: 14px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
`;

export const ExplainP = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;
export const ClassExplainImg = styled.img`
  width: 320px;
  aspect-ratio: 320 / 329;
  object-fit: cover;
`;