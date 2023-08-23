import React from 'react';
import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export default function CardSkeleton({ width, height, imgHeight }) {
  console.log(width, height, imgHeight);
  return (
    <SkeletonCardWrap width={width} height={height}>
      <SkeletonCardImg imgHeight={imgHeight}></SkeletonCardImg>
      <SkeletonCardDesc imgHeight={imgHeight}>
        <SkeletonCardShop></SkeletonCardShop>
        <SkeletonCardTitle></SkeletonCardTitle>
      </SkeletonCardDesc>
    </SkeletonCardWrap>
  );
}

export const SkeletonCardWrap = styled.div`
  box-shadow: rgba(118, 118, 118, 0.25) 0px 1px 2px;
  flex-shrink: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const SkeletonCardImg = styled(Skeleton)`
  width: 100%;
  height: ${(props) => props.imgHeight};
  border-radius: 5px 5px 0 0;
`;
const SkeletonCardDesc = styled.div`
  background-color: #fff;
  width: 100%;
  height: calc(100% - ${(props) => props.imgHeight});
  border-radius: 0 0 5px 5px;
  padding: 10px 4px 4px;
`;
export const SkeletonCardShop = styled(Skeleton)`
  width: 70px;
  height: 12px;
  margin-bottom: 6px;
`;
export const SkeletonCardTitle = styled(Skeleton)`
  width: 120px;
  height: 14px;
  padding: 6px 0px 7px 4px;
`;
