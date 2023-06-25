import React from 'react';
import { GoBackNav } from '../../../components/Common/TopNav';
import MenuBar from '../../../components/Common/MenuBar';
import ClassDetailIntro from './ClassDetailIntro';
import ClassDetailInfo from './ClassDetailInfo';
import ClassDetailLocation from './ClassDetailLocation'
import ClassDetailReview from './ClassDetailReview'
import ClassDetailOtherClass from './ClassDetailOtherClass'
import { MainWrap } from './ClassDetailStyle';

export default function ClassDetail() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// Header
export function Header() {
  return (
    <GoBackNav />
    );
  }
// /Header


// Main
export function Main() {
  return (
    <MainWrap>
      <ClassDetailInfo />
      <ClassDetailIntro />
      <ClassDetailLocation />
      <ClassDetailReview />
      <ClassDetailOtherClass />
    </MainWrap>
  );
}
// /Main


// Footer
export function Footer() {
  return <MenuBar />;
}
// /Footer