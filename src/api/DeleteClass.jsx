import axios from 'axios';

export default async function DeleteClass(classId, token) {
  try {
    const response = await axios.delete(
      `https://api.mandarin.weniv.co.kr/product/${classId}`,
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
