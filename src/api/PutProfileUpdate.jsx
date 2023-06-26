import axios from 'axios';

export default async function PutProfileUpdate(updatedUserValue, token) {
  try {
    const response = await axios.put(
      'https://api.mandarin.weniv.co.kr/user',
      {
        user: {
          username: updatedUserValue.username,
          accountname: updatedUserValue.accountname,
          intro: updatedUserValue.intro,
          image: updatedUserValue.image,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
