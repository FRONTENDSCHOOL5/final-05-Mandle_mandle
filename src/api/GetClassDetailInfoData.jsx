import axios from 'axios';

export default async function GetClassDetailData(id, token) {
  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/product/detail/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.product;
  } catch (error) {
    console.log(error);
  }
}
