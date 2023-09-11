import React, { useEffect, useState } from 'react';
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
  const [query, setQuery] = useState(''); // 검색어 값 관리

  const token = userValue.token; // token값 추출

  const handleKeywordChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    // 1. setTimeout을 사용하여 1초의 지연 시간 설정
    const delayDebounceTimer = setTimeout(async () => {
      // 2. 빈 문자열이나 공백만 있는 경우, 요청 중단
      if (query.trim() === '') {
        setUserData(null);
        return;
      }

      // 3. 1초 후에 API 요청 시작
      const response = await GetSearchUser(query, token);
      setUserData(response);
    }, 1000); // 1s 디바운스 지연 시간

    // 재랜더링, 언마운트 이전에 설정한 타이머를 클리어하여 디바운스 취소
    return () => clearTimeout(delayDebounceTimer);
  }, [query, token]);

  return (
    <>
      <SearchNav token={token} onChange={handleKeywordChange}></SearchNav>
      <MainWrap>
        <ul>
          {userData
            ? userData.map((user) => <UserList key={user.id} user={user} />)
            : ''}
        </ul>
      </MainWrap>
      <MenuBar />
    </>
  );
}
