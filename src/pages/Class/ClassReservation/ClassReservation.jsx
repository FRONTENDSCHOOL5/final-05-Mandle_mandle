import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { GoBackNav } from '../../../components/Common/TopNav';
import { DatePicker } from './ClassReservationCalendar';
import { TimePicker } from './ClassReservationPicker';
import { Heading, Reservations, ClassIntro } from './ClassReservationStyle';

export default function ClassReservation() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
    <Header />
    <Main state={state} />
    </>
  )
}

export function Header() {
  return (
    <>
    <GoBackNav>
      <Heading>언제 참여하고 싶나요??</Heading>
    </GoBackNav>
    </>
  );
}

export function Main() {
  const location = useLocation();
  const state = location.state
  const backgroundImg = state.img;
  console.log(backgroundImg);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  return (
    <Reservations>
      <ClassIntro>
        <img src={state.img} alt="클래스 이미지" />
        <h2>{state.name}</h2>
      </ClassIntro>

      <DatePicker selectedDate = {selectedDate} onDateChange = {handleDateChange} />
      <TimePicker state={state} selectedDate={selectedDate} />
    </Reservations>
  );
}