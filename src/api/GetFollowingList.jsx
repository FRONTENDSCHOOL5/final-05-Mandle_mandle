import { UserAtom } from '../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import React from 'react';

export const GetFollowingList = async (accountname, token) => {
  const userInfo = useRecoilValue(UserAtom);
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/following`;
  try {
    const res = await axios(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
