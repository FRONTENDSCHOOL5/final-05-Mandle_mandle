import axios from 'axios';

export default async function GetPostDetail(postId, token) {
  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/post/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    // data 객체 중 post 객체 받아오기
    return response.data.post;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
