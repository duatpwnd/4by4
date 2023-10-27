import { ref } from "vue";
import { APIResponse } from "@axios/types";
import serviceAPI from "@api/services";
import { defaultInstance } from "@axios/instance";
import router from "@/router/index";
interface ModelListType {
  modelId: string;
  projectName: string;
  modelName: string;
  imageName: string;
  tag: string;
}
interface ModelListResType extends APIResponse {
  content: ModelListType[];
  pageable: {
    pageNumber: number;
  };
  totalPages: number;
  totalElements: number;
}
const tab = <const>["REGISTERED", "UNREGISTERED", "ALL"];
// 모델 리스트 조회
const list = ref<ModelListType[]>([]);
const totalPages = ref(1);
const currentPage = ref(1);
export const getModelList = (page: number, status: (typeof tab)[number]) => {
  defaultInstance
    .get<ModelListResType>(
      serviceAPI.modelList +
        `?page=${
          page - 1
        }&size=10&sort=desc&status=${status.toLocaleLowerCase()}`
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
