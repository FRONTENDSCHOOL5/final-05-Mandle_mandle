import axios from 'axios';

export default async function PutProfileUpdate(updatedInfo, token) {
  console.log('잘 받아와졌나 확인스', updatedInfo);

  try {
    const response = await axios.put(
      'https://api.mandarin.weniv.co.kr/user',
      {
        user: updatedInfo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
