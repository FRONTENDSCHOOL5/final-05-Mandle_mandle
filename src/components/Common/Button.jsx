import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  text-align: center;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.br};
`;

// //예시
// <ButtonDiv>
//   <ButtonStyle type='button' bg='black' width='432px' height='56px' br='4px'>
//     다음
//   </ButtonStyle>
// </ButtonDiv>;
