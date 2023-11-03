import styled from 'styled-components';
import React from 'react';

import GoBackButton from '../Common/GoBackButton';

export default function AccountHeader({ title }) {
  return (
    <AccountHeaderStlye>
      <GoBackButton />
      <h1>{title}</h1>
    </AccountHeaderStlye>
  );
}
export const AccountHeaderStlye = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 33px 34px 40px;

  button {
    position: absolute;
    left: 34px;
  }

  h1 {
    font-size: var(--font-xl);
  }
`;
