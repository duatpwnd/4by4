import { AxiosInstance, AxiosResponseHeaders, AxiosRequestConfig } from "axios";
export interface InstanceType {
  authInstance?: AxiosInstance;
  defaultInstance?: AxiosInstance;
}
export interface APIResponse {
  statusText: string;
  status: number; // 상태코드 (서버상태코드)
  request?: any;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<any>;
  message: string; // 메시지
}
