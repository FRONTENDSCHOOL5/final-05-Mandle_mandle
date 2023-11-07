import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { Toast } from '../../../components/Common/Toast/Toast';
import arrowUpIcon from '../../../assets/img/icon-arrow-up.svg';
import arrowDownIcon from '../../../assets/img/icon-arrow-down.svg';
import {
  PickerContainer,
  TimeTitle,
  TimeList,
  BtnReserve,
  ToggleBtn,
} from './ClassReservationPickerStyle';

export function TimePicker({ selectedDate }) {
  const [showTimeList, setShowTimeList] = useState(false);
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);

  const [selectedTime, setSelectedTime] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const availableTimes = [
    '오전 10:00 ~ 오전 12:00',
    '오후 1:00 ~ 오후 3:00',
    '오후 4:00 ~ 오후 6:00',
  ];
  const formattedPrice =
    state && typeof state.price === 'number'
      ? state.price?.toLocaleString()
      : '';

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    selectedDate.setHours(time, 0, 0);
  };

  const handleReservation = () => {
    const resData = {
      class_id: state.class_id,
      className: state.name,
      image: state.image,
      reserve_ko_date: formatKorDate(selectedDate),
      reserve_common_date: formatEngDate(selectedDate),
      reserve_time: formatTime(selectedTime),
    };

    const userId = userInfo.id;
    const userReservations = JSON.parse(localStorage.getItem('resInfo')) || {};
    if (!userReservations[userId]) {
      userReservations[userId] = [];
    }

    // 저장된 예약 내역에서
    // 예약하려는 클래스와 같은 일자의 클래스 정보가 존재하는지 확인
    const date = userReservations[userId].find((item) => {
      return item.reserve_ko_date === resData.reserve_ko_date;
    });

    if (date) {
      setToastMessage('해당 일자에 이미 예약된 클래스 내역이 존재합니다.');
      return;
    }

    // 새로운 예약 정보를 배열에 추가
    userReservations[userId] = [...userReservations[userId], resData];

    // 로컬 스토리지에 업데이트된 예약 정보를 저장
    localStorage.setItem('resInfo', JSON.stringify(userReservations));

    // 알림창이 뜬다.
    alert('예약되었습니다.');
    // 이전페이지로 이동
    navigate(-1);
  };

  // 날짜를 한국 표기로 형식화하는 함수
  function formatKorDate(date) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const koreanDate = new Date(date).toLocaleDateString('ko-KR', options);
    return koreanDate;
  }

  // 날짜를 영어 표기로 형식화하는 함수
  function formatEngDate(date) {
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      timeZoneName: 'short',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  const formatTime = (hour) => {
    let timeStr = '';
    if (hour <= 10) {
      timeStr = '오전 ' + hour + ':00 ~ 오전 ' + (hour + 2) + ':00';
    } else if (hour === 11) {
      timeStr = '오전 ' + hour + ':00 ~ 오후 ' + (hour - 10) + ':00';
    } else if (hour === 12) {
      timeStr = '오후 ' + hour + ':00 ~ 오후 ' + (hour - 10) + ':00';
    } else {
      timeStr = '오후 ' + (hour - 12) + ':00 ~ 오후 ' + (hour - 10) + ':00';
    }
    return timeStr;
  };

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
          <li
            className={selectedTime === 10 ? 'active' : ''}
            onClick={() => handleTimeClick(10)}
          >
            <button>
              <h3>{availableTimes[0]}</h3>
              <strong>{formattedPrice}원</strong>
            </button>
          </li>
          <li
            className={selectedTime === 13 ? 'active' : ''}
            onClick={() => handleTimeClick(13)}
          >
            <button>
              <h3>{availableTimes[1]}</h3>
              <strong>{formattedPrice}원</strong>
            </button>
          </li>
          <li
            className={selectedTime === 16 ? 'active' : ''}
            onClick={() => handleTimeClick(16)}
          >
            <button>
              <h3>{availableTimes[2]}</h3>
              <strong>{formattedPrice}원</strong>
            </button>
          </li>
        </TimeList>
      </PickerContainer>
      <BtnReserve
        onClick={handleReservation}
        bg={selectedTime ? `var(--main-color)` : 'var(--sub-color)'}
        disabled={selectedTime ? false : true}
      >
        예약하기
      </BtnReserve>
      {toastMessage && (
        <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
      )}
    </>
  );
}
