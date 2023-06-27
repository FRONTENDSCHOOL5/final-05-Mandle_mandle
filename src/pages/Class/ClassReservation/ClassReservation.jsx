import React from 'react'
import { useLocation } from 'react-router-dom'
import { GoBackNav } from '../../../components/Common/TopNav';
import { DatePicker } from './ClassReservationDatePicker';
import { TimePicker } from './ClassReservationTimePicker';
import { PeoplePicker } from './ClassReservationPeoplePicker';
import { Heading } from './ClassReservationStyle';

export default function ClassReservation() {
  const location = useLocation();
  const state = location.state
  
  return (
    <>
    <Header />
    <Main stae={state}/>
    </>
  )
}


export function Header() {
  return (
    <>
    <GoBackNav />
    <Heading>예약 시스템</Heading>
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