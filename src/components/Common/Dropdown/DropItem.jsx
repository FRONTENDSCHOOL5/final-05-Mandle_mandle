import React from 'react';
import styled from 'styled-components';
import DropdownDate from './DropdownDate';
const DropdownItem = styled.li`
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const DropdonwTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ImageBox = styled.img`
  min-width: 52px;
  object-fit: cover;
  height: 52px;
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
    img,
    setIsOpen,
    isOpen,
  } = props;
  const handleItemClick = () => {
    setClassIdentify(value);
    setClassImg(img);
    setIsOpen(!isOpen);
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
