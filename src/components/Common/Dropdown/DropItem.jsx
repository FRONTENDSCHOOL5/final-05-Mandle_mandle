import React from 'react';
import styled from 'styled-components';
import DropdownDate from './DropdownDate';
import DropdownTag from './DropdownTag';
const DropdownItem = styled.li`
  cursor: pointer;
  /* border-bottom: 1px solid var(--border-color); */
  border: 1px solid var(--border-color);
  border-radius: 8px;
  border-top: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const DropdonwTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ImageBox = styled.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
`;

export default function DropItem(props) {
  const {
    value,
    setClassIdentify,
    date,
    time,
    setClassImg,
    setSelectDate,
    setSelectTime,
    img,
    setIsOpen,
    isOpen,
    id,
    setSelectId,
  } = props;
  const handleItemClick = () => {
    setClassIdentify(value);
    setClassImg(img);
    setSelectDate(date);
    setSelectTime(time);
    setIsOpen(!isOpen);
    setSelectId(id);
  };

  return (
    <>
      <DropdownItem onClick={handleItemClick}>
        <ImageBox src={img} />
        <DropdonwTextContainer>
          {value}
          <DropdownDate date={date} time={time} />
        </DropdonwTextContainer>
      </DropdownItem>
    </>
  );
}

export function TeacherDropItem(props) {
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
  const handleItemClick = () => {
    setClassIdentify(value);
    setClassTag(classTag);
    setClassImg(img);
    setIsOpen(!isOpen);
    setSelectId(id);
    setPrice(price);
  };

  return (
    <>
      <DropdownItem onClick={handleItemClick}>
        <ImageBox src={img} />
        <DropdonwTextContainer>
          {value}
          <DropdownTag classTag={classTag} price={price} />
        </DropdonwTextContainer>
      </DropdownItem>
    </>
  );
}

export const DropdownP = styled.p`
  font-size: 12px;
  color: var(--sub-font-color);
`;
