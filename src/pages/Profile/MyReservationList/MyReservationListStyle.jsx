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
  li {
    width: 300px;
    height: 52px;
    display: felx;
    margin: 15px;
    gap: 10px;
  }
  .textWrap {
    width: 300px;
    display: grid;
    align-content: space-evenly;
  }
  .classImg {
    width: 52px;
    height: 52px;
  }
`;

export default ReservationList; // 스타일된 컴포넌트를 내보냄
