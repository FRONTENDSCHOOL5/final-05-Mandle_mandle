import styled from 'styled-components';

export const SplashWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  @keyframes bounce {
    from {
      transform: translateY(15px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes twist {
    20% {
      transform: rotate(0deg);
    }

    40% {
      transform: rotate(-10deg);
    }

    50% {
      transform: rotate(10deg);
    }

    60% {
      transform: rotate(-10deg);
    }

    70% {
      transform: rotate(10deg);
    }

    80% {
      transform: rotate(0deg);
    }
  }

  .twist {
    animation: twist 3s infinite alternate;
  }

  .bounce {
    animation: bounce 0.6s infinite alternate;
  }
`;
