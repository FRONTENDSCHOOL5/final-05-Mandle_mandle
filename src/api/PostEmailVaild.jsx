import axios from 'axios';

export default async function PostEmailValid(value) {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/emailvalid',
      {
        user: {
          email: value,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const json = response.data;

    return json.message;
  } catch (error) {
    console.error(error);
  }
}
