<template>
  <FontAwesomeIcon
    icon="xmark"
    class="close-button"
    @click="
      router.push('/admin?mainCategory=deployManage&subCategory=deployStatus')
    "
  />
  <div class="register-container">
    <div class="select-box-area">
      <div>
        <label class="title">Host</label>
        <BaseSelect
          @update:select-box="(obj:HostListType) => {
            updatedKey += 1;
            hostChange(obj);}"
          :options="hostList"
          name="serverName"
          :text="
            selectedHost == null ? 'Select Server IP' : selectedHost.serverName
          "
        />
        <p class="notice-message" v-if="validationCheck.selectedHost">
          Please select the server IP.
        </p>
      </div>
      <div>
        <label class="title">Device</label>
        <div class="gpu-area">
          <BaseSelectCheckBox
            @update:select-box="
              (obj) => {
                gpuChange(obj);
              }
            "
            :key="updatedKey"
            :options="gpuList"
            name="type,deviceId,deviceName"
            :text="selectedGpu.length == 0 ? 'Select Device' : selectedGpu"
          />
        </div>
        <p class="notice-message" v-if="validationCheck.selectedGpu">
          Please select the Device.
        </p>

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
          @update:select-box="(obj:ModelListType) =>{
            modelChange(obj)}"
          :options="modelList"
          name="projectName,imageName"
          :text="
            selectedModel == null
              ? 'Select Model Name'
              : selectedModel.projectName + '/' + selectedModel.imageName
          "
        />
        <p class="notice-message" v-if="validationCheck.selectedModel">
          Please select the Model.
        </p>
      </div>
      <div>
        <label class="title">Tags</label>
        <BaseSelect
          @update:select-box="(obj:TagListType) => {
            validationCheck.selectedTags = false;
            selectedTags = obj;}"
          :options="tagList"
          name="tag"
          :text="
            selectedTags == null ? 'Select Tag[version]' : selectedTags.tag
          "
        />
        <p class="notice-message" v-if="validationCheck.selectedTags">
          Please select a tag.
        </p>
      </div>
      <div class="container-name-area">
        <label class="title">Container</label>
        <BaseInput
          @update:modelValue="(newValue:string) => changeContainerName(newValue)"
          :modelValue="containerName"
          type="text"
          placeholder="Insert Container Name"
        />
        <p class="notice-message" v-if="validationCheck.containerName">
          Please enter the container name.
        </p>
      </div>
    </div>
    <div class="deploy-register">
      <BaseButton text="배포 등록" @click="register" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { AxiosInstance } from "axios";
  import { onMounted, ref, inject, reactive } from "vue";
  import { useRouter } from "vue-router";
  import serviceAPI from "@api/services";
  import BaseInput from "@/components/common/BaseInput.vue";
  import BaseSelect from "@/components/common/BaseSelect.vue";
  import BaseSelectCheckBox from "@/components/common/BaseSelectCheckBox.vue";
  import { EventType, Emitter } from "mitt";
  import { getContainerList } from "./deploy";
  interface HostListType {
    host: string;
    serverId: number;
    serverName: string;
  }
  interface GpuListType {
    id: number;
    deviceId: string;
    deviceName: string;
    size: number;
    type: string;
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
  const updatedKey = ref(0);
  const validationCheck = reactive({
    selectedHost: false,
    selectedGpu: false,
    selectedModel: false,
    selectedTags: false,
    containerName: false,
  });
  const changeContainerName = (newValue: string) => {
    containerName.value = newValue;
    if (containerName.value.trim().length == 0) {
      validationCheck.containerName = true;
    } else {
      validationCheck.containerName = false;
    }
  };
  const gpuChange = (gpu: string) => {
    console.log(gpu);
    selectedGpu.value = JSON.parse(gpu);
    validationCheck.selectedGpu = false;
  };
  const hostChange = (host: HostListType) => {
    selectedGpu.value = [];
    gpuList.value = [];
    selectedHost.value = host;
    validationCheck.selectedHost = false;
    defaultInstance
      .get(serviceAPI.gpuList + `?serverId=${selectedHost.value.serverId}`)
      .then((result) => {
        console.log(result);
        gpuList.value = result.data;
      });
  };
  const modelChange = (model: ModelListType) => {
    selectedModel.value = model;
    validationCheck.selectedModel = false;
    defaultInstance
      .get(serviceAPI.modelTagList + `?modelId=${selectedModel.value.modelId}`)
      .then((result) => {
        console.log(result);
        tagList.value = result.data;
      });
  };
  const register = () => {
    if (selectedHost.value == null) {
      validationCheck.selectedHost = true;
    } else {
      validationCheck.selectedHost = false;
    }
    if (selectedGpu.value.length == 0) {
      validationCheck.selectedGpu = true;
    } else {
      validationCheck.selectedGpu = false;
    }
    if (selectedModel.value == null) {
      validationCheck.selectedModel = true;
    } else {
      validationCheck.selectedModel = false;
    }
    if (selectedTags.value == null) {
      validationCheck.selectedTags = true;
    } else {
      validationCheck.selectedTags = false;
    }
    if (containerName.value.trim().length == 0) {
      validationCheck.containerName = true;
    } else {
      validationCheck.containerName = false;
    }
    if (Object.values(validationCheck).indexOf(true) == -1) {
      emitter.emit("update:loading", { isLoading: true });
      defaultInstance
        .post(serviceAPI.container, {
          serverId: selectedHost.value && selectedHost.value.serverId,
          npuIdList:
            selectedGpu.value &&
            selectedGpu.value
              .filter((el: GpuListType) => el.type == "npu")
              .map((el) => el.id),
          gpuIdList:
            selectedGpu.value &&
            selectedGpu.value
              .filter((el: GpuListType) => el.type == "gpu")
              .map((el) => el.id),
          modelId: selectedModel.value && selectedModel.value.modelId,
          tag: selectedTags.value && selectedTags.value.tag,
          containerName: containerName.value,
        })
        .then((result) => {
          console.log(result);
          emitter.emit("update:loading", { isLoading: false });
          router.push(
            "/admin?mainCategory=deployManage&subCategory=deployStatus"
          );
          getContainerList(1, "ALL");
        });
    }
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
    .notice-message {
      color: red;
      margin-top: 10px;
    }

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
