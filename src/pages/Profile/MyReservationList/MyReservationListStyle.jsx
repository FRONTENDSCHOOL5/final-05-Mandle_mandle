import styled from 'styled-components';

// ReservationList라는 스타일된 컴포넌트 정의
const ReservationList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 16px 0;
    height: 765px;
    overflow: scroll;
  }
  h1 {
    position: absolute;
    top: 16px;
    left: 45px;
  }
`;

export default ReservationList; // 스타일된 컴포넌트를 내보냄
