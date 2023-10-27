<template>
  <div class="deploy-settings-container">
    <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
    <div class="dl-wrapper">
      <dl v-if="'host' in containerInfo">
        <div>
          <dt>Host:port</dt>
          <dd>{{ containerInfo.host }}:{{ containerInfo.port }}</dd>
        </div>
        <div>
          <dt>GPU</dt>
          <dd>{{ containerInfo.gpu ?? "null" }}</dd>
        </div>
        <div>
          <dt>Container ID</dt>
          <dd>{{ containerInfo.containerId }}</dd>
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
          <dt>Model Image</dt>
          <dd>{{ containerInfo.imageName }}</dd>
        </div>
      </dl>
    </div>
    <div class="button-area" v-if="'status' in containerInfo">
      <BaseButton
        type="button"
        text="Start"
        :class="
          containerInfo.status == 'created' || containerInfo.status == 'exited'
            ? 'active'
            : 'inactive'
        "
        :disabled="
          containerInfo.status == 'created' || containerInfo.status == 'exited'
            ? false
            : true
        "
        @click="containerUpdate('start')"
      />
      <BaseButton
        :class="
          containerInfo.status == 'starting' ||
          containerInfo.status == 'running' ||
          containerInfo.status == 'paused'
            ? 'active'
            : 'inactive'
        "
        type="button"
        text="Stop"
        :disabled="
          containerInfo.status == 'starting' ||
          containerInfo.status == 'running' ||
          containerInfo.status == 'paused'
            ? false
            : true
        "
        @click="containerUpdate('stop')"
      />
      <BaseButton
        :class="
          containerInfo.status == 'starting' ||
          containerInfo.status == 'running' ||
          containerInfo.status == 'restarting' ||
          containerInfo.status == 'paused'
            ? 'active'
            : 'inactive'
        "
        type="button"
        text="Kill"
        :disabled="
          containerInfo.status == 'starting' ||
          containerInfo.status == 'running' ||
          containerInfo.status == 'restarting' ||
          containerInfo.status == 'paused'
            ? false
            : true
        "
        @click="containerUpdate('kill')"
      />
      <BaseButton
        type="button"
        text="Restart"
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
        @click="containerUpdate('restart')"
      />
      <BaseButton
        type="button"
        text="Pause"
        :disabled="containerInfo.status == 'restarting' ? false : true"
        @click="containerUpdate('pause')"
        :class="containerInfo.status == 'restarting' ? 'active' : 'inactive'"
      />
      <BaseButton
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
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, inject, reactive } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  import BaseButton from "@components/common/BaseButton.vue";
  import serviceAPI from "@api/services";
  import { AxiosInstance } from "axios";
  interface ContainerInfoType {
    host: string;
    port: string;
    tag: string;
    gpu: string;
    imageName: string;
    containerId: string;
    status: string;
    deployStatus: string;
  }
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
  const router = useRouter();
  const route = useRoute();
  const containerId = route.query.containerId;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const containerInfo = reactive<ContainerInfoType | {}>({});
  const containerUpdate = (status: string) => {
    defaultInstance
      .patch(serviceAPI.container, {
        containerId: containerId,
        status: status,
      })
      .then((result) => {
        console.log(result);
        // modelList.value = result.data
      });
  };
  onMounted(() => {
    console.log(containerId);
    defaultInstance
      .get(serviceAPI.container + `?container-id=${containerId}`)
      .then((result) => {
        console.log(result);
        Object.assign(containerInfo, result.data);
      });
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
