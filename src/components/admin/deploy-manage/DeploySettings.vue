<template>
  <div class="deploy-settings-container">
    <FontAwesomeIcon
      icon="xmark"
      class="close-button"
      @click="
        router.push(
          `/admin?mainCategory=deployManage&subCategory=deployStatus&currentStatus=${route.query.currentStatus}`
        )
      "
    />
    <div class="dl-wrapper">
      <dl v-if="'host' in containerInfo">
        <div>
          <dt>Host:port</dt>
          <dd>{{ containerInfo.host }}:{{ containerInfo.port }}</dd>
        </div>
        <div>
          <dt>Container ID</dt>
          <dd
            v-tooltip="{
              content: containerInfo.containerId,
              placement: 'bottom',
              delay: 0,
              options: {
                fontSize: 20,
              },
            }"
          >
            {{ containerInfo.containerId }}
          </dd>
        </div>
        <div>
          <dt>Model Image</dt>
          <dd>{{ containerInfo.imageName }}</dd>
        </div>
        <div>
          <dt>Container Name</dt>
          <dd>{{ containerInfo.containerName }}</dd>
        </div>

        <div>
          <dt>Container Status</dt>
          <dd>{{ containerInfo.status }}</dd>
        </div>
        <div>
          <dt>Deploy Status</dt>
          <dd>{{ containerInfo.deployStatus }}</dd>
        </div>
        <div>
          <dt>GPU</dt>
          <dd
            v-tooltip="{
              content: containerInfo.gpu ?? 'null',
              placement: 'bottom',
              delay: 0,
              options: {
                fontSize: 20,
              },
            }"
          >
            {{ containerInfo.gpu ?? "null" }}
          </dd>
        </div>

        <div>
          <dt>NPU</dt>
          <dd>{{ containerInfo.npu ?? "null" }}</dd>
        </div>
      </dl>
    </div>
    <div class="button-area" v-if="'status' in containerInfo">
      <BaseButton
        type="button"
        text="Start"
        :class="containerInfo.status == 'stop' ? 'active' : 'inactive'"
        :disabled="containerInfo.status == 'stop' ? false : true"
        @click="containerUpdate('start', '시작 하시겠습니까?')"
      />
      <BaseButton
        :class="
          containerInfo.status == 'running' ||
          containerInfo.status == 'restarting'
            ? 'active'
            : 'inactive'
        "
        type="button"
        text="Stop"
        :disabled="
          containerInfo.status == 'running' ||
          containerInfo.status == 'restarting'
            ? false
            : true
        "
        @click="containerUpdate('stop', '중지 하시겠습니까?')"
      />
      <BaseButton
        :class="containerInfo.status == 'stop' ? 'active' : 'inactive'"
        type="button"
        text="Delete"
        :disabled="containerInfo.status == 'stop' ? false : true"
        @click="containerUpdate('remove', '삭제 하시겠습니까?')"
      />
      <BaseButton
        type="button"
        text="Restart"
        :class="
          containerInfo.status == 'running' ||
          containerInfo.status == 'restarting' ||
          containerInfo.status == 'stop'
            ? 'active'
            : 'inactive'
        "
        :disabled="
          containerInfo.status == 'running' ||
          containerInfo.status == 'restarting' ||
          containerInfo.status == 'stop'
            ? false
            : true
        "
        @click="containerUpdate('restart', '다시 시작 하시겠습니까?')"
      />
      <!-- <BaseButton
        type="button"
        text="Pause"
        :disabled="
          containerInfo.status == 'restarting' ||
          containerInfo.status == 'running'
            ? false
            : true
        "
        @click="containerUpdate('pause')"
        :class="
          containerInfo.status == 'restarting' ||
          containerInfo.status == 'running'
            ? 'active'
            : 'inactive'
        "
      /> -->
      <!-- <BaseButton
        type="button"
        text="Resume"
        :class="
          containerInfo.status == 'paused' ||
          containerInfo.status == 'restarting'
            ? 'active'
            : 'inactive'
        "
        :disabled="
          containerInfo.status == 'paused' ||
          containerInfo.status == 'restarting'
            ? false
            : true
        "
        @click="containerUpdate('resume')"
      /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, inject, reactive } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  import BaseButton from "@components/common/BaseButton.vue";
  import serviceAPI from "@api/services";
  import { AxiosInstance } from "axios";
  import { getContainerList, tab } from "./deploy";
  interface ContainerInfoType {
    host: string;
    port: string;
    tag: string;
    gpu: string;
    imageName: string;
    containerName: string;
    containerId: string;
    status: string;
    deployStatus: string;
    npu: string;
  }
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isLoading?: boolean;
        isActive?: boolean;
        message?: string;
        closeText?: string;
        fn?: () => void;
      }
    >
  >;
  const router = useRouter();
  const route = useRoute();
  const containerId = route.query.containerId;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const containerInfo = reactive<ContainerInfoType | {}>({});
  const containerUpdate = (status: string, message: string) => {
    emitter.emit("update:alert", {
      isActive: true,
      message: message,
      closeText: "close",
      fn: () => {
        emitter.emit("update:loading", { isLoading: true });
        // 상태 변경 업데이트
        defaultInstance
          .patch(serviceAPI.container, {
            containerId: containerId,
            status: status,
          })
          .then((result) => {
            console.log(result);
            if (status == "remove") {
              emitter.emit("update:loading", { isLoading: true });
              // 삭제 api 호출
              defaultInstance
                .delete(serviceAPI.container + `?containerId=${containerId}`)
                .then((result) => {
                  console.log(result);
                  router.push(
                    "/admin?mainCategory=deployManage&subCategory=deployStatus"
                  );
                  emitter.emit("update:loading", { isLoading: false });
                })
                .catch((err) => {
                  emitter.emit("update:loading", { isLoading: false });
                  emitter.emit("update:alert", {
                    isActive: true,
                    message: err.response.data.message,
                    closeText: "close",
                  });
                });
            } else {
              // 컨테이너 정보 갱신
              getContainerInfo();
            }
            // 업데이트시 리스트 갱신
            getContainerList(
              1,
              route.query.currentStatus as (typeof tab)[number]
            );
          })
          .catch((err) => {
            emitter.emit("update:loading", { isLoading: false });
            emitter.emit("update:alert", {
              isActive: true,
              message: err.response.data.message,
            });
          });
      },
    });
  };
  const getContainerInfo = () => {
    defaultInstance
      .get(serviceAPI.container + `?container-id=${containerId}`)
      .then((result) => {
        console.log(result);
        emitter.emit("update:loading", { isLoading: false });
        Object.assign(containerInfo, result.data);
      });
  };
  onMounted(() => {
    getContainerInfo();
  });
</script>
<style scoped lang="scss">
  .deploy-settings-container {
    position: relative;
    width: 70%;
    height: calc(100% - 40px);
    margin: 0 auto;
    padding-top: 100px;
    .close-button {
      position: absolute;
      top: 20px;
      right: 0px;
      font-size: 40px;
      cursor: pointer;
    }
    .dl-wrapper {
      height: calc(100% - 137px);
      dl {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
        row-gap: 30px;
        div {
          width: 100%;
          @include ellipsis(1);

          dt {
            font-size: 20px;
          }
          dd {
            font-size: 25px;
            border-radius: 15px;
            background: #f3f7fa;
            padding: 10px;
            margin-top: 10px;
            box-sizing: border-box;
            @include ellipsis(1);
          }
        }
      }
    }

    .button-area {
      display: flex;
      column-gap: 20px;
      .base-button {
        &.inactive {
          background-color: #ccc;
          opacity: 0.5;
        }
      }
    }
  }
</style>
