import { ref } from "vue";
import { APIResponse } from "@axios/types";
import serviceAPI from "@api/services";
import { defaultInstance } from "@axios/instance";
import router from "@/router/index";
import { useUserStore } from "@/store/user";
import { EventSourcePolyfill } from "event-source-polyfill";
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
const list = ref<DeployListType[]>([]);
const totalPages = ref(1);
const currentPage = ref(1);
const userStore = useUserStore();
export const tab = <const>["DEPLOYED", "DEPLOYING", "ERROR", "ALL"];
export const sseEvents = ref<EventSource | null>(null);
export const connectSSE = () => {
  sseEvents.value = new EventSourcePolyfill(
    import.meta.env.VITE_BASE_URL + serviceAPI.connectContainerSSE,
    {
      headers: {
        Authorization: userStore.user!.token,
      },
    }
  );
  if (sseEvents.value !== null) {
    sseEvents.value.onopen = () => {
      console.log("connect deploy sse");
    };
    sseEvents.value.onmessage = (stream) => {
      console.log(stream);
      try {
        if (typeof JSON.parse(stream.data) == "object") {
          const data = JSON.parse(stream.data);
          console.log("deploy:", data);
          if (data.isChanged) {
            sseEvents.value!.close();
            getContainerList(1, "ALL");
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
