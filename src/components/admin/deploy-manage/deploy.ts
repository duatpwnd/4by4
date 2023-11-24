import { ref } from "vue";
import { APIResponse } from "@axios/types";
import serviceAPI from "@api/services";
import { defaultInstance } from "@axios/instance";
import router from "@/router/index";
interface DeployListType {
  host: string;
  image: string;
  gpu: string;
  npu: string;
  containerId: string;
  status: string;
}
interface DeployListResType extends APIResponse {
  content: DeployListType[];
  pageable: {
    pageNumber: number;
  };
  totalPages: number;
  totalElements: number;
}
const reqStatus = <const>[
  "running",
  "starting",
  "created,restarting,exited,paused,dead",
  "all",
];
const tab = <const>["DEPLOYED", "DEPLOYING", "ERROR", "ALL"];
const list = ref<DeployListType[]>([]);
const totalPages = ref(1);
const currentPage = ref(1);
export const getContainerList = (
  page: number,
  status: (typeof tab)[number]
) => {
  const findIndex = tab.findIndex((el) => el == status);
  console.log(findIndex);
  defaultInstance
    .get<DeployListResType>(
      serviceAPI.containerList +
        `?page=${page - 1}&size=10&sort=desc&status=${reqStatus[findIndex]}`
    )
    .then((result) => {
      console.log(result);
      list.value = result.data.content;
      totalPages.value = result.data.totalElements;
      currentPage.value = result.data.pageable.pageNumber + 1;
      router.push({
        query: {
          ...router.currentRoute.value.query,
          currentPage: page,
          currentStatus: status,
        },
      });
    });
  return {
    list,
    totalPages,
    currentPage,
  };
};
