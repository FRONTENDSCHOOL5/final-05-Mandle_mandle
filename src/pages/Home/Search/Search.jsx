import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import MenuBar from '../../../components/Common/MenuBar';
import { SearchNav } from '../../../components/Common/TopNav';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilState } from 'recoil';
import GetSearchUser from '../../../api/GetSearchUser';
import BasicProfileImg from '../../../assets/img/basic-profile-img.svg';
export default function Search() {
  const [userValue] = useRecoilState(UserAtom); // UserAtom값 불러오기
  const [accountData, setAccountData] = useState(null);
  const token = userValue.token; // token값 추출

  const handleKeywordChange = async (e) => {
    const keyword = e.target.value;
    const response =
      keyword.trim() === '' ? null : await GetSearchUser(keyword, token);
    setAccountData(response);
    console.log(keyword, response);
  };

  return (
    <>
      <SearchNav token={token} onChange={handleKeywordChange}></SearchNav>
      <MainWrap>
        <ul>
          {accountData
            ? accountData.map((account) => (
                <li key={account._id}>
                  <ProfileWrap to={`/profile/${account.accountname}`}>
                    <div>
                      <img
                        src={
                          account.image ===
                          'http://146.56.183.55:5050/Ellipse.png'
                            ? BasicProfileImg
                            : account.image
                        }
                        alt='프로필 이미지'
                      />
                    </div>
                    <ProfileInfo>
                      <div>
                        <p>{account.username}</p>
                      </div>
                      <p>{account.accountname}</p>
                    </ProfileInfo>
                  </ProfileWrap>
                </li>
              ))
            : ''}
        </ul>
      </MainWrap>
      <MenuBar />
      cc
    </>
  );
}
const MainWrap = styled.main`
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
const ProfileWrap = styled.a`
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

const ProfileInfo = styled.div`
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
