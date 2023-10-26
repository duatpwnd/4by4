<template>
  <div class="model-settings-container">
    <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
    <dl v-if="'imageName' in modelInfo">
      <div>
        <dt>Model Name</dt>
        <dd>{{ modelInfo.imageName }}</dd>
      </div>
      <div>
        <dt>Tag</dt>
        <dd>{{ modelInfo.tag }}</dd>
      </div>
      <div>
        <dt>Project Name</dt>
        <dd>{{ modelInfo.projectName }}</dd>
      </div>
    </dl>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, inject, reactive } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  import { AxiosInstance } from "axios";
  import serviceAPI from "@api/services";
  interface ModelInfoType {
    imageName: string;
    modelName: string;
    projectName: string;
    tag: string;
  }
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
  const router = useRouter();
  const route = useRoute();
  const modelId = route.query.modelId;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const modelInfo = reactive<ModelInfoType | {}>({});
  // const change = () => {
  //   if (hostName.value.trim().length == 0) {
  //     emitter.emit("update:alert", {
  //       isActive: true,
  //       message: "host name을 입력해주세요,",
  //     });
  //   } else if (hostIP.value.trim().length == 0) {
  //     emitter.emit("update:alert", {
  //       isActive: true,
  //       message: "host IP를 입력해주세요,",
  //     });
  //   } else {
  //   }
  // };
  const getModelInfo = () => {
    defaultInstance
      .get(serviceAPI.modelInfo + `?modelId=${modelId}`)
      .then((result) => {
        Object.assign(modelInfo, result.data);
      });
  };
  onMounted(() => {
    getModelInfo();
  });
</script>
<style scoped lang="scss">
  .model-settings-container {
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
    dl {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 30px;
      div {
        width: 100%;
        dt {
          font-size: 20px;
        }
        dd {
          font-size: 25px;
          border-radius: 15px;
          background: #f3f7fa;
          padding: 10px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
