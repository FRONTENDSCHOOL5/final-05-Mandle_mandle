import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// export const userInfoState = atom({
//   key: 'userInfoState',
//   default: {}, // 초기값은 빈 객체로 설정합니다.
//   effects_UNSTABLE: [persistAtom],
// });
export const tokenState = atom({
  key: 'tokenState',
  default: '', // 초기값은 빈 문자열로 설정합니다.
  effects_UNSTABLE: [persistAtom],
});
