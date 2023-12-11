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
      @click="getModelList(currentPage, item)"
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
        <!-- <td>
          {{ index + 1 + 10 * (currentPage - 1) }}
        </td> -->
        <td>{{ item.modelName }}</td>
        <td>{{ item.projectName }}</td>
        <td>{{ item.imageName }}</td>
        <td>
          {{ item.tag }}
        </td>
        <td class="control" v-if="item.reg">
          <FontAwesomeIcon
            icon="circle-info"
            class="info-button"
            @click="
              router.push(
                route.fullPath + `&type=settings&modelId=${item.modelId}`
              )
            "
          />
          <FontAwesomeIcon
            icon="trash"
            class="remove-button"
            @click="remove(item.modelId)"
          />
        </td>
        <td class="control" v-else>진행중</td>
      </tr>
    </template>
  </BaseTable>
  <Pagination
    v-if="list.length > 0"
    class="pagination"
    :total-items="totalPages"
    :show-icons="true"
    :showLabels="false"
    :slice-length="4"
    v-model="currentPage"
    @update:model-value="
      (currentPage) => {
        getModelList(currentPage, currentStatus);
      }
    "
  ></Pagination>
</template>
<script setup lang="ts">
  import { inject, ref, computed, onActivated, onDeactivated } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { EventType, Emitter } from "mitt";
  import serviceAPI from "@api/services";
  import { Pagination } from "flowbite-vue";
  import { AxiosInstance } from "axios";
  import { getModelList } from "./model";
  const tab = <const>["ALL"];
  const activeTab = ref<(typeof tab)[number] | null>(null);
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive: boolean;
        closeText?: string;
        message?: string;
        fn?: () => void;
      }
    >
  >;
  const ths = <const>["Name", "Project", "Image", "Tag", ""];
  const router = useRouter();
  const route = useRoute();
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
  const remove = (modelId: string) => {
    emitter.emit("update:alert", {
      isActive: true,
      message: "삭제하시겠습니까?",
      fn: () => {
        defaultInstance
          .delete(serviceAPI.modelInfo + `?modelId=${modelId}`)
          .then((result) => {
            console.log(result);
            emitter.emit("update:alert", {
              isActive: true,
              message: "삭제 완료 되었습니다.",
              closeText: "확인",
            });
            getModelList(1, "ALL");
          });
      },
    });
  };
  const { list, totalPages, currentPage } = getModelList(
    routeCurrentPage.value,
    currentStatus.value
  );
  // 모델 리스트 조회
  // const getModelList = (page: number, status: (typeof tab)[number]) => {
  //   console.log(`output-> page,status`, page, status);
  //   defaultInstance
  //     .get<ModelListResType>(
  //       serviceAPI.modelList +
  //         `?page=${
  //           page - 1
  //         }&size=10&sort=desc&status=${status.toLocaleLowerCase()}`
  //     )
  //     .then((result) => {
  //       console.log(result);
  //       modelList.value = result.data.content;
  //       totalPages.value = result.data.totalPages;
  //       router.push({
  //         query: {
  //           ...route.query,
  //           currentPage: page,
  //           currentStatus: status,
  //         },
  //       });
  //     });
  // };

  onActivated(() => {
    console.log("모델리스트 활성화");
    // connectSSE();
    // if (activeTab.value !== null) {
    //   router.push({
    //     query: {
    //       mainCategory: "modelManage",
    //       subCategory: "modelStatus",
    //       currentPage: currentPage.value,
    //       currentStatus: activeTab.value,
    //     },
    //   });
    // }
  });
  onDeactivated(() => {
    console.log("모델리스트 비활성화");
    // if (sseEvents.value !== null) {
    //   sseEvents.value.close();
    // }
    // activeTab.value = currentStatus.value;
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
      padding-bottom: 6px;
      color: #ccc;
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
          &:last-child {
            width: 7%;
          }
        }
      }
      .control {
        .remove-button {
          color: #ff4343;
        }
        .info-button {
          margin-right: 10px;
        }
      }
    }
  }
</style>
