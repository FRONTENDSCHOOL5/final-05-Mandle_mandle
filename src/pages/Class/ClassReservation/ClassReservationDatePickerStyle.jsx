import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const ReservationSection = styled.section`
  padding: 30px;
`;

export const StyledCalendar = styled(Calendar)`
  border: none;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  outline: none;

  .react-calendar__navigation button:disabled {
    background-color: #fff;
    cursor: normal;
  }

  .react-calendar__navigation {
    font-size: 18px;
  }

  .react-calendar__month-view__weekdays {
    font-size: var(--font-md);
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    flex-direction: row;
    justify-content: space-between;
    abbr {
      color: var(--sub-font-color);
      font-size: var(--font-md);
      font-weight: var(--font-regular);
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    font-size: var(--font-md);
    width: 24px;
    height: 48px;
    abbr {
      display: block;
      border: 1px solid var(--main-color);
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
      color: var(--sub-font-color);
    }
    &--now {
      abbr {
        background: none;
        border: 1px solid var(--main-color);
        border-radius: 50%;
      }
    }
  }

  .react-calendar__tile--active {
    background-color: #fff;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }

  .react-calendar__tile--now {
    background: none;
    color: var(--main-color);
  }

  /* 비활성화된 날짜의 배경색 설정 */
  .react-calendar__tile:disabled {
    background-color: #fff;
    abbr {
      border: 0;
    }
  }

  /* 해당 월에 있는 평일의 폰트 색상 변경 */
  .react-calendar__month-view {
    color: var(--main-color);
  }

  /* 지난달 날짜의 폰트 색상 변경 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--sub-font-color);
    abbr {
      border: 0;
    }
  }

  /* 호버 및 포커스 시 버튼 배경색 없애기 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #fff;
    outline: none;
  }
  
  /* 날짜 클릭 시 abbr 배경색 및 폰트 색상 변경 */
  .react-calendar__tile--active abbr {
    background-color: var(--main-color);
    color: #fff;
  }
`;

export const SelectedDate = styled.p`
  margin-top: 20px;
  padding: 16px 12px;
  border: 0.5px solid var(--sub-font-color);
  border-radius: 8px;
`;
