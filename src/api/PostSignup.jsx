import axios from "axios";

export default async function PostSignUp(value) {
  try {
    const response = await axios.post(
      "https://api.mandarin.weniv.co.kr/user",
      {
        user: value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
