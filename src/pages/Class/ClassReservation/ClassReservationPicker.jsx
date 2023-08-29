import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PickerContainer, Heading, TimeList, BtnBox, BtnReserve, ToggleBtn } from './ClassReservationPickerStyle';

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
  const [showTimeList, setShowTimeList] = useState(false);
  const location = useLocation();
  const state = location.state;

  // state가 존재하고 state.price가 숫자일 경우에만 formattedPrice 계산
  const formattedPrice = state && typeof state.price === 'number' ? state.price.toLocaleString() : '';
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <PickerContainer>
      <Heading htmlFor='time-select'>시간 선택</Heading>
      <ToggleBtn onClick={() => setShowTimeList(!showTimeList)}>
        {showTimeList ? '∧' : '∨'}
      </ToggleBtn>
      {showTimeList && (
      <TimeList>
        <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
          <button>
            <h3>{availableTimes[0]}</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
        <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
          <button>
            <h3>{availableTimes[1]}</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
        <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
          <button>
            <h3>{availableTimes[2]}</h3>
            <strong>{formattedPrice}원</strong>
            <p>0/6</p>
          </button>
        </li>
      </TimeList>
      )}
    </PickerContainer>
  );
}



export function PeoplePicker() {
  const [numOfPeople, setNumOfPeople] = useState(1);

  const handleNumOfPeopleChange = (value) => {
    setNumOfPeople(value);
  };

  return (
    <div>
      <People
        numOfPeople={numOfPeople}
        handleNumOfPeopleChange={handleNumOfPeopleChange}
      />
    </div>
  );
}

export function People({ numOfPeople, handleNumOfPeopleChange }) {
  const handleIncrement = () => {
    if (numOfPeople < 6) {
      handleNumOfPeopleChange(numOfPeople + 1);
    } 
  };

  const handleDecrement = () => {
    if (numOfPeople > 1) {
      handleNumOfPeopleChange(numOfPeople - 1);
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <PickerContainer className='People'>
        <label htmlFor='people-input'>인원</label>
        <BtnBox>
          <button onClick={handleDecrement}>-</button>
          <input id='people-input' type='number' value={numOfPeople} max={6} readOnly />
          <button 
          className={numOfPeople === 6 ? 'disabledbtn' : ''}
          onClick={handleIncrement}>
            +
          </button>
        </BtnBox>
        <BtnReserve onClick={goBack}>예약하기</BtnReserve>
      </PickerContainer>
    </>
  );
}