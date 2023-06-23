import axios from 'axios';

export default async function FollowerList(account) {
  try {
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr//profile/:accountname/follower'
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// SUCCESS
// follower 한 사용자가 있을 때
// [
//     {
//     "_id": String,
//     "username": String,
//     "accountname": String,
//     "intro": String,
//     "image": String,
//             "isfollow": Boolean,
//     "following": [],
//     "follower": [
//         "접속한 사용자의 id"
//     ],
//     "followerCount": 1,
//     "followingCount": 0
// }
// ]

// // follower 한 사용자가 없을 때
// []

// // FAIL
// // 계정이 존재하지 않을 때
// 해당 계정이 존재하지 않습니다.
