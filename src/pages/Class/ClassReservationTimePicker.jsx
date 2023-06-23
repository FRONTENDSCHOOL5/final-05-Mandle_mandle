import React, { useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

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
  console.log(state.price)

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

export const PickerBox = styled.div`
  width: 330px;
  margin: 0 auto 20px;
  border: 1px solid #767676;
  border-radius: 8px;
  overflow: hidden;
`;

export const Heading = styled.h2`
  display: block;
  font-size: 16px;
  color: #000;
  padding: 16px 12px;
`;

export const TimeList = styled.ul`
  padding: 16px 15px;
  background-color: #f2f2f2;
  li {
    padding: 12px 21px 12px 16px;
    min-height: 60px;
    position: relative;
    background-color: #fff;
    border: 0.5px solid #767676;
    &:not(:last-child) {
      border-bottom: none;
    }
    &:active {
      box-shadow: inset 0 0 10px #036635;
    }
  }
  button {
    width: 300px;
    box-sizing: border-box;
  }
  h3 {
    margin-top: 5px;
  }
  strong {
    color: #036635;
  }
  p {
    position: absolute;
    top: 21px;
    right: 16px;
    color: #767676;
  }
`;
