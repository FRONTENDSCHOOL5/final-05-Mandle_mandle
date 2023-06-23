import axios from 'axios';

export default async function PostReportPost(postId, token) {
  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr/post/${postId}/report`,
      {},
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
