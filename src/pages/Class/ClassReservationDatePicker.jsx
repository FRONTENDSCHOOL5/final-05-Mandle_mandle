import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateHover = (date) => {
    setHoveredDate(date);
  };

  const removeYearNavigation = (e) => {
    e.preventDefault();
    const yearNavigation = document.querySelector(
      '.react-calendar__navigation__arrow'
    );
    if (yearNavigation) {
      yearNavigation.style.display = 'none';
    }
  };

  const formatShortWeekday = (locale, date) => {
    return new Intl.DateTimeFormat(locale, { weekday: 'short' })
      .format(date)
      .replace('.', '');
  };

  const tileDisabled = ({ date }) => {
    // 토요일, 일요일, 그리고 지난 날짜는 비활성화
    const currentDate = new Date();
    const isSaturday = date.getDay() === 6;
    const isSunday = date.getDay() === 0;
    const isPastDate = date < currentDate;
    return isSaturday || isSunday || isPastDate;
  };

  const formatDay = (locale, date) => {
    const day = date.toLocaleString(locale, { day: '2-digit' }).slice(-2);
    return day.startsWith('0') ? day.slice(1) : day;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      // 해당 월에 있는 평일의 폰트 색상 변경
      const currentDate = new Date();
      const isCurrentMonth = date.getMonth() === currentDate.getMonth();
      const isWeekday = date.getDay() !== 0 && date.getDay() !== 6;
      return isCurrentMonth && isWeekday ? 'active' : null;
    }
    return null;
  };

  const tileContent = ({ date }) => {
    if (date === hoveredDate) {
      return null;
    }
    return <abbr className='date'>{formatDay('en', date)}</abbr>;
  };

  const isPastMonth = (date) => {
    const currentDate = new Date();
    return (
      date.getMonth() < currentDate.getMonth() &&
      date.getFullYear() <= currentDate.getFullYear()
    );
  };

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    return new Intl.DateTimeFormat('ko', options).format(date);
  };

  return (
    <ReservationSection>
      <StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        onClickMonth={removeYearNavigation}
        calendarType='US'
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        tileDisabled={tileDisabled}
        onMouseOver={handleDateHover}
        onFocus={handleDateHover}
      />
      <SelectedDate>
        <span className='a11y-hidden'>선택한 날짜: </span>
        {formatDate(selectedDate, 'ko')}
      </SelectedDate>
    </ReservationSection>
  );
}

export const ReservationSection = styled.section`
  padding: 30px;
  margin-top: 48px;
`;

export const StyledCalendar = styled(Calendar)`
  border: none;
  text-align: center;

  .react-calendar__navigation {
    font-size: 18px;
  }

  .react-calendar__month-view__weekdays {
    font-size: 14px;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    flex-direction: row;
    justify-content: space-between;
    abbr {
      color: #767676;
      font-size: 14px;
      font-weight: normal;
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    font-size: 14px;
    width: 24px;
    height: 48px;
    abbr {
      display: block;
      border: 1px solid #036635;
      padding: 7px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
      box-sizing: border-box;
    }
    abbr[aria-label='Saturday'],
    abbr[aria-label='Sunday'] {
      color: #767676;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }

  .react-calendar__tile--now {
    background: none;
    color: #036635;
  }

  /* 비활성화된 날짜의 배경색 설정 */
  .react-calendar__tile:disabled {
    background-color: #fff;
  }

  /* 해당 월에 있는 평일의 폰트 색상 변경 */
  .react-calendar__month-view {
    color: #036635;
  }

  /* 지난달 날짜의 폰트 색상 변경 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  /* 호버 및 포커스 시 버튼 배경색 없애기 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #fff;
    outline: none;
  }
  
  /* 날짜 클릭 시 abbr 배경색 및 폰트 색상 변경 */
  .react-calendar__tile--active abbr {
    background-color: #036635;
    color: #fff;
  }
`;
export const SelectedDate = styled.p`
  margin-top: 36px;
  padding: 16px 12px;
  border: 0.5px solid #767676;
  border-radius: 8px;
`;
