import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const SetProfile = atom({
  key: 'setProfileAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
