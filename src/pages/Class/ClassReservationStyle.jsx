import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { Location, useLocation } from 'react-router-dom';
import { GoBackNav } from '../../components/Common/TopNav';
import { DatePicker } from './ClassReservationDatePicker';
import { TimePicker } from './ClassReservationTimePicker';
import { PeoplePicker } from './ClassReservationPeoplePicker';

export function Header() {
  return (
    <header>
      <GoBackNav />
      <Heading>예약 시스템</Heading>
    </header>
  );
}

export const Heading = styled.h1`
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  top: 16px;
  left: 48px;
`;

export function Main() {
  const location = useLocation();
  const state = location.state
  console.log(state);

  return (
    <>
      <DatePicker />
      <TimePicker state={state}/>
      <PeoplePicker />
    </>
  );
}
