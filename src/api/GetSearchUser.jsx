import axios from 'axios';

export default async function GetFollowPost(keyword, token) {
  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}
