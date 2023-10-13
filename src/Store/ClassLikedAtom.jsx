import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const ClassLikeAtom = atom({
  key: 'ClassLike',
  default: [],
  effects_UNSTABLE: [persistAtom],
});