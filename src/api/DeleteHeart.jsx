import axios from 'axios';

export default async function DeleteHeart(postId, token) {
  try {
    const response = await axios.delete(
      `https://api.mandarin.weniv.co.kr/post/${postId}/unheart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );

    return response.data.post;
  } catch (error) {
    console.error(error);
  }
  return null;
}
