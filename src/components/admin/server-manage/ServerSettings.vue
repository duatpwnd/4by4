<template>
  <div class="settings-container" v-if="'hostName' in serverInfo">
    <FontAwesomeIcon
      icon="xmark"
      class="close-button"
      @click="
        router.push('/admin?mainCategory=serverManage&subCategory=serverStatus')
      "
    />
    <div>
      <dl class="host-info">
        <div>
          <dt>Host Name</dt>
          <dd>{{ serverInfo.hostName }}</dd>
        </div>
        <div>
          <dt>Host Ip</dt>
          <dd>{{ serverInfo.hostIp }}</dd>
        </div>
      </dl>
      <div class="info">
        <h3>Resource</h3>
        <div class="row">
          <strong class="title">CPU : </strong>
          <strong>{{ serverInfo.cpuName }}</strong>
          <strong class="cores">{{ serverInfo.cpuCores }}Cores</strong>
        </div>
        <div class="row">
          <strong class="title">Memory : </strong>
          <strong>{{ Number(serverInfo.memory).toFixed(0) }}GB</strong>
        </div>
        <div class="row">
          <strong class="title">Device : </strong>
          <div class="gpu-wrapper">
            <div
              class="gpu-area"
              v-for="(list, index) in serverInfo.gpu"
              :key="index"
            >
              <strong>{{ list.gpuName }}</strong>
              <strong class="gpu-memory">{{ list.gpuMemory }}GB</strong>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="server-change">
        <BaseButton text="설정 변경" @click="change" />
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, reactive, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  import serviceAPI from "@api/services";
  import { AxiosInstance } from "axios";
  interface ServerInfoType {
    cpuCores: string;
    cpuName: string;
    hostName: string;
    hostIp: string;
    memory: string;
    gpu: {
      gpuName: string;
      gpuMemory: string;
    }[];
    npu: any[];
  }
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const router = useRouter();
  const route = useRoute();
  const serverId = route.query.serverId;
  const serverInfo = reactive<ServerInfoType | {}>({});
  onMounted(() => {
    console.log("onmounted호출");
    defaultInstance
      .get(serviceAPI.serverToggle + `?serverId=${serverId}`)
      .then((result) => {
        console.log(result);
        Object.assign(serverInfo, result.data);
      });
  });
</script>
<style scoped lang="scss">
  .settings-container {
    position: relative;
    width: 70%;
    margin: 0 auto;
    padding-top: 100px;
    .close-button {
      position: absolute;
      top: 20px;
      right: 0px;
      font-size: 40px;
      cursor: pointer;
    }
    .host-info {
      display: flex;
      column-gap: 20px;
      div {
        width: 100%;
        dt,
        dd {
          font: {
            size: 20px;
            weight: bold;
          }
        }
        dd {
          margin-top: 20px;
          border-radius: 15px;
          background: #f3f7fa;
          padding: 20px;
          box-sizing: border-box;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .row {
        margin-top: 20px;
        .title {
          color: blue;
          width: 80px;
          display: inline-block;
        }
        .cores {
          margin-left: 16px;
        }
        .gpu-wrapper {
          display: inline-flex;
          width: calc(100% - 80px);
          flex-direction: column;
          row-gap: 16px;
          .gpu-area {
            .gpu-memory {
              margin-left: 16px;
            }
          }
        }
      }
    }
    .server-change {
      width: 200px;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
</style>
