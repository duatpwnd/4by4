import { AxiosInstance } from "axios";
interface InstanceType {
  authInstance?: AxiosInstance;
  defaultInstance?: (
    url: string,
    options: {
      headers: {
        "content-type": string;
      };
    }
  ) => AxiosInstance;
}
export default InstanceType;
