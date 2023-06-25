import styled from 'styled-components';
export const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 60px - 48px);

  ul {
    padding: 20px 16px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
`;
export const ProfileWrap = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 6px;
  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 18px;
    height: 20px;
  }

  div + p {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
  }
`;
