import styled from 'styled-components';

export const Img = styled.img`
  transition: all 0.5s;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
  }
`;
export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || '#eee'};
`;
