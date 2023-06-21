import axios from 'axios';

export default async function GetCommentList(postId, token) {
  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments`,
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
