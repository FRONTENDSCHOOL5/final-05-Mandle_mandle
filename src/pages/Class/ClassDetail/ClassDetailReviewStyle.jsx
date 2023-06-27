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

export const ClassReviewSection = styled.section`
  background-color: #fff;
  position: relative;
`;

export const Profile = styled.div`
  position: relative;
  margin-bottom: 9px;
`;
export const UserImg = styled.img`
  width: 36px;
  aspect-ratio: 36 / 36;
  object-fit: cover;
  margin-right: 9px;
`;

export const UserInfo = styled.div`
  position: absolute;
  top: 50%;
  left: calc(36px + 9px);
  transform: translate(0, -50%);
`;
export const UserName = styled.h4`
  font-size: var(--font-md);
  margin-bottom: 2px;
`;
export const UserUpload = styled.p`
  font-size: var(--font-sm);
  color: #767676;
`;

export const Review = styled.div`
  display: flex;
`;

export const ReviewImg = styled.img`
  width: 80px;
  aspect-ratio: 80 / 80;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
`;

export const ReviewP = styled.p`
  font-size: var(--font-md);
`;