import styled from 'styled-components';

export const EditProfileWrap = styled.div`
  width: 390px;
`;

export const EditProfileHeader = styled.header`
  text-align: center;
  margin: 29px auto 12px;
  position: relative;
  h1 {
    font-size: var(--font-xl);
  }
  button {
    position: absolute;
    left: 34px;
  }
`;

export const EditProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${(props) => props.first && 'margin-top: 30px;'}
`;

export const ColorSet = styled.div`
  padding: 20px;
  #colorPicker {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 160px;
    left: 75%;
  }
`;

export const EditProfileButton = styled.button`
  &#submitBtn {
    display: block;
    width: 100%;
    height: 32px;
    background-color: var(--sub-color);
    color: rgb(255 255 255);
    border-radius: 32px;
    text-align: center;
    margin-top: 20px;
  }

  &#submitBtn.active {
    background-color: var(--main-color);
  }
`;
