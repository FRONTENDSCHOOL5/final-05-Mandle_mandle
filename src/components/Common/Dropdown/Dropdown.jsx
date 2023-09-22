import React from 'react';
import styled from 'styled-components';
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

export default function Dropdown(props) {
  const { value, setClassIdentify, setIsOpen, isOpen } = props;
  const ValueClick = () => {
    setClassIdentify(value);
    setIsOpen(!isOpen);
  };
  return <DropdownItem onClick={ValueClick}>{value}</DropdownItem>;
}

export { DropdownContainer, DropdownButton, DropdownMenu };
