import styled from "styled-components";
import candleT1 from "../../assets/img/temp/candleT1.png";
import React from "react";

export default function ClassPost() {
  return (
    <ClassPostWrap
      src=""
      width="180px"
      height="200px"
      padding="10px 6px 0"
      alt=""
    >
      <img src={candleT1} alt="" />
      <div>
        <p>뷰티</p>
        <p>비누 만들기 클래스</p>
      </div>
    </ClassPostWrap>
  );
}

export function ClassPostMini() {
  return (
    <ClassPostWrap
      src=""
      width="180px"
      height="200px"
      padding="10px 4px 0"
      alt=""
    >
      <img src={candleT1} alt="" />
      <div>
        <p>뷰티</p>
        <p>비누 만들기 클래스</p>
      </div>
    </ClassPostWrap>
  );
}

const ClassPostWrap = styled.a`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(118, 118, 118, 0.25);
  border-radius: 5px;
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 180 / 120;
    border-radius: 5px 5px 0 0;
  }

  div {
    padding: ${(props) => props.padding};
  }
  p {
    color: var(--sub-font-color);
    font-size: var(--font-sm);
    margin-bottom: 8px;
  }
  p + p {
    font-size: var(--font-md);
    color: var(--font-color);
  }
`;
