import axios from 'axios';

export default async function DeleteFollow(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`;

  try {
    const reponse = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return reponse.data; // Modify this based on the actual response structure
  } catch (error) {
    console.log(error);
    return null;
  }
}
