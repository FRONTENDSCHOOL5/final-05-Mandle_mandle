import axios from 'axios';

export default async function PutPostEdit(token, postId) {
  try {
    const response = await axios.put(
      `https://api.mandarin.weniv.co.kr/post/${postId}`,
      {
        post: {
          content: postId.content,
          image: postId.image,
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
