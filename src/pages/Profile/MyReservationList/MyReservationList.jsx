import React from 'react';
import { useRecoilValue } from 'recoil';
import { ReserveDataState } from '../../../Store/ReserveStateAtom'; // 아톰이 정의된 파일을 가져옵니다.
import { GoBackNav } from '../../../components/Common/TopNav';
import ReservationList from '../MyReservationList/MyReservationListStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserAtom } from '../../../Store/userInfoAtoms';

const MyReservationList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);

  const resInfo = JSON.parse(localStorage.getItem('resInfo'));
  const resData = resInfo && resInfo[userInfo.id] ? resInfo[userInfo.id] : [];

  // 현재 날짜 및 시간 가져오기
  const currentDate = new Date();
  function parseReserveDate(dateStr) {
    const regex = /(\w+), (\w+ \d{1,2}, \d{4}), (\d+) (AM|PM) GMT\+9/;
    const matches = dateStr.match(regex);

    if (matches) {
      const [, , baseDate, hour, meridiem] = matches;

      let convertedHour = parseInt(hour, 10);
      if (meridiem === 'PM' && convertedHour !== 12) {
        convertedHour += 12;
      } else if (meridiem === 'AM' && convertedHour === 12) {
        convertedHour = 0;
      }

      const formattedDate = `${baseDate} ${convertedHour}:00:00 GMT+0900`;
      return new Date(formattedDate);
    }

    // 일치하지 않는 경우, 올바르지 않은 날짜 형식이거나 예상치 못한 경우입니다.
    console.error('Invalid date format:', dateStr);
    return null;
  }

  // 수강한 클래스와 예약한 클래스를 구분하기 위한 배열 초기화
  const attendedClasses = [];
  const reservedClasses = [];
  if (resData && resData.length > 0) {
    resData.forEach((reservation) => {
      const reservationDate = parseReserveDate(reservation.reserve_common_date);

      if (currentDate > reservationDate) {
        attendedClasses.push(reservation);
      } else {
        reservedClasses.push(reservation);
      }
    });
  }
  console.log(attendedClasses, reservedClasses);
  const ReservationItem = ({ reservation }) => (
    <li key={reservation.class_id}>
      <img className='classImg' src={reservation.image} alt='Class Image' />
      <div className='textWrap'>
        <p>클래스: {reservation.className}</p>
        <p>예약 날짜: {reservation.reserve_ko_date}</p>
        <p>예약 시간: {reservation.reserve_time}</p>
      </div>
    </li>
  );

  return (
    <ReservationList>
      <GoBackNav />
      <h1>예약한 클래스</h1>
      <h2>수강예정 클래스</h2>
      {reservedClasses.length > 0 ? (
        <ul className='reserved'>
          {reservedClasses.map((reservation) => (
            <ReservationItem
              key={reservation.class_id}
              reservation={reservation}
            />
          ))}
        </ul>
      ) : (
        <p>예약한 클래스가 없습니다.</p>
      )}

      <h2>수강한 클래스</h2>
      {attendedClasses.length > 0 ? (
        <ul className='attended'>
          {attendedClasses.map((reservation) => (
            <ReservationItem
              key={reservation.class_id}
              reservation={reservation}
            />
          ))}
        </ul>
      ) : (
        <p>수강한 클래스가 없습니다.</p>
      )}
    </ReservationList>
  );
};
export default MyReservationList;
