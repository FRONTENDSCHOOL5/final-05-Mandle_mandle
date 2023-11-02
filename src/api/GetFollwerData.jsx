import axios from 'axios';

export default async function GetFollowingData(
  accountname,
  token,
  page = 1,
  pageSize = 10
) {
  const skip = (page - 1) * pageSize;
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/following/?limit=${pageSize}&skip=${skip}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
