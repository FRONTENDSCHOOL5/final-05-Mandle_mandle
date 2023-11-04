import axios from 'axios';

export async function ProfileData(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}`;
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data.profile;
  } catch (err) {
    console.error(err);
  }
  return null;
}
export async function ClassData(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/product/${accountname}`;
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
export async function PostData(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
