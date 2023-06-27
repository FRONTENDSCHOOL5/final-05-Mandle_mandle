import axios from 'axios';

export default async function GetFollowerList(account) {
  try {
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr//profile/:accountname/follower',
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
