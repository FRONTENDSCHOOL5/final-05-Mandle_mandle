import axios from 'axios';

export default async function DeleteHeart({ postId, commentId, token }) {
  try {
    const response = await axios.delete(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}`,
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
