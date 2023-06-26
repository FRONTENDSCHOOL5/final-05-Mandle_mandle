import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PeopleBox, BtnBox, BtnReserve } from './ClassReservationPeoplePickerStyle'

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
    handleNumOfPeopleChange(numOfPeople + 1);
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
      <PeopleBox>
        <label htmlFor='people-input'>인원</label>
        <BtnBox>
          <button onClick={handleDecrement}>-</button>
          <input id='people-input' type='number' value={numOfPeople} readOnly />
          <button onClick={handleIncrement}>+</button>
        </BtnBox>
      </PeopleBox>
      <BtnReserve onClick={goBack}>예약하기</BtnReserve>
    </>
  );
}