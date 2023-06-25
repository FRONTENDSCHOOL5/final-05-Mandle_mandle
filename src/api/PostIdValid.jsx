import axios from 'axios';

export default async function PostIdValid(value) {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/accountnamevalid',
      {
        user: {
          accountname: value,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { message } = response.data;
    console.log(message);
    return message;
  } catch (error) {
    console.error(error);
  }
}
