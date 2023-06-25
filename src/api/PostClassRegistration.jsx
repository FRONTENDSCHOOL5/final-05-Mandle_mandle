import axios from 'axios';

export default async function PostClassRegistration({
  token,
  navigate,
  requestBody,
}) {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/product',
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      navigate('/class');
    } else {
      console.log('Error:', response);
    }
  } catch (error) {
    console.error(error);
  }
}
