import styled from 'styled-components';
import React from 'react';

export function ClassPost({mainImg, tag, title}) {

  return (
    <ClassPostWrap
      src=''
      width='180px'
      height='200px'
      padding='10px 6px 0'
      alt=''
    >
      <img src={mainImg} alt='' />
      <div>
        <p>{tag}</p>
        <h3>{title}</h3>
      </div>
    </ClassPostWrap>
  );
}

export function ClassPostMini({miniImg, miniTag, miniName}) {
  return (
    <ClassPostWrap
      src=''
      width='140px'
      height='136px'
      padding='6px 4px 0'
      alt=''
      
    >
      <img src={miniImg} alt='' />
      <div>
        <p>{miniTag}</p>
        <h3>{miniName}</h3>
      </div>
    </ClassPostWrap>
  );
}

const ClassPostWrap = styled.article`
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
  h3 {
    font-size: var(--font-md);
    color: var(--font-color);
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
`;
