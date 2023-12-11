<template>
  <div class="filter-area">
    <button
      v-for="(item, index) in tab"
      :key="index"
      :class="currentStatus == item ? 'active' : ''"
      @click="
        tabStatus == item ? '' : (tabStatus = item);
        router.push({
          query: {
            ...route.query,
            currentStatus: item,
          },
        });
      "
    >
      {{ item }}
    </button>
  </div>
  <BaseTable :ths="ths" v-if="serverList !== null">
    <template #thead>
      <tr>
        <th v-for="(th, index) in ths" :key="index">
          {{ th }}
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr
        v-for="(item, index) in serverList.running"
        :key="index"
        v-if="currentStatus == 'CONNECTED' || currentStatus == 'ALL'"
      >
        <!-- <td>
          {{ index + 1 + 10 * (currentPage - 1) }}
        </td> -->
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
            icon="circle-info"
            class="info-button"
            @click="
              router.push(
                route.fullPath + `&type=settings&serverId=${item.serverId}`
              )
            "
          />
        </td>
      </tr>
      <tr
        v-for="(item, index) in serverList.terminated"
        :key="index"
        v-if="currentStatus == 'TERMINATED' || currentStatus == 'ALL'"
      >
        <!-- <td>
        {{ index + 1 + 10 * (currentPage - 1) }}
      </td> -->
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
            <!-- <BaseProgress :value="Number(list.usage).toFixed(2)" /> -->
          </div>
        </td>
        <td class="control">
          <FontAwesomeIcon
            icon="circle-info"
            class="info-button"
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
    v-if="serverList !== null"
    class="pagination"
    :total-items="totalPages"
    :show-icons="true"
    :showLabels="false"
    :slice-length="4"
    v-model="currentPage"
    @update:model-value="
      (currentPage) => {
        getServerList(currentPage);
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
    npuList: {
      deviceName: string;
      usage: number;
      id: string;
      type: string;
    }[];
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
    running: ServerListType[];
    terminated: ServerListType[];
    totalPages: number;
    totalElements: number;
  }
  let sseEvents: EventSource;
  const ths = <const>["Name", "IP", "Devices", "Memory Usage", ""];
  const tab = <const>["ALL", "CONNECTED", "TERMINATED"];
  const tabStatus = ref<(typeof tab)[number]>("ALL");
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
  const serverList = ref<{
    running: ServerListType[];
    terminated: ServerListType[];
  } | null>(null);
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isLoading: boolean }>
  >;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  // 카프가 상태 변경
  // const changeKafkaStatus = (serverId: number, toggle: boolean) => {
  //   emitter.emit("update:loading", { isLoading: true });
  //   defaultInstance
  //     .put<KafkaStatusResType>(
  //       serviceAPI.serverToggle + `?serverId=${serverId}&toggle=${toggle}`
  //     )
  //     .then((result) => {
  //       emitter.emit("update:loading", { isLoading: false });
  //       getServerList(currentPage, currentStatus.value);
  //     });
  // };
  // 서버 리스트 조회
  const getServerList = (page: number) => {
    defaultInstance
      .get<ServerListResType>(
        serviceAPI.serverList + `?page=${page - 1}&size=10&sort=desc&status=all`
      )
      .then((result) => {
        serverList.value = result.data;
        totalPages.value = result.data.totalElements;
        router.push({
          query: {
            ...route.query,
            currentPage: page,
            currentStatus: currentStatus.value,
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
    sseEvents.onmessage = (stream) => {
      console.log("server:", stream);
      try {
        if (typeof JSON.parse(stream.data) == "object") {
          const data = JSON.parse(stream.data);
          console.log("server:", data);
          if (serverList.value !== null) {
            const findIndex = serverList.value.running.findIndex((el) => {
              return data.serverId == el.serverId;
            });
            serverList.value.running[findIndex].gpuList = data.resource;
            if (data.isChanged) {
              console.log("서버 변경 감지");
              getServerList(currentPage);
            }
          }
        }
      } catch (error) {}
    };
    sseEvents.onerror = (err) => {
      console.log("sse 연결이 끊겼습니다.", err);
      sseEvents.close();
    };
  };
  onActivated(() => {
    connectSSE();
    // 이전에 active된 탭을 활성화
    // if (activeTab.value !== null) {
    //   router.push({
    //     query: {
    //       mainCategory: "serverManage",
    //       subCategory: "serverStatus",
    //       currentPage: currentPage,
    //       currentStatus: tabStatus.value,
    //     },
    //   });
    // }
  });
  onDeactivated(() => {
    console.log("onDeactivated");
    sseEvents.close();
    // 컴포넌트 이동시에 이전탭을 기억하기 위해서
    // activeTab.value = tabStatus.value;
  });
  onMounted(() => {
    // 최초 한번 실행
    getServerList(currentPage);
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
          &:last-child {
            width: 7%;
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
          &:last-child {
            width: 7%;
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
    }
  }
</style>
