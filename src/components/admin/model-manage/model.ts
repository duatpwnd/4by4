import { ref, inject } from "vue";
import { APIResponse } from "@axios/types";
import serviceAPI from "@api/services";
import { defaultInstance } from "@axios/instance";
import router from "@/router/index";
import { useUserStore } from "@/store/user";
import { EventSourcePolyfill } from "event-source-polyfill";
import { EventType, Emitter } from "mitt";
interface ModelListType {
  modelId: string;
  projectName: string;
  modelName: string;
  imageName: string;
  tag: string;
  reg: boolean;
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
const userStore = useUserStore();
export const sseEvents = ref<EventSource | null>(null);
export const connectSSE = () => {
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive: boolean;
        message: string;
      }
    >
  >;
  sseEvents.value = new EventSourcePolyfill(
    import.meta.env.VITE_BASE_URL + serviceAPI.connectModelSSE,
    {
      headers: {
        Authorization: userStore.user!.token,
      },
    }
  );
  if (sseEvents.value !== null) {
    sseEvents.value.onopen = () => {
      console.log("connect model sse");
    };
    sseEvents.value.onmessage = (stream) => {
      console.log("model:", stream);
      try {
        if (typeof JSON.parse(stream.data) == "object") {
          const data = JSON.parse(stream.data);
          console.log("model:", data);
          if (data.reg) {
            console.log("모델 변경 감지");
            sseEvents.value!.close();
            getModelList(1, "ALL");
          }
          if (data.type == "error") {
            console.log("모델 에러 감지");
            sseEvents.value?.close();
            emitter.emit("update:alert", {
              isActive: true,
              message: data.message,
            });
          }
        }
      } catch (error) {}
    };
    sseEvents.value.onerror = (err) => {
      console.log("sse 연결이 끊겼습니다.");
      sseEvents.value!.close();
    };
  }
};
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
