import axios from 'axios';

export default async function PutPostEdit(token, postData, images) {
  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr/post`,
      {
        post: {
          content: `${postData.inputValue} ${postData.classInfo} `,
          image: images,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}
