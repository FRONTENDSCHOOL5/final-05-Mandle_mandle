import axios from 'axios';

export default async function PostComment(postId, token, inputComment) {
  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments`,
      {
        comment: {
          content: `${inputComment}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.comment;
  } catch (error) {
    console.error(error);
  }
}
