import axios from 'axios';

export default async function GetClassData(token) {
  try {
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr/product/?limit=Number&skip=Number',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
