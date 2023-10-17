import styled from 'styled-components';

// ReservationList라는 스타일된 컴포넌트 정의
const ReservationList = styled.div`
  h1 {
    position: absolute;
    top: 16px;
    left: 45px;
  }
  h2 {
    margin: 20px 30px;
    font-size: 14px;
  }
  ul {
    width: 330px;
    border: 1px solid #767676;
    border-radius: 10px;
    margin: 0 30px;
  }
  .reserved {
    background-color: rgb(177 212 195 / 20%);
  }
  .attended {
    background-color: #f2f2f2;
  }

  li {
    width: 300px;
    height: 72px;
    display: felx;
    margin: 15px;
    gap: 5px;
    background-color: white;
  }
  .textWrap {
    width: 300px;
    display: grid;
    align-content: center;
    gap: 2px;
  }
  .classItem {
    box-shadow: rgba(118, 118, 118, 0.25) 0px 1px 2px;
    border-radius: 10px;
  }
  .classImg {
    width: 52px;
    height: 52px;
    margin: 10px;
  }
  .reservationClass {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .reservationDate {
    font-size: 12px;
    color: #767676;
  }
  .reservationTime {
    font-size: 12px;
    color: #767676;
  }
  .classNone {
    margin: 10px;
  }
`;

export default ReservationList; // 스타일된 컴포넌트를 내보냄
