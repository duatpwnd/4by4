import axios, { AxiosInstance } from "axios";
import { useCookies } from "vue3-cookies";
import mitt from "mitt";
import { useUserStore } from "@/store/user";
import router from "@/router/index";
const emitter = mitt();
const { cookies } = useCookies();
export const defaultInstance: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
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
    if (cookies.get("token") !== null) {
      config.headers.Authorization = cookies.get("token");
    }
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
    if (error.response.status == 401) {
      const userStore = useUserStore();
      cookies.remove("token");
      userStore.putUserInfo(null);
      router.push("/sign-in");
      emitter.emit("update:alert", {
        isActive: true,
        message: "Logout has been processed.",
      });
    }
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
