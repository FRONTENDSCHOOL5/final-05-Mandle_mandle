import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import UserList from '../../../components/Common/UserList';
import GetSearchUser from '../../../api/GetSearchUser';
import { UserAtom } from '../../../Store/userInfoAtoms';
import MenuBar from '../../../components/Common/MenuBar';
import { SearchNav } from '../../../components/Common/TopNav';
import { MainWrap } from './SearchStyle';
export default function Search() {
  const [userValue] = useRecoilState(UserAtom); // UserAtom값 불러오기
  const [userData, setUserData] = useState(null);
  const token = userValue.token; // token값 추출

  const handleKeywordChange = async (e) => {
    const keyword = e.target.value;
    const response =
      keyword.trim() === '' ? null : await GetSearchUser(keyword, token);
    setUserData(response);
  };

  return (
    <>
      <SearchNav token={token} onChange={handleKeywordChange}></SearchNav>
      <MainWrap>
        <ul>
          {userData ? userData.map((user) => <UserList user={user} />) : ''}
        </ul>
      </MainWrap>
      <MenuBar />
    </>
  );
}
