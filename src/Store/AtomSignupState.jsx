import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//회원가입 토큰 정보
export const SignUpAtom = atom({
  key: "SignUpAtom",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
