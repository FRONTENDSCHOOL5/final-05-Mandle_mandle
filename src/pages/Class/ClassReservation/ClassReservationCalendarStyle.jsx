import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const StyledCalendar = styled(Calendar)`
  text-align: center;
  margin: 20px auto;
  && {
    border: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #fff;
    cursor: default;
  }

  .react-calendar__navigation {
    font-size: 18px;
  }

  .react-calendar__month-view__weekdays {
    font-size: var(--font-md);
  }

  /* 년도 변경 화살표 */
  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      color: var(--sub-font-color);
      font-weight: var(--font-regular);
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    padding: 4px;
    abbr {
      display: block;
      border: 1px solid var(--main-color);
      padding: 7px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0 auto;
    }
    &--now {
      background-color: #fff;
      abbr {
        border-radius: 50%;
        color: var(--main-color);
        border: 1px solid var(--main-color);
      }
    }
  }

  /* 토요일 일요일 폰트 색상 변경 */
  .react-calendar__month-view__days__day--weekend {
    abbr {
      color: #000;
    }
  }

  /* 비활성화된 날짜의 배경색 설정 */
  .react-calendar__tile:disabled {
    background-color: #fff;
    cursor: default;
    abbr {
      border: 0;
    }
  }

  /* 해당 월에 있는 평일의 폰트 색상 변경 */
  .react-calendar__month-view {
    color: var(--main-color);
  }

  /* 지난달 다음달 날짜의 폰트 색상 변경 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--sub-font-color);
    abbr {
      border: 0;
    }
  }

  /* 클릭, 호버, 포커스 시 버튼 배경색 없애기 */
  .react-calendar__tile--active,
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #fff;
  }

  /* 날짜 클릭 시 abbr 배경색 및 폰트 색상 변경 */
  .react-calendar__tile--active abbr {
    background-color: var(--main-color);
    color: #fff;
  }
`;

export const SelectedDate = styled.p`
  margin-bottom: 30px;
  padding: 20px 12px;
  border: 0.5px solid var(--sub-font-color);
  border-radius: 10px;
`;
