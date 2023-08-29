import styled from 'styled-components';

export const Skeleton = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #c4c4c4;
  animation: fade 2s infinite linear;

  @keyframes fade {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
