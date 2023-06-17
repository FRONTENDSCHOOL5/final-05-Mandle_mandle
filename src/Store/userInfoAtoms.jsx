import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// 로그인된 유저 정보 저장
export const UserAtom = atom({
  key: "UserAtom",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
