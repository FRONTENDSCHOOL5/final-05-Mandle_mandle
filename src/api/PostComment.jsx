import axios from 'axios';

export default async function PostComment({ id, token, comment }) {
  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr//post/${id}/comments`,
      {
        comment: {
          content: comment,
        },
      },
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
