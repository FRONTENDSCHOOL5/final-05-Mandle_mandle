import React from 'react';
import { GoBackNav } from '../../../components/Common/TopNav';
import MenuBar from '../../../components/Common/MenuBar';
import ClassDetailIntro from './ClassDetailIntro';
import ClassDetailInfo from './ClassDetailInfo';
import ClassDetailLocation from './ClassDetailLocation';
import ClassDetailReview from './ClassDetailReview';
import ClassDetailOtherClass from './ClassDetailOtherClass';
import { MainWrap } from './ClassDetailStyle';

export default function ClassDetail() {
  return (
    <>
      <GoBackNav />
      <MainWrap>
        <ClassDetailInfo />
        <ClassDetailIntro />
        <ClassDetailLocation />
        <ClassDetailReview />
        <ClassDetailOtherClass />
      </MainWrap>
      <MenuBar />
    </>
  );
}
