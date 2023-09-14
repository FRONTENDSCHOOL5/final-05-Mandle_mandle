import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PickerContainer, TimeTitle, TimeList, BtnReserve, ToggleBtn } from './ClassReservationPickerStyle';
import { useRecoilState } from 'recoil';
import { ReserveDataState } from '../../../Store/ReserveStateAtom'

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

  const [reservationData, setReservationData] = useRecoilState(ReserveDataState);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleReservation = () => {
    const reserveData = {
      class_id: state.id,
      reserve_date: formatKoreanDate(selectedDate),
      reserve_time: availableTimes[activeItem - 1]
    }

  // 현재 예약 데이터를 가져옵니다.
  const currentReservations = reservationData.reservations || [];

  // 새로운 예약 데이터를 배열에 추가합니다.
  const updatedReservations = [...currentReservations, reserveData];

  // Recoil을 통해 상태를 업데이트합니다.
  setReservationData({
    reservations: updatedReservations,
  });

    console.log(reserveData);
  }

    // 날짜를 한국 표기로 형식화하는 함수를 정의합니다.
  function formatKoreanDate(date) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timeZoneName: 'short',
    };
    const koreanDate = new Date(date).toLocaleDateString('ko-KR', options);
    return koreanDate;
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
