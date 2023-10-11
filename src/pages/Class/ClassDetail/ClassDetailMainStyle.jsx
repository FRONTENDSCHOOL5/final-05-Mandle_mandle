import styled from 'styled-components';

// common
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
// /common

export const ClassSection = styled.section`
  background-color: #fff;
  &.location {
    position: relative;
    img {
      width: 320px;
      height: 160px;
      object-fit: cover;
      margin-bottom: 12px;
    }
  }
  &.review {
    position: relative;
  }
  &.others {
    padding: 20px;
  }
`;

export const CommentP = styled.p`
  font-size: var(--font-md);
  &.explain {
    margin-bottom: 20px;
  }
  &.upload-time {
    font-size: var(--font-sm);
    color: #767676;
  }
`;

// classintro
export const ClassNav = styled.ul`
  border-bottom: 1px solid var(--border-color);
  padding: 14px;
  font-size: var(--font-md);
  display: flex;
  justify-content: space-around;
`;

export const ClassExplainImg = styled.img`
  width: 320px;
  aspect-ratio: 320 / 329;
  object-fit: cover;
`;
// /classintro

// classlocation
export const LocAddress = styled.address`
  font-size: var(--font-md);
  font-weight: var(--font-regular);
  color: var(--sub-font-color);
`;

export const MapBtn = styled.button`
  position: absolute;
  bottom: 66px;
  left: 35px;
  color: #fff;
  background-color: var(--main-color);
  border-radius: 0 10px 10px 0;
  padding: 10px;
  opacity: 0.9;
`;
// /classlocation

// classreview
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
// /classreview

// classothers
export const Title = styled.h3`
  font-size: var(--font-md);
  font-weight: var(--font-regular);
  margin-bottom: 16px;
  color: #000;
`;

export const MiniList = styled.ul`
  display: flex;
  gap: 8px;
  padding-bottom: 5px;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    padding-top: 5px;
    background-color: white;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid white;
  }
`;
// /classothers
