import styled from 'styled-components';

export const ClassStyle = styled.article`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  box-shadow: ${(props) => props.bs};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  text-align: center;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.br};
`;

export const ClassImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  vertical-align: ${(props) => props.va};
  border-radius: ${(props) => props.br};
`

export const ClassP = styled.p`
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  text-align: left;
`

export const ClassH1 = styled.h1`
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  text-align: left;
`


// import { ClassStyle } from "./components/Common/ClassPost";
// import { ClassImg } from "./components/Common/ClassPost";
// import { ClassP } from "./components/Common/ClassPost";
// import { ClassH1 } from "./components/Common/ClassPost";
// import candleT1 from "./assets/img/temp/candleT1.png"

{/* 
<ClassStyle
type="article"
width="180px"
height="200px"
bg="#fff"
br="5px"
bs="2px 2px 8px rgba(0, 0, 0, .1)">
<ClassImg src={candleT1}
  width='180px'
  br='5px 5px 0 0'
  va='top'>
</ClassImg>
<ClassP
  color='#767676'
  padding='9px 0 7px 6px'
  fontsize='12px' 
  // fontsize='1.2rem'
  //! GlobalStyle에서 기본값을 10px로 설정했는데 왜 안되는지 확인
>
  생활
</ClassP>
<ClassH1
  color='#000'
  fontsize='14px'
  padding='0 0 0 6px'
>
  향초 만들기 클래스
</ClassH1>
</ClassStyle>
 */}