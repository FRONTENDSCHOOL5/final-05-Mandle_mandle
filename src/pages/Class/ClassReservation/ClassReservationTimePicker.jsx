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
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <PickerBox>
      <Heading htmlFor='time-select'>시간 선택</Heading>
      <TimeList>
        <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
          <button>
            <h3>오전 10:00 ~ 오전 12:00</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
        <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
          <button>
            <h3>오후 1:00 ~ 오후 3:00</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
        <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
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

