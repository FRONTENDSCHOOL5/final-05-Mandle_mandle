import axios from 'axios';

export default async function PostReportComment(postId, commentId, token) {
  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}/report`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}
