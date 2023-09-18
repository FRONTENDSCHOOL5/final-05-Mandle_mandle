import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: var(--font-md);
  font-weight: normal;
  position: absolute;
  top: 16px;
  left: 48px;
`;

export const Reservations = styled.main`
  height: calc(100% - 48px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ClassIntro = styled.div`
  width: 84%;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 3px 3px 5px var(--sub-font-color);
  border-radius: 10px;
  position: relative;
  img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    vertical-align: top;
    box-shadow: 3px 3px 5px var(--sub-font-color);
    object-fit: cover;
  }
  h2 {
    font-size: var(--font-md);
    line-height: 94px;
    position: absolute;
    left: 94px;
    top: 0;
  }
`