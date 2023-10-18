import React from 'react';
import styled from 'styled-components';

export const DropdownP = styled.p`
  font-size: 12px;
  color: var(--sub-font-color);
`;

export default function DropdownTag(props) {
  const { classTag, price } = props;
  return (
    <DropdownP>
      {classTag} / {price}
    </DropdownP>
  );
}
