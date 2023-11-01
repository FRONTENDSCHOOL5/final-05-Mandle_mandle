import { atom } from 'recoil';

export const ClassDataAtom = atom({
  key: 'classDataList',
  default: {
    popularClasses: [],
    newClasses: [],
    page: 1,
  },
});