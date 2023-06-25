import axios from 'axios';

export default async function PostClassAdd({token, navigate, requestBody}) {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/product',
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      navigate('/class');
      console.log(response);
    } else {
      console.log('Error:', response);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}
