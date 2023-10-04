import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  width: 358px;
  height: 72px;
  border: 1px solid var(--sub-font-color);
  position: relative;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 16px;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
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
  border-radius: 4px;
  margin: 10px;
`;

export default function Dropdown(props) {
  const { value, setClassIdentify, img, setIsOpen, isOpen } = props;
  const ValueClick = () => {
    setClassIdentify(value);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ImageBox src={img} />
      <DropdownItem onClick={ValueClick}>{value}</DropdownItem>
    </>
  );
}

export { DropdownContainer, DropdownButton, DropdownMenu, ImageBox };
