import axios from 'axios';

export default async function PutPostEdit(token, content, images) {
  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr/post`,
      {
        post: {
          content: content,
          image: images,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    );

    console.log('게시물 등록 성공!! :', response.data);
    // response.data.post.id;
    console.log(response.data.post.id);
    //postId가 있어야만 넘어갈 수 있게

    return response.data;
  } catch (error) {
    console.error('게시물 등록 실패!!:', error);
  }
  return null;
}
