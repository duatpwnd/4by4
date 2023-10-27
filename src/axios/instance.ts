import axios, { AxiosInstance } from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export const defaultInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: cookies.get("token"),
  },
});
export const authInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,

  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + cookies.get("token"),
  },
});
defaultInstance.interceptors.request.use(
  function (config) {
    console.log(config);
    if (cookies.get("token") !== null) {
      config.headers.Authorization = cookies.get("token");
    }
    // const signOut = inject("signOut");
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    console.log(error);
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
defaultInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    console.log(error);
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
