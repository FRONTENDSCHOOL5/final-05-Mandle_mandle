import axios from 'axios';

export default async function GetFollowPost(post, token) {
  try {
    const response = await axios.delete(
      `https://api.mandarin.weniv.co.kr/post/${post.id}/heart`,
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
