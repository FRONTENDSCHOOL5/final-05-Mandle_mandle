import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: var(--font-md);
  font-weight: normal;
  position: absolute;
  top: 16px;
  left: 48px;
`;

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
  }
  h2 {
    font-size: var(--font-md);
    line-height: 94px;
    position: absolute;
    left: 94px;
    top: 0;
  }
`

export const ClassBanner = styled.div`
  position: relative;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: var(--font-lg);
  color: var(--main-color);
  font-weight: var(--font--bold);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.5;
  }
`;
