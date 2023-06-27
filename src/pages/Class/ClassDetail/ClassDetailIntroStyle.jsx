import styled from 'styled-components';

export const ClassWrap = styled.div`
  padding: 20px 35px;
  h3 {
    font-size: var(--font-lg);
    font-weight: var(--font-regular);
    margin-bottom: 26px;
    &::after {
      content: '';
      width: 322px;
      height: 0.1px;
      display: block;
      background-color: var(--border-color);
      position: absolute;
      top: 43px;
    }
  }
`;

export const ClassIntroSection = styled.section`
  background-color: #fff;
`;

export const ClassNav = styled.ul`
  border-bottom: 1px solid var(--border-color);
  padding: 14px;
  font-size: var(--font-md);
  display: flex;
  justify-content: space-around;
`;

export const ExplainP = styled.p`
  font-size: var(--font-md);
  margin-bottom: 20px;
`;
export const ClassExplainImg = styled.img`
  width: 320px;
  aspect-ratio: 320 / 329;
  object-fit: cover;
`;