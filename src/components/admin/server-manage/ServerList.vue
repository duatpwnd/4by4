<template>
  <div class="filter-area">
    <button
      v-for="(item, index) in tab"
      :key="index"
      :class="currentStatus == item ? 'active' : ''"
      @click="currentStatus == item ? '' : getServerList(currentPage, item)"
    >
      {{ item }}
    </button>
  </div>
  <BaseTable :ths="ths" v-if="serverList.length > 0">
    <template #thead>
      <tr>
        <th v-for="(th, index) in ths" :key="index">
          {{ th }}
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, index) in serverList" :key="index">
        <td>
          {{ index + 1 + 10 * (currentPage - 1) }}
        </td>
        <td>{{ item.hostName }}</td>
        <td>{{ item.publicIp }}</td>
        <td class="resources">
          <div
            class="resources-items"
            v-for="(list, index) in item.gpuList"
            :key="index"
          >
            {{ list.type }}/{{ list.deviceName }}
          </div>
        </td>
        <td class="utilization">
          <div v-for="(list, index) in item.gpuList" :key="index">
            <BaseProgress :value="Number(list.usage).toFixed(2)" />
          </div>
        </td>
        <td class="control">
          <FontAwesomeIcon
            icon="gear"
            class="setting-button"
            @click="
              router.push(
                route.fullPath + `&type=settings&serverId=${item.serverId}`
              )
            "
          />
        </td>
      </tr>
    </template>
  </BaseTable>
  <Pagination
    v-if="serverList.length > 0"
    class="pagination"
    :total-items="totalPages"
    :show-icons="true"
    :showLabels="false"
    :slice-length="4"
    v-model="currentPage"
    @update:model-value="
      (currentPage) => {
        getServerList(currentPage, currentStatus);
      }
    "
  ></Pagination>
</template>
<script setup lang="ts">
  import { AxiosInstance } from "axios";
  import {
    onMounted,
    ref,
    inject,
    computed,
    onActivated,
    onDeactivated,
  } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  import serviceAPI from "@api/services";
  import { Pagination } from "flowbite-vue";
  import { APIResponse } from "@axios/types";
  import { EventSourcePolyfill } from "event-source-polyfill";
  import { useUserStore } from "@/store/user";
  interface ServerListType {
    status: string;
    hostName: string;
    publicIp: string;
    serverId: number;
    gpuList: {
      deviceName: string;
      usage: number;
      id: string;
      type: string;
    }[];
    cpuCoreCnt: number;
    cpuUsage: number;
    ramUsage: number;
    ramTotalSize: string;
    toggle: boolean;
  }
  interface ServerListResType extends APIResponse {
    content: ServerListType[];
    totalPages: number;
    totalElements: number;
  }
  interface KafkaStatusResType {
    data: boolean;
    resultMsg: string;
  }
  let sseEvents: EventSource;
  const ths = <const>["#", "Name", "IP", "Resources", "Utilization", "Control"];
  const tab = <const>["CONNECTED", "TERMINATED", "ALL"];
  const userStore = useUserStore();
  const activeTab = ref<(typeof tab)[number] | null>(null);
  const router = useRouter();
  const route = useRoute();
  const totalPages = ref(1);
  const currentPage =
    route.query.currentPage == undefined ? 1 : Number(route.query.currentPage);
  const currentStatus = computed<(typeof tab)[number]>(() => {
    const status = route.query.currentStatus as (typeof tab)[number];
    const getIndex = tab.indexOf(status);
    return getIndex == -1 ? "ALL" : status;
  });
  const serverList = ref<ServerListType[]>([]);
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isLoading: boolean }>
  >;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  // 카프가 상태 변경
  const changeKafkaStatus = (serverId: number, toggle: boolean) => {
    emitter.emit("update:loading", { isLoading: true });
    defaultInstance
      .put<KafkaStatusResType>(
        serviceAPI.serverToggle + `?serverId=${serverId}&toggle=${toggle}`
      )
      .then((result) => {
        emitter.emit("update:loading", { isLoading: false });
        getServerList(currentPage, currentStatus.value);
      });
  };
  // 서버 리스트 조회
  const getServerList = (page: number, status: (typeof tab)[number]) => {
    defaultInstance
      .get<ServerListResType>(
        serviceAPI.serverList +
          `?page=${
            page - 1
          }&size=10&sort=desc&status=${status.toLocaleLowerCase()}`
      )
      .then((result) => {
        console.log(result);
        serverList.value = result.data.content;
        totalPages.value = result.data.totalElements;
        router.push({
          query: {
            ...route.query,
            currentPage: page,
            currentStatus: status,
          },
        });
      });
  };
  const connectSSE = () => {
    sseEvents = new EventSourcePolyfill(
      import.meta.env.VITE_BASE_URL + serviceAPI.connectServerSSE,
      {
        headers: {
          Authorization: userStore.user!.token,
        },
      }
    );
    sseEvents.onopen = () => {
      console.log("connect server sse");
    };
    sseEvents.onmessage = (stream: any) => {
      console.log(stream);
      try {
        if (typeof JSON.parse(stream.data) == "object") {
          const data = JSON.parse(stream.data);
          const findIndex = serverList.value.findIndex((el) => {
            return data.serverId == el.serverId;
          });
          console.log(data.resource);
          serverList.value[findIndex].gpuList = data.resource;
        }
      } catch (error) {}
    };
    sseEvents.onerror = (err) => {
      console.log(err);
    };
  };
  onActivated(() => {
    // 이전에 active된 탭을 활성화
    if (activeTab.value !== null) {
      router.push({
        query: {
          mainCategory: "serverManage",
          subCategory: "serverStatus",
          currentPage: currentPage,
          currentStatus: activeTab.value,
        },
      });
    }
  });
  onDeactivated(() => {
    // 컴포넌트 이동시에 이전탭을 기억하기 위해서
    activeTab.value = currentStatus.value;
  });
  onMounted(() => {
    // 최초 한번 실행
    getServerList(currentPage, currentStatus.value);
    connectSSE();
  });
</script>
<style scoped lang="scss">
  .pagination {
    :deep(.inline-flex) {
      display: flex;
      width: 100%;
      justify-content: space-around;
      button {
        height: 30px;
        font-size: 30px;
        &:not(.cursor-not-allowed) {
          &:disabled {
            color: #686de0;
          }
        }
      }
    }
  }
  .filter-area {
    display: flex;
    column-gap: 20px;
    margin: 20px 0 20px 20px;
    button {
      color: #ccc;
      padding-bottom: 6px;
      &.active {
        color: black;
        border-bottom: 2px solid #0095ff;
      }
    }
  }
  .table-box {
    height: calc(100% - 126px);
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(145, 158, 171, 0.24);
    thead {
      tr {
        th {
          &:first-child {
            width: 2%;
          }
          &:last-child {
            width: 10%;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: middle;
          padding: 8px 20px;
          font-size: 14px;
          &:first-child {
            width: 2%;
          }
          &:last-child {
            width: 10%;
          }
          &.utilization,
          &.resources {
            .resources-items {
              height: 20px;
              line-height: 21px;
            }
            :not(:first-of-type) {
              padding-top: 10px;
            }
          }
        }
      }
      .control {
        .setting-button {
          vertical-align: middle;
          color: #818080;
        }
      }
    }
  }
</style>
