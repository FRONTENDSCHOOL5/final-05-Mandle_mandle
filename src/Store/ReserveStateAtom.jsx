import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const ReserveDataState = atom({
  key: 'regDataState',
  default: {
    reservations: []
  },
  effects_UNSTABLE: [persistAtom],
});

// Mandletest2!