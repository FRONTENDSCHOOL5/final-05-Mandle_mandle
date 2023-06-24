import { UserAtom } from '../../src/Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import React from 'react';

const FollowingList = async ([accountname, token]) => {
  const userInfo = useRecoilValue(UserAtom);
  const url = `https://mandarin.api.weniv.co.kr/profile/${accountname}/following`;
  try {
    const res = await axios(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
