import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PickerContainer, TimeTitle, TimeList, BtnReserve, ToggleBtn } from './ClassReservationPickerStyle';
import { atom, useRecoilState } from 'recoil';

export const regDataState = atom({
  key: 'regDataState',
  default: null,
});

export function TimePicker({ selectedDate }) {
  return (
    <Time
      selectedDate={selectedDate}
      availableTimes={[
        '오전 10:00 ~ 오전 12:00',
        '오후 1:00 ~ 오후 3:00',
        '오후 4:00 ~ 오후 6:00',
      ]}
    />
  );
}

export function Time({ selectedDate, availableTimes }) {
  const [showTimeList, setShowTimeList] = useState(false);
  const location = useLocation();
  const state = location.state;

  const formattedPrice = state && typeof state.price === 'number' ? state.price.toLocaleString() : '';
  const [activeItem, setActiveItem] = useState();

  const [, setReservation] = useRecoilState(regDataState); // reservation 변수를 사용하지 않으므로 [, setReservation] 형태로 수정

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleReservation = () => {
    const regData = {
      class_id: state.id,
      reg_date: selectedDate,
      reg_time: availableTimes[activeItem - 1]
    }

    // Recoil을 통해 상태 업데이트
    setReservation(regData);

    console.log(regData);
  }

  return (
    <PickerContainer>
      <TimeTitle>시간 선택</TimeTitle>
      <ToggleBtn onClick={() => setShowTimeList(!showTimeList)}>
        {showTimeList ? '∧' : '∨'}
      </ToggleBtn>
      {showTimeList && (
        <TimeList>
          <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
            <button>
              <h3>{availableTimes[0]}</h3>
              <strong>{formattedPrice}원</strong>
            </button>
          </li>
          <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <button>
              <h3>{availableTimes[1]}</h3>
              <strong>{formattedPrice}원</strong>
            </button>
          </li>
          <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
            <button>
              <h3>{availableTimes[2]}</h3>
              <strong>{formattedPrice}원</strong>
            </button>
          </li>
        </TimeList>
      )}
      <BtnReserve onClick={handleReservation}>예약하기</BtnReserve>
    </PickerContainer>
  );
}
