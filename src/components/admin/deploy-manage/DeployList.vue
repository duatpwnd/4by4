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
  <BaseTable v-if="list.length > 0">
    <template #thead>
      <tr>
        <th v-for="(th, index) in ths" :key="index">
          {{ th }}
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, index) in list" :key="index">
        <td>
          {{ index + 1 + 10 * (currentPage - 1) }}
        </td>
        <td>{{ item.host }}</td>
        <td
          class="gpu"
          v-tooltip="{
            content: item.gpu,
            placement: 'bottom',
            delay: 0,
          }"
        >
          {{ item.gpu }}
        </td>
        <td
          class="npu"
          v-tooltip="{
            content: item.npu,
            placement: 'bottom',
            delay: 0,
          }"
        >
          {{ item.npu }}
        </td>
        <td>{{ item.image }}</td>
        <td
          class="container-id"
          v-tooltip="{
            content: item.containerId,
            placement: 'bottom',
            delay: 0,
          }"
        >
          {{ item.containerId }}
        </td>
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
    v-if="list.length > 0"
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
  import { inject, ref, computed, onActivated, onDeactivated } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { EventType, Emitter } from "mitt";
  import serviceAPI from "@api/services";
  import { Pagination } from "flowbite-vue";
  import { AxiosInstance } from "axios";
  import { getContainerList } from "./deploy";
  const router = useRouter();
  const route = useRoute();
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isLoading?: boolean;
        isActive?: boolean;
        message?: string;
        fn?: () => void;
      }
    >
  >;
  const ths = <const>[
    "#",
    "Host",
    "Device",
    "NPU",
    "Image",
    "ContainerID",
    "Control",
  ];
  const tab = <const>["DEPLOYED", "DEPLOYING", "ERROR", "ALL"];
  const activeTab = ref<(typeof tab)[number] | null>(null);
  const routeCurrentPage = computed<number>(() => {
    return route.query.currentPage == undefined
      ? 1
      : Number(route.query.currentPage);
  });
  const currentStatus = computed<(typeof tab)[number]>(() => {
    const status = route.query.currentStatus as (typeof tab)[number];
    const getIndex = tab.indexOf(status);
    return getIndex == -1 ? "ALL" : status;
  });
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const remove = (containerId: string) => {
    emitter.emit("update:alert", {
      isActive: true,
      message: "삭제하시겠습니까?",
      fn: () => {
        console.log("삭제api");
        emitter.emit("update:loading", { isLoading: true });
        defaultInstance
          .delete(serviceAPI.container + `?containerId=${containerId}`)
          .then((result) => {
            console.log(result);
            getContainerList(1, "ALL");
            emitter.emit("update:loading", { isLoading: false });
          });
      },
    });
  };
  const { list, totalPages, currentPage } = getContainerList(
    routeCurrentPage.value,
    currentStatus.value
  );
  // 배포 리스트 조회
  onActivated(() => {
    if (activeTab.value !== null) {
      router.push({
        query: {
          mainCategory: "deployManage",
          subCategory: "deployStatus",
          currentPage: currentPage.value,
          currentStatus: activeTab.value,
        },
      });
    }
  });
  onDeactivated(() => {
    activeTab.value = currentStatus.value;
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
          &.npu,
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
