import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PickerBox, Heading, TimeList } from './ClassReservationTimePickerStyle';

export function TimePicker() {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <Time
      availableTimes={[
        '오전 10:00 ~ 오전 12:00',
        '오후 1:00 ~ 오후 3:00',
        '오후 4:00 ~ 오후 6:00',
      ]}
      selectedTime={selectedTime}
      handleTimeChange={handleTimeChange}
    />
  );
}

export function Time({ availableTimes, selectedTime, handleTimeChange }) {
  const location = useLocation();
  const state = location.state
  const formattedPrice = state.price.toLocaleString();

  return (
    <PickerBox>
      <Heading htmlFor='time-select'>시간 선택</Heading>
      <TimeList>
        <li>
          <button>
            <h3>오전 10:00 ~ 오전 12:00</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
        <li>
          <button>
            <h3>오후 1:00 ~ 오후 3:00</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
        <li>
          <button>
            <h3>오후 4:00 ~ 오후 6:00</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
      </TimeList>
    </PickerBox>
  );
}

