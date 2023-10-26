<template>
  <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
  <div class="register-container">
    <div class="select-box-area">
      <div>
        <label class="title">Host</label>
        <BaseSelect
          @update:select-box="(obj:HostListType) => hostChange(obj)"
          :options="hostList"
          name="serverName"
          :text="
            selectedHost == null ? 'Select Server IP' : selectedHost.serverName
          "
        />
      </div>
      <div>
        <label class="title">GPU</label>
        <div class="gpu-area">
          <BaseSelectCheckBox
            @update:select-box="(obj) => gpuChange(obj)"
            :options="gpuList"
            name="gpuName"
            :text="selectedGpu.length == 0 ? 'Select GPU ID' : selectedGpu"
          />
        </div>
        <!-- <BaseSelect
          @update:select-box="(obj:SelectedType) => (selectedGpu = obj)"
          :options="gpuList"
          name="name"
          :text="selectedGpu == null ? 'Select GPU ID' : selectedGpu.name"
        /> -->
      </div>
      <div>
        <label class="title">Model</label>
        <BaseSelect
          @update:select-box="(obj:ModelListType) => modelChange(obj)"
          :options="modelList"
          name="projectName,imageName"
          :text="
            selectedModel == null
              ? 'Select Model Name'
              : selectedModel.projectName + '/' + selectedModel.imageName
          "
        />
      </div>
      <div>
        <label class="title">Tags</label>
        <BaseSelect
          @update:select-box="(obj:TagListType) => (selectedTags = obj)"
          :options="tagList"
          name="tag"
          :text="
            selectedTags == null ? 'Select Tag[version]' : selectedTags.tag
          "
        />
      </div>
      <div class="container-name-area">
        <label class="title">Container</label>
        <BaseInput
          @update:modelValue="(newValue:string) => (containerName = newValue)"
          :modelValue="containerName"
          type="text"
          placeholder="Insert Container Name"
        />
      </div>
    </div>
    <div class="deploy-register">
      <BaseButton text="배포 등록" @click="register" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { AxiosInstance } from "axios";
  import { onMounted, ref, inject } from "vue";
  import { useRouter } from "vue-router";
  import serviceAPI from "@api/services";
  import BaseInput from "@/components/common/BaseInput.vue";
  import BaseSelect from "@/components/common/BaseSelect.vue";
  import BaseSelectCheckBox from "@/components/common/BaseSelectCheckBox.vue";
  import { EventType, Emitter } from "mitt";
  interface HostListType {
    host: string;
    serverId: number;
    serverName: string;
  }
  interface GpuListType {
    id: number;
    gpuName: string;
    size: number;
  }
  interface ModelListType {
    modelId: string;
    projectName: string;
    modelName: string;
    imageName: string;
    tag: string;
  }
  interface TagListType {
    tag: string;
  }
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isLoading: boolean }>
  >;
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const authInstance = inject("authInstance");
  const router = useRouter();
  const containerName = ref("");
  const selectedHost = ref<HostListType | null>(null); // 선택된 host
  const selectedGpu = ref<GpuListType[]>([]); // 선택된 gpu
  const selectedModel = ref<ModelListType | null>(null); // 선택된 model
  const selectedTags = ref<TagListType | null>(null); // 선택된 tags
  const hostList = ref<HostListType[]>([]); // host 리스트
  const modelList = ref<ModelListType[]>([]); // model 리스트
  const tagList = ref<TagListType[]>([]); // tag 리스트
  const gpuList = ref<GpuListType[]>([]); // gpu 리스트
  const gpuChange = (gpu: string) => {
    selectedGpu.value = JSON.parse(gpu);
  };
  const hostChange = (host: HostListType) => {
    selectedHost.value = host;
    defaultInstance
      .get(serviceAPI.gpuList + `?serverId=${selectedHost.value.serverId}`)
      .then((result) => {
        console.log(result);
        gpuList.value = result.data;
      });
  };
  const modelChange = (model: ModelListType) => {
    selectedModel.value = model;
    defaultInstance
      .get(serviceAPI.modelTagList + `?modelId=${selectedModel.value.modelId}`)
      .then((result) => {
        console.log(result);
        tagList.value = result.data;
      });
  };
  const register = () => {
    emitter.emit("update:loading", { isLoading: true });
    defaultInstance
      .post(serviceAPI.container, {
        serverId: selectedHost.value && selectedHost.value.serverId,
        gpuIdList:
          selectedGpu.value &&
          selectedGpu.value.map((el: GpuListType) => el.id),
        modelId: selectedModel.value && selectedModel.value.modelId,
        tag: selectedTags.value && selectedTags.value.tag,
        containerName: containerName.value,
      })
      .then((result) => {
        emitter.emit("update:loading", { isLoading: false });
        router.push(
          "/admin?mainCategory=deployManage&subCategory=deployStatus"
        );

        console.log(result);
      });
  };

  onMounted(() => {
    Promise.all([
      defaultInstance.get(serviceAPI.server),
      defaultInstance.get(serviceAPI.modelNameList),
    ]).then((result) => {
      hostList.value = result[0].data;
      modelList.value = result[1].data;
    });
  });
</script>
<style scoped lang="scss">
  .close-button {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 40px;
    cursor: pointer;
  }

  .register-container {
    position: relative;
    padding-top: 60px;
    width: 70%;
    margin: 0 auto;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    .select-box-area {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      grid-row-gap: 40px;
      .title {
        display: block;
        margin-bottom: 10px;
      }
    }
    .container-name-area {
      input {
        background-color: transparent;
        border: 1px solid #ccc;
        font-size: 16px;
        border-radius: 4px;
        &::placeholder {
          color: black;
        }
        font: {
          weight: normal;
        }
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
      }
    }
    .deploy-register {
      width: 200px;
      margin-top: 40px;
      position: fixed;
      bottom: 20px;
      left: 200px;
      right: 0;
      margin: auto;
    }
  }
</style>
