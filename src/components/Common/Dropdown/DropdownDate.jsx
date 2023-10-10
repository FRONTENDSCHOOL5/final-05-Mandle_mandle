import React from 'react';
import styled from 'styled-components';

export const DropdownP = styled.p`
  font-size: 12px;
  color: var(--sub-font-color);
`;

export default function DropdownDate(props) {
  const { date, time } = props;
  return (
    <DropdownP>
      {date}/{time}
    </DropdownP>
  );
}
