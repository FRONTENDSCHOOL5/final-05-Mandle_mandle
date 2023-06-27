import axios from 'axios';
export async function GetUserProfileImage(token, setUserImage) {
  try {
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr/user/myinfo',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setUserImage(response.data.user.image);
  } catch (error) {
    console.error(error);
  }
}
