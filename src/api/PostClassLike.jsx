import axios from 'axios';

export default async function PostClassLike(id, token, requestBody) {
console.log('ID:', id, "토큰값 :",token,requestBody)
  try {

    const response = await axios.put(
      `https://api.mandarin.weniv.co.kr/product/${id}`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  console.log(response.data)
    // if (response.status === 200) {
    //   console.log('찜하기 API 호출 성공');
    //   console.log('API 응답 데이터:', response); // API 응답 데이터 출력
    //   return response.data; // API 응답 데이터 반환
    // } else {
    //   console.log('Error:', response);
    //   throw new Error('API 호출 실패'); // 에러를 throw하여 호출하는 곳에서 처리할 수 있도록 함
    // }
  } catch (error) {
    console.error(error);
    throw error; // 에러를 throw하여 호출하는 곳에서 처리할 수 있도록 함
  }
};
// 종료하도록 하겠습니다 수고하셨습니다