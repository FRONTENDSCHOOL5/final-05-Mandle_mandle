import axios from 'axios';

export default async function DeletePost(postId, token) {
  try {
    const response = await axios.delete(
      `https://api.mandarin.weniv.co.kr/post/${postId}`,
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
