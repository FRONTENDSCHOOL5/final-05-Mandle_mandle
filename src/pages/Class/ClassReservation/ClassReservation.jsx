import { TimePicker } from './ClassReservationPicker';
import { DatePicker } from './ClassReservationCalendar';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GoBackNav } from '../../../components/Common/TopNav';

import {
  Reservations,
  ClassIntroBox,
  ClassIntro,
} from './ClassReservationStyle';

export default function ClassReservation() {
  const location = useLocation();
  const classInfo = location.state;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <GoBackNav>클래스 예약하기</GoBackNav>
      <Reservations>
        <ClassIntroBox>
          <ClassIntro>
            <h2>예약 중인 클래스 정보</h2>
            <div>
              <img src={classInfo.image} alt='클래스 이미지' />
              <div>
                <strong>{classInfo.name}</strong>
                <p>
                  <span>{classInfo.price?.toLocaleString()}</span>원
                </p>
              </div>
            </div>
          </ClassIntro>
        </ClassIntroBox>

        <DatePicker
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
        <TimePicker selectedDate={selectedDate} />
      </Reservations>
    </>
  );
}
