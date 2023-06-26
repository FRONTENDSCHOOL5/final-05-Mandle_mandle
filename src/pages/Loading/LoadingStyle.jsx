import styled from 'styled-components';

export const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  justify-content: center;


  @keyframes bounce {
    from {
      transform: translateY(15px);
    }
    to {
      transform: translateY(0px);
    }
  }
 
  }

  .bounce {
    animation: bounce 0.5s infinite alternate;
  }
`;
