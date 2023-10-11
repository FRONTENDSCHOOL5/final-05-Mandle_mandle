import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PickerContainer, TimeTitle, TimeList, BtnReserve, ToggleBtn } from './ClassReservationPickerStyle';
import { useRecoilState } from 'recoil';
import { ReserveDataState } from '../../../Store/ReserveStateAtom'

export function TimePicker({ selectedDate }) {
  const currentDate = new Date();
  console.log(currentDate);
  console.log(selectedDate);
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
  const navigate = useNavigate();

  const formattedPrice = state && typeof state.price === 'number' ? state.price.toLocaleString() : '';
  const [activeItem, setActiveItem] = useState();

  const [reservationData, setReservationData] = useRecoilState(ReserveDataState);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleReservation = () => {
    const reserveData = {
      class_id: state.id,
      reserve_ko_date: formatKoreanDate(selectedDate),
      reserve_en_date: formatSelectedDate(selectedDate),
      reserve_common_date: selectedDate,
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

    // 알림창이 뜬다.
    alert('예약되었습니다.');

    // 이전페이지로 이동
    navigate(-1);
  }

    // 날짜를 한국 표기로 형식화하는 함수
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

  // 날짜를 영어 표기로 형식화하는 함수
  function formatSelectedDate(date) {
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  console.log(selectedDate);

  return (
    <>
    <PickerContainer>
        <TimeTitle>
          시간 선택
      <ToggleBtn onClick={() => setShowTimeList(!showTimeList)}>
            <img src={showTimeList ? arrowUpIcon : arrowDownIcon} alt='' />
      </ToggleBtn>
        </TimeTitle>

        <TimeList display={showTimeList ? `block` : `none`}>
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
    </PickerContainer>
      <BtnReserve
        onClick={handleReservation}
        bg={selectedTime ? `var(--main-color)` : 'var(--sub-color)'}
        disabled={selectedTime ? false : true}
      >
      예약하기
    </BtnReserve>
    </>
  );
}
