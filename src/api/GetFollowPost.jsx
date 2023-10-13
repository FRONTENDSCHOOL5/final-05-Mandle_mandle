import axios from 'axios';

export default async function GetFollowPost(token, skip) {
  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/post/feed?limit=5&skip=${skip}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    // data 객체 중 posts 객체 받아오기
    return response.data.posts;
  } catch (error) {
    console.error(error);
  }
  return null; // try 실패 시 null값을 받아오도록
}
