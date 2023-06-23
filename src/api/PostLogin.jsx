import axios from "axios";

export default async function PostLogin(email, password) {
  try {
    const response = await axios.post(
      "https://api.mandarin.weniv.co.kr/user/login",
      {
        user: {
          email: email,
          password: password,
        },
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
