import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

//  팔로우하고 있는 유저의 post를 저장
const { persistAtom } = recoilPersist();
export const setFollowpost = atom({
  key: 'setFollowFeed',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
