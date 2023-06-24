import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import { GoBackNav } from '../../components/Common/TopNav';

export const FollowWrap = styled.div`
  ul {
    #userDiv {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    padding: 10px;
  }
  h1 {
    position: absolute;
    top: 16px;
    left: 45px;
  }
`;
