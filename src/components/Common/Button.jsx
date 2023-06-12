import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  text-align: center;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.br};
`;
