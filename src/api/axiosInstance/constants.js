import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';

const Constans = () => {
  const userInfo = useRecoilValue(UserAtom);

  const token = userInfo.token;
  return token;
};

export const AUTH_TOKEN = Constans(); // 추출한 token값
export const BASE_URL = 'https://api.mandarin.weniv.co.kr/';
