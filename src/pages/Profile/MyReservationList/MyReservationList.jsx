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

  const resData = JSON.parse(localStorage.getItem('resInfo'))[userInfo.id]; // 리코일에 저장된 클래스 id 값
  //Recoil에 저장된 예약한 클래스 아이디
  const classId = resData.map((reservation) => reservation.class_id);

  // Recoil에 저장된 예약한 클래스 날짜/시간 정보

  const classDate = resData.map((reservation) => reservation.reserve_ko_date);
  const classTime = resData.map((reservation) => reservation.reserve_time);
  const classImage = resData.map((reservation) => reservation.image);
  console.log(resData);
  // 현재 날짜 및 시간 가져오기
  const currentDate = new Date();

  // 수강한 클래스와 예약한 클래스를 구분하기 위한 배열 초기화
  const attendedClasses = [];
  const reservedClasses = [];

  return (
    <div>
      <ReservationList>
        <GoBackNav />
        <h1>예약한 클래스</h1>
        <h2>수강예정 클래스</h2>
        {resData.length > 0 ? (
          <ul>
            {resData.map((classItem, index) => (
              <li key={classId + index}>
                <p>예약 날짜: {classDate}</p>
                <image src={classImage} />
                <p>예약 시간: {classTime}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>예약한 클래스가 없습니다.</p>
        )}
      </ReservationList>
      <h2>수강한 클래스</h2>
      {attendedClasses.length > 0 ? (
        <ul>
          {attendedClasses.map((classItem, index) => (
            <li key={classItem.class_id + index}>
              <p>예약 날짜: {classItem.reserve_date}</p>
              <p>예약 시간: {classItem.reserve_time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>수강한 클래스가 없습니다.</p>
      )}
    </div>
  );
};
export default MyReservationList;
