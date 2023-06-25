import { React, useState } from 'react';
import { ReservationSection, StyledCalendar, SelectedDate } from './ClassReservationDatePickerStyle';

export function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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


  const tileDisabled = ({ date }) => {
    // 토요일, 일요일, 그리고 지난 날짜는 비활성화
    const currentDate = new Date();
    const isSaturday = date.getDay() === 6;
    const isSunday = date.getDay() === 0;
    const isPastDate = date < currentDate;
    return isSaturday || isSunday || isPastDate;
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
        // onMouseOver={handleDateHover}
        // onFocus={handleDateHover}
      />
      <SelectedDate>
        <span className='a11y-hidden'>선택한 날짜: </span>
        {formatDate(selectedDate, 'ko')}
      </SelectedDate>
    </ReservationSection>
  );
}

