<template>
  <FontAwesomeIcon
    icon="plus"
    class="add-button"
    @click="router.push(route.fullPath + '&type=register')"
  />
  <div class="filter-area">
    <button
      v-for="(item, index) in tab"
      :key="index"
      :class="currentStatus == item ? 'active' : ''"
      @click="getContainerList(currentPage, item)"
    >
      {{ item }}
    </button>
  </div>
  <BaseTable v-if="deployList.length > 0">
    <template #thead>
      <tr>
        <th v-for="(th, index) in ths" :key="index">
          {{ th }}
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, index) in deployList" :key="index">
        <td>
          {{ index + 1 }}
        </td>
        <td>{{ item.host }}</td>
        <td class="gpu">{{ item.gpu }}</td>
        <td>{{ item.image }}</td>
        <td class="container-id">{{ item.containerId }}</td>
        <td class="control">
          <FontAwesomeIcon
            icon="gear"
            class="setting-button"
            @click="
              router.push(
                route.fullPath +
                  `&type=settings&containerId=${item.containerId}`
              )
            "
          />
          <FontAwesomeIcon
            icon="trash"
            class="remove-button"
            @click="remove(item.containerId)"
          />
        </td>
      </tr>
    </template>
  </BaseTable>
  <Pagination
    v-if="deployList.length > 0"
    class="pagination"
    v-model="currentPage"
    :total-items="totalPages"
    :show-icons="true"
    :showLabels="false"
    :slice-length="4"
    @update:model-value="
      (currentPage) => {
        getContainerList(currentPage, currentStatus);
      }
    "
  />
</template>
<script setup lang="ts">
  import {
    inject,
    ref,
    onMounted,
    computed,
    onActivated,
    onDeactivated,
  } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { EventType, Emitter } from "mitt";
  import serviceAPI from "@api/services";
  import { Pagination } from "flowbite-vue";
  import { AxiosInstance } from "axios";
  import { APIResponse } from "@axios/types";
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
  const router = useRouter();
  const route = useRoute();
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string; fn?: () => void }>
  >;
  const ths = <const>["#", "Host", "GPU", "Image", "ContainerID", "Control"];
  const tab = <const>["DEPLOYED", "DEPLOYING", "ERROR", "ALL"];
  const activeTab = ref<(typeof tab)[number] | null>(null);
  const currentPage =
    route.query.currentPage == undefined ? 1 : Number(route.query.currentPage);
  const currentStatus = computed<(typeof tab)[number]>(() => {
    const status = route.query.currentStatus as (typeof tab)[number];
    const getIndex = tab.indexOf(status);
    return getIndex == -1 ? "ALL" : status;
  });
  const authInstance = inject("authInstance");
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const totalPages = ref(1);
  const deployList = ref<DeployListType[]>([]);
  const remove = (containerId: string) => {
    emitter.emit("update:alert", {
      isActive: true,
      message: "삭제하시겠습니까?",
      fn: () => {
        console.log("삭제api");
        defaultInstance
          .delete(serviceAPI.container + `?containerId=${containerId}`)
          .then((result) => {
            console.log(result);
            getContainerList(currentPage, currentStatus.value);
            // modelList.value = result.data
          });
      },
    });
  };
  // 배포 리스트 조회
  const getContainerList = (page: number, status: (typeof tab)[number]) => {
    let changedStatus;
    if (status == "DEPLOYED") {
      changedStatus = "RUNNING";
    } else if (status == "DEPLOYING") {
      changedStatus = "STARTING";
    } else if (status == "ERROR") {
      changedStatus = "CREATED,RESTARTING,EXITED,PAUSED,DEAD";
    } else {
      changedStatus = "ALL";
    }
    defaultInstance
      .get<DeployListResType>(
        serviceAPI.containerList +
          `?page=${
            page - 1
          }&size=10&sort=desc&status=${changedStatus?.toLocaleLowerCase()}`
      )
      .then((result) => {
        console.log(result);
        deployList.value = result.data.content;
        totalPages.value = result.data.totalPages;
        router.push({
          query: {
            ...route.query,
            currentPage: page,
            currentStatus: status,
          },
        });
      });
  };
  onActivated(() => {
    if (activeTab.value !== null) {
      router.push({
        query: {
          mainCategory: "deployManage",
          subCategory: "deployStatus",
          currentPage: currentPage,
          currentStatus: activeTab.value,
        },
      });
    }
  });
  onDeactivated(() => {
    activeTab.value = currentStatus.value;
  });
  onMounted(() => {
    getContainerList(currentPage, currentStatus.value);
  });
</script>
<style scoped lang="scss">
  .add-button {
    position: fixed;
    bottom: 50px;
    right: 0px;
    color: white;
    z-index: 1;
    cursor: pointer;
    background: #0095ff;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    padding: 10px;
  }
  .pagination-wrapper {
    margin-top: 70px;
  }
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
            width: 4%;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          &:first-child {
            width: 2%;
          }
          &:last-child {
            width: 4%;
          }
          &.container-id,
          &.gpu {
            @include ellipsis(1);
          }
        }
      }
      .control {
        .remove-button {
          color: #ff4343;
          vertical-align: middle;
        }
        .setting-button {
          vertical-align: middle;
          color: #818080;
          margin-right: 10px;
        }
      }
    }
  }
</style>
