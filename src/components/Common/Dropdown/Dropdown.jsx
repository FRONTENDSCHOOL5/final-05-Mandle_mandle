import React from 'react';
import styled from 'styled-components';
import DropdownItem from './DropItem';
import { ImageBox } from './DropItem';

import { TeacherDropItem } from './DropItem';
const DropdownContainer = styled.div`
  width: 358px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  margin-top: 16px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid var(--sub-font-color);
  text-align: left;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

export default function Dropdown(props) {
  const {
    value,
    setClassIdentify,
    setSelectDate,
    setSelectTime,
    date,
    time,
    setClassImg,
    img,
    setIsOpen,
    isOpen,
    id,
    setSelectId,
  } = props;

  return (
    <>
      <DropdownItem
        value={value}
        setClassIdentify={setClassIdentify}
        setClassImg={setClassImg}
        img={img}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        date={date}
        setSelectDate={setSelectDate}
        setSelectTime={setSelectTime}
        id={id}
        setSelectId={setSelectId}
        time={time}
      />
    </>
  );
}

export function TeacherDropdown(props) {
  const {
    value,
    setClassIdentify,
    img,
    classTag,
    setClassTag,
    setClassImg,
    setIsOpen,
    isOpen,
    id,
    setSelectId,
    price,
    setPrice,
  } = props;
  return (
    <>
      <TeacherDropItem
        value={value}
        classTag={classTag}
        setClassTag={setClassTag}
        setClassIdentify={setClassIdentify}
        setClassImg={setClassImg}
        img={img}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        id={id}
        setSelectId={setSelectId}
        price={price}
        setPrice={setPrice}
      />
    </>
  );
}

export { DropdownContainer, DropdownButton, DropdownMenu, ImageBox };
