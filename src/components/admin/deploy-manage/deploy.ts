import { ref } from "vue";
import { APIResponse } from "@axios/types";
import serviceAPI from "@api/services";
import { defaultInstance } from "@axios/instance";
import router from "@/router/index";
interface DeployListType {
  host: string;
  image: string;
  gpu: string;
  containerId: string;
  status: string;
}
interface DeployListResType extends APIResponse {
  content: DeployListType[];
  totalPages: number;
  totalElements: number;
}
