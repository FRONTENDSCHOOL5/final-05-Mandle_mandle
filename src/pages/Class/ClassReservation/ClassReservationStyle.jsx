import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: var(--font-md);
  font-weight: normal;
  position: absolute;
  top: 16px;
  left: 48px;
`;

export const Reservations = styled.main`
  padding: 30px;
  height: calc(100% - 48px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ClassIntroBox = styled.div`
  h2 {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 6px;
    margin-bottom: 10px;
  }
`;

export const ClassIntro = styled.div`
  padding: 10px;

  box-shadow: 0px 1px 2px 0px rgba(118, 118, 118, 0.25);
  border: 1px solid var(--border-color);
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
      vertical-align: top;

      box-shadow: 0px 1px 2px 0px rgba(118, 118, 118, 0.25);
      object-fit: cover;
    }
    div {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;

      span {
        font-weight: var(--font--bold);
        font-size: var(--font-lg);
        margin-right: 2px;
      }
    }
  }
`;
