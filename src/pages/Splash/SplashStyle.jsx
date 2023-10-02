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

  @keyframes fade-out-logo {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .twist {
    animation: twist 3s alternate, fade-out-logo 0.3s ease-in 3s;
  }

  .bounce {
    animation: bounce 0.6s infinite alternate;
  }
`;
