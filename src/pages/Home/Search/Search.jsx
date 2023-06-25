import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SearchNav } from '../../../components/Common/TopNav';
import { UserAtom } from '../../../Store/userInfoAtoms';
import MenuBar from '../../../components/Common/MenuBar';
import GetSearchUser from '../../../api/GetSearchUser';
import BasicProfileImg from '../../../assets/img/basic-profile-img.svg';
import { MainWrap, ProfileWrap, ProfileInfo } from './SearchStyle';
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

  const navigate = useNavigate();
  const handleMoveProfile = () => {
    navigate(`/other_profile/${accountData.account}`);
  };

  const handleImage = (image) => {
    const regex = /^\d/;
    const accountImage = image.replace(
      'https://mandarin.api.weniv.co.kr/' ||
        'https://api.mandarin.weniv.co.kr/',
      '',
    );

    if (regex.test(accountImage)) {
      return `https://api.mandarin.weniv.co.kr/${accountImage}`;
    } else {
      return BasicProfileImg;
    }
  };

  return (
    <>
      <SearchNav token={token} onChange={handleKeywordChange}></SearchNav>
      <MainWrap>
        <ul>
          {accountData
            ? accountData.map((account) => (
                <li key={account._id}>
                  <ProfileWrap onClick={handleMoveProfile}>
                    <div>
                      <img
                        src={handleImage(account.image)}
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
    </>
  );
}
