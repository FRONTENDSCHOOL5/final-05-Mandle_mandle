import axios from 'axios';
import { AUTH_TOKEN, BASE_URL } from './constants';

// 기본 POST 요청 API
export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// req 없음, GET API 요청에 사용 (이미지 보기)
export const axiosUrlApi = axios.create({
  baseURL: BASE_URL,
});

// '이미지 업로드' POST API 요청에 사용
export const axiosImgApi = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'multipart/form-data' }, // 이미지 업로드 POST를 위해 form-data를 Content-type으로 설정
});

// token만 req, GET API 요청에 사용
export const axiosTokenApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

// Content-Type만 req, 회원가입, 로그인, 이메일 검증 등의 POST API 요청에 사용
export const axiosInfoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
