import { atom } from 'recoil';

export const ClassDataAtom = atom({
  key: 'classData',
  default: {
    popularClasses: [],
    newClasses: [],
    page: 1,
  },
});