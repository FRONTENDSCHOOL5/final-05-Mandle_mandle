import axios from 'axios';

export default async function userfollow(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follow`;

  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return response.data; // Modify this based on the actual response structure
  } catch (error) {
    console.log(error);
    return null;
  }
}
