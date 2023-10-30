import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './Skeleton';

import MoreIcon from '../../../assets/img/icon-more-vertical.svg';

export default function UserSkeleton() {
  return (
    <SkeletonUserWrapper>
      <SkeletonUserInfo>
        <SkeletonUserImage></SkeletonUserImage>
        <SkeletonUserDetails>
          <SkeletonUserName></SkeletonUserName>
          <SkeletonUserID></SkeletonUserID>
        </SkeletonUserDetails>
      </SkeletonUserInfo>
      <SkeletonMoreButton src={MoreIcon} />
    </SkeletonUserWrapper>
  );
}

const SkeletonUserWrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SkeletonUserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SkeletonUserImage = styled(Skeleton)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const SkeletonUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SkeletonUserName = styled(Skeleton)`
  width: 90px;
  height: 14px;
`;
const SkeletonUserID = styled(Skeleton)`
  width: 70px;
  height: 12px;
`;

const SkeletonMoreButton = styled.img`
  width: 18px;
  height: 20px;
`;
