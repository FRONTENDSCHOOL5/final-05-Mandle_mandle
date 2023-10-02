import React from 'react';
import styled from 'styled-components';

export default function Dropdown(props) {
  const { value, setClassIdentify, img, setIsOpen, isOpen } = props;
  const ValueClick = () => {
    setClassIdentify(value);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ImageBox img={img} />
      <DropdownItem onClick={ValueClick}>{value}</DropdownItem>
    </>
  );
}

export { DropdownContainer, DropdownButton, DropdownMenu, ImageBox };

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const DropdownContainer = styled.div`
  width: 358px;
  height: 72px;
  border: 1px solid #ccc;
  position: relative;
  margin: 0 auto;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  text-align: left;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 1000;
`;

const ImageBox = styled.img`
  width: 52px;
  object-fit: cover;
  height: 52px;

  border: 1px solid #ccc;
  border-radius: 4px; // 필요에 따라 추가한 부분입니다. 원하지 않으면 삭제할 수 있습니다.
  margin: 10px; // 적절한 간격을 위해 추가하였습니다. 조절이 필요할 수 있습니다.
`;
