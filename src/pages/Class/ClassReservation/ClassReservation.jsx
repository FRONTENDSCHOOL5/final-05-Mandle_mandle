import React from 'react'
import { useLocation } from 'react-router-dom'
import { GoBackNav } from '../../../components/Common/TopNav';
import { DatePicker } from './ClassReservationCalendar';
import { TimePicker, PeoplePicker } from './ClassReservationPicker';
import { Heading } from './ClassReservationStyle';

export default function ClassReservation() {
  const location = useLocation();
  const state = location.state;
  
  return (
    <>
    <Header />
    <Main state={state}/>
    </>
  )
}


export function Header() {
  return (
    <>
    <GoBackNav />
    <Heading>언제 참여하고 싶나요?</Heading>
    </>
  );
}


export function Main() {
  const location = useLocation();
  const state = location.state

  return (
    <>
      <DatePicker />
      <TimePicker state={state}/>
      <PeoplePicker />
    </>
  );
}