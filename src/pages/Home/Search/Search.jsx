import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import SearchList from './SearchList';
import GetSearchUser from '../../../api/GetSearchUser';
import { UserAtom } from '../../../Store/userInfoAtoms';
import MenuBar from '../../../components/Common/MenuBar';
import { SearchNav } from '../../../components/Common/TopNav';
import { MainWrap } from './SearchStyle';
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
            ? accountData.map((account) => <SearchList account={account} />)
            : ''}
        </ul>
      </MainWrap>
      <MenuBar />
    </>
  );
}
